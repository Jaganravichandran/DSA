// check if the ith bit is set or not?

// brute
// convert decimal to binary
// traverse from back and check if the ith bit is set or not?
function convert(n) {
  let str = "";
  while (n != 0) {
    if (n % 2 == 1) {
      str += "1";
    } else {
      str += "0";
    }
    n = Math.floor(n / 2);
  }
  str = str.split("").reverse().join("");
  return str;
}

function isSetBrute(n, k) {
  let str = convert(n);
  let len = str.length;
  for (let i = len - 1; i >= 0; i--) {
    if (k == 0) {
      if (str[i] == "1") {
        return true;
      } else {
        return false;
      }
    }
    k--;
  }
}

// Optimal
// => using left shift(<<) and AND operator
function isSetOptimal(n, i) {
  if (n & (1 << i)) {
    return true;
  } else {
    return false;
  }
}

// => using right shift(>>) and AND operator

function isSetOptimal2(n, i) {
  if ((n >> i) & 1) {
    return true;
  } else {
    return false;
  }
}

let n = 13;
// let result = isSetBrute(n, 1);
// let result = isSetOptimal(n, 3);
let result = isSetOptimal2(n, 0);
console.log(result);
