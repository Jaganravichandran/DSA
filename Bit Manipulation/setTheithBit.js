// set the ith bit

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
function setIthBit(n, i) {
  let str = convertToBinary(n);
  let len = str.length;

  // js string is immutable
  let arr = str.split("");
  let pos = len - 1 - i;
  if (pos >= 0) {
    arr[pos] = "1";
  } else {
    arr = Array(Math.abs(pos)).fill("0").concat(arr);
    arr[0] = "1";
  }
  let num = convertToDecimal(arr.join(""));
  return num;
}

function setIthBitOptimal(n, i) {
  return n | (1 << i);
}

let n = 3;
// let result = setIthBit(n, 4);
let result = setIthBitOptimal(n, 4);
console.log(result);
