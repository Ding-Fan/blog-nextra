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
    // state
    currentQuestionIndex,
    currentQuestion,
    questionResults,
    totalScore,
    isLastQuestion,
    showAnswer,
    showNote,
    selectedOptions,

    // actions
    setShowNote,
    handleOptionToggle,
    handleCheckAnswer,
    handleNextQuestion,
    resetQuiz,
  } = useQuiz(questions);

  // We consider the quiz "finished" when currentQuestionIndex >= questions.length
  const isQuizFinished = currentQuestionIndex >= questionResults.length;

  // Build a list of missed questions (based on false answers in questionResults)
  const missedQuestionIndices = questionResults
    .map((res, idx) => (res === false ? idx : -1))
    .filter((index) => index !== -1);

  const missedQuestions: Question[] = missedQuestionIndices.map(
    (idx) => questions[idx]
  );

  // "Restart Quiz" => always pass the original questions
  const handleRestartQuiz = () => {
    resetQuiz(questions);
  };

  // "Redo Missed" => pass the missedQuestions subset
  const handleRedoMissed = () => {
    resetQuiz(missedQuestions);
  };

  if (isQuizFinished) {
    return (
      <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-semibold mb-4">Quiz Completed!</h2>
        <p className="text-lg mb-6">
          Your Score: {totalScore} out of {questionResults.length}
        </p>

        <div className="space-x-2">
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-300"
            onClick={() => handleRestartQuiz()}
          >
            Restart Quiz
          </button>

          {/* Only show "Redo Missed" if the user has any missed questions */}
          {missedQuestionIndices.length > 0 && (
            <button
              className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors duration-300"
              onClick={handleRedoMissed}
            >
              Redo Missed Questions
            </button>
          )}
        </div>
      </div>
    );
  }

  // If not finished, show the current question
  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <QuestionCard
        question={currentQuestion}
        questionIndex={currentQuestionIndex}
        totalQuestions={questionResults.length}
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