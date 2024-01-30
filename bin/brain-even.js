#!/usr/bin/env node

import readlineSync from 'readline-sync';

const randNum = () => Math.floor(Math.random() * 100);

const evenGame = () => {
  const name = readlineSync.question('May I have your name?: ');

  console.log(`Hello ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no"');

  for (let i = 0; i < 3; i += 1) {
    let verification = '';
    const num = randNum();

    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');

    if (num % 2 === 0) verification = 'yes';
    else verification = 'no';

    if (answer === verification) {
      console.log('Correct!');
    } else {
      return `'${answer}' is wrong answer ;(.Correct answer was '${verification}'.\nLet's try again, ${name}!`;
    }
  }
  return `Congratulations, ${name}`;
};

console.log(evenGame());
