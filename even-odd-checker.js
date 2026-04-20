const prompt = require('prompt-sync')(); 

let input = prompt("Enter a number: ");

// 1. Handle Cancel (null)
if (input === null) {
    console.log("Operation calcelled");
} 
// 2. Handle Empty string
else if (input.trim() === "") {
    console.log("Please enter a number");
} 
else {
    // Convert to a number once here
    let num = Number(input.trim());

    // 3. Check if NOT a valid number
    if (isNaN(num)) {
        console.log("Invalid input. Enter a valid number!");
    } 
    // 4. Check if it's a whole number
    else if (!Number.isInteger(num)) {
        console.log("Please enter a whole number!");
    } 
    // 5. Check if even
    else if (num % 2 === 0) {
        console.log("Even Number");
    } 
    // 6. Otherwise odd
    else {
        console.log("The number is odd");
    }
}
