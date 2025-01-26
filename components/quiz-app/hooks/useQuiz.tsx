import { useState } from "react";
import { Question } from "../data/questions";

export function useQuiz(initialQuestions: Question[]) {
  const [questions, setQuestions] = useState<Question[]>(initialQuestions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showNote, setShowNote] = useState(false);
  const [questionResults, setQuestionResults] = useState<(boolean | null)[]>(
    Array(questions.length).fill(null)
  );

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  const handleOptionToggle = (optionIndex: number) => {
    if (showAnswer) return;
    setSelectedOptions((prevSelected) =>
      prevSelected.includes(optionIndex)
        ? prevSelected.filter((idx) => idx !== optionIndex)
        : [...prevSelected, optionIndex]
    );
  };

  const handleCheckAnswer = () => {
    setShowAnswer(true);
    const correctAnswersSorted = [...currentQuestion.correctAnswers].sort();
    const selectedOptionsSorted = [...selectedOptions].sort();

    const isCorrect =
      correctAnswersSorted.length === selectedOptionsSorted.length &&
      correctAnswersSorted.every(
        (val, index) => val === selectedOptionsSorted[index]
      );

    setQuestionResults((prev) => {
      const updated = [...prev];
      updated[currentQuestionIndex] = isCorrect;
      return updated;
    });
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    setSelectedOptions([]);
    setShowAnswer(false);
    setShowNote(false);
  };

  // Helper to reset everything, optionally with a new question list
  function resetQuiz(newQuestions: Question[] = questions) {
    setQuestions(newQuestions);
    setCurrentQuestionIndex(0);
    setSelectedOptions([]);
    setShowAnswer(false);
    setShowNote(false);
    setQuestionResults(Array(newQuestions.length).fill(null));
  }

  // Derived data
  const totalScore = questionResults.filter((res) => res === true).length;

  // Return everything your component needs
  return {
    questions,
    currentQuestionIndex,
    currentQuestion: questions[currentQuestionIndex],
    questionResults,
    selectedOptions,
    showAnswer,
    showNote,
    totalScore,
    isLastQuestion: currentQuestionIndex === questions.length - 1,

    setShowNote,
    handleOptionToggle,
    handleCheckAnswer,
    handleNextQuestion,
    // Expose resetQuiz
    resetQuiz,
  };
}
