import readlineSync from "readline-sync";
import greetUser from "./cli.js";

const generateRandomNumber = () => {
  return Math.floor(Math.random() * 51);
};

export default function playBrainEven() {
  const name = greetUser();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let correctAnswers = 0;
  while (correctAnswers < 3) {
    const randomNumber = generateRandomNumber();
    const answer = readlineSync.question(
      `Question: ${randomNumber}\nYour answer: `
    );
    if (
      (randomNumber % 2 === 0 && answer === "yes") ||
      (randomNumber % 2 !== 0 && answer === "no")
    ) {
      console.log("Correct!");
      correctAnswers += 1;
    } else {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${
          randomNumber % 2 === 0 ? "yes" : "no"
        }'.`
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}
