import readlineSync from 'readline-sync';

const greeting = (name) => {
  console.log(`Hello ${name}!`);
};

const randNum = (maxNum) => Math.floor(Math.random() * maxNum);

const askName = () => readlineSync.question('May I have your name?: ');

const checkAnswer = (answer, correctAnswer) => {
  if (answer === correctAnswer) {
    console.log('Correct!');
    return true;
  }

  console.log(
    `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
  );

  return false;
};

const startGame = (round) => {
  console.log('Welcome to the Brain Games!');
  const name = askName();
  greeting(name);
  console.log('Answer "yes" if the number is even, otherwise answer "no"');

  for (let i = 0; i < 3; i += 1) {
    if (!round(name)) {
      return `Let's try again, ${name}`;
    }
  }

  console.log(`Congradulations, ${name}`);
  return true;
};

export { greeting };
export { randNum };
export { askName };
export { checkAnswer };
export { startGame };
