import React from 'react';
import Navbar from './navbar';

const Certificate = () => {
  const downloadCertificate = () => {
    const link = document.createElement('a');
    link.href = 'https://cdn-icons-png.freepik.com/512/8993/8993949.png'; 
    link.download = 'certificate.png'; 
    link.click(); 
  };

  return (
    <>
    <Navbar/>
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-4">Congrats!</h1>
      <h3 className="text-lg text-center mb-6">Here is your Certificate!</h3>
      <div className="flex justify-center mb-4">
        <img 
          src="https://cdn-icons-png.freepik.com/512/8993/8993949.png" 
          alt="Certificate" 
          className="w-48 h-48 object-cover"
        />
      </div>
      <div className="text-center">
        <button 
          onClick={downloadCertificate}
          className="bg-teal-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
        >
          Download it here!
        </button>
      </div>
    </div>
    </>
  );
};

export default Certificate;



