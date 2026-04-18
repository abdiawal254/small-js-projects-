// this is an Age calculator project 
const prompt = require('prompt-sync')(); // Import and initialize


// get the user input

let mathInput = prompt("Enter Your Math marks: ");
let englishInput = prompt("Enter Your English marks: ");
let physicsInput = prompt("Enter your Physics marks: ");
let geoInput = prompt("Enter Your Geography marks: ");
let chemInput = prompt("Enter Your Chemistry marks: ");
let swahiliInput = prompt("Enter Your Swahili marks: ");

// convert to numbers
let maths = Number(mathInput);
let english = Number(englishInput);
let Physics = Number(physicsInput);
let Geography = Number(geoInput);
let Chemistry = Number(chemInput);
let Swahili = Number(swahiliInput);


// validate the input 
if (!mathInput || !englishInput || !physicsInput || !geoInput || !chemInput || !swahiliInput
    || isNaN(maths) || isNaN(english) || isNaN(Physics) || isNaN(Geography) || isNaN(Chemistry) || isNaN(Swahili) || maths < 0 || maths > 100 ||
    english < 0 || english > 100 ||
    Physics < 0 || Physics > 100 ||
    Geography < 0 || Geography > 100 ||
    Chemistry < 0 || Chemistry > 100 ||
    Swahili < 0 || Swahili > 100 
) {
    console.log("Invalid Input!. Please enter marks between 0 and 100");
}else{
    // step 4 : Calculate total 
    let total = maths + english + Physics + Geography + Chemistry + Swahili;

    // step 5: Calculate average 
    let average = total / 6;

    // step 6: Determine Grade 
    let grade;
    
    if (average >= 80) {
        grade = "A";
    }else if (average >= 70) {
        grade = "B";
    }else if (average >= 60) {
        grade = "C";
    }else if (average >= 50) {
        grade = "D";
    }else if (average >= 40) {
        grade = "E";
    }else if (average >= 30 ) {
        grade = "Fail";
    }

    // step 7: Add remarks 
    let remarks;

    if (grade === "A") {
        remarks = "Excellent!, You are smart";
    }else if (grade === "B") {
        remarks = "Good!, Continue with the nice work";
    }else if (grade === "C") {
        remarks = "Fair! You can do better";
    }else if (grade === "D") {
        remarks = "Not happy at all!, work hard";
    }else if(grade === "E") {
        remarks = "I have never seen a fool like you!";
    }else if (grade === "Fail") {
        remarks = "Go and be labor worker";
    }

    // step 8: Output results 
    console.log("Total Marks:", total);
    console.log("Average Marks:", average.toFixed(2));
    console.log("Grade:", grade);
    console.log("Remark:", remarks);
}
