#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
import UserInput from "./interfaces/user-Input.js";
import { performCalculation } from "./calculator-function.js";

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
let continueOption: boolean = true;

const welcome = async () => {
  const rainbowTitle = chalkAnimation.rainbow(
    "Command Line Calculator using Node.js, TypeScript, and Inquirer\n"
  );
  await sleep();
  rainbowTitle.stop();
  console.log(`
      ${chalk.bgBlue("HOW TO USE")}
      I am a smart calculator on your computer.
      1 : Select the operation from ${chalk.bgCyanBright("List")}
      2 : Enter the ${chalk.bgBlue("1st number")}
      3 : Enter the ${chalk.bgYellow("2nd number")}
    `);
};
console.clear();
await welcome();

const validateInput = (input: string) => {
  const valid = !isNaN(parseFloat(input));
  return valid || "Please enter a number";
};

const filterInput = (input: string) => {
  return Number.isNaN(input) || Number(input) <= 0 ? "" : Number(input);
};

do {
  const promptQuestions = async () => {
    const result: UserInput = await inquirer.prompt([
      {
        type: "list",
        name: "operation",
        message: "Choose an operation:",
        choices: [
          "Add",
          "Subtract",
          "Multiply",
          "Divide",
          "Exponentiation",
          "Modulus",
        ],
        filter: (val: string) => val.toUpperCase(),
      },
      {
        type: "number",
        name: "first_num",
        message: "Enter a first number:",
        default() {
          return null;
        },
        validate: validateInput,
        filter: filterInput,
      },
      {
        type: "number",
        name: "second_num",
        message: "Enter a second number:",
        validate: validateInput,
        filter: filterInput,
      },
    ]);
    return performCalculation(result);
  };

  const continueOperation = async () => {
    const choice = await inquirer.prompt({
      name: "continue_Operation",
      type: "confirm",
      message: "Do you want to continue? ",
    });
    continueOption = choice.continue_Operation;
  };
  await promptQuestions();
  await continueOperation();
  console.clear();
} while (continueOption == true);
process.exit(0);
