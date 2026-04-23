// multiplication table 

const prompt = require('prompt-sync')(); // Import and initialize

// step 1: input number 
let inputNumber = prompt("Enter a Number: ");
let inputLimit = prompt("Enter a limit: ");

let number = Number(inputNumber);
let limit = Number(inputLimit);

if (
    inputNumber.trim() === "" ||
    inputLimit.trim() === "" ||
    isNaN(number) ||
    isNaN(limit) ||
    !Number.isInteger(number) ||
    !Number.isInteger(limit) 
){
    console.log("Invalid inputs! Please enter valid Inputs");
} else {
    for (let i = 1; i <= limit; i++) {
        console.log(`${number} x ${i} = ${number} x ${i}`);
    }
}




