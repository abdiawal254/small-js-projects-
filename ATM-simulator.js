const prompt = require('prompt-sync')(); // Import and initialize


// project ATM Machine simulator 

// initial balance 
let balance = 1000;

// deposit function
function deposit(amount) {
    if (amount > 0) {
        balance = balance + amount;
        console.log(`Deposit successful! New balance: $${balance}`);
    }else {
        console.log("Invalid Deposit amount!");
    }
}


// Withdraw function 

function Withdraw (amount) {
    if (amount <= 0) {
        console.log("Invalid withdrawal amount!");
    }else if (amount > balance) {
        console.log("Insufficient amount! ");
    }else {
        balance = balance - amount;
        console.log(`Withdrawal successful! New balance: $${balance}`);
    }
}


// check balance

function checkBalance() {
    console.log(`Current balance: $${balance}`);
}

// testing the ATM
checkBalance() // current balance
deposit(2000); // add money
Withdraw(500); // withdraw valid amount 
Withdraw(5000); // reject invalid withdrawal 
Withdraw(-50); // reject invalid amount 
checkBalance();
