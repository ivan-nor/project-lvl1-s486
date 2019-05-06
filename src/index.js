import readlineSync from 'readline-sync';

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

const askQuestion = item => console.log(`Question: ${item} ?`);

const equalAnswer = (userAnswer, isTrue) => userAnswer === isTrue;

const correctAnswer = () => console.log('Correct!');

const getRandomOperation = (begin, end) => {
  const randomOperation = getRandomNumber(begin, end);
  let result = '';
  switch (randomOperation) {
    case 1:
      result = '+';
      break;
    case 2:
      result = '-';
      break;
    case 3:
      result = '*';
      break;
    case 4:
      result = '/';
      break;
    default:
      console.log('default');
  }
  return result;
};

const oops = (userName, userAnswer, isRight) => console.log(
  `'${userAnswer}' is wrong answer ;(. Correct answer was '${isRight}'. Let's try again, ${userName}!`,
);

export {
  askName, askAnswer, welcome, getRandomNumber, congratulations, oops,
  endGame, askQuestion, equalAnswer, correctAnswer, getRandomOperation,
};
