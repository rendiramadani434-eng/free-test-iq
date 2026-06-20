import { Question, TestResult } from './types';

// Standard Fisher-Yates element shuffler
export function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Prepare questions for 100-q test: map, shuffle options, update index, shuffle questions
export function prepareQuestions(rawQuestions: Question[], randomize: boolean): Question[] {
  // First, map and shuffle options for EACH question
  let prepared = rawQuestions.map(q => {
    const originalCorrectOption = q.options[q.correctAnswerIndex];
    const shuffledOptions = shuffleArray(q.options);
    const newCorrectAnswerIndex = shuffledOptions.indexOf(originalCorrectOption);
    
    return {
      ...q,
      options: shuffledOptions,
      correctAnswerIndex: newCorrectAnswerIndex
    };
  });

  // Then, if randomize is true, shuffle the entire questions list
  if (randomize) {
    prepared = shuffleArray(prepared);
  }

  return prepared;
}

// Convert correctCount to IQ Score based on the requested guidelines
export function calculateIQ(correctCount: number): { score: number; label: string } {
  let score = 70;
  
  if (correctCount <= 20) {
    // 0-20 maps to 70-85
    // Range is 15 points
    score = 70 + Math.round((correctCount / 20) * 15);
  } else if (correctCount <= 40) {
    // 21-40 maps to 86-95
    // Range is 9 points
    score = 86 + Math.round(((correctCount - 21) / 19) * 9);
  } else if (correctCount <= 60) {
    // 41-60 maps to 96-105
    // Range is 9 points
    score = 96 + Math.round(((correctCount - 41) / 19) * 9);
  } else if (correctCount <= 80) {
    // 61-80 maps to 106-120
    // Range is 14 points
    score = 106 + Math.round(((correctCount - 61) / 19) * 14);
  } else {
    // 81-100 maps to 121-145
    // Range is 24 points
    score = 121 + Math.round(((correctCount - 81) / 19) * 24);
  }

  // Bracket label mapping
  let label = 'Rata-rata';
  if (score < 85) {
    label = 'Di bawah rata-rata';
  } else if (score <= 100) {
    label = 'Rata-rata';
  } else if (score <= 115) {
    label = 'Di atas rata-rata';
  } else if (score <= 130) {
    label = 'Cerdas';
  } else {
    label = 'Sangat Cerdas';
  }

  return { score, label };
}
