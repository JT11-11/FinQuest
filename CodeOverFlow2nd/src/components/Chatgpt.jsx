import React, { useState } from "react";
import axios from "axios";

export default function ChatGPT() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const HTTP = "http://localhost:8080/chat";  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(HTTP, { prompt });
      setResponse(res.data);  
      console.log("Prompt submitted:", prompt);
    } catch (error) {
      console.error("Error submitting prompt:", error);
    }

    setPrompt("");
  };

  const handlePrompt = (e) => {
    setPrompt(e.target.value);
  };

  return (
    <div className="container mx-auto p-4 max-w-md">
      <h1 className="text-2xl font-bold text-center text-teal-700 mb-4">
        TutorGPT
      </h1>
      <form className="bg-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Ask your question
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
            type="text"
            placeholder="Enter your text here"
            value={prompt}
            onChange={handlePrompt}
          />
        </div>
        <button
          className="w-full bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
          type="submit"
        >
          Submit
        </button>
      </form>
      <div className="bg-teal-600 text-white mt-4 p-4 rounded-lg shadow-md">
        <p className="text-lg">
          {response ? response : "Ask me anything..."}
        </p>
      </div>
    </div>
  );
}
