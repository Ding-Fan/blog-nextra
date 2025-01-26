import React from "react";
import { Question } from "./data/questions";

interface QuestionCardProps {
  question: Question;
  questionIndex: number;
  totalQuestions: number;
  selectedOptions: number[];
  showAnswer: boolean;
  showNote: boolean;
  isLastQuestion: boolean;
  questionResult: boolean | null;
  onOptionToggle: (optionIndex: number) => void;
  onCheckAnswer: () => void;
  onNextQuestion: () => void;
  onToggleNote: () => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  questionIndex,
  totalQuestions,
  selectedOptions,
  showAnswer,
  showNote,
  isLastQuestion,
  questionResult,
  onOptionToggle,
  onCheckAnswer,
  onNextQuestion,
  onToggleNote,
}) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">
        Question {questionIndex + 1} of {totalQuestions}
      </h2>
      <p className="text-lg mb-6">{question.question}</p>

      <div className="space-y-4">
        {question.options.map((option, idx) => {
          let buttonColor = "bg-gray-200";

          if (showAnswer) {
            const isCorrect = question.correctAnswers.includes(idx);
            const isSelected = selectedOptions.includes(idx);

            if (isCorrect && isSelected) {
              buttonColor = "bg-green-500 text-white";
            } else if (isCorrect && !isSelected) {
              buttonColor = "bg-green-200";
            } else if (!isCorrect && isSelected) {
              buttonColor = "bg-red-500 text-white";
            }
          } else {
            if (selectedOptions.includes(idx)) {
              buttonColor = "bg-blue-300";
            }
          }

          return (
            <button
              key={idx}
              className={`w-full text-left px-4 py-2 rounded-md border border-gray-300 
                focus:outline-none transition-colors duration-300 ${buttonColor}`}
              onClick={() => onOptionToggle(idx)}
              disabled={showAnswer}
            >
              {idx + 1}. {option}
            </button>
          );
        })}
      </div>

      {showAnswer ? (
        <div className="mt-6 text-center">
          {questionResult !== null && (
            <>
              {questionResult ? (
                <p className="text-green-600 font-semibold">Correct!</p>
              ) : (
                <p className="text-red-600 font-semibold">
                  Check the green highlights for the correct answers.
                </p>
              )}
            </>
          )}

          <button
            className="mt-2 text-blue-500 underline focus:outline-none block"
            onClick={onToggleNote}
            aria-expanded={showNote}
            aria-controls={`explanation-${question.id}`}
          >
            {showNote ? "Hide Explanation" : "Show Explanation"}
          </button>

          {showNote && (
            <div
              id={`explanation-${question.id}`}
              className="mt-4 text-left bg-gray-100 p-4 rounded-md shadow-inner"
            >
              <h3 className="font-semibold mb-2 text-lg">Explanation:</h3>
              <p className="text-gray-700 text-base">{question.note}</p>
            </div>
          )}

          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
            onClick={onNextQuestion}
          >
            {isLastQuestion ? "See Results" : "Next Question"}
          </button>
        </div>
      ) : (
        <div className="mt-6 text-center">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
            onClick={onCheckAnswer}
          >
            Check Answer
          </button>
        </div>
      )}
    </div>
  );
};