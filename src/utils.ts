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

// ---------- Payment / Paywall helpers ----------

const PAID_RESULTS_KEY = 'iq_test_paid_results';

// Generate a unique, Midtrans-safe order id for a given result
export function generateOrderId(resultId: string): string {
  return `IQ-${resultId}-${Math.random().toString(36).slice(2, 8)}`;
}

// Check (locally) whether a given result id has already been verified as paid.
// This is just a local cache to avoid asking the user to re-pay for a result
// they already unlocked in this browser; the actual payment verification
// itself always happens server-side against Midtrans (see /api/check-status).
export function isResultPaidLocally(resultId: string): boolean {
  try {
    const raw = localStorage.getItem(PAID_RESULTS_KEY);
    const paidIds: string[] = raw ? JSON.parse(raw) : [];
    return paidIds.includes(resultId);
  } catch {
    return false;
  }
}

export function markResultAsPaidLocally(resultId: string): void {
  try {
    const raw = localStorage.getItem(PAID_RESULTS_KEY);
    const paidIds: string[] = raw ? JSON.parse(raw) : [];
    if (!paidIds.includes(resultId)) {
      paidIds.push(resultId);
      localStorage.setItem(PAID_RESULTS_KEY, JSON.stringify(paidIds));
    }
  } catch {
    // ignore storage errors
  }
}
