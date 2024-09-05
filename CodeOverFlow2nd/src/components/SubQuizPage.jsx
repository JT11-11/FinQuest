import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SubQuizPage.css'; 

const SubQuizPage = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [score, setScore] = useState(0);
  const navigate = useNavigate(); 

  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionClick = (optionNumber) => {
    if (isAnswerChecked) return; 
    setSelectedOption(optionNumber);

    const isCorrect = optionNumber === currentQuestion.answer;
    if (isCorrect) {
      setScore(score + 1);
    }

    setIsAnswerChecked(true);
  };

  const handleNext = () => {
    if (selectedOption === null) return; 

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsAnswerChecked(false);
    } else {
      if (score > 3) {
        navigate('/mainpage/certificate');
      } else {
        alert(`You did not pass. Your score: ${score}/${questions.length}. Please try again.`);
        navigate('/mainpage');
      }
    }
  };

  const getButtonClass = (optionNumber) => {
    const isCorrect = optionNumber === currentQuestion.answer;
    const isSelected = selectedOption === optionNumber;

    return `
      button
      ${isAnswerChecked && isCorrect ? 'button-correct' : ''}
      ${isAnswerChecked && isSelected && !isCorrect ? 'button-incorrect' : ''}
      ${isAnswerChecked ? 'button-disabled' : ''}
    `;
  };

  return (
    <div className="quiz-container">
      <div className="quiz-box">
        <h1 className="question-text">{currentQuestion.question}</h1>
        <div className="options-container">
          {[1, 2, 3, 4].map((optionNumber) => (
            <button
              key={optionNumber}
              onClick={() => handleOptionClick(optionNumber)}
              className={getButtonClass(optionNumber)}
              disabled={isAnswerChecked}
            >
              {currentQuestion[`option${optionNumber}`]}
            </button>
          ))}
        </div>
        
        <div className="remaining-questions">
          {questions.length - (currentQuestionIndex + 1)} of {questions.length} questions left
        </div>
        
        <div className="next-button-container">
          <button 
            onClick={handleNext}
            className="next-button"
          >
            {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubQuizPage;
