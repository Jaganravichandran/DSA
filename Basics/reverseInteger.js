// Reverse Integer

function reverseInteger(N) {
  let res = 0;
  if (N < 0) {
    res = -1 * revNumber(-N);
  } else {
    res = revNumber(N);
  }
  return res > Math.pow(2, 31) - 1 || res < Math.pow(-2, 31) ? 0 : res;
}
function revNumber(N) {
  let revNum = 0;
  while (N > 0) {
    let lastDigit = N % 10;
    N = Math.floor(N / 10);
    revNum = revNum * 10 + lastDigit;
  }
  return revNum;
}

let N = -2147483648;
let result = reverseInteger(N);
console.log(result);

// node reverseInteger.js
