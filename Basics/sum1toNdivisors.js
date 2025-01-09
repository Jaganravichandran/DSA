// Sum 1 to N divisors

function sumOfDivisors(N) {
  let sum = 0;
  for (let i = 1; i <= N; i++) {
    sum += Math.floor(N / i) * i;
  }
  return sum;
}

let N = 5;
let result = sumOfDivisors(N);
console.log(result);
