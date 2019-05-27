import readlineSync from 'readline-sync';

const numberOfRounds = 3;

export default (game, condition) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name, please? ');
  console.log(`Hello, ${userName}!`);

  console.log(condition);

  const gameIter = (generateGame, round) => {
    returnif (round > numberOfRounds) {
      return console.log(`Congratulations, ${userName}!`);
    }
    const [task, calcTrueResult] = generateGame();

    console.log(`Question: ${task} ?`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (!(userAnswer === calcTrueResult)) {
      const result = `'${userAnswer}' is wrong answer ;(. Correct answer was '${calcTrueResult}'. Let's try again, ${userName}!`;
      console.log(result);
    }
    console.log('Correct!');

    return gameIter(game, round + 1);
  };

  gameIter(game, 1);
};
