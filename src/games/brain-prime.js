import { randNum, checkAnswer, getAnswerString } from '../cli.js';

const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const playRound = () => {
  const num = randNum(100);
  const answer = getAnswerString(num);

  let correctAnswer = 'no';

  if (isPrime(num)) {
    correctAnswer = 'yes';
  }

  return checkAnswer(answer, correctAnswer);
};

export { playRound };
export { question };
