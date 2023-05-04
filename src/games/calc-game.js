import { generateRandomNumber, calculate } from "../utils.js";
import playGame from "../index.js";

const operators = ["+", "-", "*"];

export const generateQuestionAndAnswer = () => {
  const num1 = generateRandomNumber(1, 10);
  const num2 = generateRandomNumber(1, 10);
  const operator = operators[generateRandomNumber(0, operators.length - 1)];
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = calculate(num1, num2, operator);
  return { question, correctAnswer };
};

export const gameDescription = "What is the result of the expression?";

export default () => playGame(gameDescription, generateQuestionAndAnswer);
