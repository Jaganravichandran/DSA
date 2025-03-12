// Majority Element (> n/3 times)

// Brute Force TC: O(N^2) SC: O(1)
function findMajorityElementBrute(nums) {
  let list = [];
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    if (list.length === 0 || list[0] != nums[i]) {
      let count = 0;
      for (let j = 0; j < n; j++) {
        if (nums[j] == nums[i]) {
          count++;
        }
      }
      if (count > Math.floor(n / 3)) {
        list.push(nums[i]);
      }
    }
    if (list.length == 2) {
      break;
    }
  }
  return list;
}

// Better
function findMajorityElementBetter(nums) {
  let n = nums.length;
  let map = new Map();
  let list = [];
  for (let i = 0; i < n; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
  }
  for (let [num, count] of map) {
    if (count > Math.floor(n / 3)) {
      list.push(num);
    }
  }
  return list;
}

// better Optimised
function findMajorityElementBetterOptimised(nums) {
  let n = nums.length;
  let map = new Map();
  let list = [];
  let min = Math.floor(n / 3) + 1;
  for (let i = 0; i < n; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
    if (map.get(nums[i]) == min) {
      list.push(nums[i]);
    }
  }
  return list;
}

// Optimal
function findMajorityElement(nums) {
  let n = nums.length;
  let count1 = 0;
  let count2 = 0;
  let elt1, elt2;
  for (let i = 0; i < n; i++) {
    if (count1 == 0 && nums[i] != elt2) {
      count1 = 1;
      elt1 = nums[i];
    } else if (count2 == 0 && nums[i] != elt1) {
      count2 = 1;
      elt2 = nums[i];
    } else if (elt1 == nums[i]) {
      count1++;
    } else if (elt2 == nums[i]) {
      count2++;
    } else {
      count1--;
      count2--;
    }
  }

  let list = [];
  count1 = 0;
  count2 = 0;
  for (let i = 0; i < n; i++) {
    if (elt1 == nums[i]) {
      count1++;
    }
    if (elt2 == nums[i]) {
      count2++;
    }
  }
  let min = Math.floor(n / 3) + 1;
  if (count1 >= min) list.push(elt1);
  if (count2 >= min) list.push(elt2);
  return list;
}

const nums = [1, 1, 1, 3, 3, 2, 2, 2];
// const ans = findMajorityElementBrute(nums);
// const res = findMajorityElementBetter(nums);
// const res = findMajorityElementBetterOptimised(nums);
const res = findMajorityElement(nums);
console.log(res);

// node majorityElementInArray.js
