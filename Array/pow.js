// Pow(x,n)

function myPow(x, n) {
  let ans = 1.0;
  let nn = n;
  if (nn < 0) {
    nn = -1 * nn;
  }
  while (nn > 0) {
    if (nn % 2 === 1) {
      ans = ans * x;
      nn = nn - 1;
    } else {
      x = x * x;
      nn = nn / 2;
    }
  }
  if (n < 0) {
    ans = 1.0 / ans;
  }
  return ans;
}

const x = 2;
const n = 10;
const ans = myPow(x, n);
console.log(ans);

// node pow.js
