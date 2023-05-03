import readlineSync from "readline-sync";
import greetUser from "./cli.js";

const playGame = (gameDescription, getQuestionAndAnswer) => {
  const name = greetUser();
  console.log(gameDescription);

  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const { question, correctAnswer } = getQuestionAndAnswer();
    const userAnswer = readlineSync.question(
      `Question: ${question}\nYour answer: `
    );

    if (userAnswer === String(correctAnswer)) {
      console.log("Correct!");
      correctAnswers += 1;
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default playGame;
