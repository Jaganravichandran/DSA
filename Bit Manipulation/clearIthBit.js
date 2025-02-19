// clear the ith bit

// brute
// step 1 => convert into binary
// step 2 => figure out the ith bit and put 0
// step 3 => convert back into decimal and return num

// Optimal
function clearIthBit(n, i) {
  return n & ~(1 << i);
}

let n = 5;
let result = clearIthBit(n, 2);
console.log(result);

// 1s and 2s compliment
function onesComplement(n) {
  return ~n;
}
console.log(onesComplement(n));

function twosComplement(n) {
  return ~n + 1;
}
console.log(twosComplement(n));
