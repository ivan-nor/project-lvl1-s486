import readlineSync from 'readline-sync';

const sayHi = () => {
  const userName = readlineSync.question('May I have your name, please? ');
  console.log(`Hello, ${userName}!`);
};

export default sayHi;
