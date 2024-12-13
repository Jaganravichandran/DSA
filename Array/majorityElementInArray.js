// Majority Element (> n/3 times)

function findMajorityElement(nums) {
  // Brute Force TC: O(N^2) SC: O(1)
  //   let list = [];
  //   let n = nums.length;
  //   for (let i = 0; i < n; i++) {
  //     if (list.length === 0 || list[0] != nums[i]) {
  //       let count = 0;
  //       for (let j = 0; j < n; j++) {
  //         if (nums[j] == nums[i]) {
  //           count++;
  //         }
  //       }
  //       if (count > Math.floor(n / 3)) {
  //         list.push(nums[i]);
  //       }
  //     }
  //     if (list.length == 2) {
  //       break;
  //     }
  //   }
  //   return list;

  //   Optimal Algo
  let n = nums.length;
  let count1 = 0;
  let count2 = 0;
  let element1 = -Infinity;
  let element2 = -Infinity;

  for (let i = 0; i < n; i++) {
    if (count1 === 0 && nums[i] != element2) {
      count1 = 1;
      element1 = nums[i];
    } else if (count2 === 0 && nums[i] != element1) {
      count2 = 1;
      element2 = nums[i];
    } else if (nums[i] == element1) {
      count1++;
    } else if (nums[i] == element2) {
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
    if (element1 === nums[i]) count1++;
    if (element2 === nums[i]) count2++;
  }
  let min = Math.floor(n / 3) + 1;
  if (count1 >= min) {
    list.push(element1);
  }
  if (count2 >= min) {
    list.push(element2);
  }
  list.sort();
  return list;
}

const nums = [1, 1, 1, 3, 3, 2, 2, 2];
const ans = findMajorityElement(nums);
console.log(ans);

// node majorityElementInArray.js
