import { randNum, checkAnswer, getAnswerInt } from '../cli.js';

const question = 'Find the greatest common divisor of given numbers.';

const playRound = () => {
  const num1 = randNum(20);
  const num2 = randNum(20);
  const answer = getAnswerInt(`${num1} ${num2}`);

  let correctAnswer = Math.max(num1, num2);
  for (let i = 1; i <= Math.min(num1, num2); i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      correctAnswer = i;
    }
  }

  return checkAnswer(answer, correctAnswer);
};

export { playRound };
export { question };
