#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { randNum, checkAnswer, startGame } from '../src/cli.js';

const question = 'Answer "yes" if the number is even, otherwise answer "no".';
const playRound = () => {
  const num = randNum(100);
  console.log(`Question: ${num}`);
  const answer = readlineSync.question('Your answer: ');

  let correctAnswer;
  if (num % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }

  return checkAnswer(answer, correctAnswer);
};

startGame(playRound, question);
