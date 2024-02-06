#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { greeting, randNum, askName } from '../src/cli.js';

const playRound = () => {
  const num = randNum();
  console.log(`Question: ${num}`);
  const answer = readlineSync.question('Your answer: ');

  let correctAnswer;
  if (num % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }

  if (answer === correctAnswer) {
    console.log('Correct!');
    return true;
  }

  console.log(
    `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
  );

  return false;
};

const evenGame = () => {
  const name = askName();
  greeting(name);

  for (let i = 0; i < 3; i += 1) {
    if (!playRound(name)) {
      return `Let's try again, ${name}`;
    }
  }

  return `Congradulations, ${name}`;
};

console.log(evenGame());
