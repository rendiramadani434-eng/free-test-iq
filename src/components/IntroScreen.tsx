import { useState, FormEvent } from 'react';
import { Award, Brain, Clock, HelpCircle, ArrowRight, Sparkles, BookOpen, UserCheck } from 'lucide-react';
import HistoryTable from './HistoryTable';
import { TestResult } from '../types';

interface IntroScreenProps {
  onStart: (name: string, age: number, randomize: boolean) => void;
  onSelectResult: (result: TestResult) => void;
}

export default function IntroScreen({ onStart, onSelectResult }: IntroScreenProps) {
  const [name, setName] = useState('');
  const [age, setAge] = useState<number | ''>('');
  const [randomize, setRandomize] = useState(true);
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Silakan masukkan nama lengkap Anda.');
      return;
    }
    if (!age || age < 5 || age > 120) {
      setError('Silakan masukkan umur yang valid (5 - 120 tahun).');
      return;
    }
    setError('');
    onStart(name.trim(), Number(age), randomize);
  };

  const categories = [
    {
      title: 'Logika Numerik',
      count: '25 Soal',
      desc: 'Analisis barisan angka, hitungan aritmatika praktis, rasio perbandingan, dan pemecahan hitungan matematis cepat.',
      color: 'from-blue-500/20 to-cyan-500/10 border-blue-500/20 text-blue-600 dark:text-blue-400',
      icon: '🔢'
    },
    {
      title: 'Logika Verbal',
      count: '25 Soal',
      desc: 'Mengevaluasi pemahaman kosakata melalui sinonim, antonim bahasa, serta keterhubungan analogi kata semantik.',
      color: 'from-purple-500/20 to-pink-500/10 border-purple-500/20 text-purple-600 dark:text-purple-400',
      icon: '💬'
    },
    {
      title: 'Penalaran Analitis',
      count: '25 Soal',
      desc: 'Kemampuan deduktif mutlak, silogisme kondisional formal, pemecahan teka-teki logika posisi, dan hubungan kausal.',
      color: 'from-emerald-500/20 to-teal-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400',
      icon: '🧠'
    },
    {
      title: 'Pola & Deret',
      count: '25 Soal',
      desc: 'Identifikasi pola huruf bertingkat, deret angka kompleks, keteraturan simbolik, pola balik, dan sekuensial visual.',
      color: 'from-amber-500/20 to-orange-500/10 border-amber-500/20 text-amber-600 dark:text-amber-400',
      icon: '🔄'
    }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8 md:py-16 font-sans">
      {/* Decorative background glow */}
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-cyan-500/10 dark:bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 right-1/4 w-80 h-80 bg-blue-500/15 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Header */}
      <div className="text-center mb-12 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-200 dark:border-cyan-800/60 rounded-full text-cyan-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4 animate-pulse">
          <Sparkles className="w-3.5 h-3.5" />
          Uji Standar Tinggi Kognitif
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 via-cyan-950 to-slate-900 dark:from-white dark:via-cyan-100 dark:to-blue-200 bg-clip-text text-transparent">
          Tes IQ Profesional
        </h1>
        <p className="mt-4 text-base md:text-lg text-zinc-650 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Uji kecerdasan kognitif Anda secara komprehensif melalui platform psikotes digital berstandar akurasi tinggi. Dirancang dengan 100 soal seimbang untuk mengukur potensi analitis Anda.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
        {/* Left Side: Form Input and Information */}
        <div className="col-span-1 lg:col-span-5 bg-white/70 dark:bg-[#0a0c12]/70 border border-slate-200 dark:border-slate-850 p-6 sm:p-8 rounded-3xl shadow-xl backdrop-blur-md">
          <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-6 flex items-center gap-2">
            <UserCheck className="w-5 h-5 text-cyan-500" />
            Data Diri Peserta
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5" id="form-registration">
            {error && (
              <div className="p-3.5 text-xs text-rose-600 bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/50 rounded-xl leading-relaxed">
                {error}
              </div>
            )}

            <div>
              <label htmlFor="input-name" className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                Nama Lengkap
              </label>
              <input
                id="input-name"
                type="text"
                placeholder="cth: Rendy Ramadani"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/40 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-600 focus:border-transparent transition-all transition-colors placeholder-slate-450 dark:placeholder-slate-600"
              />
            </div>

            <div>
              <label htmlFor="input-age" className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                Umur (Tahun)
              </label>
              <input
                id="input-age"
                type="number"
                placeholder="cth: 22"
                min="5"
                max="120"
                value={age}
                onChange={(e) => {
                  const val = e.target.value;
                  setAge(val === '' ? '' : Number(val));
                }}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/40 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-600 focus:border-transparent transition-all transition-colors placeholder-slate-450 dark:placeholder-slate-600"
              />
            </div>

            <div className="pt-2">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={randomize}
                  onChange={(e) => setRandomize(e.target.checked)}
                  className="w-4 h-4 rounded text-cyan-600 bg-slate-100 border-slate-300 dark:border-slate-800 focus:ring-cyan-500 focus:ring-2"
                />
                <span className="text-xs text-slate-600 dark:text-slate-300 leading-tight">
                  Acak urutan soal & pilihan jawaban (Fisher-Yates)
                </span>
              </label>
            </div>

            <div className="border-t border-slate-200 dark:border-slate-800 pt-5 mt-4">
              <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-5">
                <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-900/50 px-2.5 py-1.5 rounded-lg border border-slate-200/50 dark:border-slate-800/65">
                  <Clock className="w-3.5 h-3.5 text-cyan-500" />
                  <span>Durasi: <strong>60 Menit</strong></span>
                </div>
                <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-900/50 px-2.5 py-1.5 rounded-lg border border-slate-200/50 dark:border-slate-800/65">
                  <BookOpen className="w-3.5 h-3.5 text-cyan-500" />
                  <span>Total: <strong>100 Soal</strong></span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-450 hover:to-blue-550 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/30 active:scale-[0.98] transition-all cursor-pointer font-sans uppercase tracking-wider"
                id="btn-start-test"
              >
                Mulai Tes Sekarang
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>

        {/* Right Side: Category Details */}
        <div className="col-span-1 lg:col-span-7 space-y-4">
          <div className="p-4 bg-cyan-50/50 dark:bg-cyan-950/15 border border-cyan-100 dark:border-cyan-900/30 rounded-2xl">
            <h3 className="text-sm font-bold text-cyan-950 dark:text-cyan-300 flex items-center gap-2 mb-1.5">
              <Brain className="w-4 h-4 text-cyan-500" />
              Struktur & Komposisi Penilaian
            </h3>
            <p className="text-xs text-cyan-900/80 dark:text-slate-350 leading-relaxed">
              Tes terdiri dari 4 kluster materi kognitif fungsional, dirancang seimbang dengan tingkat kesulitan mudah, sedang, hingga tinggi. Durasi waktu yang diberikan adalah 60 menit terintegrasi timer otomatis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl border border-slate-200 dark:border-slate-850 bg-white/40 dark:bg-[#0a0c12]/40 shadow-sm hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">{cat.icon}</span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold font-mono bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                    {cat.count}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100 mb-1">
                  {cat.title}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                  {cat.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl border border-dashed border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 space-y-1 bg-white/10 dark:bg-slate-900/10">
            <h5 className="font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1">
              <HelpCircle className="w-3.5 h-3.5 text-cyan-500" />
              Petunjuk Pengerjaan:
            </h5>
            <ul className="list-disc list-inside space-y-0.5 leading-relaxed pl-1 text-[11px]">
              <li>Lengkapi jawaban dari soal nomor 1 hingga 100 sesegera mungkin.</li>
              <li>Anda dapat melewati soal (lompat soal) menggunakan panel navigasi yang disediakan secara acak.</li>
              <li>Skor akhir akan dikonversikan langsung menjadi taksiran angka IQ riil berkategori klinis.</li>
              <li>Jangan refresh halaman browser Anda selama proses tes sedang berlangsung.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* History section */}
      <HistoryTable onSelectResult={onSelectResult} />
    </div>
  );
}
