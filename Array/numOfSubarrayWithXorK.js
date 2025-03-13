// count number of subarray with xor as k

// Brute
function countSubArrBrute(arr, k) {
  let n = arr.length;
  let count = 0;
  for (let i = 0; i < n; i++) {
    let xor = 0;
    for (let j = i; j < n; j++) {
      xor = xor ^ arr[j];
      if (xor == k) {
        count++;
      }
    }
  }
  return count;
}

// Optimal
function countSubArrOptimal(arr, k) {
  let n = arr.length;
  let map = new Map();

  map.set(0, 1);
  let xor = 0;
  let count = 0;
  for (let i = 0; i < n; i++) {
    xor ^= arr[i];
    let remove = xor ^ k;
    count += map.get(remove) || 0;

    map.set(xor, (map.get(xor) || 0) + 1);
  }
  return count;
}

let arr = [4, 2, 2, 6, 4];
// let res = countSubArrBrute(arr, 6);
let res = countSubArrOptimal(arr, 6);
console.log(res);
