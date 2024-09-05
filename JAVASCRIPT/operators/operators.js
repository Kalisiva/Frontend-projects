// Arithmetic Operators
let a = 10;
let b = 5;

console.log("Arithmetic Operators:");
console.log("a + b =", a + b); // Addition
console.log("a - b =", a - b); // Subtraction
console.log("a * b =", a * b); // Multiplication
console.log("a / b =", a / b); // Division
console.log("a % b =", a % b); // Modulus

// Assignment Operators
let c = 15;

console.log("\nAssignment Operators:");
console.log("c =", c); // Assignment
c += 5;
console.log("c += 5 ->", c); // Addition assignment
c -= 5;
console.log("c -= 5 ->", c); // Subtraction assignment
c *= 2;
console.log("c *= 2 ->", c); // Multiplication assignment
c /= 2;
console.log("c /= 2 ->", c); // Division assignment
c %= 4;
console.log("c %= 4 ->", c); // Modulus assignment

// Comparison Operators
let x = 10;
let y = "10";

console.log("\nComparison Operators:");
console.log("x == y ->", x == y); // Equal to
console.log("x === y ->", x === y); // Strict equal to
console.log("x != y ->", x != y); // Not equal to
console.log("x !== y ->", x !== y); // Strict not equal to
console.log("x > y ->", x > y); // Greater than
console.log("x < y ->", x < y); // Less than
console.log("x >= y ->", x >= y); // Greater than or equal to
console.log("x <= y ->", x <= y); // Less than or equal to

// Logical Operators
let p = true;
let q = false;

console.log("\nLogical Operators:");
console.log("p && q ->", p && q); // Logical AND
console.log("p || q ->", p || q); // Logical OR
console.log("!p ->", !p); // Logical NOT

// Bitwise Operators
let m = 5; // 0101 in binary
let n = 3; // 0011 in binary

console.log("\nBitwise Operators:");
console.log("m & n ->", m & n); // Bitwise AND
console.log("m | n ->", m | n); // Bitwise OR
console.log("m ^ n ->", m ^ n); // Bitwise XOR
console.log("~m ->", ~m); // Bitwise NOT
console.log("m << 1 ->", m << 1); // Bitwise left shift
console.log("m >> 1 ->", m >> 1); // Bitwise right shift

// Ternary Operator
let age =18 ;
let canVote = (age >= 18) ? "Yes" : "No";

console.log("\nTernary Operator:");
console.log("Can vote:", canVote); // Ternary operation

// Typeof Operator
let A = "Hello, world!";
let B = 42;
let C = true;

console.log("\nTypeof Operator:");
console.log("typeof string ->", typeof A); // Type of string
console.log("typeof number ->", typeof B); // Type of number
console.log("typeof boolean ->", typeof C); // Type of boolean
