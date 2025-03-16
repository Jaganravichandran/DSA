// reverse pairs

// Brute
function reversePairsBrute(arr) {
  let n = arr.length;
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] > 2 * arr[j]) {
        count++;
      }
    }
  }
  return count;
}

// Optimal
function mergeSort(arr, low, high) {
  let count = 0;
  if (low >= high) {
    return count;
  }
  let mid = Math.floor((low + high) / 2);
  count += mergeSort(arr, low, mid);
  count += mergeSort(arr, mid + 1, high);
  count += countPairs(arr, low, mid, high);
  merge(arr, low, mid, high);
  return count;
}

function countPairs(arr, low, mid, high) {
  let count = 0;
  let right = mid + 1;
  for (let i = low; i <= mid; i++) {
    while (right <= high && arr[i] > 2 * arr[right]) {
      right++;
    }
    count = count + (right - (mid + 1));
  }
  return count;
}

function merge(arr, low, mid, high) {
  let temp = [];
  let left = low;
  let right = mid + 1;
  let count = 0;
  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      count += mid - left + 1;
      right++;
    }
  }
  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }
  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }
  for (let i = low; i <= high; i++) {
    arr[i] = temp[i - low];
  }
  return count;
}

function reversePairs(arr) {
  let n = arr.length;
  return mergeSort(arr, 0, n - 1);
}

let arr = [40, 25, 19, 12, 9, 6, 2];
// let res = reversePairsBrute(arr);
let res = reversePairs(arr);
console.log(res);
