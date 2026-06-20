export interface Question {
  id: number;
  category: 'logika-numerik' | 'logika-verbal' | 'penalaran-analitis' | 'pola-deret';
  categoryLabel: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  difficulty: 'mudah' | 'sedang' | 'sulit';
  explanation?: string;
}

export interface TestResult {
  id: string;
  name: string;
  age: number;
  correctCount: number;
  incorrectCount: number;
  totalQuestions: number;
  percentage: number;
  iqScore: number;
  category: string; // Kategori IQ (e.g. Di atas rata-rata / Sangat Cerdas)
  date: string;
  categoryScores?: {
    'logika-numerik': number;
    'logika-verbal': number;
    'penalaran-analitis': number;
    'pola-deret': number;
  };
}
