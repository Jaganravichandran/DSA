// Next Permutation

function nextPermutation(nums) {
  let index = -1;
  let n = nums.length;
  for (let i = n - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      index = i;
      break;
    }
  }
  if (index === -1) {
    nums.reverse();
    return nums;
  }
  for (let i = n - 1; i > index; i--) {
    if (nums[i] > nums[index]) {
      [nums[i], nums[index]] = [nums[index], nums[i]];
      break;
    }
  }

  nums.splice(index + 1, n - index - 1, ...nums.slice(index + 1).reverse());
  return nums;
}

let nums = [1, 2, 3, 4, 5];
let ans = nextPermutation(nums);
console.log(ans);
