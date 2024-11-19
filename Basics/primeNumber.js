// <---------x------------>

// Prime Number

function isPrime(n) {
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

console.log(isPrime(17));

// <---------x------------>
