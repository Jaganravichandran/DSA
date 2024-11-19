// <---------x------------>

// Perfect Numbers

function isPerfectNumber(n) {
  let sum = 0;

  for (let i = 1; i * i < n; i++) {
    if (n % i == 0) {
      sum += i;
      if (n / i != n) {
        sum += n / i;
      }
    }
  }

  return sum == n ? 1 : 0;
}

console.log(isPerfectNumber(496));

// <---------x------------>
