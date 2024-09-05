import React from "react";

const Message = ({ message }) => {
  return (
    <div className={`flex items-start mb-4`}>
      <div className="mr-4">
        <img
          src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
          alt=" Avatar"
          className="w-10 h-10 rounded-full"
        />
      </div>
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <p className="text-sm font-semibold text-gray-800 mb-1">{message.name}</p>
         <p className="text-sm text-gray-700">{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
