import { useState, useEffect } from 'react';
import { questions as rawQuestions } from './questions';
import { Question, TestResult } from './types';
import { prepareQuestions, calculateIQ, isResultPaidLocally } from './utils';
import IntroScreen from './components/IntroScreen';
import QuizView from './components/QuizView';
import ResultDashboard from './components/ResultDashboard';
import PaywallScreen from './components/PaywallScreen';
import { Brain, Sun, Moon, Info, ShieldCheck, Cpu } from 'lucide-react';

export default function App() {
  const [screen, setScreen] = useState<'intro' | 'quiz' | 'result'>('intro');
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState<number>(18);
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [currentResult, setCurrentResult] = useState<TestResult | null>(null);
  const [darkMode, setDarkMode] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);

  // Initialize Dark Mode state from localStorage
  useEffect(() => {
    const savedDark = localStorage.getItem('iq_test_dark_mode');
    if (savedDark === 'false') {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    } else {
      // Default to true for Elegant Dark assessment theme
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const nextDark = !darkMode;
    setDarkMode(nextDark);
    if (nextDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('iq_test_dark_mode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('iq_test_dark_mode', 'false');
    }
  };

  // Start the actual 100 questions test
  const handleStartTest = (name: string, age: number, randomize: boolean) => {
    setUserName(name);
    setUserAge(age);
    
    // Prepare and randomize questions list
    const prepared = prepareQuestions(rawQuestions, randomize);
    setActiveQuestions(prepared);
    setScreen('quiz');
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Process selected answers and calculate total scores upon finish
  const handleFinishTest = (answers: { [qId: number]: number }) => {
    let correctCount = 0;
    
    const categoryScores = {
      'logika-numerik': 0,
      'logika-verbal': 0,
      'penalaran-analitis': 0,
      'pola-deret': 0
    };

    // Evaluate answers
    activeQuestions.forEach((q) => {
      const selectedOption = answers[q.id];
      if (selectedOption === q.correctAnswerIndex) {
        correctCount++;
        categoryScores[q.category]++;
      }
    });

    const incorrectCount = activeQuestions.length - correctCount;
    const { score: iqScore, label: iqCategory } = calculateIQ(correctCount);

    const resultId = `res-${Date.now()}`;
    const newResult: TestResult = {
      id: resultId,
      name: userName,
      age: userAge,
      correctCount,
      incorrectCount,
      totalQuestions: activeQuestions.length,
      percentage: Math.round((correctCount / activeQuestions.length) * 100),
      iqScore,
      category: iqCategory,
      date: new Date().toISOString(),
      categoryScores
    };

    // Save to localStorage history list
    const previousHistory = localStorage.getItem('iq_test_history');
    let historyList: TestResult[] = [];
    if (previousHistory) {
      try {
        historyList = JSON.parse(previousHistory) as TestResult[];
      } catch (e) {
        console.error('Failed to parse previous history', e);
      }
    }
    historyList.push(newResult);
    localStorage.setItem('iq_test_history', JSON.stringify(historyList));

    // Show result (behind paywall unless already unlocked)
    setCurrentResult(newResult);
    setIsUnlocked(isResultPaidLocally(newResult.id));
    setScreen('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectResult = (selectedHistory: TestResult) => {
    setCurrentResult(selectedHistory);
    // Bind current details
    setUserName(selectedHistory.name);
    setUserAge(selectedHistory.age);
    setIsUnlocked(isResultPaidLocally(selectedHistory.id));
    setScreen('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRetake = () => {
    setScreen('intro');
    setCurrentResult(null);
    setIsUnlocked(false);
    setActiveQuestions([]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#05070a] text-slate-900 dark:text-slate-200 transition-colors duration-200">
      
      {/* Upper floating Navbar */}
      {screen !== 'quiz' && (
        <header className="sticky top-0 z-50 w-full bg-white/70 dark:bg-[#0a0c12]/80 border-b border-slate-200 dark:border-slate-800 backdrop-blur-md px-4 py-4">
          <div className="max-w-5xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2 cursor-pointer" onClick={handleRetake}>
              <div className="w-9 h-9 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md shadow-cyan-500/20 text-white">
                <Brain className="w-5 h-5" />
              </div>
              <div>
                <span className="font-extrabold text-base tracking-tight bg-gradient-to-r from-cyan-600 to-blue-800 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                  Tes IQ Profesional
                </span>
                <span className="hidden sm:inline-block ml-2 text-[10px] text-cyan-500 dark:text-cyan-400 border border-slate-200 dark:border-slate-800 px-1.5 py-0.5 rounded font-mono bg-cyan-500/10">
                  PRO
                </span>
              </div>
            </div>

            {/* Dark Mode toggle & Utilities */}
            <div className="flex items-center gap-3">
              <button
                onClick={toggleDarkMode}
                id="btn-theme-toggle"
                className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/40 hover:bg-slate-100 dark:hover:bg-slate-800/80 text-slate-600 dark:text-slate-300 transition-colors cursor-pointer"
                title={darkMode ? 'Ubah ke Mode Terang' : 'Ubah ke Mode Gelap'}
              >
                {darkMode ? <Sun className="w-4 h-4 text-amber-500" /> : <Moon className="w-4 h-4 text-zinc-600" />}
              </button>
            </div>
          </div>
        </header>
      )}

      {/* Screen Routing Handler */}
      <div className="w-full relative">
        {screen === 'intro' && (
          <div className="animate-fade-in">
            <IntroScreen onStart={handleStartTest} onSelectResult={handleSelectResult} />
          </div>
        )}

        {screen === 'quiz' && (
          <QuizView 
            userName={userName} 
            userAge={userAge} 
            questions={activeQuestions} 
            onFinish={handleFinishTest} 
            onExit={handleRetake}
          />
        )}

        {screen === 'result' && currentResult && !isUnlocked && (
          <div className="animate-fade-in">
            <PaywallScreen
              result={currentResult}
              onUnlocked={() => setIsUnlocked(true)}
            />
          </div>
        )}

        {screen === 'result' && currentResult && isUnlocked && (
          <div className="animate-fade-in">
            <ResultDashboard 
              result={currentResult} 
              questions={rawQuestions} 
              onRetake={handleRetake} 
            />
          </div>
        )}
      </div>

      {/* Elegant minimalist footer */}
      {screen !== 'quiz' && (
        <footer className="w-full border-t border-slate-200 dark:border-slate-900 bg-white/30 dark:bg-slate-950/30 py-8 px-4 text-center mt-20 relative z-10 transition-colors">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 dark:text-slate-500">
            <div className="flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Privasi Terjamin. Seluruh data tes disimpan secara luring (LocalStorage) di peranti Anda.</span>
            </div>
            <div className="flex items-center gap-1">
              <Cpu className="w-3.5 h-3.5" />
              <span>Tahun 2026 • Platform Standardisasi IQ Klinis</span>
            </div>
          </div>
        </footer>
      )}

    </div>
  );
}
