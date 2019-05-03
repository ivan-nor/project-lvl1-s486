import readlineSync from 'readline-sync';

export const sayHi = () => {
    const userName = readlineSync.question('May I have your name, please? ');
    console.log(`Hello, ${userName}!`);
};
