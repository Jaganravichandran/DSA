// find square root of an integer

function sqrt(num) {
  let ans = 1;
  for (let i = 1; i <= num; i++) {
    if (i * i <= num) {
      ans = i;
    } else {
      break;
    }
  }
  return ans;
}

function sqrtOptimal(n) {
  let low = 1;
  let high = n;

  // Edge cases
  if (n == 0 || n == 1) {
    return n;
  }

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    // instead of (mid * mid <= n), we can use division
    // (mid <= Math.floor(n/mid)) preventing integer overflow
    if (mid <= Math.floor(n / mid)) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return high;
}
// let result = sqrt(28);
let result = sqrtOptimal(28);
console.log(result);
