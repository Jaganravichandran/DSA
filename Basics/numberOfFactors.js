// <---------x------------>

// Number of factors

function commonFactor(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      arr.push(i);
    }
  }
  return arr.length;
}

console.log(commonFactor(4));

// <---------x------------>
