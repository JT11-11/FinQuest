import React from 'react';
import { useNavigate } from 'react-router-dom';

const IndivQuiz = ({ quizname, imagesrc, quizLink, score, onComplete, completed }) => {
  const navigate = useNavigate();

  const handleQuizClick = () => {
    if (!completed) {
      navigate(quizLink);
    }
  };

  const handleQuizCompletion = (event) => {
    event.stopPropagation(); 
    if (score >= 3) {
      onComplete(score);
    }
  };

  return (
    <div 
      onClick={handleQuizClick} 
      className={`w-56 h-56 bg-gradient-to-r from-teal-300 to-blue-400 flex flex-col items-center justify-center p-4 shadow-md rounded-lg relative cursor-pointer ${completed ? 'blur-sm' : ''}`}
    >
      {completed && (
        <div className="absolute inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center rounded-lg">
          <h2 className="text-white text-xl font-bold">Completed</h2>
        </div>
      )}
      <h1 className={`text-lg font-semibold text-white mb-3 ${completed ? 'opacity-50' : ''}`}>{quizname}</h1>
      <img 
        src={imagesrc} 
        alt={quizname} 
        className={`w-24 h-24 mb-3 shadow-md rounded-lg ${completed ? 'opacity-50' : ''}`}
      />
    </div>
  );
};

export default IndivQuiz;
