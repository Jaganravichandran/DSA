// combination sum II

function findCombinationBrute(index, arr, target, ds, ans) {
  // Base condition
  if (index == arr.length) {
    if (target == 0) {
      ans.push([...ds]);
    }
    return;
  }
  // Pick case
  if (arr[index] <= target) {
    ds.push(arr[index]);
    findCombinationBrute(index + 1, arr, target - arr[index], ds, ans);
    ds.pop();
  }

  // Not pick case
  findCombinationBrute(index + 1, arr, target, ds, ans);
}

function printAllCombationSumBrute(arr, target) {
  arr.sort((a, b) => a - b);
  let ds = [];
  let ans = [];
  findCombinationBrute(0, arr, target, ds, ans);
  // Use Set to remove duplicates
  let uniqueSet = new Set(ans.map((comb) => comb.join(",")));
  let uniqueCombinations = Array.from(uniqueSet, (str) =>
    str.split(",").map(Number)
  );

  // Convert back to array of arrays
  return uniqueCombinations;
}

function findCombinationOptimal(index, arr, target, ds, ans) {
  if (target == 0) {
    ans.push([...ds]);
    return;
  }
  for (let i = index; i < arr.length; i++) {
    if (i > index && arr[i] == arr[i - 1]) {
      continue;
    }
    if (arr[i] > target) {
      break;
    }
    ds.push(arr[i]);
    findCombinationOptimal(i + 1, arr, target - arr[i], ds, ans);
    ds.pop();
  }
}
function printAllCombationSumOptimal(arr, target) {
  arr.sort((a, b) => a - b);
  let ds = [];
  let ans = [];
  findCombinationOptimal(0, arr, target, ds, ans);
  return ans;
}

let arr = [10, 1, 2, 7, 6, 1, 5];
let target = 8;
// let result = printAllCombationSumBrute(arr, target); // Time limit exceeded
let result = printAllCombationSumOptimal(arr, target);
console.log(result);
