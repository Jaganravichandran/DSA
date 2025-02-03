// Painter's Partition / split array - Largest sum

// Linear search
function painterPartitionBrute(arr, k) {
  if (k > arr.length) return -1;
  let sum = arr.reduce((acc, unit) => acc + unit, 0);
  let low = Math.max(...arr);
  let high = sum;
  for (let i = low; i <= high; i++) {
    let val = countPainter(arr, i);
    if (val <= k) {
      return i;
    }
  }
}

function countPainter(arr, units) {
  let n = arr.length;
  let painter = 1;
  let unit = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] + unit <= units) {
      unit += arr[i];
    } else {
      painter = painter + 1;
      unit = arr[i];
    }
  }
  return painter;
}

// Binary Search
function painterPartitionOptimal(arr, k) {
  if (k > arr.length) return -1;
  let sum = arr.reduce((acc, elt) => acc + elt, 0);
  let low = Math.max(...arr);
  let high = sum;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let val = countPainter(arr, mid);
    if (val <= k) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return low;
}
let arr = [10, 20, 30, 40];
// let result = painterPartitionBrute(arr, 2);
let result = painterPartitionOptimal(arr, 2);
console.log(result);
