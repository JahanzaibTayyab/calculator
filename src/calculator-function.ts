#! /usr/bin/env node
import { createSpinner } from "nanospinner";
import chalk from "chalk";
import UserInput from "./interfaces/user-Input.js";

export const performCalculation = ({
  first_num,
  operation,
  second_num,
}: UserInput): Number => {
  const spinner = createSpinner("Calculating...").start();
  let result = 0;
  switch (operation) {
    case "ADD":
      result = first_num + second_num;
      spinner.success({
        text: `Your Answer is: ${chalk.bold.bgGreenBright(result)}`,
      });
      break;
    case "SUBTRACT":
      result = first_num - second_num;
      spinner.success({
        text: `Your Answer is: ${chalk.bold.bgGreenBright(result)}`,
      });
      break;

    case "MULTIPLY":
      result = first_num * second_num;
      spinner.success({
        text: `Your Answer is: ${chalk.bold.bgGreenBright(result)}`,
      });
      break;

    case "DIVIDE":
      result = first_num / second_num;
      spinner.success({
        text: `Your Answer is: ${chalk.bold.bgGreenBright(result)}`,
      });
      break;

    case "EXPONENTIATION":
      result = first_num ** second_num;
      spinner.success({
        text: `Your Answer is: ${chalk.bold.bgGreenBright(result)}`,
      });
      break;

    case "MODULUS":
      result = first_num % second_num;
      spinner.success({
        text: `Your Answer is: ${chalk.bold.bgGreenBright(result)}`,
      });
      break;

    default:
      return 0;
  }
  return result;
};
