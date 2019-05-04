import readlineSync from 'readline-sync';

// спросить имя отдать имя
const askName = () => {
  const userName = readlineSync.question('May I have your name, please? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const askAnswer = () => {
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};

const welcome = () => {
  console.log('Welcome to the Brain Games!');
};

const getRandomNumber = (min = 0, max = 100) => {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  rand = Math.round(rand);
  return rand;
};

const congratulations = (userName) => {
  console.log(`Congratulations, ${userName}!`);
};

const endGame = () => {
  process.exit();
};

const askQuestion = item => console.log(`Question: ${item}`);

const equalAnswer = (userAnswer, isEven) => userAnswer === isEven;

const correctAnswer = () => console.log('Correct!');

export {
  askName, askAnswer, welcome, getRandomNumber, congratulations,
  endGame, askQuestion, equalAnswer, correctAnswer,
};
