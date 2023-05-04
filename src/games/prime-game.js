import playGame from "../index.js";
import { isPrime, generateRandomNumber } from "../utils.js";

export const generateQuestionAndAnswer = () => {
  const question = generateRandomNumber(1, 100);
  const correctAnswer = isPrime(question) ? "yes" : "no";
  return { question, correctAnswer };
};

export const gameDescription =
  'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => playGame(gameDescription, generateQuestionAndAnswer);
