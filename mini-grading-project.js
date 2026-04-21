const prompt = require('prompt-sync')(); // Import and initialize

// mini gradaing project 
// get the user input 

let mathsInput = prompt("Enter Maths grade: ");
let scienceInput = prompt("Enter science grade: ");
let socialInput = prompt("Enter social grade: ");

// convert into numbers

let maths = Number(mathsInput);
let science = Number(scienceInput);
let social = Number(socialInput);

// validate input 

if (!mathsInput || !scienceInput || !socialInput || !isNaN(maths) || isNaN(science) || isNaN(social) || 
maths < 0 || maths > 100 ||
science < 0 || science > 100 ||
social < 0 || social > 100
) {
    console.log("Invalid input. Please enter marks between 0 and 100");
}else {
    // step 4 : calculate total 
    let total = maths + science + social;

    //step 5: calculate average
    let average = total / 3;

    // step 6: determine grade
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

    // Step 7: Add remarks 
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