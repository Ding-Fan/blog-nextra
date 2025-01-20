// components/quiz-app/Quiz.tsx

import React, { useState } from "react";
import { Question } from "./data/questions";

interface QuizProps {
  questions: Question[];
}

const Quiz: React.FC<QuizProps> = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [showNote, setShowNote] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  const currentQuestion: Question = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  /**
   * Toggle selection of an option index (for multi-select).
   */
  const handleOptionToggle = (optionIndex: number) => {
    if (showAnswer) return; // once answer is shown, don't allow changes

    setSelectedOptions((prevSelected) => {
      if (prevSelected.includes(optionIndex)) {
        // If already selected, remove it
        return prevSelected.filter((idx) => idx !== optionIndex);
      } else {
        // Otherwise add it
        return [...prevSelected, optionIndex];
      }
    });
  };

  /**
   * When the user is done selecting, show the answer
   */
  const handleCheckAnswer = () => {
    setShowAnswer(true);

    // Check if selectedOptions fully matches correctAnswers (all or nothing).
    // Sort them, then compare arrays for equality
    const correctAnswersSorted = [...currentQuestion.correctAnswers].sort();
    const selectedOptionsSorted = [...selectedOptions].sort();

    if (
      correctAnswersSorted.length === selectedOptionsSorted.length &&
      correctAnswersSorted.every(
        (val, index) => val === selectedOptionsSorted[index]
      )
    ) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  /**
   * Move to next question
   */
  const handleNextQuestion = () => {
    setSelectedOptions([]);
    setShowAnswer(false);
    setShowNote(false);
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      {currentQuestionIndex < questions.length ? (
        <>
          <h2 className="text-xl font-semibold mb-4">
            Question {currentQuestionIndex + 1} of {questions.length}
          </h2>
          <p className="text-lg mb-6">{currentQuestion.question}</p>

          <div className="space-y-4">
            {currentQuestion.options.map((option, index) => {
              // Determine the button color based on selection and correctness
              let buttonColor = "bg-gray-200";

              if (showAnswer) {
                const isCorrect = currentQuestion.correctAnswers.includes(index);
                const isSelected = selectedOptions.includes(index);

                if (isCorrect && isSelected) {
                  // Correct and selected -> green
                  buttonColor = "bg-green-500 text-white";
                } else if (isCorrect && !isSelected) {
                  // Correct but not selected -> highlight in some way
                  buttonColor = "bg-green-200";
                } else if (!isCorrect && isSelected) {
                  // Selected but not correct -> red
                  buttonColor = "bg-red-500 text-white";
                }
              } else {
                // If we haven't shown the answer yet, just highlight selected
                if (selectedOptions.includes(index)) {
                  buttonColor = "bg-blue-300";
                }
              }

              return (
                <button
                  key={index}
                  className={`w-full text-left px-4 py-2 rounded-md border border-gray-300
                              focus:outline-none transition-colors duration-300 ${buttonColor}`}
                  onClick={() => handleOptionToggle(index)}
                  disabled={showAnswer}
                >
                  {index + 1}. {option}
                </button>
              );
            })}
          </div>

          {showAnswer ? (
            <div className="mt-6 text-center">
              {/* Correctness message */}
              {selectedOptions.length > 0 && (
                <>
                  {/* If you want a single message "Correct!" or "Incorrect!",
                      you can keep the logic from handleCheckAnswer, or do partial scoring, etc. */}
                  {/* Example: We already updated the score if it's correct, so just show a quick message */}
                  {score > 0 && currentQuestionIndex + 1 === score ? (
                    <p className="text-green-600 font-semibold">Correct!</p>
                  ) : (
                    <p className="text-red-600 font-semibold">
                      Check the green highlights for the correct answers.
                    </p>
                  )}
                </>
              )}

              {/* Toggle Explanation Button */}
              <button
                className="mt-2 text-blue-500 underline focus:outline-none block"
                onClick={() => setShowNote((prev) => !prev)}
                aria-expanded={showNote}
                aria-controls={`explanation-${currentQuestion.id}`}
              >
                {showNote ? "Hide Explanation" : "Show Explanation"}
              </button>

              {/* Explanation Note */}
              {showNote && (
                <div
                  id={`explanation-${currentQuestion.id}`}
                  className="mt-4 text-left bg-gray-100 p-4 rounded-md shadow-inner animate-fadeIn"
                >
                  <h3 className="font-semibold mb-2 text-lg">Explanation:</h3>
                  <p className="text-gray-700 text-base">{currentQuestion.note}</p>
                </div>
              )}

              {/* Next Question or See Results */}
              <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
                onClick={handleNextQuestion}
              >
                {isLastQuestion ? "See Results" : "Next Question"}
              </button>
            </div>
          ) : (
            <div className="mt-6 text-center">
              {/* Check Answer button */}
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
                onClick={handleCheckAnswer}
              >
                Check Answer
              </button>
            </div>
          )}
        </>
      ) : (
        // Quiz completed
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Quiz Completed!</h2>
          <p className="text-lg mb-6">
            Your Score: {score} out of {questions.length}
          </p>
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-300"
            onClick={() => window.location.reload()}
          >
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;