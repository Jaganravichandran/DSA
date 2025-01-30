// Minimum in rotated sorted array

function findMinimum(arr) {
  let n = arr.length;
  let low = 0;
  let high = n - 1;
  let ans = Number.MAX_SAFE_INTEGER;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    // If the search space is already sorted then
    // arr[low] will be always smaller in that search space
    if (arr[low] <= arr[high]) {
      ans = Math.min(ans, arr[low]);
      break;
    }

    // sorted property (1 <= 2 <= 3) => Identify which side is sorted (left/right)
    if (arr[low] <= arr[mid]) {
      ans = Math.min(ans, arr[low]);
      low = mid + 1;
    } else {
      ans = Math.min(ans, arr[mid]);
      high = mid - 1;
    }
  }
  return ans;
}

let arr = [3, 4, 5, 1, 2]; //[6, 7, 0, 1, 2, 3, 4, 5]
let result = findMinimum(arr);
console.log(result);
