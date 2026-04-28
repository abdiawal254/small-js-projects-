// factorial project 

const prompt = require('prompt-sync')();


// step 1: input
let input = prompt('Enter a Number: ');
let n = Number(input);

// Step 2: Validation

if (input.trim() === "" || isNaN(n) || n < 0  ) {
    console.log("Invalid Input! Enter a non-negative number");

}else {
    let result = 1;

    // step 3: Factorial logic
    for (let i = 1; i <= n; i++) {
        result = result * i;

    }

    //step 4 : Output 

    console.log(`Factorial of ${n} is ${result}`);
}