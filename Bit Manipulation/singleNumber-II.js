// single number II

// problem statement => Given arr, every elt appears three times except one elt
// we need to return that num.

// for example, arr = [4,4,4,2,5,5,5] o/p: 2

// Brute
function singleNumBrute(arr) {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], (map.get(arr[i]) || 0) + 1);
  }
  for (let num of map.keys()) {
    if (map.get(num) == 1) {
      return num;
    }
  }
  return 0;
}

// better
function singleNumBetter(arr) {
  let ans = 0;
  let n = arr.length;
  for (let bitInd = 0; bitInd < 32; bitInd++) {
    let count = 0;
    for (let i = 0; i < n; i++) {
      if (arr[i] & (1 << bitInd)) {
        count++;
      }
    }
    if (count % 3 == 1) {
      ans = ans | (1 << bitInd);
    }
  }
  return ans;
}

// Optimal
function singleNumOptimal(arr) {
  arr.sort();
  let n = arr.length;
  for (let i = 1; i < n; i = i + 3) {
    if (arr[i - 1] != arr[i]) {
      return arr[i - 1];
    }
  }
  return arr[n - 1];
}

// best
function singleNum(arr) {
  let n = arr.length;
  let ones = 0;
  let twos = 0;
  for (let i = 0; i < n; i++) {
    ones = (ones ^ arr[i]) & ~twos;
    twos = (twos ^ arr[i]) & ~ones;
  }
  return ones;
}

let arr = [2, 2, 1, 2, 1, 1, 4, 3, 4, 4];
// let res = singleNumBrute(arr);
// let res = singleNumBetter(arr);
// let res = singleNumOptimal(arr);
let res = singleNum(arr);
console.log(res);
