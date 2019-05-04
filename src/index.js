import readlineSync from 'readline-sync';

// спросить имя отдать имя
const askName = () => {
  console.log('call ask name');
  const userName = readlineSync.question('May I have your name, please? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

// спросить ответ отдать ответ
const askAnswer = () => {
  console.log('call ask answer');
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};

// приветствие
const welcome = () => {
  console.log('call welcome');
  console.log('Welcome to the Brain Even Games!');
};

// генерация случайного числа
const getRandomNumber = (min = 0, max = 100000) => {
  console.log('call random number');
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  rand = Math.round(rand);
  return rand;
};

// поздравление
const congratulations = (userName) => {
  console.log('call congrats');
  console.log(`Congratulations, ${userName}!`);
};

// проигрыш
const oops = (userName, userAnswer, isEven) => console.log(
  `'${userAnswer}' is wrong answer ;(. Correct answer was '${isEven}'. Let's try again, ${userName}!`,
);

// конец игры и выход из программы
const endGame = () => {
  console.log('call end game');
  process.exit();
};

// проверка на четность и отдача ответа в строковом виде
const getEven = (number) => {
  console.log('call is even number');
  return number % 2 === 0 ? 'yes' : 'no';
};

// Задать вопрос
const askQuestion = number => `Question: ${number}`;

// проверка на праивльный ответ пользователя
const equalAnswer = (userAnswer, isEven) => userAnswer === isEven;

const conditionsGamesEven = () => {
  console.log('Answer "yes" if number even otherwise answer "no"');
};

const correctAnswer = () => console.log('Correct!');

export {
  askName, askAnswer, welcome, getRandomNumber, congratulations, oops,
  endGame, getEven, askQuestion, equalAnswer, conditionsGamesEven,
  correctAnswer,
};
