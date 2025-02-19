// Toggle the ith bit

// brute
// step 1 : convert into binary
// step 2 : figure out the ith bit and convert if 0 => 1 or 1 => 0
// step 3 : convert back into decimal

// convert decimal into binary
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

// convert back into decimal
function convertToDecimal(str) {
  let n = str.length;
  let p2 = 1;
  let num = 0;
  for (let i = n - 1; i >= 0; i--) {
    if (str[i] == "1") {
      num += p2;
    }
    p2 = p2 * 2;
  }
  return num;
}

// brute
function toggleIthBit(n, i) {
  let str = convertToBinary(n);
  let len = str.length;

  // js string is immutable
  let arr = str.split("");
  let pos = len - 1 - i;
  if (pos >= 0) {
    if (arr[pos] == "1") {
      arr[pos] = "0";
    } else {
      arr[pos] = "1";
    }
  } else {
    arr = Array(Math.abs(pos)).fill("0").concat(arr);
    if (arr[0] == "1") {
      arr[0] = "0";
    } else {
      arr[0] = "1";
    }
  }
  let num = convertToDecimal(arr.join(""));
  return num;
}

// Optimal
function toggleIthBitOptimal(n, i) {
  return n ^ (1 << i);
}

let n = 13;
// let result = toggleIthBit(n, 1);
let result = toggleIthBitOptimal(n, 1);
console.log(result);
