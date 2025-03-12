// Majority Element

//   brute force TC: O(N^2)
function majorityElementBrute(nums) {
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = 0; j < n; j++) {
      if (nums[j] === nums[i]) {
        count++;
      }
    }
    if (count > Math.floor(n / 2)) {
      return nums[i];
    }
  }
  return -1;
}

//   better Solution TC: O(N log N) + O(N) SC: O(N)
function majorityElementBetter(nums) {
  let n = nums.length;
  const map = new Map();
  for (let i = 0; i < n; i++) {
    const num = nums[i];
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  }
  for (const [num, count] of map) {
    if (count > Math.floor(n / 2)) {
      return num;
    }
  }
  return -1;
}

// better optimised
function majorityElementBetterOptimised(nums) {
  let n = nums.length;
  const map = new Map();
  for (let i = 0; i < n; i++) {
    const num = nums[i];
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
    let min = Math.floor(n / 2) + 1;
    if (map.get(num) >= min) {
      return num;
    }
  }
  return -1;
}

// Optimal solution(Moore's Voting Algo) TC: O(N) SC: O(1)
function majorityElement(nums) {
  let n = nums.length;
  let count = 0;
  let element;

  // O(N)
  for (let i = 0; i < n; i++) {
    if (count === 0) {
      count = 1;
      element = nums[i];
    } else if (nums[i] == element) {
      count++;
    } else {
      count--;
    }
  }
  let count1 = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] == element) {
      count1++;
    }
  }
  if (count1 > Math.floor(n / 2)) {
    return element;
  }
  return -1;
}

const nums = [2, 2, 3, 3, 1, 2, 2];
// const res = majorityElementBrute(nums);
// const res = majorityElementBetter(nums);
// const res = majorityElementBetterOptimised(nums);
const res = majorityElement(nums);
console.log(res);

// node majorityElement.js
