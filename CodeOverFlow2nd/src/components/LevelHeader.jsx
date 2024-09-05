import React from 'react';

const LevelHeader = ({ level }) => {
  return (
    <div className="w-1/2 max-w-sm mx-auto my-4 p-6 bg-gradient-to-r from-teal-400 to-blue-500 shadow-xl rounded-lg flex items-center justify-center">
      <h1 className="font-mono text-4xl text-white font-bold">
        Level {level}
      </h1>
    </div>
  );
};

export default LevelHeader;
