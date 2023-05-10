import generateRandomNumber from '../utils.js';
import playGame from '../index.js';

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operator: '${operator}'`);
  }
};

const operators = ['+', '-', '*'];

export const generateQuestionAndAnswer = () => {
  const num1 = generateRandomNumber(1, 10);
  const num2 = generateRandomNumber(1, 10);
  const operator = operators[generateRandomNumber(0, operators.length - 1)];
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = calculate(num1, num2, operator);
  return { question, correctAnswer };
};

const gameDescription = 'What is the result of the expression?';

export default () => playGame(gameDescription, generateQuestionAndAnswer);
