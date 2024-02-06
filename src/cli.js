import readlineSync from 'readline-sync';

const greeting = (name) => {
  console.log(`Hello ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
};

const randNum = () => Math.floor(Math.random() * 100);

const askName = () => readlineSync.question('May I have your name?: ');

export { greeting };
export { randNum };
export { askName };
