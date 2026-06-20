import { useEffect, useRef } from 'react';
import { TestResult, Question } from '../types';
import { Award, RefreshCw, ThumbsUp, Sparkles, TrendingUp, Download, PieChart, Users, CheckCircle, XCircle } from 'lucide-react';

interface ResultDashboardProps {
  result: TestResult;
  questions: Question[];
  onRetake: () => void;
}

export default function ResultDashboard({ result, questions, onRetake }: ResultDashboardProps) {
  const bellCurveRef = useRef<HTMLCanvasElement | null>(null);
  const categoriesRef = useRef<HTMLCanvasElement | null>(null);

  // Draw the IQ Normal Distribution (Bell Curve) using HTML Canvas API
  useEffect(() => {
    const canvas = bellCurveRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Handle high DPI screens
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const width = rect.width;
    const height = rect.height;

    // Clear background
    ctx.clearRect(0, 0, width, height);

    // Padding settings
    const paddingLeft = 40;
    const paddingRight = 40;
    const paddingTop = 30;
    const paddingBottom = 40;
    const chartWidth = width - paddingLeft - paddingRight;
    const chartHeight = height - paddingTop - paddingBottom;

    // Draw grid or background highlights (Standard Deviation Regions: IQR)
    // Bell shape function: f(x) = height * exp(-0.5 * ((x-mu)/sigma)^2)
    const mu = 100;
    const sigma = 15;

    // Convert IQ score to x-coordinate
    const iqToX = (iq: number) => {
      // IQ range from 55 to 145 on screen
      const minIq = 55;
      const maxIq = 145;
      return paddingLeft + ((iq - minIq) / (maxIq - minIq)) * chartWidth;
    };

    // Bell curve height value at given IQ
    const bellY = (iq: number) => {
      const exponent = -0.5 * Math.pow((iq - mu) / sigma, 2);
      const amp = chartHeight * 0.9;
      return paddingTop + chartHeight - Math.exp(exponent) * amp;
    };

    // Draw shaded regions for standard deviations
    const drawRegion = (startIq: number, endIq: number, color: string) => {
      ctx.beginPath();
      let first = true;
      for (let iq = startIq; iq <= endIq; iq += 0.5) {
        const x = iqToX(iq);
        const y = bellY(iq);
        if (first) {
          ctx.moveTo(x, paddingTop + chartHeight);
          ctx.lineTo(x, y);
          first = false;
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.lineTo(iqToX(endIq), paddingTop + chartHeight);
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.fill();
    };

    // Render SD Shade intervals
    // -3 SD to +3 SD areas (55 to 145)
    drawRegion(55, 70, 'rgba(239, 68, 68, 0.05)'); // Very Low
    drawRegion(70, 85, 'rgba(245, 158, 11, 0.08)'); // Below Average
    drawRegion(85, 115, 'rgba(6, 182, 212, 0.12)'); // Average & Above Average
    drawRegion(115, 130, 'rgba(16, 185, 129, 0.15)'); // Clever
    drawRegion(130, 145, 'rgba(139, 92, 246, 0.20)'); // Very Clever

    // Draw the main Curve Line
    ctx.beginPath();
    for (let iq = 55; iq <= 145; iq += 0.5) {
      const x = iqToX(iq);
      const y = bellY(iq);
      if (iq === 55) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.strokeStyle = '#06b6d4'; // Cyan-500
    ctx.lineWidth = 3;
    ctx.stroke();

    // Draw Bottom Axis line
    ctx.beginPath();
    ctx.moveTo(paddingLeft, paddingTop + chartHeight);
    ctx.lineTo(paddingLeft + chartWidth, paddingTop + chartHeight);
    ctx.strokeStyle = 'rgba(148, 163, 184, 0.2)';
    ctx.lineWidth = 1;
    ctx.stroke();

    // Draw Axis Markers & grid vertical lines
    const markers = [55, 70, 85, 100, 115, 130, 145];
    ctx.font = '10px font-sans';
    ctx.textAlign = 'center';

    markers.forEach((num) => {
      const x = iqToX(num);
      const y = paddingTop + chartHeight;

      // Vertical line
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x, y + 5);
      ctx.strokeStyle = 'rgba(148, 163, 184, 0.3)';
      ctx.stroke();

      // Text key
      ctx.fillStyle = document.documentElement.classList.contains('dark') ? '#cbd5e1' : '#64748b';
      ctx.fillText(num.toString(), x, y + 18);
    });

    // Plot User's Specific Score Location
    const userIq = result.iqScore;
    const userX = iqToX(userIq);
    const userY = bellY(userIq);

    // Draw dashed marker line
    ctx.beginPath();
    ctx.setLineDash([4, 4]);
    ctx.moveTo(userX, yToPercentOfHeight(0.05));
    ctx.lineTo(userX, paddingTop + chartHeight);
    ctx.strokeStyle = '#ef4444'; // Red for indicator
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.setLineDash([]); // Reset to solid

    // Draw glowing circle dot
    ctx.beginPath();
    ctx.arc(userX, userY, 7, 0, 2 * Math.PI);
    ctx.fillStyle = '#ef4444';
    ctx.shadowColor = 'rgba(239, 68, 68, 0.5)';
    ctx.shadowBlur = 8;
    ctx.fill();
    ctx.shadowBlur = 0; // reset

    ctx.beginPath();
    ctx.arc(userX, userY, 3, 0, 2 * Math.PI);
    ctx.fillStyle = '#ffffff';
    ctx.fill();

    // Text box for "IQ Anda" above the dot
    const isScoreFarLeft = userIq < 75;
    const isScoreFarRight = userIq > 125;
    ctx.font = 'bold 11px font-sans';
    ctx.textAlign = isScoreFarLeft ? 'left' : isScoreFarRight ? 'right' : 'center';
    ctx.fillStyle = '#ef4444';
    ctx.fillText(`IQ Anda: ${userIq}`, userX, Math.max(paddingTop + 10, userY - 14));

    function yToPercentOfHeight(p: number) {
      return paddingTop + chartHeight * p;
    }
  }, [result]);

  // Draw Category Scores (Bar Chart)
  useEffect(() => {
    const canvas = categoriesRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const width = rect.width;
    const height = rect.height;

    ctx.clearRect(0, 0, width, height);

    // Standard scoring per category
    const catScores = result.categoryScores || {
      'logika-numerik': 0,
      'logika-verbal': 0,
      'penalaran-analitis': 0,
      'pola-deret': 0
    };

    const datasets = [
      { label: 'Logika Numerik', val: catScores['logika-numerik'], color: '#3b82f6' },
      { label: 'Logika Verbal', val: catScores['logika-verbal'], color: '#a855f7' },
      { label: 'Penalaran Analitis', val: catScores['penalaran-analitis'], color: '#10b981' },
      { label: 'Pola & Deret', val: catScores['pola-deret'], color: '#f59e0b' }
    ];

    const paddingLeft = 120;
    const paddingRight = 30;
    const paddingTop = 20;
    const paddingBottom = 20;
    const chartHeight = height - paddingTop - paddingBottom;
    const chartWidth = width - paddingLeft - paddingRight;

    const mY = (catIndex: number) => {
      const barSpacing = chartHeight / 4;
      return paddingTop + catIndex * barSpacing + barSpacing / 2;
    };

    // Draw bars
    datasets.forEach((data, i) => {
      const y = mY(i);
      const scorePercentage = data.val / 25; // 25 questions max/category
      const barWidth = Math.max(12, scorePercentage * chartWidth);

      // Label name
      ctx.font = 'bold 11px font-sans';
      ctx.fillStyle = document.documentElement.classList.contains('dark') ? '#cbd5e1' : '#334155';
      ctx.textAlign = 'right';
      ctx.textBaseline = 'middle';
      ctx.fillText(data.label, paddingLeft - 12, y);

      // Background tracking track
      ctx.fillStyle = document.documentElement.classList.contains('dark') ? 'rgba(30, 41, 59, 0.7)' : 'rgba(229, 231, 235, 0.7)';
      ctx.beginPath();
      ctx.roundRect(paddingLeft, y - 8, chartWidth, 16, 6);
      ctx.fill();

      // Shaded actual value bar
      ctx.fillStyle = data.color;
      ctx.beginPath();
      ctx.roundRect(paddingLeft, y - 8, barWidth, 16, 6);
      ctx.fill();

      // Percent / correct count text inside or next to the bar
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 10px font-mono';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      coorText();

      function coorText() {
        if (barWidth > 45) {
          ctx.fillText(`${data.val} Benar`, paddingLeft + barWidth - 24, y);
        } else {
          ctx.fillStyle = document.documentElement.classList.contains('dark') ? '#cbd5e1' : '#334155';
          ctx.textAlign = 'left';
          ctx.fillText(`${data.val} Benar`, paddingLeft + barWidth + 6, y);
        }
      }
    });
  }, [result]);

  const percentage = Math.round((result.correctCount / result.totalQuestions) * 100);

  // Kategori description mapping
  const getCategoryDetails = (iq: number) => {
    if (iq > 130) {
      return {
        badge: 'Sangat Cerdas (Very Superior)',
        desc: 'Selamat! Anda memiliki keunggulan kognitif yang sangat menonjol dibanding populasi umum. Anda memiliki kecakapan luar biasa dalam pemecahan masalah abstrak kompleks, penalaran deduktif mutlak, dan manipulasi spasial rumit.',
        gradient: 'from-violet-600 via-fuchsia-600 to-indigo-600',
        textColor: 'text-violet-600'
      };
    }
    if (iq >= 116) {
      return {
        badge: 'Cerdas (Superior)',
        desc: 'Anda memiliki kemampuan intelektual superior yang jauh di atas rata-rata. Anda sangat terampil menyerap konsep baru secara teoritis, mengenali keteraturan pola linier tersembunyi, dan mengambil kesimpulan analitis secara rasional.',
        gradient: 'from-blue-600 to-indigo-600',
        textColor: 'text-blue-600'
      };
    }
    if (iq >= 101) {
      return {
        badge: 'Rata-rata Atas (High Average)',
        desc: 'Selamat, kapasitas kognitif Anda berkembang dengan baik dan berada di atas rata-rata umum populasi. Anda memiliki daya tangkap logis yang dinamis, kecermatan verbal verbal kontekstual yang solid, serta kemampuan berhitung yang andal.',
        gradient: 'from-emerald-600 to-teal-500',
        textColor: 'text-emerald-600'
      };
    }
    if (iq >= 85) {
      return {
        badge: 'Rata-rata (Average)',
        desc: 'Anda memiliki daya kecerdasan standar rata-rata populasi umum yang sehat. Seluruh fungsional kognitif dasar Anda (numerik dasar, verbal fungsional, dan visualisasi pola dasar) bekerja secara optimal seimbang dan solutif.',
        gradient: 'from-amber-500 to-orange-500',
        textColor: 'text-amber-600'
      };
    }
    return {
      badge: 'Batas Bawah Rata-rata (Below Average)',
      desc: 'Anda memiliki kemampuan kognitif bervariasi yang setara dengan batas bawah rata-rata umum. Melalui latihan intensif yang disiplin pada penalaran aritmatika analitis serta visualisasi logika simbolis, Anda dapat meningkatkan daya asimilasi kognitif.',
      gradient: 'from-rose-500 to-pink-600',
      textColor: 'text-rose-500'
    };
  };

  const info = getCategoryDetails(result.iqScore);

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8 md:py-12 font-sans relative">
      {/* Decorative Blur BG */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-cyan-500/5 dark:bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-emerald-500/5 dark:bg-emerald-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header Banner Result */}
      <div className="text-center mb-10 relative z-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/80 rounded-full text-emerald-700 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3 animate-fade-in">
          <Award className="w-4 h-4 text-emerald-500" />
          Sertifikasi Tes IQ Resmi Diverifikasi
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Lembar Analisis Psikotes IQ
        </h1>
        <p className="mt-2 text-sm text-slate-550 dark:text-slate-400 max-w-lg mx-auto">
          Berikut adalah rincian diagnosis fungsional kecerdasan kognitif Anda berdasarkan kalkulasi klinis dari 100 soal pengujian.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start relative z-10">
        
        {/* Left Col: Core IQ Card Diagnostic */}
        <div className="col-span-1 lg:col-span-4 space-y-6">
          <div className="bg-white/80 dark:bg-[#0a0c12]/75 border border-slate-200 dark:border-slate-850 rounded-3xl p-6 sm:p-8 shadow-xl backdrop-blur-md relative overflow-hidden flex flex-col items-center text-center">
            {/* Color accent highlight layer */}
            <div className={`absolute top-0 inset-x-0 h-2 bg-gradient-to-r ${info.gradient}`} />

            <div className="mt-2 text-xs text-slate-400 font-bold uppercase tracking-widest">
              Skor IQ Akhir
            </div>

            {/* Glowing circular display of IQ */}
            <div className="my-6 relative flex items-center justify-center">
              <div className={`absolute inset-0 rounded-full bg-gradient-to-tr ${info.gradient} opacity-10 animate-pulse blur-xl w-36 h-36`} />
              <div className="w-36 h-36 rounded-full border-4 border-slate-100 dark:border-slate-800 flex flex-col items-center justify-center p-2 bg-white dark:bg-slate-950/85 shadow-md">
                <span className={`text-4xl font-black tracking-tight font-mono ${info.textColor}`}>
                  {result.iqScore}
                </span>
                <span className="text-[10px] text-zinc-400 uppercase font-black tracking-wider mt-0.5">ESTIMASI</span>
              </div>
            </div>

            <div className="space-y-2 w-full">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border border-current bg-white dark:bg-slate-900 ${info.textColor}`}>
                {info.badge}
              </span>
              <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100 mt-2">
                {result.name}
              </h3>
              <p className="text-[11px] text-slate-400">
                Kategori Umur: <span className="font-semibold text-slate-605 text-slate-600 dark:text-slate-300">{result.age} Tahun</span> • Diuji pada {new Date(result.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
              </p>
            </div>

            <div className="border-t border-slate-250 border-slate-200 dark:border-slate-850 w-full mt-6 pt-5 grid grid-cols-2 gap-4">
              <div className="text-left font-sans">
                <span className="block text-[10px] uppercase font-bold tracking-wider text-slate-400">BENAR</span>
                <div className="flex items-center gap-1 pb-1">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span className="text-base font-extrabold text-slate-800 dark:text-slate-200 font-mono">
                    {result.correctCount}
                  </span>
                  <span className="text-[11px] text-slate-400">/ {result.totalQuestions}</span>
                </div>
              </div>
              <div className="text-left font-sans">
                <span className="block text-[10px] uppercase font-bold tracking-wider text-slate-400">SALAH/KOSONG</span>
                <div className="flex items-center gap-1 pb-1">
                  <XCircle className="w-4 h-4 text-rose-500" />
                  <span className="text-base font-extrabold text-slate-800 dark:text-slate-200 font-mono">
                    {result.incorrectCount}
                  </span>
                  <span className="text-[11px] text-slate-400">/ {result.totalQuestions}</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-850 rounded-2xl p-4 mt-6 text-xs text-slate-600 dark:text-slate-350 text-left leading-relaxed">
              <strong>Kategori Klinis:</strong> {info.desc}
            </div>
          </div>
        </div>

        {/* Right Col: Visual Charts (Distribution Calibration) */}
        <div className="col-span-1 lg:col-span-8 space-y-6">
          
          <div className="bg-white/80 dark:bg-[#0a0c12]/75 border border-slate-200 dark:border-slate-850 rounded-3xl p-6 shadow-xl backdrop-blur-md">
            <h3 className="text-base font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2 mb-1.5 font-sans">
              <Users className="w-5 h-5 text-cyan-500" />
              Kalibrasi Kurva Distribusi IQ Normal Bel
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
              Nilai IQ Anda dipetakan dalam penyebaran IQ global populasi manusia. Rata-rata populasi berada pada angka 100 dengan standar deviasi deviasi sebesar 15. Titik merah mengalibrasi persis koordinat Anda saat ini.
            </p>

            <div className="relative w-full h-[220px] bg-slate-50 dark:bg-slate-950/40 rounded-2xl border border-slate-200 dark:border-slate-850 overflow-hidden">
              <canvas ref={bellCurveRef} className="w-full h-full block" />
            </div>

            <div className="grid grid-cols-5 gap-1 text-[8px] sm:text-[9px] uppercase font-bold text-slate-400 tracking-wider text-center pt-3 border-t border-slate-200 dark:border-slate-800 mt-3">
              <div className="p-1 px-1 text-rose-600 bg-rose-50/25 dark:bg-rose-950/10 rounded">Sangat Rendah</div>
              <div className="p-1 px-1 text-amber-600 bg-amber-50/25 dark:bg-amber-950/10 rounded">Rendah</div>
              <div className="p-1 px-1 text-cyan-600 bg-cyan-50/25 dark:bg-cyan-950/10 rounded">Rata-rata</div>
              <div className="p-1 px-1 text-emerald-600 bg-emerald-50/25 dark:bg-emerald-950/10 rounded">Cerdas</div>
              <div className="p-1 px-1 text-purple-600 bg-purple-50/25 dark:bg-purple-950/10 rounded">Sangat Cerdas</div>
            </div>
          </div>

          <div className="bg-white/80 dark:bg-[#0a0c12]/75 border border-slate-200 dark:border-slate-850 rounded-3xl p-6 shadow-xl backdrop-blur-md">
            <h3 className="text-base font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2 mb-1.5 font-sans">
              <PieChart className="w-5 h-5 text-cyan-500" />
              Breakdown Kategori Jawaban Benar
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Grafik di bawah menggambarkan tingkat ketepatan kognitif Anda pada masing-masing kluster tes dengan nilai maksimum 25 benar per kategori materi.
            </p>

            <div className="relative w-full h-[220px] bg-slate-50 dark:bg-slate-950/40 rounded-2xl border border-slate-200 dark:border-slate-850 p-2">
              <canvas ref={categoriesRef} className="w-full h-full block" />
            </div>
          </div>

          {/* Actions panel */}
          <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-2">
            <button
              onClick={() => window.print()}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-slate-300 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-805 text-xs font-semibold transition-colors cursor-pointer"
              id="btn-print-result"
            >
              <Download className="w-4 h-4" />
              Cetak Raport Hasil
            </button>
            <button
              onClick={onRetake}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-450 hover:to-blue-550 text-white text-xs font-bold shadow-lg shadow-cyan-600/15 hover:shadow-cyan-500/25 transition-all cursor-pointer font-sans uppercase tracking-wider"
              id="btn-retake-quiz-trigger"
            >
              <RefreshCw className="w-4 h-4" />
              Ulangi Tes Baru
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
