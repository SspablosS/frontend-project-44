#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { randNum, checkAnswer, startGame } from '../src/cli.js';

const operators = ['+', '-', '*'];
const question = 'What is the result of the expression?';
const playRound = () => {
  const num1 = randNum(20);
  const num2 = randNum(20);
  const operator = operators[Math.floor(Math.random() * operators.length)];
  console.log(`Question: ${num1} ${operator} ${num2}`);
  const answer = readlineSync.questionInt('Your answer: ');

  let correctAnswer;
  if (operator === '+') correctAnswer = num1 + num2;
  if (operator === '-') correctAnswer = num1 - num2;
  if (operator === '*') correctAnswer = num1 * num2;

  return checkAnswer(answer, correctAnswer);
};

console.log(startGame(playRound, question));
