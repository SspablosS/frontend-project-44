#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { randNum, checkAnswer, startGame } from '../src/cli.js';

const question = 'Find the greatest common divisor of given numbers.';

const playRound = () => {
  const num1 = randNum(20);
  const num2 = randNum(20);
  console.log(`Question: ${num1} ${num2}`);
  const answer = readlineSync.questionInt('Your answer: ');

  let correctAnswer = 1;
  for (let i = 1; i <= Math.min(num1, num2); i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      correctAnswer = i;
    }
  }

  return checkAnswer(answer, correctAnswer);
};

startGame(playRound, question);
