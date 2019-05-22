import {
  welcome, askName, askAnswer, askQuestion, equalAnswer,
  correctAnswer, oops, congratulations, endGame,
} from './utils';


export default (funcGame) => {
  welcome();
  const userName = askName();
  const [, , condition] = funcGame();
  console.log(condition);
  const gameIter = (parameter, round) => {
    const [task, calcTrueResult] = parameter;
    if (round > 3) {
      congratulations(userName);
      endGame();
    }
    askQuestion(task);
    const userAnswer = askAnswer();

    if (!equalAnswer(userAnswer, calcTrueResult)) {
      oops(userName, userAnswer, calcTrueResult);
      endGame();
    }
    correctAnswer();
    return gameIter(funcGame(), round + 1);
  };
  return gameIter(funcGame(), 1);
};
