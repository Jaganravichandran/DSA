// pow(x,n) => x^n

// Brute => TC -> O(N) (Time limit exceeded)
function pow(x, n) {
  let ans = 1.0;
  let isNegative = n < 0;
  n = Math.abs(n);
  for (let i = 1; i <= n; i++) {
    ans = ans * x;
  }
  return isNegative ? 1 / ans : ans;
}

let result = pow(2.0, -10);
console.log(result);

// For better solution
// Check pow.js file in array folder
