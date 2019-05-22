import readlineSync from 'readline-sync';

const welcome = () => console.log('Welcome to the Brain Games!');

const askName = () => {
  const userName = readlineSync.question('May I have your name, please? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const getRandomNumber = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomOperation = (length = 4) => {
  const arr = ['+', '-', '*', '/'];
  const operations = arr.slice(0, length);
  const random = getRandomNumber(0, length - 1);
  return operations[random];
};

const askQuestion = item => console.log(`Question: ${item} ?`);

const askAnswer = () => readlineSync.question('Your answer: ');

const equalAnswer = (userAnswer, isTrue) => userAnswer === isTrue;

const correctAnswer = () => console.log('Correct!');

const oops = (userName, userAnswer, isRight) => console.log(
  `'${userAnswer}' is wrong answer ;(. Correct answer was '${isRight}'. Let's try again, ${userName}!`,
);

const congratulations = userName => console.log(`Congratulations, ${userName}!`);

const endGame = () => process.exit();

export {
  welcome, askName, askAnswer, getRandomNumber, getRandomOperation,
  askQuestion, equalAnswer, correctAnswer, oops, congratulations, endGame,
};
