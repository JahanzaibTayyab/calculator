import { createSpinner } from "nanospinner";
import chalk from "chalk";
const spinner = createSpinner("").start();

export const validateInput = () => {
  return (val: string) => {
    const isValid = Boolean(val);
    return isValid || "Please enter a number";
  };
};

export const presentAnswer = (result: number) => {
  spinner.success({
    text: `The answer is ${chalk.bold.bgGreenBright(result)}`,
  });
};

export const clearConsole = () => {
  console.clear();
};
