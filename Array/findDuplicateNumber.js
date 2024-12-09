// Find the One Duplicate Number

// Tortoise method

function findDuplicate(nums) {
  let slow = nums[0];
  let fast = nums[0];
  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow != fast);

  fast = nums[0];
  while (slow != fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return slow;
}

const nums = [1, 2, 2, 3, 4];
const ans = findDuplicate(nums);
console.log(ans);

// node findDuplicateNumber.js
