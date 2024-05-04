#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from 'chalk';

console.log(chalk.blue(`\n\n\t   _-^+-^+‾      ◦◦◦◦◦◦    ◦◦◦ ◎ ◉ ◯ ◉ ◎ ◦◦◦    ◦◦◦◦◦◦      ‾+^-+^-_`));
console.log(chalk.blue(`\t<==!~~ ☆*: .｡. o(≧ ${chalk.greenBright.bold(`Welcome To Mustafa's`)} - Word Counter ≦)o .｡.:*☆ ~~!==>`));
console.log(chalk.blue(`\t   ‾-∨+-∨+_      ◦◦◦◦◦◦    ◦◦◦ ◎ ◉ ◯ ◉ ◎ ◦◦◦    ◦◦◦◦◦◦      _+∨-+∨-‾\n\n`));
let updatedword:string[]
let count:number=0;
async function main(){
    const answer= await inquirer.prompt([
    {
        name:'choice',
        type:"list",
        message: chalk.rgb(255, 155, 33).bold("Enter the type of Property to count:"),
        choices:[chalk.green.bold('Words'),chalk.green.bold('Alphabets'),chalk.green.bold('Vowels'),chalk.green.bold('Consonant'),chalk.green.bold('Spaces'),chalk.blue.bold('Other')],
    },{
        name:'sentence',
        type:"input",
        message: chalk.rgb(255, 155, 33).bold("Enter the Sentence to count Properties:"),
    }
])
if(answer.sentence.length>0){
    let words:string[]= answer.sentence.trim().split(' ');
    updatedword=words.map((word)=>{return word.toLowerCase()})
    if(answer.choice===chalk.green.bold('Words')){
        await wordcounter();
        console.log(chalk.rgb(255, 155, 33)(`Your Sentence Word Count Is: ${chalk.greenBright.bold(count)}`))
    }else if(answer.choice===chalk.green.bold('Alphabets')){
        let types=/^[a-zA-Z]+$/;
        await counter(types)
        console.log(chalk.rgb(255, 155, 33)(`Your Sentence Alphabet Count Is: ${chalk.greenBright.bold(count)}`))
    }else if(answer.choice===chalk.green.bold('Vowels')){
        let type=/[aeiouAEIOU]/;
        await counter(type);
        console.log(chalk.rgb(255, 155, 33)(`Your Sentence Vowel Count Is: ${chalk.greenBright.bold(count)}`))
    }else if(answer.choice===chalk.green.bold('Consonant')){
        let type=/[cbdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/;
        await counter(type);
        console.log(chalk.rgb(255, 155, 33)(`Your Sentence Consonant Count Is: ${chalk.greenBright.bold(count)}`))
    }else if(answer.choice===chalk.green.bold('Spaces')){
        words=[answer.sentence];
        await spacecounter(words);
        console.log(chalk.rgb(255, 155, 33)(`Your Sentence Space Count Is: ${chalk.greenBright.bold(count)}`))
    }else if(answer.choice===chalk.blue.bold('Other')){
        const answer:{word:string}= await inquirer.prompt([
            {
                name:'word',
                type:"input",
                message: chalk.rgb(255, 155, 33).bold("Enter The Specific Word Or Alphabet  To Count:"),
            }])
        await specificcounter(answer.word)
        console.log(chalk.rgb(255, 155, 33)(`Your Sentence's '${chalk.green.bold(answer.word)}' Count Is: ${chalk.greenBright.bold(count)}`))
    }
}else{
    console.log(chalk.red.bold(`Please Enter A Sentence`))
}
let input =await inquirer.prompt([
    {
        type:"list",
        name:'answer',
        message:chalk.rgb(255, 155, 33).bold(`Do you want to continue using the Program:`),
        choices:[chalk.greenBright.bold("yes"),chalk.red.bold("No")]
    }
]);
if(input.answer===chalk.greenBright.bold("yes")){
    count=0;
    main();
}else{
    console.log(chalk.blue(`\n\n\t   _-^+-^+‾        ◦◦◦◦◦◦     ◦◦◦ ◎ ◉ ◯ ◉ ◎ ◦◦◦     ◦◦◦◦◦◦        ‾+^-+^-_`));
    console.log(chalk.blue(`\t<==!~~ ☆*: .｡. o(≧ ${chalk.greenBright.bold(`Thank's For Using Mustafa's`)} - Word Counter ≦)o .｡.: *☆ ~~!==>`));
    console.log(chalk.blue(`\t   ‾-∨+-∨+_        ◦◦◦◦◦◦     ◦◦◦ ◎ ◉ ◯ ◉ ◎ ◦◦◦     ◦◦◦◦◦◦        _+∨-+∨-‾\n\n`));
};
}
async function wordcounter() {
    updatedword.forEach((word)=>{
        if(word!==''){
            count++;
        }
    })
}
async function counter(type:RegExp) {
    updatedword.forEach((word)=>{
        let letters:string[]=word.split('')
        letters.forEach((letter)=>{
            if(type.test(letter)){
                count++;
            }
        })
        })
}
async function specificcounter(type:string) {
    let words=type.toLowerCase();
    if(words.length>1){
        updatedword.forEach((word)=>{
                if(word===words){
                    count++;
                }
            })
    }else if(words.length===0){
        console.log(chalk.red(`Please Enter A Word OR Alphabet`))
    }else{
        updatedword.forEach((word)=>{
            let letters:string[]=word.split('')
            letters.forEach((letter)=>{
                if(letter===words){
                    count++;
                }
            })
            })
    }
}
async function spacecounter(words:string[]) {
    words.forEach((word)=>{
        let letters:string[]=word.split('')
        letters.forEach((letter)=>{
            if(letter===' '){
                count++;
            }
        })
        })
}
main()




































