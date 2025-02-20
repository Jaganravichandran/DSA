// count total set bits from 1 to n

// brute
function countTotalSetBitsbrute(n) {
  let totalCount = 0;
  for (let i = 1; i <= n; i++) {
    let num = i;
    while (num > 0) {
      num = num & (num - 1);
      totalCount++;
    }
  }
  return totalCount;
}

// optimal
function countTotalSetBits(n) {
  if (n == 0) {
    return 0;
  }
  let x = Math.floor(Math.log2(n));
  let hightPowOf2 = 1 << x;
  let bitsBefore = (x * hightPowOf2) / 2;
  let msb = n - hightPowOf2 + 1;
  let remaining = countTotalSetBits(n - hightPowOf2);
  return bitsBefore + msb + remaining;
}

let n = 17;
// let res = countTotalSetBitsbrute(n);
let res = countTotalSetBits(n);
console.log(res);
