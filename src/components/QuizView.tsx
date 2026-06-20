import { useState, useEffect, useRef } from 'react';
import { Question } from '../types';
import { Clock, ArrowLeft, ArrowRight, Send, CheckCircle2, AlertTriangle, Menu, X, Landmark, Compass, CircleHelp } from 'lucide-react';

interface QuizViewProps {
  userName: string;
  userAge: number;
  questions: Question[];
  onFinish: (answers: { [qId: number]: number }) => void;
  onExit: () => void;
}

export default function QuizView({ userName, userAge, questions, onFinish, onExit }: QuizViewProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [qId: number]: number }>({});
  const [timeLeft, setTimeLeft] = useState(3600); // 60 minutes = 3600 seconds
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showSubmitModal, setShowSubmitModal] = useState(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Set up the countdown timer
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          // Auto submit when time runs out
          handleAutoSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleAutoSubmit = () => {
    // Collect final answers and finish
    onFinish(answers);
  };

  const handleSelectOption = (optionIndex: number) => {
    const currentQuestion = questions[currentIndex];
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionIndex,
    }));
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleJump = (index: number) => {
    setCurrentIndex(index);
    // On mobile, close sidebar on jump
    if (window.innerWidth < 1024) {
      setSidebarOpen(false);
    }
  };

  const currentQuestion = questions[currentIndex];
  const isQuestionAnswered = (qId: number) => answers[qId] !== undefined;

  const totalAnswered = Object.keys(answers).length;
  const progressPercentage = (totalAnswered / questions.length) * 100;

  // Format time (MM:SS)
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getDifficultyBadge = (difficulty: 'mudah' | 'sedang' | 'sulit') => {
    const styles = {
      mudah: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/35 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-900/30',
      sedang: 'bg-amber-50 text-amber-600 dark:bg-amber-950/35 dark:text-amber-400 border border-amber-200 dark:border-amber-900/30',
      sulit: 'bg-rose-50 text-rose-600 dark:bg-rose-950/35 dark:text-rose-400 border border-rose-200 dark:border-rose-900/30',
    };
    return (
      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${styles[difficulty]}`}>
        {difficulty}
      </span>
    );
  };

  const getCategoryBadge = (category: string) => {
    return (
      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-cyan-50 text-cyan-600 dark:bg-cyan-950/35 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-900/30">
        {category}
      </span>
    );
  };

  const confirmExit = () => {
    if (window.confirm('Apakah Anda yakin ingin keluar dari tes? Seluruh progres saat ini akan hilang.')) {
      onExit();
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col bg-slate-50 dark:bg-[#05070a] text-slate-900 dark:text-slate-100 transition-colors duration-200 relative">
      {/* Quiz Top Action Sticky Header */}
      <header className="sticky top-0 z-40 w-full bg-white/85 dark:bg-[#0a0c12]/80 border-b border-slate-205 dark:border-slate-800/80 backdrop-blur-md px-4 py-3 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={confirmExit}
              className="p-2 -ml-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 font-semibold text-xs flex items-center gap-1 transition-colors cursor-pointer"
              id="btn-out"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Keluar</span>
            </button>
            <div className="border-l border-slate-205 dark:border-slate-700 pl-3">
              <h2 className="text-sm font-extrabold text-slate-800 dark:text-slate-200 line-clamp-1 mb-0.5 whitespace-nowrap">
                {userName} <span className="text-xs font-normal text-slate-450">({userAge} Th)</span>
              </h2>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold flex items-center gap-1" id="tagline-active">
                <Compass className="w-3 h-3 text-cyan-500 animate-spin" />
                Tes IQ Sedang Berjalan
              </p>
            </div>
          </div>

          {/* Core Timer display */}
          <div className="flex items-center gap-4">
            <div className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl border font-mono font-black text-sm transition-all shadow-sm ${
              timeLeft < 300 
                ? 'bg-rose-50 text-rose-600 border-rose-300 dark:bg-rose-950/30 dark:text-rose-450 dark:border-rose-900 animate-pulse' 
                : 'bg-slate-100 dark:bg-slate-900/50 text-cyan-600 dark:text-cyan-40 border-slate-200 dark:border-slate-800'
            }`}>
              <Clock className={`w-4 h-4 ${timeLeft < 300 ? 'text-rose-500' : 'text-cyan-550'}`} />
              <span>{formatTime(timeLeft)}</span>
            </div>

            <button
              onClick={() => setShowSubmitModal(true)}
              className="flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-450 hover:to-blue-550 text-white rounded-xl text-xs font-bold shadow-md shadow-cyan-600/15 transition-all active:scale-95 cursor-pointer uppercase tracking-wider"
              id="btn-submit-test-trigger"
            >
              <Send className="w-3.5 h-3.5" />
              Selesai & Kirim
            </button>

            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 lg:hidden rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-300 transition-colors cursor-pointer"
              title="Navigasi Soal"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Grid View */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 lg:grid lg:grid-cols-12 gap-6 items-start relative">
        {/* Left Column: Test Question Board */}
        <section id="question-board" className="lg:col-span-8 space-y-4">
          
          {/* Progress Header */}
          <div className="bg-white dark:bg-[#0a0c12]/60 border border-slate-200 dark:border-slate-850 rounded-2xl p-4 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs font-bold text-slate-400">Progres Pengisian Soal</span>
              <div className="flex items-bottom gap-2 mt-0.5">
                <span className="text-2xl font-black text-cyan-600 dark:text-cyan-400 leading-none">
                  {totalAnswered}
                </span>
                <span className="text-xs text-slate-500 self-end mb-1">
                  dari {questions.length} Soal Dijawab ({Math.round(progressPercentage)}%)
                </span>
              </div>
            </div>

            {/* Custom high contrast slider progress bar */}
            <div className="w-full sm:w-48 bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden border border-slate-205 dark:border-slate-700/50">
              <div 
                className="bg-gradient-to-r from-blue-600 via-cyan-400 to-emerald-400 h-full rounded-full transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>

          {/* Question Card Details */}
          <div className="bg-white dark:bg-[#0a0c12]/70 border border-slate-200 dark:border-slate-850 rounded-3xl p-6 sm:p-8 shadow-md relative min-h-[400px] flex flex-col justify-between">
            <div>
              {/* Question Metadata Row */}
              <div className="flex flex-wrap items-center justify-between gap-2.5 mb-5 border-b border-slate-200 dark:border-slate-850 pb-4">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold text-white bg-cyan-600 px-2.5 py-0.5 rounded-md font-mono">
                    SOAL #{currentIndex + 1}
                  </span>
                  {getCategoryBadge(currentQuestion.categoryLabel)}
                </div>
                <div>
                  {getDifficultyBadge(currentQuestion.difficulty)}
                </div>
              </div>

              {/* Real Question Text content */}
              <div className="text-slate-800 dark:text-slate-100 text-base md:text-lg font-semibold leading-relaxed mb-8 whitespace-pre-wrap select-none font-sans">
                {currentQuestion.question}
              </div>

              {/* Multiple Choice Option Buttons */}
              <div className="space-y-3" id="options-panel">
                {currentQuestion.options.map((option, idx) => {
                  const letter = String.fromCharCode(65 + idx); // A, B, C, D
                  const isSelected = answers[currentQuestion.id] === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      id={`option-${letter}`}
                      className={`w-full flex items-center gap-4 text-left p-4 rounded-xl border transition-all duration-150 select-none cursor-pointer ${
                        isSelected
                          ? 'bg-cyan-50 border-cyan-500 text-cyan-950 dark:bg-cyan-950/20 dark:border-cyan-500 dark:text-cyan-300 ring-2 ring-cyan-500/20'
                          : 'bg-slate-50 hover:bg-slate-100/80 border-slate-200 hover:border-slate-300 dark:bg-[#0a0c12]/30 dark:hover:bg-slate-800/80 dark:border-slate-850 dark:hover:border-slate-700 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      <span className={`flex items-center justify-center w-7 h-7 rounded-lg font-bold font-mono text-xs transition-colors shrink-0 ${
                        isSelected
                          ? 'bg-cyan-500 text-white'
                          : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                      }`}>
                        {letter}
                      </span>
                      <span className="text-sm font-semibold pr-1">{option}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Pagination Controls bar */}
            <div className="flex items-center justify-between gap-4 pt-10 border-t border-slate-200 dark:border-slate-850 mt-8">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-40 disabled:hover:bg-transparent transition-colors text-xs font-semibold cursor-pointer"
                id="btn-prev"
              >
                <ArrowLeft className="w-4 h-4" />
                Sebelumnya
              </button>
              
              <div className="text-xs font-bold text-slate-400 font-mono hidden sm:block">
                SOAL {currentIndex + 1} S/D {questions.length}
              </div>

              <button
                onClick={handleNext}
                disabled={currentIndex === questions.length - 1}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-40 disabled:hover:bg-transparent transition-colors text-xs font-semibold cursor-pointer"
                id="btn-next"
              >
                Selanjutnya
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* Backdrop overlay: tap anywhere outside to close the navigator on mobile */}
        {sidebarOpen && (
          <div
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 z-20 bg-slate-950/50 backdrop-blur-sm lg:hidden"
            aria-hidden="true"
          />
        )}

        {/* Right Sidebar: 100 Navigator grid panel */}
        <section 
          id="navigator-sidebar"
          className={`col-span-4 fixed lg:static top-16 right-0 bottom-0 z-30 lg:z-auto w-80 lg:w-auto bg-white lg:bg-transparent dark:bg-[#05070a] lg:dark:bg-transparent border-l lg:border-l-0 border-slate-200 dark:border-slate-850 p-4 lg:p-0 transition-transform duration-305 ${
            sidebarOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'
          }`}
        >
          <div className="bg-white dark:bg-[#0a0c12]/60 border border-slate-200 dark:border-slate-850 rounded-3xl p-5 lg:shadow-md h-[400px] lg:h-auto flex flex-col">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-850 pb-3 mb-4">
              <div>
                <h3 className="text-sm font-extrabold text-slate-800 dark:text-slate-200 flex items-center gap-1.5 font-sans">
                  <Landmark className="w-4 h-4 text-cyan-500" />
                  Navigator Soal
                </h3>
                <p className="text-[10px] text-slate-400 font-medium">Gunakan untuk melompat soal secara bebas</p>
              </div>
              <button 
                onClick={() => setSidebarOpen(false)}
                className="lg:hidden flex items-center gap-1 px-2.5 py-1.5 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-[10px] font-bold uppercase tracking-wider cursor-pointer"
                aria-label="Tutup Navigator Soal"
              >
                <X className="w-4 h-4" />
                Tutup
              </button>
            </div>

            {/* Quick stats indicators inside sidebar */}
            <div className="grid grid-cols-3 gap-2 text-[10px] uppercase font-bold tracking-wider mb-4 border-b border-slate-200 dark:border-slate-850 pb-3.5 font-sans">
              <div className="flex flex-col items-center p-2 bg-emerald-50 dark:bg-emerald-950/15 rounded-xl border border-emerald-100 dark:border-emerald-900/30">
                <span className="text-emerald-700 dark:text-emerald-400 font-extrabold">{totalAnswered}</span>
                <span className="text-[8px] text-zinc-400 font-semibold uppercase">Diisi</span>
              </div>
              <div className="flex flex-col items-center p-2 bg-slate-100 dark:bg-slate-900/40 rounded-xl border border-slate-200/50 dark:border-slate-800/60">
                <span className="text-slate-600 dark:text-slate-300 font-extrabold">{questions.length - totalAnswered}</span>
                <span className="text-[8px] text-zinc-400 font-semibold uppercase">Kosong</span>
              </div>
              <div className="flex flex-col items-center p-2 bg-cyan-50 dark:bg-cyan-950/15 rounded-xl border border-cyan-100 dark:border-cyan-900/30">
                <span className="text-cyan-700 dark:text-cyan-400 font-extrabold">#{currentIndex + 1}</span>
                <span className="text-[8px] text-zinc-400 font-semibold uppercase">Aktif</span>
              </div>
            </div>

            {/* Scrollable grid area with 100 actual buttons */}
            <div className="flex-1 overflow-y-auto pr-1">
              <div className="grid grid-cols-5 g-col xs:grid-cols-6 sm:grid-cols-5 md:grid-cols-5 gap-1.5" id="grid-hops">
                {questions.map((q, idx) => {
                  const answered = isQuestionAnswered(q.id);
                  const active = idx === currentIndex;
                  
                  return (
                    <button
                      key={q.id}
                      onClick={() => handleJump(idx)}
                      id={`hop-${q.id}`}
                      className={`h-9 w-full rounded-lg text-xs font-bold font-mono transition-all duration-100 flex items-center justify-center border cursor-pointer ${
                        active
                          ? 'border-cyan-550 bg-cyan-500/10 text-cyan-400 ring-2 ring-cyan-500 ring-inset font-black scale-105 shadow-[0_0_10px_rgba(34,211,238,0.25)]'
                          : answered
                            ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-600 dark:text-emerald-300'
                            : 'border-slate-200 bg-slate-50 text-slate-500 dark:bg-slate-905/30 dark:border-slate-850 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-705'
                      }`}
                      title={`Klik untuk lompat ke Soal #${idx + 1}`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Confirmation Submit Dialog Modal overlay */}
      {showSubmitModal && (
        <div id="submit-confirm-modal" className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-sm p-4 animate-fade-in">
          <div className="w-full max-w-md bg-white dark:bg-[#0a0c12] border border-slate-200 dark:border-slate-850 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
            <h3 className="text-lg font-extrabold text-slate-800 dark:text-slate-100 mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
              Selesaikan Tes IQ?
            </h3>
            
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
              Anda telah menjawab <strong>{totalAnswered}</strong> dari total <strong>{questions.length}</strong> soal. Jika disubmit, lembar tes akan diverifikasi dan hasil kecerdasan IQ Anda akan segera dianalisis secara lengkap.
            </p>

            <div className="space-y-3.5">
              {totalAnswered < questions.length && (
                <div className="p-3 bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/50 rounded-xl flex items-start gap-2.5">
                  <AlertTriangle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <p className="text-[10px] text-rose-700 dark:text-rose-400 leading-tight">
                    Perhatian: Masih ada <strong>{questions.length - totalAnswered} soal kosong</strong> yang belum Anda jawab. Soal yang terlewat akan dianggap salah dalam kalkulasi skor IQ.
                  </p>
                </div>
              )}

              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={() => setShowSubmitModal(false)}
                  className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 text-xs font-semibold transition-colors cursor-pointer"
                  id="btn-dismiss-submit"
                >
                  Belum, Lanjutkan
                </button>
                <button
                  onClick={() => {
                    setShowSubmitModal(false);
                    handleAutoSubmit();
                  }}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-450 hover:to-blue-550 text-white text-xs font-bold transition-all shadow-md active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
                  id="btn-confirm-submit"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  Kirim & Lihat Hasil
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
