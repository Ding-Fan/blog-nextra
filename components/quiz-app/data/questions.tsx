// src/data/questions.ts

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // Index of the correct option (0-3)
  note: string; // Explanation for the question
}


export const questions: Question[] = [
  {
    id: 1,
    question: 'What is the capital of France?',
    options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
    correctAnswer: 2,
    note: 'Paris has been France\'s capital since 508 AD and is renowned for its art, fashion, and culture.',
  },
  {
    id: 2,
    question: 'Who wrote "Hamlet"?',
    options: ['Charles Dickens', 'William Shakespeare', 'Mark Twain', 'Jane Austen'],
    correctAnswer: 1,
    note: '"Hamlet" is one of William Shakespeare\'s most famous tragedies, exploring themes of revenge and madness.',
  },
  {
    id: 3,
    question: 'What is the chemical symbol for water?',
    options: ['H2O', 'O2', 'CO2', 'NaCl'],
    correctAnswer: 0,
    note: 'Water is composed of two hydrogen atoms bonded to one oxygen atom, hence H₂O.',
  },
  // Add more questions as needed
];

