import React from 'react';

const Rules = () => {
  return (
    <div className="flex flex-row gap-8 p-6 bg-gray-100 h-screen scroll-smooth" id="rules">
      <div className="flex-none w-1/3 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-lg p-6 flex items-center justify-center text-white shadow-lg">
        <h1 className="text-6xl font-bold">Rules:</h1>
      </div>
      <div className="flex-grow w-2/3 p-6">
        <ul className="space-y-4 text-lg text-gray-800">
          <li className="bg-white p-4 rounded-lg shadow-md">
            2 Levels: 1 and 2 
          </li>
          <li className="bg-white p-4 rounded-lg shadow-md">
            Each level have 2-3 quizes 
          </li>
          <li className="bg-white p-4 rounded-lg shadow-md">
            Each quiz will have 5 questions 
          </li>
          <li className="bg-white p-4 rounded-lg shadow-md">
            Each question will have 4 options with 1 being correct 
          </li>
          <li className="bg-white p-4 rounded-lg shadow-md">
           There is no time limit for the quiz
          </li>
          <li className="bg-white p-4 rounded-lg shadow-md">
            You score points for each question you answer correctly
          </li>
          <li className="bg-white p-4 rounded-lg shadow-md">
            Level 1: 2 point
          </li>
          <li className="bg-white p-4 rounded-lg shadow-md">
            Level 2: 4 point
          </li>
          <li className="bg-white p-4 rounded-lg shadow-md">
            Get 4 or 5 correct to get a certificate 
          </li>
          <li className="bg-white p-4 rounded-lg shadow-md">
            Lastly, Enjoy ~! We hope you learn something new! 
          </li>
        
          
          
        </ul>
      </div>
    </div>
  );
};

export default Rules;
