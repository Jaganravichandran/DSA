// Find the peak element

// linear search
function peakElementBrute(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    if (
      (i == 0 || arr[i - 1] < arr[i]) &&
      (i == n - 1 || arr[i] > arr[i + 1])
    ) {
      return arr[i];
    }
  }
}

// Binary search
function peakElementBetter(arr) {
  let n = arr.length;
  if (n == 1) {
    return 0;
  }
  if (arr[0] > arr[1]) {
    return 0;
  }
  if (arr[n - 1] > arr[n - 2]) {
    return n - 1;
  }
  let low = 1;
  let high = n - 2;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
      return mid;
    } else if (arr[mid] > arr[mid + 1]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return 0;
}

let arr = [1, 5, 1, 2, 1]; //[1, 2, 3, 4, 5, 6, 7, 8, 5, 1]
// let result = peakElementBrute(arr);
let result = peakElementBetter(arr);
console.log(result);
