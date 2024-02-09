import { randNum, checkAnswer, getAnswerInt } from '../cli.js';

const operators = ['+', '-', '*'];
const question = 'What is the result of the expression?';
const playRound = () => {
  const num1 = randNum(20);
  const num2 = randNum(20);
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const answer = getAnswerInt(`${num1} ${operator} ${num2}`);

  let correctAnswer;
  if (operator === '+') correctAnswer = num1 + num2;
  if (operator === '-') correctAnswer = num1 - num2;
  if (operator === '*') correctAnswer = num1 * num2;

  return checkAnswer(answer, correctAnswer);
};

export { playRound };
export { question };
