import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LevelHeader from '../components/LevelHeader';
import IndivQuiz from '../components/IndivQuiz';

const Level1 = () => {
  const [scores, setScores] = useState({});
  const navigate = useNavigate();

  const handleQuizCompletion = (quizName, score) => {
    setScores(prevScores => ({
      ...prevScores,
      [quizName]: score
    }));
  };

  const allQuizzesCompleted = Object.keys(scores).length === 5;
  const allQuizzesPassed = Object.values(scores).every(score => score >= 3);

  useEffect(() => {
    if (allQuizzesCompleted && allQuizzesPassed) {
      navigate('/mainpage/success');
    }
  }, [allQuizzesCompleted, allQuizzesPassed, navigate]);

  return (
    <div className="h-screen flex flex-col scroll-smooth" id="levels">
      <div className="h-1/2 bg-gray-100 p-6 flex flex-col items-center">
        <LevelHeader level="1" />
        <div className="flex flex-col items-center justify-center mt-8 gap-8">   
          <div className="flex gap-8">
            <IndivQuiz 
              quizname="Savings" 
              imagesrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFzFquTdPxUJ8qLbUq_hrkQXMr-qtjZBpE4Q&s" 
              quizLink="/mainpage/quiz1"
              score={scores["Savings"] || 0}
              onComplete={(score) => handleQuizCompletion("Savings", score)}
              completed={scores["Savings"] > 3}
            />
            <IndivQuiz 
              quizname="School Fees/Scholarships" 
              imagesrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0en5_vsk2Og7aJPy-NqwYsja6Km3AqGYaTg&s" 
              quizLink="/mainpage/quiz2"
              score={scores["School Fees/Scholarships"] || 0}
              onComplete={(score) => handleQuizCompletion("School Fees/Scholarships", score)}
              completed={scores["School Fees/Scholarships"] > 3}
            />
          </div>
        </div>
      </div>
      <div className="flex-1 bg-gray-200 p-4">
        <LevelHeader level="2" />
        <div className="flex flex-col items-center justify-center mt-8 gap-8">   
          <div className="flex gap-8">
            <IndivQuiz 
              quizname="Credit/Debit Card" 
              imagesrc="https://www.taxscan.in/wp-content/uploads/2022/09/Credit-orDebit-Cards-Online-Fraud-taxscan.jpeg" 
              quizLink="/mainpage/quiz3"
              score={scores["Credit/Debit Card"] || 0}
              onComplete={(score) => handleQuizCompletion("Credit/Debit Card", score)}
              completed={scores["Credit/Debit Card"] > 3}
            />
            <IndivQuiz 
              quizname="Cryptocurrency" 
              imagesrc="https://rates.fm/static/content/thumbs/1200x630/6/96/rd4bxt---c1200x630x50px50p--101fac02e7076c1c28fc68e5d8852966.webp" 
              quizLink="/mainpage/quiz4"
              score={scores["Cryptocurrency"] || 0}
              onComplete={(score) => handleQuizCompletion("Cryptocurrency", score)}
              completed={scores["Cryptocurrency"] > 3}
            />
            <IndivQuiz 
              quizname="Equities" 
              imagesrc="https://cdn5.vectorstock.com/i/1000x1000/59/59/equities-icon-from-investment-collection-simple-vector-35875959.jpg" 
              quizLink="/mainpage/quiz5"
              score={scores["Equities"] || 0}
              onComplete={(score) => handleQuizCompletion("Equities", score)}
              completed={scores["Equities"] > 3}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Level1;
