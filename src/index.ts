import chalk from "chalk";
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
import UserInput from "./interfaces/user-Input.js";

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

const welcome = async () => {
  const rainbowTitle = chalkAnimation.rainbow(
    "Command Line Calculator using Node.js, TypeScript, and Inquirer\n"
  );
  await sleep();
  rainbowTitle.stop();
  console.log(`
      ${chalk.bgBlue("HOW TO USE")}
      I am a process on your computer.
      If you get any question wrong I will be ${chalk.bgRed("killed")}
      So get all the questions right...
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
};
await promptQuestions();
