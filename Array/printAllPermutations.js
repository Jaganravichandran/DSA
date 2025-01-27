// Print all permutation of Array/String

function permute(nums) {
  let n = nums.length;
  let ans = []; // Store the result (list of permutations)
  let ds = []; // Temporary list to hold the current permutation
  let arr = new Array(n).fill(0); // Frequency array to track used elements
  recurPermute(nums, ds, ans, arr); // Start the recursive backtracking
  return ans; // Return the list of all unique permutations
}

function recurPermute(nums, ds, ans, arr) {
  let n = arr.length;
  if (ds.length == n) {
    ans.push([...ds]); // Add the current permutation to the result
    return;
  }
  for (let i = 0; i < n; i++) {
    if (!arr[i]) {
      // Skip if the element is already used
      ds.push(nums[i]); // Include the element in the current permutation
      arr[i] = 1; // Mark this element as used
      recurPermute(nums, ds, ans, arr); // Recurse to the next level
      arr[i] = 0; // Backtrack by marking the element as unused
      ds.pop(); // Remove the last element from the current permutation
    }
  }
}

function permuteOptimal(nums) {
  let ans = []; // Store the result (list of permutations)
  recurPermuteOptimal(0, nums, ans); // Start the recursive backtracking
  return ans; // Return the list of all permutations
}

function recurPermuteOptimal(index, nums, ans) {
  let n = nums.length;
  if (index == n) {
    ans.push([...nums]); // Add the current permutation to the result
    return;
  }
  for (let i = index; i < n; i++) {
    [nums[index], nums[i]] = [nums[i], nums[index]]; // Swap elements to generate new permutation
    recurPermuteOptimal(index + 1, nums, ans); // Recurse to the next level
    [nums[index], nums[i]] = [nums[i], nums[index]]; // Backtrack by restoring the original list
  }
}

let nums = [1, 2, 3];
// let result = permute(nums);
let result = permuteOptimal(nums);
console.log(result);
