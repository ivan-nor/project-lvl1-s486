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

const getRandomNumber = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

const congratulations = (userName) => {
  console.log(`Congratulations, ${userName}!`);
};

const endGame = () => {
  process.exit();
};

const askQuestion = item => console.log(`Question: ${item} ?`);

const equalAnswer = (userAnswer, isTrue) => userAnswer === isTrue;

const correctAnswer = () => console.log('Correct!');

const getRandomOperation = (length = 4) => {
  const arr = ['+', '-', '*', '/'];
  const operations = arr.slice(0, length);
  const random = getRandomNumber(0, length - 1);
  return operations[random];
};

const oops = (userName, userAnswer, isRight) => console.log(
  `'${userAnswer}' is wrong answer ;(. Correct answer was '${isRight}'. Let's try again, ${userName}!`,
);

const play = (funcGame) => {
  console.log('start development');
  welcome();
  const userName = askName();
  const gameIter = (parameter, round) => {
    const {
      user, task, calcTrueResult, condition,
    } = parameter;
    console.log('calc true result -> ', calcTrueResult);
    condition();
    if (round > 3) {
      congratulations(user);
      endGame();
    }
    askQuestion(task);
    const userAnswer = askAnswer();

    if (!equalAnswer(userAnswer, calcTrueResult)) {
      oops(user, userAnswer, calcTrueResult);
      endGame();
    }
    correctAnswer();
    return gameIter(funcGame(user), round + 1);
  };
  return gameIter(funcGame(userName), 1);
};

export {
  welcome, getRandomNumber, getRandomOperation, play,
};
