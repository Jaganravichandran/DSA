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

// Plain Binary Search

function findOccurrenceStandard(arr, x) {
  let first = firstOccurrence(arr, x);
  if (first == -1) {
    return [-1, -1];
  }
  let last = lastOccurrence(arr, x);
  return [first, last];
}

function firstOccurrence(arr, x) {
  let n = arr.length;
  let low = 0;
  let high = n - 1;
  let first = -1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] == x) {
      first = mid;
      high = mid - 1;
    } else if (arr[mid] < x) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return first;
}

function lastOccurrence(arr, x) {
  let n = arr.length;
  let low = 0;
  let high = n - 1;
  let last = -1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] == x) {
      last = mid;
      low = mid + 1;
    } else if (arr[mid] < x) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return last;
}

// let arr = [2, 8, 8, 8, 8, 8, 11, 13];
// let result = findOccurrence(arr, 14);
// let result = findOccurrenceStandard(arr, 10);

// follow up question => count occurrence in array (Hint => last - first + 1)
let arr = [1, 1, 2, 2, 2, 2, 3, 3];
let first = firstOccurrence(arr, 2);
let last = lastOccurrence(arr, 2);
let result = last - first + 1;
console.log(first);
console.log(last);
console.log(result);
