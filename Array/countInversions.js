// count inversions

function countInversionBrute(arr) {
  let n = arr.length;
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[i]) {
        count++;
      }
    }
  }
  return count;
}

// optimal
function mergeSort(arr, low, high) {
  let count = 0;
  if (low >= high) {
    return count;
  }
  let mid = Math.floor((low + high) / 2);
  count += mergeSort(arr, low, mid);
  count += mergeSort(arr, mid + 1, high);
  count += merge(arr, low, mid, high);
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

function countInversion(arr) {
  let n = arr.length;
  let ans = mergeSort(arr, 0, n - 1);
  return ans;
}

let arr = [5, 3, 2, 4, 1];
// let res = countInversionBrute(arr);
let res = countInversion(arr);
console.log(res);
