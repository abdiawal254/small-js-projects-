const prompt = require('prompt-sync')(); // Import and initialize
// step 1 : input 

let input = prompt("Enter a Number: ");
let number = Number(input);

// step 2 : Validation 

if (input.trim() === "" || isNaN(number) ||
!Number.isInteger(number) ) {
    console.log("Invalid input! Please enter a valid input");
} else {
    // reverse counting 
    for (let i = number; i >= 1; i--) {
        console.log(i);
    }
};
