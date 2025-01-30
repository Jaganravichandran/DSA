// Find out how many times has an array been rotated

// unique elements
function findArrayRotationCount(arr) {
  let n = arr.length;
  let low = 0;
  let high = n - 1;
  let index = -1;
  let ans = Number.MAX_SAFE_INTEGER;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    // If the search space is already sorted then
    // arr[low] will be always smaller in that search space
    if (arr[low] <= arr[high]) {
      if (arr[low] < ans) {
        ans = arr[low];
        index = low;
      }
      break;
    }

    // sorted property (1 <= 2 <= 3) => Identify which side is sorted (left/right)
    if (arr[low] <= arr[mid]) {
      if (arr[low] < ans) {
        ans = arr[low];
        index = low;
      }
      low = mid + 1;
    } else {
      if (arr[mid] < ans) {
        ans = arr[mid];
        index = mid;
      }
      high = mid - 1;
    }
  }
  return index;
}

// duplicate elements

function findDuplicateArrayRotationCount(arr, x) {
  let n = arr.length;
  let low = 0;
  let high = n - 1;
  let index = -1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] == x) {
      index = mid;
      return index;
    }
    // Edge case:
    if (arr[low] == arr[mid] && arr[mid] == arr[high]) {
      low = low + 1;
      high = high - 1;
      continue;
    }
    // identify the sorted half (left/right)
    // sorted property (1 < 2 < 3)
    if (arr[low] <= arr[mid]) {
      if (arr[low] <= x && x <= arr[mid]) {
        index = low;
        high = mid - 1;
      } else {
        index = low;
        low = mid + 1;
      }
    } else {
      if (arr[mid] <= x && x <= arr[high]) {
        index = mid;
        low = mid + 1;
      } else {
        index = mid;
        high = mid - 1;
      }
    }
  }
  return index;
}
// let arr = [3, 4, 5, 1, 2];
let arr = [3, 4, 5, 5, 0, 1, 2, 2, 3, 3];
// let result = findArrayRotationCount(arr);
let result = findDuplicateArrayRotationCount(arr, 0);
console.log(result);
