// Print all print factors of a number

// Brute
function printAllPrimeFactorBrute(n) {
  let ans = [];
  for (let i = 2; i <= n; i++) {
    if (n % i == 0) {
      if (isPrime(i)) {
        ans.push(i);
      }
    }
  }
  return ans;
}

function isPrime(n) {
  count = 0;
  for (let i = 1; i * i <= n; i++) {
    if (n % i == 0) {
      count++;
      if (n / i != i) {
        count++;
      }
    }
    if (count > 2) break;
  }
  if (count == 2) return true;
  else return false;
}

// better
function printAllPrimeFactorBetter(n) {
  let ans = [];
  for (let i = 2; i * i <= n; i++) {
    if (n % i == 0) {
      if (isPrime(i)) {
        ans.push(i);
      }
      if (n / i != i) {
        if (isPrime(n / i)) {
          ans.push(n / i);
        }
      }
    }
  }
  return ans;
}

// Optimal
function printAllPrimeFactorOptimal(n) {
  let ans = [];
  for (i = 2; i <= n; i++) {
    if (n % i == 0) {
      ans.push(i);
      while (n % i == 0) {
        n = Math.floor(n / i);
      }
    }
  }
  return ans;
}

// Best approach
function printAllPrimeFactor(n) {
  let ans = [];
  for (i = 2; i * i <= n; i++) {
    if (n % i == 0) {
      ans.push(i);
      while (n % i == 0) {
        n = Math.floor(n / i);
      }
    }
  }
  if (n != 1) ans.push(n);
  return ans;
}

// let res = printAllPrimeFactorBrute(60);
// let res = printAllPrimeFactorBetter(60);
// let res = printAllPrimeFactorOptimal(60);
let res = printAllPrimeFactor(60);
console.log(res);
