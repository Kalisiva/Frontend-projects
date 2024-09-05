// Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet('Alice')); // Output: Hello, Alice!

// Function expression
const add = function(x, y) {
    return x + y;
};

console.log(add(2, 3)); // Output: 5

// Function with default parameter value
function greetDefault(name = 'Guest') {
    return `Hello, ${name}!`;
}

console.log(greetDefault()); // Output: Hello, Guest!

// Return values
function square(x) {
    return x*x;
}

const result = square(7);
console.log(result); // Output: 49

// Basic arrow function
const add1 = (a, b) => a + b;                 

console.log(add1(2, 3)); // Output: 5

// Arrow function with multiple lines
const multiply = (a, b) => {
    const result = a * b;
    
    return result;
};

console.log(multiply(4, 5)); // Output: 20

// Call back function
function processUserInput(callback) {
    const name = 'Bob';
    callback(name);
}

function greetUser(name) {
    console.log(`Hello, ${name}!`);
}


processUserInput(greetUser); // Output: Hello, Bob!