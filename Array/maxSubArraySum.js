// Maximum Subarray Sum

// Brute Force
function maxSubArraySumBrute(arr) {
  let n = arr.length;
  maxSum = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum += arr[j];
      maxSum = Math.max(maxSum, sum);
    }
  }
  return maxSum;
}

// Kadane's Algorithm

function maxSubArraySumOptimal(nums) {
  let sum = 0;
  let n = nums.length;
  let start = 0;
  let ansStart = -1;
  let ansEnd = -1;
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
    if (sum == 0) start = i;
    sum += nums[i];
    if (sum > max) {
      max = sum;
      ansStart = start;
      ansEnd = i;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  return [ansStart, ansEnd];
  // return max;
}

const nums = [-2, -3, 4, -1, -2, 1, 5, -3]; // [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// let ans = maxSubArraySumBrute(nums);
const ans = maxSubArraySumOptimal(nums);
console.log(ans);
