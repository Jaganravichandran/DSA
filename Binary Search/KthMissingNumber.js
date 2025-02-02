// Find Kth missing number

// linear search
function kthMissingNumBrute(arr, k) {
  let n = arr.length;
  let missingNum = k;
  for (let i = 0; i < n; i++) {
    if (arr[i] <= missingNum) {
      missingNum++;
    } else {
      break;
    }
  }
  return missingNum;
}

function kthMissingNumOptimal(arr, k) {
  let n = arr.length;
  if (n === 0) return k; // Edge case: empty array

  let low = 0;
  let high = n - 1;
  // If kth missing number is beyond the last element
  let missingCount = arr[high] - n;
  if (k > missingCount) return arr[high] + (k - missingCount); // (k + n) =>  because arr[high] cancelled
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let missingNum = arr[mid] - (mid + 1);
    if (missingNum < k) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return high + 1 + k;
}

let arr = [2, 3, 4, 7, 11];
// let result = kthMissingNumBrute(arr, 5);
let result = kthMissingNumOptimal(arr, 5);
console.log(result);
