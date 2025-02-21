// Print all divisors

function printAllDivisors(N) {
  let row = [];
  for (let i = 1; i <= N; i++) {
    if (N % i == 0) {
      row.push(i);
    }
  }
  return row;
}

function printAllDivisorsOptimal(N) {
  let row = [];
  for (let i = 1; i * i <= N; i++) {
    if (N % i == 0) {
      row.push(i);
      if (N / i != i) {
        row.push(N / i);
      }
    }
  }
  // sort array
  row.sort((a, b) => a - b);
  return row;
}

let N = 36;
// let result = printAllDivisors(N);
let result = printAllDivisorsOptimal(N);
console.log(result);
