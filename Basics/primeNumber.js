// <---------x------------>

// Prime Number

//Brute
function isPrimeBrute(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      count++;
    }
  }
  if (count == 2) {
    return true;
  } else {
    return false;
  }
}

// Better
function isPrimeBetter(n) {
  if (n === 1) {
    return 0;
  }
  if (n === 2 || n === 3) {
    return 1;
  }
  if (n % 2 === 0 || n % 3 === 0) {
    return 0;
  }
  for (let i = 5; i * i <= n; i = i + 6) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return 0;
    }
  }
  return 1;
}

// Optimal
function isPrimeOptimal(n) {
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

let n = 10;
let res = isPrimeBrute(n);
// let res = isPrimeBetter(n);
// let res = isPrimeOptimal(n);
console.log(res);

// <---------x------------>
