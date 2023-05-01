import readlineSync from "readline-sync";
import greetUser from "../cli.js";

const generateRandomNumber = () => Math.floor(Math.random() * 51);

export default function playBrainEven() {
  const name = greetUser();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const randomNumber = generateRandomNumber();
    const isNumberEven = randomNumber % 2 === 0;
    const correctAnswer = isNumberEven ? "yes" : "no";
    const answer = readlineSync.question(
      `Question: ${randomNumber}\nYour answer: `
    );
    if (answer === correctAnswer) {
      console.log("Correct!");
      correctAnswers += 1;
    } else {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}
