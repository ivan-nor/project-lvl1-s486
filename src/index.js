import readlineSync from 'readline-sync';

export default (funcGame) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name, please? ');
  console.log(`Hello, ${userName}!`);

  const [, , condition] = funcGame();
  console.log(condition);
  const gameIter = (parameter, round, lastRound) => {
    const [task, calcTrueResult] = parameter;
    if (round > lastRound) {
      return console.log(`Congratulations, ${userName}!`);
    }
    console.log(`Question: ${task} ?`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (!(userAnswer === calcTrueResult)) {
      return `'${userAnswer}' is wrong answer ;(. Correct answer was '${calcTrueResult}'. Let's try again, ${userName}!`;
    }
    console.log('Correct!');
    return gameIter(funcGame(), round + 1, lastRound);
  };
  return gameIter(funcGame(), 1, 3);
};
