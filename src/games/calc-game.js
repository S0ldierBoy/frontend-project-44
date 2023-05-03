import readlineSync from "readline-sync";
import greetUser from "../cli.js";
import { generateRandomNumber, calculate } from "../utils.js";

const operators = ["+", "-", "*"];

const generateExpression = () => {
  const num1 = generateRandomNumber(1, 3);
  const num2 = generateRandomNumber(1, 3);
  const operator = operators[generateRandomNumber(0, operators.length - 1)];
  const expression = `${num1} ${operator} ${num2}`;
  const correctAnswer = calculate(num1, num2, operator);
  return { expression, correctAnswer };
};

const playGame = (gameDescription, getQuestion) => {
  const name = greetUser();
  console.log(gameDescription);

  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const { question, correctAnswer } = getQuestion();
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

export default function playBrainCalc() {
  const gameDescription = "What is the result of the expression?";
  const getQuestion = () => {
    const { expression, correctAnswer } = generateExpression();
    return { question: expression, correctAnswer };
  };
  playGame(gameDescription, getQuestion);
}
