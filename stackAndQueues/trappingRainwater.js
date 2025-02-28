// trapping rain water

function trapBrute(arr) {
  let total = 0;
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let left = leftMax(arr, i);
    let right = rightMax(arr, i);
    let water = Math.min(left, right) - arr[i];
    if (water > 0) {
      total += water;
    }
  }
  return total;
}

function leftMax(arr, ind) {
  let maxLeft = 0;
  for (let i = 0; i <= ind; i++) {
    maxLeft = Math.max(maxLeft, arr[i]);
  }
  return maxLeft;
}

function rightMax(arr, ind) {
  let maxRight = 0;
  for (let i = ind; i < arr.length; i++) {
    maxRight = Math.max(maxRight, arr[i]);
  }
  return maxRight;
}

let arr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
let res = trapBrute(arr);
console.log(res);
