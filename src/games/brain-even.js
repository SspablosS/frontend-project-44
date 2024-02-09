import { randNum, checkAnswer, getAnswerString } from '../cli.js';

const question = 'Answer "yes" if the number is even, otherwise answer "no".';
const playRound = () => {
  const num = randNum(100);
  const answer = getAnswerString(num);

  let correctAnswer;
  if (num % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }

  return checkAnswer(answer, correctAnswer);
};

export { playRound };
export { question };
