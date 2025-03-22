//  Jump Game II

// Brute
function jumpGameBrute(arr) {
  let n = arr.length;
  let result = helper(0, arr, 0, n);
  return result;
}

function helper(ind, arr, jumps, n) {
  if (ind >= n - 1) {
    return jumps;
  }
  let mini = Number.MAX_SAFE_INTEGER;
  for (let i = 1; i <= arr[ind]; i++) {
    mini = Math.min(mini, helper(ind + i, arr, jumps + 1, n));
  }
  return mini;
}

// Optimal
function jumpGame(arr) {
  let n = arr.length;
  let jumps = 0,
    left = 0,
    right = 0;
  while (right < n - 1) {
    let farthest = 0;
    for (let i = left; i <= right; i++) {
      farthest = Math.max(farthest, i + arr[i]);
    }
    left = right + 1;
    right = farthest;
    jumps = jumps + 1;
  }
  return jumps;
}

// Optimal 2
function jumpGame2(arr) {
  let n = arr.length;
  let jumps = 0,
    left = 0,
    right = 0;
  for (let i = 0; i < n - 1; i++) {
    right = Math.max(right, arr[i] + i);
    if (left == i) {
      jumps++;
      left = right;
    }
  }
  return jumps;
}

let arr = [2, 3, 1, 1, 4];
// let res = jumpGameBrute(arr);
// let res = jumpGame(arr);
let res = jumpGame2(arr);
console.log(res);
