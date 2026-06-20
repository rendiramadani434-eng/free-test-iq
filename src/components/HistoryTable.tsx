import { useState, useEffect } from 'react';
import { TestResult } from '../types';
import { Calendar, Award, User, Clock, Trash2 } from 'lucide-react';

interface HistoryTableProps {
  onSelectResult?: (result: TestResult) => void;
}

export default function HistoryTable({ onSelectResult }: HistoryTableProps) {
  const [history, setHistory] = useState<TestResult[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('iq_test_history');
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as TestResult[];
        // Sort by date descending
        const sorted = parsed.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        setHistory(sorted);
      } catch (e) {
        console.error('Failed to parse history', e);
      }
    }
  }, []);

  const clearHistory = () => {
    if (window.confirm('Apakah Anda yakin ingin menghapus semua riwayat tes?')) {
      localStorage.removeItem('iq_test_history');
      setHistory([]);
    }
  };

  const getCategoryColor = (iq: number) => {
    if (iq > 130) return 'text-violet-500 bg-violet-50 dark:bg-violet-950/20 border-violet-200 dark:border-violet-800';
    if (iq >= 116) return 'text-blue-500 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800';
    if (iq >= 101) return 'text-emerald-500 bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800';
    if (iq >= 85) return 'text-amber-500 bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800';
    return 'text-rose-500 bg-rose-50 dark:bg-rose-950/20 border-rose-200 dark:border-rose-800';
  };

  if (history.length === 0) {
    return null;
  }

  return (
    <div id="history-section" className="w-full max-w-4xl mx-auto mt-12 p-6 rounded-2xl bg-white/70 dark:bg-[#0a0c12]/70 border border-slate-200 dark:border-slate-850 shadow-xl backdrop-blur-md">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-2">
          <Award className="w-6 h-6 text-cyan-500" />
          <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 font-sans">
            Riwayat Tes Anda
          </h2>
        </div>
        <button
          onClick={clearHistory}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold text-rose-600 dark:text-rose-450 hover:bg-rose-50 dark:hover:bg-rose-950/20 transition-all border border-rose-200 dark:border-rose-900/40"
          id="btn-clear-history"
        >
          <Trash2 className="w-3.5 h-3.5" />
          Hapus Semua Riwayat
        </button>
      </div>

      <div className="overflow-x-auto w-full rounded-xl border border-slate-200 dark:border-slate-800">
        <table className="w-full text-left border-collapse" id="table-history">
          <thead>
            <tr className="bg-slate-50 dark:bg-[#0a0c12]/80 text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider border-b border-slate-200 dark:border-slate-850">
              <th className="px-5 py-3">Nama Sesi</th>
              <th className="px-5 py-3">Tanggal</th>
              <th className="px-5 py-3">Umur</th>
              <th className="px-5 py-3 text-center">Jawaban</th>
              <th className="px-5 py-3 text-center">Skor IQ</th>
              <th className="px-5 py-3">Kategori</th>
              <th className="px-5 py-3 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-850 text-sm">
            {history.map((item) => (
              <tr 
                key={item.id} 
                className="hover:bg-slate-50/50 dark:hover:bg-[#0a0c12]/45 transition-colors"
                id={`history-row-${item.id}`}
              >
                <td className="px-5 py-4 font-semibold text-slate-800 dark:text-slate-200">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-slate-400" />
                    <span>{item.name}</span>
                  </div>
                </td>
                <td className="px-5 py-4 text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-1.5 text-xs">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{new Date(item.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                  </div>
                </td>
                <td className="px-5 py-4 text-slate-600 dark:text-slate-300">
                  {item.age} Tahun
                </td>
                <td className="px-5 py-4 text-center">
                  <span className="font-mono text-slate-700 dark:text-slate-300">
                    {item.correctCount} / {item.totalQuestions}
                  </span>
                </td>
                <td className="px-5 py-4 text-center">
                  <span className="font-mono font-black text-lg text-cyan-600 dark:text-cyan-400">
                    {item.iqScore}
                  </span>
                </td>
                <td className="px-5 py-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${getCategoryColor(item.iqScore)}`}>
                    {item.category}
                  </span>
                </td>
                <td className="px-5 py-4 text-right">
                  {onSelectResult && (
                    <button
                      onClick={() => onSelectResult(item)}
                      className="px-3 py-1 bg-cyan-50 dark:bg-cyan-950/40 text-cyan-600 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800/40 rounded-md text-xs font-semibold hover:bg-cyan-100 dark:hover:bg-cyan-950/60 transition-all font-sans"
                      id={`btn-view-${item.id}`}
                    >
                      Buka Hasil
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
