import { generateRandomNumber } from "../utils.js";
import playGame from "../index.js";

const generateQuestionAndAnswer = () => {
  const question = generateRandomNumber(1, 100);
  const correctAnswer = question % 2 === 0 ? "yes" : "no";
  return { question, correctAnswer };
};

export const gameDescription =
  'Answer "yes" if the number is even, otherwise answer "no".';
export default () => playGame(gameDescription, generateQuestionAndAnswer);
