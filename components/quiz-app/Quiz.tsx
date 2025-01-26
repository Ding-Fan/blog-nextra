// components/quiz-app/Quiz.tsx

import React from "react";
import { Question } from "./data/questions";
import { useQuiz } from "./hooks/useQuiz";
import { QuestionCard } from "./QuestionCard";

interface QuizProps {
  questions: Question[];
}

const Quiz: React.FC<QuizProps> = ({ questions }) => {
  const {
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
  } = useQuiz(questions);

  // If we still have questions left, show the QuestionCard; otherwise show results
  const isQuizFinished = currentQuestionIndex >= questions.length;

  if (isQuizFinished) {
    return (
      <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-semibold mb-4">Quiz Completed!</h2>
        <p className="text-lg mb-6">
          Your Score: {totalScore} out of {questions.length}
        </p>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-300"
          onClick={() => window.location.reload()}
        >
          Restart Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <QuestionCard
        question={currentQuestion}
        questionIndex={currentQuestionIndex}
        totalQuestions={questions.length}
        selectedOptions={selectedOptions}
        showAnswer={showAnswer}
        showNote={showNote}
        isLastQuestion={isLastQuestion}
        questionResult={questionResults[currentQuestionIndex]}
        onOptionToggle={handleOptionToggle}
        onCheckAnswer={handleCheckAnswer}
        onNextQuestion={handleNextQuestion}
        onToggleNote={() => setShowNote((prev) => !prev)}
      />
    </div>
  );
};

export default Quiz;