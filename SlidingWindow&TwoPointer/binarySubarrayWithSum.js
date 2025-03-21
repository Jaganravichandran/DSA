// Binary subarray with sum

// Brute
function binarySubArrSumBrute(arr, k) {
  let n = arr.length;
  let count = 0;
  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum += arr[j];
      if (sum === k) {
        count++;
      }
    }
  }
  return count;
}

// Optimal
function atMost(arr, k) {
  if (k < 0) {
    return 0;
  }
  let left = 0,
    right = 0,
    sum = 0,
    count = 0;
  while (right < arr.length) {
    sum += arr[right];
    while (sum > k) {
      sum = sum - arr[left];
      left++;
    }
    let len = right - left + 1;
    count = count + len;
    right++;
  }
  return count;
}

function binarySubArrSum(arr, k) {
  return atMost(arr, k) - atMost(arr, k - 1);
}

let arr = [1, 0, 0, 1, 1, 0];
// let res = binarySubArrSumBrute(arr, 2);
let res = binarySubArrSum(arr, 2);
console.log(res);
