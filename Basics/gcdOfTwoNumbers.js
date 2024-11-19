// <---------x------------>

// GCD of two numbers

function gcd(a, b) {
  while (b != 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

console.log(gcd(56, 30));

// Example:

console.log(56 % 30);
console.log(30 % 26);
console.log(26 % 4);
console.log(4 % 2);

// <---------x------------>
