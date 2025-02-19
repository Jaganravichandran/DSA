// count the num of set bits

// brute
function countSetBits(n) {
  let count = 0;
  while (n > 0) {
    if (n % 2 == 1) {
      count += 1;
    }
    n = Math.floor(n / 2);
  }
  //   if (n == 1) count += 1;
  return count;
}

// better
function countSetBitsBetter(n) {
  let count = 0;
  while (n > 0) {
    count += n & 1;
    n = n >> 1;
  }
  return count;
}

// optimal
function countSetBitsOptimal(n) {
  let count = 0;
  while (n > 0) {
    n = n & (n - 1);
    count++;
  }
  return count;
}

let n = 13;
// let res = countSetBits(n);
// let res = countSetBitsBetter(n);
let res = countSetBitsOptimal(n);
console.log(res);
