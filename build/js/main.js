#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from 'chalk';
console.log(chalk.greenBright(`<<<===========================================================================>>>`));
console.log(chalk.blueBright.bold(`\n\t\t\tWelcome To Mustafa - Word Counter\t\n`));
console.log(chalk.greenBright(`<<<===========================================================================>>>`));
const answer = await inquirer.prompt([
    {
        name: 'choice',
        type: "list",
        message: chalk.rgb(255, 155, 33).bold("Enter the type of Property to count:"),
        choices: ['Words', 'Alphabets', 'Vowels', 'Consonant', 'Spaces', 'Other'],
    }, {
        name: 'sentence',
        type: "input",
        message: chalk.rgb(255, 155, 33).bold("Enter the Sentence to count Properties:"),
    }
]);
if (answer.sentence.length > 0) {
    const words = answer.sentence.trim().split(" ");
    const updatedword = words.map((word) => { return word.toLowerCase(); });
    let count = 0;
    if (answer.choice === 'Words') {
        await wordcounter();
        console.log(chalk.rgb(255, 155, 33)(`Your Sentence Word Count Is: ${chalk.greenBright.bold(count)}`));
    }
    else if (answer.choice === 'Alphabets') {
        let types = /^[a-zA-Z]+$/;
        await counter(types);
        console.log(chalk.rgb(255, 155, 33)(`Your Sentence Alphabet Count Is: ${chalk.greenBright.bold(count)}`));
    }
    else if (answer.choice === 'Vowels') {
        let type = /[aeiouAEIOU]/;
        await counter(type);
        console.log(chalk.rgb(255, 155, 33)(`Your Sentence Vowel Count Is: ${chalk.greenBright.bold(count)}`));
    }
    else if (answer.choice === 'Consonant') {
        let type = /[cbdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/;
        await counter(type);
        console.log(chalk.rgb(255, 155, 33)(`Your Sentence Consonant Count Is: ${chalk.greenBright.bold(count)}`));
    }
    else if (answer.choice === 'Spaces') {
        await spacecounter();
        console.log(chalk.rgb(255, 155, 33)(`Your Sentence Space Count Is: ${chalk.greenBright.bold(count)}`));
    }
    else if (answer.choice === 'Other') {
        const answer = await inquirer.prompt([
            {
                name: 'word',
                type: "input",
                message: chalk.rgb(255, 155, 33).bold("Enter The Specific Word Or Alphabet  To Count:"),
            }
        ]);
        await specificcounter(answer.word);
    }
    async function wordcounter() {
        updatedword.forEach((word) => {
            if (word !== '') {
                count++;
            }
        });
    }
    async function counter(type) {
        updatedword.forEach((word) => {
            let letters = word.split('');
            letters.forEach((letter) => {
                if (type.test(letter)) {
                    count++;
                }
            });
        });
    }
    async function specificcounter(type) {
        if (type.length > 1) {
            updatedword.forEach((word) => {
                if (word === type) {
                    count++;
                }
            });
            console.log(chalk.rgb(255, 155, 33)(`Your Sentence ${answer.word} Count Is: ${chalk.greenBright.bold(count)}`));
        }
        else if (type.length === 0) {
            console.log(chalk.red(`Please Enter A Word OR Alphabet`));
        }
        else {
            updatedword.forEach((word) => {
                let letters = word.split('');
                letters.forEach((letter) => {
                    if (letter === type) {
                        count++;
                    }
                });
            });
            console.log(chalk.rgb(255, 155, 33)(`Your Sentence ${answer.word} Count Is: ${chalk.greenBright.bold(count)}`));
        }
    }
    async function spacecounter() {
        updatedword.forEach((word) => {
            if (word === '') {
                count++;
            }
        });
    }
}
else {
    console.log(chalk.red.bold(`Please Enter A Sentence`));
}
