// Search element in rotated sorted array (Duplicates)

function searchElement(arr, x) {
  let n = arr.length;
  let low = 0;
  let high = n - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] == x) {
      return true;
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
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      if (arr[mid] <= x && x <= arr[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
  return false; // In case, eLement is not present in an array
}

let arr = [1, 0, 1, 1, 1]; // [6, 7, 1, 2, 2, 3, 3, 4, 4, 5]
let result = searchElement(arr, 0);
console.log(result);
