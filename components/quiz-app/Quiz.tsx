// src/components/Quiz.tsx

import React, { useState } from 'react';
import { questions, Question } from './data/questions';

const Quiz: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  const handleOptionSelect = (optionIndex: number) => {
    if (showAnswer) return; // Prevent selecting after answer is shown

    setSelectedOption(optionIndex);
    setShowAnswer(true);

    if (optionIndex === currentQuestion.correctAnswer) {
      setScore(prevScore => prevScore + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setShowAnswer(false);
    setCurrentQuestionIndex(prevIndex => prevIndex + 1);
  };

  const currentQuestion: Question = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

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
              let buttonColor = 'bg-gray-200';
              if (showAnswer) {
                if (index === currentQuestion.correctAnswer) {
                  buttonColor = 'bg-green-500 text-white';
                } else if (index === selectedOption) {
                  buttonColor = 'bg-red-500 text-white';
                }
              }

              return (
                <button
                  key={index}
                  className={`w-full text-left px-4 py-2 rounded-md border border-gray-300 focus:outline-none ${buttonColor} transition-colors duration-300`}
                  onClick={() => handleOptionSelect(index)}
                  disabled={showAnswer}
                >
                  {option}
                </button>
              );
            })}
          </div>
          {showAnswer && (
            <div className="mt-6 text-center">
              {selectedOption === currentQuestion.correctAnswer ? (
                <p className="text-green-600 font-semibold">Correct!</p>
              ) : (
                <p className="text-red-600 font-semibold">
                  Incorrect! The correct answer is "{currentQuestion.options[currentQuestion.correctAnswer]}".
                </p>
              )}
              <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
                onClick={handleNextQuestion}
              >
                {isLastQuestion ? 'See Results' : 'Next Question'}
              </button>
            </div>
          )}
        </>
      ) : (
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
