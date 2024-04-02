#! /usr/bin/env node

console.log("\n\t\t welcome to ahmer-cli-number-guessing-game\n" )

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random()* 5+1 );
//Math.floor = avoids decimal numbers(bari values hn is ly pehly likhi h warna syntexerror ata)
//Math.random = can guess decimal numbers(choti values hn is ly Math.floor k baad likha h to avoid syntexerror)
//*5 = upto 5 tk k numbers guess karna
//+1 = 0+1 =1 mtlb 0 ni show krna blky 1 sy 5 tk k numbers guess krna h)

const answers = await inquirer.prompt([
    { name :"UserGuessNumber",
    type: "number",
    message:"Enter your guess number(between 1 to 5)", },
]);

if(answers.UserGuessNumber == randomNumber)
    {console.log("congratulations! you guessed a correct number");}

    else
    {console.log("sorry,you guessed a wrong number")}