// Binary search

// Find X in sorted array

// iterative Approach
function findELement(arr, target) {
  let n = arr.length;
  let low = 0;
  let high = n - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] == target) {
      return mid;
    } else if (target > arr[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

// Recursive Approach
function findELementRecursive(arr, low, high, target) {
  if (low > high) {
    return -1;
  }
  let mid = Math.floor((low + high) / 2);
  if (arr[mid] == target) {
    return mid;
  } else if (target > arr[mid]) {
    return findELementRecursive(arr, mid + 1, high, target);
  }
  return findELementRecursive(arr, low, mid - 1, target);
}

let arr = [3, 4, 6, 7, 9, 12, 16, 17];
// let result = findELement(arr, 6);
let target = 6;
let low = 0;
let n = arr.length;
let result = findELementRecursive(arr, low, n - 1, target);
console.log(result);
