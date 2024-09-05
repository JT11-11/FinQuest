import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loginsignup from './pages/loginsignup';
import Quizhome from './pages/quizhome'; 
import Quiz1 from './pages/Quizzes/quiz1';
import Quiz2 from './pages/Quizzes/quiz2';
import Quiz3 from './pages/Quizzes/quiz3';
import Quiz4 from './pages/Quizzes/quiz4';
import Quiz5 from './pages/Quizzes/quiz5';
import Gpt from './pages/Gpt';
import Certificate from './components/Certificate';
import Chat from './pages/Chat';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loginsignup />} />
        <Route path="/mainpage" element={<Quizhome />} />
        <Route path="/mainpage/quiz1" element={<Quiz1 />} />
        <Route path="/mainpage/quiz2" element={<Quiz2/>} />
        <Route path="/mainpage/quiz3" element={<Quiz3/>} />
        <Route path="/mainpage/quiz4" element={<Quiz4/>} />
        <Route path="/mainpage/quiz5" element={<Quiz5/>} />
        <Route path="/mainpage/TutorGPT" element={<Gpt/>}/>
        <Route path="/mainpage/certificate" element={<Certificate/>}/>
        <Route path="/mainpage/chat" element={<Chat/>}/>
      </Routes>
    </Router>
  );
}

export default App;
