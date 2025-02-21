// single number-III

// problem statement => Given array, every elt occurs twice, except two unique elts
// we have to return that elts

// brute
function singleNumBrute(nums) {
  let map = new Map();
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }
  for (let num of map.keys()) {
    if (map.get(num) == 1) {
      arr.push(num);
    }
  }
  return arr;
}

function singleNum(arr) {
  let n = arr.length;
  let xor = 0;
  for (let i = 0; i < n; i++) {
    xor = xor ^ arr[i];
  }
  let rightMost = (xor & (xor - 1)) ^ xor;
  //   let rightMost = xor & -xor;
  let b1 = 0;
  let b2 = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] & rightMost) {
      b1 = b1 ^ arr[i];
    } else {
      b2 = b2 ^ arr[i];
    }
  }
  return [b1, b2];
}

let nums = [2, 4, 2, 6, 3, 7, 7, 3];
// let res = singleNumBrute(nums);
let res = singleNum(nums);
console.log(res);
