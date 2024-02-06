#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { randNum, checkAnswer, startGame } from '../src/cli.js';

const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const playRound = () => {
  const num = randNum(100);
  console.log(`Question: ${num}`);
  const answer = readlineSync.question('Your answer: ');

  let correctAnswer = 'no';

  if (isPrime(num)) {
    correctAnswer = 'yes';
  }

  return checkAnswer(answer, correctAnswer);
};

console.log(startGame(playRound, question));
