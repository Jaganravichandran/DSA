// Given a number N, print all primes till N

function printPrimesBrute(n) {
  let ans = [];
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      ans.push(i);
    }
  }
  return ans;
}
function isPrime(n) {
  let count = 0;
  for (let i = 1; i * i <= n; i++) {
    if (n % i == 0) {
      count++;
      if (n / i != i) {
        count++;
      }
    }
  }
  if (count == 2) {
    return true;
  } else {
    return false;
  }
}

// better
function printPrimesBetter(n) {
  let prime = new Array(n + 1).fill(1);
  let ans = [];
  for (let i = 2; i <= n; i++) {
    if (prime[i] == 1) {
      for (let j = 2 * i; j <= n; j += i) {
        prime[j] = 0;
      }
    }
  }
  for (let i = 2; i <= n; i++) {
    if (prime[i] == 1) {
      ans.push(i);
    }
  }
  return ans;
}

// Optimal
function printPrimes(n) {
  let prime = new Array(n + 1).fill(1);
  let ans = [];
  for (let i = 2; i * i <= n; i++) {
    if (prime[i] == 1) {
      for (let j = i * i; j <= n; j += i) {
        prime[j] = 0;
      }
    }
  }
  for (let i = 2; i <= n; i++) {
    if (prime[i] == 1) {
      ans.push(i);
    }
  }
  return ans;
}

// let res = printPrimesBrute(2);
// let res = printPrimesBetter(30);
let res = printPrimes(10);
console.log(res);
