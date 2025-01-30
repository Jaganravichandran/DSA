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

    // sorted property (1 <= 2 <= 3) => Identify which side is sorted (low/high)
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

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    // If mid is the smallest element
    if (mid > 0 && arr[mid] < arr[mid - 1]) return mid;
    if (mid < high && arr[mid] > arr[mid + 1]) return mid + 1;

    // Handling duplicates
    if (arr[low] === arr[mid] && arr[mid] === arr[high]) {
      low++;
      high--;
      continue;
    }

    // If low half is sorted, move to the high half
    if (arr[low] <= arr[mid]) {
      low = mid + 1;
    } else {
      // Otherwise, move to the low half
      high = mid - 1;
    }
  }

  return 0; // If no rotation
}
// let arr = [3, 4, 5, 1, 2];
let arr = [3, 4, 5, 5, 0, 1, 2, 2, 3, 3];
// let result = findArrayRotationCount(arr);
let result = findDuplicateArrayRotationCount(arr, 0);
console.log(result);
