#!/usr/bin/env node

import readlineSync from 'readline-sync';

const randNum = () => Math.floor(Math.random() * 20);

const addition = (a, b) => a + b;

const subtraction = (a, b) => a - b;

const multiplication = (a, b) => a * b;

const operators = ['+', '-', '*'];

const calcGame = () => {
  const name = readlineSync.question('May I have your name?: ');

  console.log(`Hello ${name}!`);
  console.log('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
    let verification = 0;
    const operator = operators[Math.floor(Math.random() * operators.length)];
    const num1 = randNum();
    const num2 = randNum();

    console.log(`Question: ${num1} ${operator} ${num2}`);
    const answer = readlineSync.questionInt('Your answer: ');

    if (operator === '+') verification = addition(num1, num2);
    if (operator === '-') verification = subtraction(num1, num2);
    if (operator === '*') verification = multiplication(num1, num2);

    if (answer === verification) {
      console.log('Correct!');
    } else {
      return `'${answer}' is wrong answer ;(.Correct answer was '${verification}'.\nLet's try again, ${name}!`;
    }
  }
  return `Congratulations, ${name}`;
};

console.log(calcGame());
