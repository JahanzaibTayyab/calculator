import chalk from "chalk";
// import inquirer from "inquirer";
// import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
//import { createSpinner } from "nanospinner";
console.clear();

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

welcome();
