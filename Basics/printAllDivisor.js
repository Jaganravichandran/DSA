// Print all divisors

function printAllDivisors(N) {
  let row = "";
  for (let i = 1; i <= N; i++) {
    if (N % i == 0) {
      row += i + " ";
    }
  }
  return row;
}

let N = 36;
let result = printAllDivisors(N);
console.log(result);
