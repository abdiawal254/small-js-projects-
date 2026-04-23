// STAR PATTERNS JS

const prompt = require('prompt-sync')(); // Import and initialize

// Right triangle stars

let rows = 5;
for (let i = 1; i <= rows; i++) {
    let line = "";
    
    for (let j = 1; j <= i; j++) {
        line = line + "*";
    }

    console.log(line);
}


// Inverted Triangle 

let inverted = 5;
for (let i = 1; i <= inverted; i++) {
    let line = "";

    for (let j = 1; j <= inverted - i + 1; j++) {
        line = line + "*";

    }

    console.log(line);
}



// Pyramid Triangles 

let pyramid = 10;

for (let i = 1; i <= pyramid; i++) {
    let line = "";

    //spaces
    for (let j = 1; j <= pyramid - i; j++) {
        line = line + " ";
    }

    // stars 
    for (let j = 1; j <= (2 * i - 1); j++){
        line = line + "*"
    }

    console.log(line);
};

