// LCM of two numbers (LCM - least common multiple)

// Brute (check all multiples)
function lcmOfTwoNumBrute(a, b) {
  let maxVal = Math.max(a, b);
  while (maxVal <= a * b) {
    if (maxVal % a == 0 && maxVal % b == 0) {
      return maxVal;
    }
    maxVal++;
  }
  return a * b; // just in case, return max possible LCM
}

// Better => using multiplication and GCD
// formula : LCM(a,b) = (a*b) / gcd(a,b)

function gcd(a, b) {
  // Method 1
  //   while (a > 0 && b > 0) {
  //     if (a > b) {
  //       a = a % b;
  //     } else {
  //       b = b % a;
  //     }
  //   }
  //   if (a == 0) {
  //     return b;
  //   } else {
  //     return a;
  //   }

  // Method 2
  while (b != 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

function lcmOfTwoNumBetter(a, b) {
  return (a * b) / gcd(a, b);
}

// Optimal (Recursive GCD)
function gcdRecursive(a, b) {
  return b == 0 ? a : gcdRecursive(b, a % b);
}

function lcmOfTwoNum(a, b) {
  return (a * b) / gcdRecursive(a, b);
}

let a = 12;
let b = 18;
// let res = lcmOfTwoNumBrute(a, b);
// let res = lcmOfTwoNumBetter(a, b);
let res = lcmOfTwoNum(a, b);
console.log(res);
