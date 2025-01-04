// src/data/questions.ts

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // Index of the correct option (0-3)
}

export const questions: Question[] = [
  {
    id: 1,
    question: 'What is the capital of France?',
    options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
    correctAnswer: 2,
  },
  {
    id: 2,
    question: 'Who wrote "Hamlet"?',
    options: ['Charles Dickens', 'William Shakespeare', 'Mark Twain', 'Jane Austen'],
    correctAnswer: 1,
  },
  {
    id: 3,
    question: 'What is the chemical symbol for water?',
    options: ['H2O', 'O2', 'CO2', 'NaCl'],
    correctAnswer: 0,
  },
  // Add more questions as needed
];
