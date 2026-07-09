import { useEffect, useState } from 'react';
import { TestResult } from '../types';
import { generateOrderId, markResultAsPaidLocally } from '../utils';
import { Lock, ShieldCheck, Loader2, AlertTriangle } from 'lucide-react';

interface PaywallScreenProps {
  result: TestResult;
  onUnlocked: () => void;
}

const MIDTRANS_CLIENT_KEY = import.meta.env.VITE_MIDTRANS_CLIENT_KEY as string | undefined;
const SNAP_SRC =
  import.meta.env.VITE_MIDTRANS_IS_PRODUCTION === 'true'
    ? 'https://app.midtrans.com/snap/snap.js'
    : 'https://app.sandbox.midtrans.com/snap/snap.js';

type PayState = 'idle' | 'loading' | 'pending' | 'verifying' | 'error';

export default function PaywallScreen({ result, onUnlocked }: PaywallScreenProps) {
  const [payState, setPayState] = useState<PayState>('idle');
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [snapReady, setSnapReady] = useState(false);
  const [lastOrderId, setLastOrderId] = useState<string>('');

  // Load the Midtrans Snap.js script once
  useEffect(() => {
    if (window.snap) {
      setSnapReady(true);
      return;
    }
    if (!MIDTRANS_CLIENT_KEY) return;

    const script = document.createElement('script');
    script.src = SNAP_SRC;
    script.setAttribute('data-client-key', MIDTRANS_CLIENT_KEY);
    script.async = true;
    script.onload = () => setSnapReady(true);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const verifyStatus = async (orderId: string, attemptsLeft = 5): Promise<boolean> => {
    try {
      const res = await fetch(`/api/check-status?orderId=${encodeURIComponent(orderId)}`);
      const data = await res.json();
      if (data.paid) return true;
    } catch {
      // ignore, will retry
    }
    if (attemptsLeft <= 0) return false;
    await new Promise((r) => setTimeout(r, 1500));
    return verifyStatus(orderId, attemptsLeft - 1);
  };

  const handlePay = async () => {
    setErrorMsg('');

    if (!MIDTRANS_CLIENT_KEY) {
      setPayState('error');
      setErrorMsg('VITE_MIDTRANS_CLIENT_KEY belum diset. Tambahkan di Environment Variables Vercel lalu redeploy.');
      return;
    }
    if (!snapReady || !window.snap) {
      setPayState('error');
      setErrorMsg('Modul pembayaran belum siap, coba muat ulang halaman.');
      return;
    }

    setPayState('loading');
    const orderId = generateOrderId(result.id);
    setLastOrderId(orderId);

    try {
      const res = await fetch('/api/create-transaction', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orderId, name: result.name }),
      });
      const data = await res.json();

      if (!res.ok || !data.token) {
        throw new Error(data.error || 'Gagal membuat transaksi pembayaran.');
      }

      window.snap.pay(data.token, {
        onSuccess: async () => {
          setPayState('verifying');
          const paid = await verifyStatus(orderId);
          if (paid) {
            markResultAsPaidLocally(result.id);
            onUnlocked();
          } else {
            setPayState('error');
            setErrorMsg('Pembayaran belum terverifikasi. Coba tekan "Cek Status Pembayaran" di bawah.');
          }
        },
        onPending: () => {
          setPayState('pending');
        },
        onError: () => {
          setPayState('error');
          setErrorMsg('Pembayaran gagal diproses. Silakan coba lagi.');
        },
        onClose: () => {
          setPayState((prev) => (prev === 'loading' ? 'idle' : prev));
        },
      });
    } catch (err: any) {
      setPayState('error');
      setErrorMsg(err?.message || 'Terjadi kesalahan. Silakan coba lagi.');
    }
  };

  const handleRecheckStatus = async () => {
    if (!lastOrderId) {
      setPayState('idle');
      return;
    }
    setPayState('verifying');
    const paid = await verifyStatus(lastOrderId, 2);
    if (paid) {
      markResultAsPaidLocally(result.id);
      onUnlocked();
    } else {
      setPayState('pending');
      setErrorMsg('Pembayaran belum terkonfirmasi. Selesaikan pembayaran lalu coba cek lagi beberapa saat.');
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-12 md:py-20 font-sans relative">
      <div className="bg-white/80 dark:bg-[#0a0c12]/75 border border-slate-200 dark:border-slate-850 rounded-3xl p-6 sm:p-10 shadow-xl backdrop-blur-md text-center relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-cyan-500 to-blue-600" />

        <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 mb-6">
          <Lock className="w-7 h-7 text-white" />
        </div>

        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Tes Selesai, {result.name}!
        </h1>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
          Kamu sudah menjawab {result.totalQuestions} soal. Untuk melihat Skor IQ lengkap beserta Sertifikat dan
          analisis grafiknya, silakan selesaikan pembayaran berikut.
        </p>

        {/* Blurred teaser of the score */}
        <div className="relative my-8 flex items-center justify-center">
          <div className="w-32 h-32 rounded-full border-4 border-slate-100 dark:border-slate-800 flex flex-col items-center justify-center bg-white dark:bg-slate-950/85 shadow-md select-none">
            <span className="text-4xl font-black tracking-tight font-mono text-slate-300 dark:text-slate-700 blur-sm">
              {result.iqScore}
            </span>
            <span className="text-[10px] text-zinc-400 uppercase font-black tracking-wider mt-0.5">ESTIMASI</span>
          </div>
          <Lock className="w-5 h-5 text-slate-400 absolute" />
        </div>

        <div className="bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-850 rounded-2xl p-5 mb-6 text-left">
          <div className="flex items-baseline justify-between mb-1">
            <span className="text-sm font-bold text-slate-700 dark:text-slate-200">Akses Sertifikat & Hasil</span>
            <span className="text-xl font-black text-cyan-600 dark:text-cyan-400 font-mono">Rp 5.000</span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Termasuk skor IQ akhir, kurva distribusi, breakdown kategori jawaban, dan sertifikat yang bisa dicetak.
          </p>
        </div>

        {payState === 'error' && errorMsg && (
          <div className="flex items-start gap-2 text-left bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900 text-rose-600 dark:text-rose-400 text-xs rounded-xl p-3 mb-4">
            <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <span>{errorMsg}</span>
          </div>
        )}

        {payState === 'pending' && (
          <div className="flex items-start gap-2 text-left bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 text-amber-600 dark:text-amber-400 text-xs rounded-xl p-3 mb-4">
            <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <span>Pembayaran kamu masih menunggu konfirmasi (misalnya transfer bank). Selesaikan pembayaran, lalu klik tombol di bawah lagi untuk cek status.</span>
          </div>
        )}

        <button
          onClick={payState === 'pending' ? handleRecheckStatus : handlePay}
          disabled={payState === 'loading' || payState === 'verifying'}
          id="btn-pay-unlock-result"
          className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-450 hover:to-blue-550 disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-bold shadow-lg shadow-cyan-600/15 hover:shadow-cyan-500/25 transition-all cursor-pointer"
        >
          {payState === 'loading' && <Loader2 className="w-4 h-4 animate-spin" />}
          {payState === 'verifying' && <Loader2 className="w-4 h-4 animate-spin" />}
          {payState === 'loading'
            ? 'Menyiapkan Pembayaran...'
            : payState === 'verifying'
            ? 'Memverifikasi Pembayaran...'
            : payState === 'pending'
            ? 'Cek Status Pembayaran'
            : 'Bayar Rp 5.000 & Lihat Hasil'}
        </button>

        <div className="flex items-center justify-center gap-1.5 mt-4 text-[11px] text-slate-400">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
          <span>Pembayaran diproses aman melalui Midtrans</span>
        </div>
      </div>
    </div>
  );
}
