#! /usr/bin/env node
import inquirer from "inquirer";

const answer = await inquirer.prompt([
  {
    name: "firstNumber",
    type: "number",
    message: "enter your first number:",
  },
  {
    name: "secondNumber",
    type: "number",
    message: "enter your second number:",
  },
  {
    name: "operators",
    type: "list",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    message: "select your operator:",
  },
]);
if (answer.operators === "Addition") {
  console.log(
    `the sum of ${answer.firstNumber} + ${answer.secondNumber} is equal to ${
      answer.firstNumber + answer.secondNumber
    }`
  );
} else if (answer.operators === "Subtraction") {
  console.log(
    `the sum of ${answer.firstNumber} - ${answer.secondNumber} is equal to ${
      answer.firstNumber - answer.secondNumber
    }`
  );
} else if (answer.operators === "Multiplication") {
  console.log(
    `the sum of ${answer.firstNumber} * ${answer.secondNumber} is equal to ${
      answer.firstNumber * answer.secondNumber
    }`
  );
} else if (answer.operators === "Division") {
  console.log(
    `the sum of ${answer.firstNumber} / ${answer.secondNumber} is equal to ${
      answer.firstNumber / answer.secondNumber
    }`
  );
} else {
  console.log("enter valid operator.");
}
