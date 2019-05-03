import readlineSync from 'readline-sync';

const sayHi = () => {
  const userName = readlineSync.question('May I have your name, please? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const askEven = () => {
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};

const welcome = () => {
  console.log('Welcome to the Brain Games!', 'Answer "yes" if number even otherwise answer "no"');
};

export { sayHi, askEven, welcome };
