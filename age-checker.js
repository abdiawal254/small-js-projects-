// Age checker project that i should be working on 

// let userAge = 22;

// userAge = Number(userAge);


const prompt = require('prompt-sync')(); // Import and initialize

let userAge = prompt('How old are you? '); 
console.log(userAge);

userAge = Number(userAge);

if(isNaN(userAge) || userAge <= 0 || userAge >= 130 || userAge === '') {
    console.log('This is not a valid number!');
}

let currentYear = new Date().getFullYear();
let birthYear = currentYear - userAge;

console.log(`You are born in approximately ${birthYear}.`);


if (userAge >0 && userAge <= 12 ) {
    console.log('You are a CHILD');
} else if (userAge >= 13 && userAge <= 19) {
    console.log('You are a TEENAGER');
} else if (userAge >= 20 && userAge <=59) {
    console.log('You are an ADULT');
} else if (userAge >= 60 && userAge <= 90) {
    console.log('You are a village else ')
} else if (userAge >= 100 ) {
    console.log('You are a senior')
};