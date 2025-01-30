// find first and last occurrence of x

function lowerBound(arr, x) {
  let n = arr.length;
  let low = 0;
  let high = n - 1;
  let ans = n;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] >= x) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
}

function upperBound(arr, x) {
  let n = arr.length;
  let low = 0;
  let high = n - 1;
  let ans = n;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] > x) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
}

function findOccurrence(arr, target) {
  let n = arr.length;
  let lb = lowerBound(arr, target);

  // edge cases
  if (lb == n || arr[lb] != target) {
    return [-1, -1];
  }
  return [lb, upperBound(arr, target) - 1];
}

let arr = [2, 4, 6, 8, 8, 8, 11, 13];
let result = findOccurrence(arr, 14);
console.log(result);
