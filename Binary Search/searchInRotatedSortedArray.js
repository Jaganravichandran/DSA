// Search element in rotated sorted array

function searchElement(arr, x) {
  let n = arr.length;
  let low = 0;
  let high = n - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] == x) {
      return mid;
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
  return -1; // In case, eLement is not present in an array
}

let arr = [7, 8, 9, 1, 2, 3, 4, 5, 6];
let result = searchElement(arr, 1);
console.log(result);
