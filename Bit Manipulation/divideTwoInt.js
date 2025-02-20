// divide two integers without multiplication and division operators

// Brute => time limit exceeded
function divideTwoIntBrute(a, b) {
  if (a == -(2 ** 31) && b == -1) {
    return 2 ** 31 - 1;
  }
  if (a == b) {
    return 1;
  }
  let sign = (a < 0) ^ (b < 0) ? -1 : 1;
  let sum = 0;
  let count = 0;
  a = Math.abs(a);
  b = Math.abs(b);
  while (sum + b <= a) {
    count = count + 1;
    sum += b;
  }
  return sign * count;
}

// Optimal
function divideTwoIntBetter(a, b) {
  if (a == -(1 << 31) && b == -1) {
    return (1 << 31) - 1;
  }
  if (a == b) {
    return 1;
  }
  let sign = (a < 0) ^ (b < 0) ? -1 : 1;
  // In interview dont rewrite given input
  //   let dividend = Math.abs(a);
  //   let divisor = Math.abs(b);
  let dividend = a < 0 ? -a : a;
  let divisor = b < 0 ? -b : b;
  let ans = 0;
  while (dividend >= divisor) {
    let count = 0;
    while (dividend >= divisor << (count + 1)) {
      count++;
    }
    ans += 1 << count;
    dividend = dividend - (divisor << count);
  }
  return sign * ans;
}

// Optimal
function divideTwoInt(a, b) {
  if (a == -(1 << 31) && b == -1) {
    return (1 << 31) - 1;
  }
  if (a == b) {
    return 1;
  }
  let sign = (a < 0) ^ (b < 0) ? -1 : 1;
  let dividend = Math.abs(a) >>> 0;
  let divisor = Math.abs(b) >>> 0;
  let ans = 0;
  while (dividend >= divisor) {
    let temp = divisor;
    let multiple = 1;
    while (temp << 1 > 0 && temp << 1 <= dividend) {
      temp = temp << 1;
      multiple = multiple << 1;
    }
    dividend = dividend - temp;
    ans = ans + multiple;
  }
  return sign * ans;
}

// let res = divideTwoIntBrute(22, 3);
// let res = divideTwoIntBetter(-22, 3);
let res = divideTwoInt(22, 3);
console.log(res);
