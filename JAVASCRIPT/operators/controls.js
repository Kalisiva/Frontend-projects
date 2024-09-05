// control-structures.js

// Conditionals (if, else, else if, switch)
let num = 110;

if (num > 10) {
    console.log("Number is greater than 10");
} else if (num === 10) {
    console.log("Number is exactly 10");
} else {
    console.log("Number is less than 10");
}

let day =prompt();
switch (day) {
    case "Monday":
        console.log("Start of the week!");
        break;
    case "Friday":
        console.log("Almost the weekend!");
        break;
    default:
        console.log("Just another day.");
}

// Loops (for, while, do...while)
for (let i = 0; i < 5; i++) {
    console.log("For loop iteration:", i);
}

let j = 0;
while (j < 5) {
    console.log("While loop iteration:", j);
    j++;
}

let k = 0;
do {
    console.log("Do...while loop iteration:", k);
    k++;
} while (k < 5);

// Loop control (break, continue)
for (let i = 0; i < 10; i++) {
    if (i === 5) break; // Breaks out of the loop when i is 5
    if (i % 2 === 0) continue; // Skips even numbers
    console.log("Loop with break and continue:", i);
}
