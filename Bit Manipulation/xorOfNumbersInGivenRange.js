// XOR of numbers in a given range

// Problem statement=> given an integer N, find the XOR of all numbers from 1 to N

// Brute
function xorOfNumsBrute(n) {
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    ans = ans ^ i;
  }
  return ans;
}

//Optimal => finding patterns
function xorOfNums(n) {
  if (n % 4 == 1) {
    return 1;
  } else if (n % 4 == 2) {
    return n + 1;
  } else if (n % 4 == 3) {
    return 0;
  } else {
    return n;
  }
}

// follow up question => find the XOR of numbers from L to R

//Brute => TLE
function xorOfNumsFromLtoRbrute(l, r) {
  let ans = 0;
  for (let i = l; i <= r; i++) {
    ans = ans ^ i;
  }
  return ans;
}

function xorOfNumsFromLtoR(l, r) {
  let left = xorOfNums(l - 1);
  let right = xorOfNums(r);
  let ans = left ^ right;
  return ans;
}

// let res = xorOfNumsBrute(4);
// let res = xorOfNums(4);

let res = xorOfNumsFromLtoRbrute(4, 10);
console.log(res);
