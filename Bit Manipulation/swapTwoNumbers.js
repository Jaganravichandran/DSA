// swap 2 numbers

let a = 6;
let b = 5;
console.log(a, b);

// brute => using third variable
let temp = a; // 6
a = b; // 5
b = temp; // 6
console.log(a, b);

// better => using arithmetic operator
a = a + b; // 11
b = a - b; // 6
a = a - b; // 5
console.log(a, b);

// Optimal => using XOR
a = a ^ b; // 1 1 0 ^ 1 0 1 = 0 1 1
b = a ^ b; // 0 1 1 ^ 1 0 1 = 1 1 0 (6)
a = a ^ b; // 0 1 1 ^ 1 1 0 = 1 0 1 (5)
console.log(a, b);
