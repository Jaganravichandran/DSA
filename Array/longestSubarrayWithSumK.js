// Longest Subarray with give sum k (+ve)

function longestSubarrayBrute(a, k) {
  let n = a.length;
  let len = 0;
  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum += a[j];
      //   for (let k = i; k <= j; k++) {
      //     sum += a[k];
      //   }
      if (sum == k) {
        len = Math.max(len, j - i + 1);
      }
    }
  }
  return len;
}

// rem = remaining, maxLen = maximum length
function longestSubarrayBetter(arr, k) {
  let n = arr.length;
  let preSumMap = new Map(); // Stores prefix sums and their indices
  let sum = 0;
  let maxLen = 0;
  for (let i = 0; i < n; i++) {
    sum += arr[i]; // Calculate prefix sum up to index i

    // If the sum equals k, the subarray [0...i] has the desired sum
    if (sum == k) {
      maxLen = Math.max(maxLen, i + 1);
    }

    // Check if `sum - k` exists in the map
    let rem = sum - k;
    if (preSumMap.has(rem)) {
      let len = i - preSumMap.get(rem); // Length of subarray with sum k
      maxLen = Math.max(maxLen, len);
    }

    // If the sum is not already in the map, store it with the current index
    if (!preSumMap.has(sum)) {
      preSumMap.set(sum, i);
    }
  }
  return maxLen;
}

function longestSubarrayOptimal(arr) {
  let n = arr.length;
  let sum = arr[0];
  let maxLen = 0;
  let left = 0;
  let right = 0;
  while (right < n) {
    right++;
    if (right < n) {
      sum += arr[right];
    }
    while (sum > k) {
      sum -= arr[left];
      left++;
    }
    if (sum == k) {
      maxLen = Math.max(maxLen, right - left + 1);
    }
  }
  return maxLen;
}

// let arr = [1, 2, 3, 1, 1, 1, 1, 4, 2, 3];
let arr = [1, 2, 3, 1, 1, 1, 1, 3, 3];
let k = 6;
// let result = longestSubarrayBrute(arr, k);
// let result = longestSubarrayBrute(arr, k);
let result = longestSubarrayOptimal(arr, k);
console.log(result);
