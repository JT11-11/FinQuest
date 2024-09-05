import React from 'react';
import SubQuizPage from '../../components/SubQuizPage';
import { questions1 } from '../../Questions/Quiz1';

const Quiz1 = () => {
  return (
    <SubQuizPage questions={questions1} />
  );
}

export default Quiz1;
