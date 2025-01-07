// Count Digit

function countDigit(N) {
  // method 1
  let count = 0;
  while (N > 0) {
    // let lastDigit = N % 10; (for better understanding)
    // console.log(lastDigit);
    N = Math.floor(N / 10);
    count++;
  }

  // method 2
  //  let count = parseInt(Math.log10(N) + 1);
  return count;
}

let N = 7789;
let result = countDigit(N);
console.log(result);
