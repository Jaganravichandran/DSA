// Combination sum

function findCombination(index, arr, target, ds, ans) {
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
    findCombination(index, arr, target - arr[index], ds, ans);
    ds.pop();
  }

  // Not pick case
  findCombination(index + 1, arr, target, ds, ans);
}

function printAllCombationSum() {
  let arr = [2, 3, 6, 7];
  let target = 7;
  let ds = [];
  let ans = [];
  findCombination(0, arr, target, ds, ans);
  return ans;
}

let result = printAllCombationSum();
console.log(result);
