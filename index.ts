#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let myBalance = 24000; //dollar
let myPin = 1234;

console.log(chalk.bold.bgWhiteBright.black("WELCOME TO BANK AL HABIB ATM"));

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    type: "number",
    message: "Please Enter Your 4-Digit Pin Here",
  },
]);

if (myPin === pinAnswer.pin) {
  console.log(chalk.yellowBright("Correct Pin Code"));

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: chalk.greenBright("Please Select Option"),
      type: "list",
      choices: ["Withdraw", "Check Balance", "Fast Cash"],
    },
  ]);

  if (operationAns.operation === "Withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        type: "number",
        message: chalk.greenBright("Please Enter Your Amount"),
      },
    ]);

    if (myBalance >= amountAns.amount) {
      myBalance -= amountAns.amount;
      console.log(chalk.italic.cyanBright(`Your Remaining Amount Is: ${myBalance} `));
    } else {
      console.log(chalk.redBright(`Insufficient Balance`));
    }
  } else if (operationAns.operation === "Check Balance") {
    console.log(chalk.italic.cyanBright(`Your Amount Is: ${myBalance}`));
  } else if (operationAns.operation === "Fast Cash") {
    let fastCashAns = await inquirer.prompt([
      {
        name: "fastCash",
        message: chalk.greenBright("Please Select Your Amount"),
        type: "list",
        choices: ["5000", "10000", "15000", "20000", "30000"],
      },
    ]);

    if (myBalance >= fastCashAns.fastCash) {
      myBalance -= fastCashAns.fastCash;
      console.log(chalk.italic.cyanBright(`Your Remaining Amount Is: ${myBalance}`));
    } else {
      console.log(chalk.redBright`Insufficient Balance`);
    }
  }
} else {
  console.log(chalk.redBright("Incorrect Pin Code"));
}

//The End.
