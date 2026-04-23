const prompt = require('prompt-sync')(); // Import and initialize

// practicing 

// let i = 0;
// while (i < 3) {
//     console.log(i);
    
//     i++;
// };
// console.log(i);

// 2

// let i = 0;
// do{
//     console.log(i);
//     i++;
// }while(i <= 10);

// let sum = 0;
// while (true) {
//     let value = +prompt("Enter a number: ", '');
//     if (!value) break;
//     sum = sum + value;
// }

// console.log('sum: ', sum);


// for (let i = 0; i < 5; i++){
//     console.log(i);
// }

// let sum = 0;
// for (let i = 1; i <= 5; i++){
//     sum += i;
// };

// console.log(sum);

// let attempts = 0;

// while (attempts < 3) {
//     console.log("Trying...");
//     attempts++;
// }

// for (let i = 1; i <= 3; i++) {
//     for (let j = 1; j <= 2; j++) {
//         console.log("i:", i, "j:", j);
//     }
// }

// for (let i = 1; i <= 3; i++) {
//     for (let j = 1; j <= 3; j++) {
//         console.log(i * j);
//     }
// }

// let numbers = [2, 4, 6, 7, 8];

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 !== 0) {
//         console.log("Found odd:", numbers[i]);
//         break;
//     }
// }



// function greet (){
//     console.log("Hellow Abdiawal");
// }

// greet();
// greet();
// greet();
// greet();

// function greet(name) {
//     console.log('Hello', name)
// }

// greet('Abdiawal');
// greet('Aden');
// greet('Siad');
// greet('Keinan');
// greet('Omar');


// with return values

// function add (a, b) {
//     return a + b;
// }

// // let result = add(2, 3);
// console.log(add(2, 3));


// const greet = function (name) {
//     return name;
// }

// console.log(greet('Abdiawal'))

// function greet () {
//     return 'Hello';
// }

// function welcome () {
//     console.log(greet() + " Abdiawal");
// }

// welcome();

// function calculate (a, b , operator) {
//     if (operator === "+") return a + b;
//     if (operator === "-")return a - b;
//     if (operator === "*") return a * b;
//     if (operator === "/") return a / b;

// }
// console.log(calculate(5, 5, "+"));
// console.log(calculate(10, 19, "*"));
// console.log(calculate(6, 8, "-"));
// console.log(calculate(20, 10, "/"));

function login (username, password) {
    if (username === "admin" && password === "12345"){
        return "Login Successful";
    }
    return "Invalid Credentials";
}


console.log(login("admin", "12345"));

// test 

function test() {
    return;
    console.log("Hello");
}

console.log(test());