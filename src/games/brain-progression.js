import readlineSync from 'readline-sync';
import { checkAnswer } from '../cli.js';

const question = 'What number is missing in the progression?';

const playRound = () => {
  const start = Math.floor(Math.random() * 101);
  const difference = Math.floor(Math.random() * 11) - 5;
  const length = Math.floor(Math.random() * 6) + 5;
  const hiddenIndex = Math.floor(Math.random() * length);

  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * difference);
  }
  const correctAnswer = progression[hiddenIndex];

  progression[hiddenIndex] = '..';
  progression.join(' ');

  console.log(`Question: ${progression.join(' ')}`);
  const answer = readlineSync.questionInt('Your answer: ');

  return checkAnswer(answer, correctAnswer);
};

export { playRound };
export { question };
