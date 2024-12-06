// Maximum Subarray Sum

// Kadane's Algorithm

function maxSubArraySum(nums) {
  let sum = 0;
  let n = nums.length;
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
    sum += nums[i];

    if (sum > max) {
      max = sum;
    }

    if (sum < 0) {
      sum = 0;
    }
  }
  return max;
}

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const ans = maxSubArraySum(nums);

console.log(ans);
