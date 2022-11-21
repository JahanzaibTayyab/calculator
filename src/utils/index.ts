#! /usr/bin/env node
import { createSpinner } from "nanospinner";
import chalk from "chalk";
const spinner = createSpinner("").start();

export const validateInput = () => {
  return (input: string) => {
    const isValid = Boolean(input);
    return isValid || "Please enter a number";
  };
};

export const presentAnswer = (result: number) => {
  spinner.success({
    text: `The answer is ${chalk.bold.bgGreenBright(result)}`,
  });
};
