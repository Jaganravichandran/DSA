// Single elemenet in sorted array

// linear search
function findSingleElementBrute(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    // first element
    if (i == 0) {
      if (arr[i] != arr[i + 1]) {
        return arr[i];
      }
      // last element
    } else if (i == n - 1) {
      if (arr[i - 1] != arr[i]) {
        return arr[i];
      }
    } else {
      if (arr[i - 1] != arr[i] && arr[i] != arr[i + 1]) {
        return arr[i];
      }
    }
  }
}

function findSingleElementBetter(arr) {
  let n = arr.length;
  let xor = 0;
  for (let i = 0; i < n; i++) {
    xor = xor ^ arr[i];
  }
  return xor;
}

function findSingleElementOptimal(arr) {
  let n = arr.length;
  if (n == 1) return arr[0];
  if (arr[0] != arr[1]) {
    return arr[0];
  }
  if (arr[n - 1] != arr[n - 2]) {
    return arr[n - 1];
  }
  let low = 1;
  let high = n - 2;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    // check
    if (arr[mid] != arr[mid + 1] && arr[mid] != arr[mid - 1]) {
      return arr[mid];
    }
    // elimination

    // we are in left
    if (
      (mid % 2 == 1 && arr[mid - 1] == arr[mid]) ||
      (mid % 2 == 0 && arr[mid] == arr[mid + 1])
    ) {
      low = mid + 1;
    } // we are on right
    else {
      high = mid - 1;
    }
  }
  return -1;
}
let arr = [1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6];
// let result = findSingleElementBrute(arr);
// let result = findSingleElementBetter(arr);
let result = findSingleElementOptimal(arr);
console.log(result);
