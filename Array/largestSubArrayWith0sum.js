// largest subarray with 0 sum

// Brute
function largestSubarrayBrute(arr) {
  let n = arr.length;
  let len = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let sum = 0;
      for (let k = i; k <= j; k++) {
        sum += arr[k];
      }
      if (sum == 0) {
        len = Math.max(len, j - i + 1);
      }
    }
  }
  return len;
}

// Brute Optimised
function largestSubarrayBruteOptimised(arr) {
  let n = arr.length;
  let len = 0;
  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum += arr[j];
      if (sum == 0) {
        len = Math.max(len, j - i + 1);
      }
    }
  }
  return len;
}

// Optimal
function largestSubarrayOptimal(arr) {
  let n = arr.length;
  let prefixSumMap = new Map();
  let sum = 0;
  let maxLen = 0;
  for (let i = 0; i < n; i++) {
    sum += arr[i];
    if (sum == 0) {
      maxLen = Math.max(maxLen, i + 1);
    }

    let rem = sum - 0;
    if (prefixSumMap.has(rem)) {
      let len = i - prefixSumMap.get(rem);
      maxLen = Math.max(maxLen, len);
    }

    if (!prefixSumMap.has(sum)) {
      prefixSumMap.set(sum, i);
    }
  }
  return maxLen;
}

let arr = [1, -1, 3, 2, -2, -8, 1, 7, 10, 23];
// let res = largestSubarrayBrute(arr);
// let res = largestSubarrayBruteOptimised(arr);
let res = largestSubarrayOptimal(arr);
console.log(res);
