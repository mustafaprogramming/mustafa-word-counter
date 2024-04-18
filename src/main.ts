#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from 'chalk';

console.log(chalk.greenBright(`<<<===========================================================================>>>`))
console.log(chalk.blueBright.bold(`\n\t\t\tWelcome To Mustafa - Word Counter\t\n`))
console.log(chalk.greenBright(`<<<===========================================================================>>>`))

const answer: {
    sentence:string
}= await inquirer.prompt([
    {
        name:'sentence',
        type:"input",
        message: chalk.rgb(255, 155, 33).bold("Enter the sentence to count the words:"),
    }
])

const words = answer.sentence.trim().split(" ");

console.log(chalk.rgb(255, 155, 33)(`Your Sentence Word Count Is: ${chalk.greenBright.bold(words.length)}`))






































