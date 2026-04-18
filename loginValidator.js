const prompt = require('prompt-sync')(); // Import and initialize


// Login Validator 
// stotred credentials 
const storedUsername = "Abdiawal";
const storedPassword = "Cawaleliano22@";

// step 2 : Attempt control

let attemps = 0;
let maxAttempts = 3;

// loop for multiple attempts 
while (attemps < maxAttempts) {
    // get the user input 
    let userName = prompt("What is your username: ");
    let userPassword = prompt("What is your password: ")

    // Validate empty input
    if (!userName || !userPassword) {
        console.log("Please fill in all the fields!.");
        continue; // go to the next step without counting as failure
    }

    // Password length check
    if (userPassword.length < 5) {
        console.log("Password must be atleast 5 characters long!.");
        continue; 
    }

    // check Credentials 
    if (userName === storedUsername && userPassword === storedPassword) {
        console.log("Login Successful");
        break; // exit loop on success
    } else{
        attemps = attemps + 1;
        console.log(`Invalid credentials. Attempts left: ${maxAttempts - attemps}`);
    }

    // Lock message after maximum attempts
    if (attemps === maxAttempts) {
        console.log("Account locked. Too many attempts.")
    }
}
