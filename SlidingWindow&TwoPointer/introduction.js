// sliding window and two pointer problems

// 1) constant window
// Eg: find the max sum obtained by picking up k element in the array

// Brute => TC: O(nk)
function constantWindowBrute(arr, k) {
  let n = arr.length;
  if (n < k) return null; // edge cases
  let left = 0;
  let right = k - 1;
  let maxSum = 0;
  while (right < n) {
    let sum = findSum(arr, left, right);
    if (sum > maxSum) {
      maxSum = sum;
    }
    left++;
    right++;
  }
  return maxSum;
}

function findSum(arr, left, right) {
  let sum = 0;
  for (let i = left; i <= right; i++) {
    sum += arr[i];
  }
  return sum;
}

// Optimal => TC: O(k) + O(n-k) => O(n) (using two pointers)
function constantWindowOptimal(arr, k) {
  let n = arr.length;
  let left = 0;
  let right = k - 1;
  let maxSum = 0;
  let sum = findSum(arr, left, right);
  while (right < n - 1) {
    sum = sum - arr[left];
    left++;
    right++;
    sum = sum + arr[right];
    maxSum = Math.max(maxSum, sum);
  }
  return maxSum;
}

// using single pointer
function constantWindow(arr, k) {
  let n = arr.length;
  let sum = findSum(arr, 0, k - 1);
  let maxSum = 0;
  for (let i = k; i < n; i++) {
    sum = sum - arr[i - k];
    sum = sum + arr[i];
    maxSum = Math.max(maxSum, sum);
  }
  return maxSum;
}

// let arr = [-1, 2, 3, 3, 4, 5, -1];
// let res = constantWindowBrute(arr, 4);
// let res = constantWindowOptimal(arr, 4);
// let res = constantWindow(arr, 4);
// console.log(res);

// 2) longest subarray / substring with sum <= k

// Brute => generate all subarray
function longestSubarraySumBrute(arr, k) {
  let n = arr.length;
  let maxLen = 0;
  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = 0; j < n; j++) {
      sum += arr[j];
      if (sum <= k) {
        maxLen = Math.max(maxLen, j - i + 1);
      } else if (sum > k) {
        break;
      }
    }
  }
  return maxLen;
}

// better
function longestSubarraySumBetter(arr, k) {
  let n = arr.length;
  let left = 0;
  let right = 0;
  let sum = 0;
  let maxLen = 0;
  let startIndex = 0;
  let endIndex = 0;
  while (right < n) {
    sum += arr[right];
    while (sum > k) {
      sum = sum - arr[left];
      left++;
    }
    if (sum <= k && right - left + 1 > maxLen) {
      maxLen = right - left + 1;
      startIndex = left;
      endIndex = right;
    }
    right++;
  }
  return { maxLen: maxLen, position: [startIndex, endIndex] };
}

// Optimal
function longestSubarraySum(arr, k) {
  let n = arr.length;
  let left = 0;
  let right = 0;
  let sum = 0;
  let maxLen = 0;
  let startIndex = 0;
  let endIndex = 0;
  while (right < n) {
    sum += arr[right];
    if (sum > k) {
      sum = sum - arr[left];
      left++;
    }
    if (sum <= k && right - left + 1 > maxLen) {
      maxLen = right - left + 1;
      startIndex = left;
      endIndex = right;
    }
    right++;
  }
  return { maxLen: maxLen, position: [startIndex, endIndex] };
}

// let arr = [2, 5, 1, 7, 10];
// let res = longestSubarraySumBrute(arr, 14);
// let res = longestSubarraySumBetter(arr, 14);
// let res = longestSubarraySum(arr, 14);
// console.log(res);
