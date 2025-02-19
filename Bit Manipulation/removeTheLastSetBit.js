// Remove the last set bit (right most)

// Brute
// convert into binary
// figure out the last set bit and change it
// convert back into decimal

function convertToBinary(n) {
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

function convertToDecimal(str) {
  let n = str.length;
  let num = 0;
  let p2 = 1;
  for (let i = n - 1; i >= 0; i--) {
    if (str[i] == "1") {
      num += p2;
    }
    p2 = p2 * 2;
  }
  return num;
}

function removeLastSetBit(n) {
  let str = convertToBinary(n);
  let len = str.length;
  let arr = str.split("");
  for (let i = len - 1; i >= 0; i--) {
    if (arr[i] == "1") {
      arr[i] = "0";
      break;
    }
  }
  let num = convertToDecimal(arr.join(""));
  return num;
}

// optimal
function removeLastSetBitOptimal(n) {
  return n & (n - 1);
}

let n = 16;
// let result = removeLastSetBit(n);
let result = removeLastSetBitOptimal(n);
console.log(result);

// check if the number is power of 2 or not

function powerOf2(n) {
  // method 1 => using loop
  if (n <= 0) {
    return false;
  }
  while (n % 2 == 0) {
    n = n / 2;
  }
  return n == 1;

  // method 2 => using bit
  return n > 0 && n & (n - 1 == 0);
}

console.log(powerOf2(5));
