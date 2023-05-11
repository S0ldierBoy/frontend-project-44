import generateRandomNumber from '../utils.js';
import playGame from '../index.js';

const calculateResult = (num1, num2, operator) => {
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

export const generateQuestionAndAnswerForCalcGame = () => {
  const firstNumber = generateRandomNumber(1, 10);
  const secondNumber = generateRandomNumber(1, 10);
  const operator = operators[generateRandomNumber(0, operators.length - 1)];
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const correctAnswer = calculateResult(firstNumber, secondNumber, operator);
  return { question, correctAnswer };
};

const gameDescription = 'What is the result of the expression?';

export default () => playGame(gameDescription, generateQuestionAndAnswerForCalcGame);
