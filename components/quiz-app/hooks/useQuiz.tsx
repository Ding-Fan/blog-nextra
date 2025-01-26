import { useState } from "react";
import { Question } from "../data/questions";

export function useQuiz(questions: Question[]) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [showNote, setShowNote] = useState<boolean>(false);
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
    setSelectedOptions([]);
    setShowAnswer(false);
    setShowNote(false);
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const totalScore = questionResults.filter((res) => res === true).length;

  return {
    questions,
    currentQuestionIndex,
    currentQuestion,
    questionResults,
    selectedOptions,
    showAnswer,
    showNote,
    isLastQuestion,
    totalScore,
    setShowNote,
    handleOptionToggle,
    handleCheckAnswer,
    handleNextQuestion,
  };
}