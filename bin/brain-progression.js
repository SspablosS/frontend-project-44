#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { checkAnswer, startGame } from '../src/cli.js';

const question = 'What number is missing in the progression?';

const generateProgression = () => {
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

console.log(startGame(generateProgression, question));
