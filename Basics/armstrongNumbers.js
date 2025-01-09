// <---------x------------>

// Armstrong Numbers

// function armstrongNumber(n) {
//   let k = n % 100;
//   let k1 = n % 10;
//   let n1 = Math.floor(n / 100);
//   let k2 = Math.floor(k / 10);
//   let j = n1 ** 3 + k2 ** 3 + k1 ** 3;
//   if (j === n) {
//     return true;
//   }
//   return false;
// }

// console.log(armstrongNumber(1634));

function armstrongNumber(N) {
  let dupNum = N;
  let sum = 0;
  while (N > 0) {
    let lastDigit = N % 10;
    N = Math.floor(N / 10);
    sum = sum + lastDigit ** dupNum.toString().length; // (or) `${dupNum}`.length;
  }
  return sum == dupNum ? true : false;
}

let N = 153;
console.log(N.toString().length);

let result = armstrongNumber(N);
console.log(result);

// <---------x------------>
