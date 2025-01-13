// Factorial Of N

function factorial(N) {
  if (N == 0) {
    return 1;
  }
  return N * factorial(N - 1);
}
let N = 0;
let result = factorial(N);
console.log(result);
