// number positive/negative checker

const prompt = require('prompt-sync')(); // Import and initialize

// Ask the user to enter a number
let number = prompt("Enter a number: ");

// Convert the input into a number

let result = Number(number.trim);

//Check if the input is a valid number

if(number === null || number.trim === "" || isNaN(Number)) {
    console.log("Please enter a valid number!")
    //Check if the number is greater than 0
}else if (number > 0) {
    console.log("The number is positive");
    //ELSE check if the number is less than 0
}else if (number < 0) {
    console.log("The number is negative");
    //ELSE
}else if(number == 0) {
    console.log("The number is 0");
}






