import React, { useState } from "react";
import { db } from "../firebase/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const SendMessage = () => {
  const [message, setMessage] = useState("");

  const sendMessage = async (event) => {
    event.preventDefault();
    if (message.trim() === "") {
      alert("Enter a valid message");
      return;
    }
    await addDoc(collection(db, "messages"), {
      text: message,
      name: "Anonymous",
      createdAt: serverTimestamp(),
    });
    setMessage("");
  };

  return (
    <form
      onSubmit={(event) => sendMessage(event)}
      className="flex items-center p-4 bg-white shadow-lg rounded-lg"
    >
      <label htmlFor="messageInput" hidden>
        Enter Message
      </label>
      <input
        id="messageInput"
        name="messageInput"
        type="text"
        className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        type="submit"
        className="ml-4 px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-500 transition duration-300 ease-in-out"
      >
        Send
      </button>
    </form>
  );
};

export default SendMessage;
