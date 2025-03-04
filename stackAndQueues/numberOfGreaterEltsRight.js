// number of greater elements to the right

function countGreaterNumBrute(arr, indices) {
  let n = arr.length;
  let countArr = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] > arr[i]) {
        count++;
      }
    }
    countArr[i] = count;
  }
  let ans = [];
  for (let i = 0; i < indices.length; i++) {
    ans.push(countArr[indices[i]]);
  }
  return ans;
}

// Optimal => using merge sort
function countGreaterNum(arr, indices) {
  let n = arr.length;
  let indexedArr = [];
  for (let i = 0; i < n; i++) {
    indexedArr.push([arr[i], i]);
  }
  let countArr = new Array(n).fill(0);
  mergeSort(indexedArr, 0, n - 1, countArr);
  let ans = [];
  for (let i = 0; i < indices.length; i++) {
    ans.push(countArr[indices[i]]);
  }
  return ans;
}

function mergeSort(arr, low, high, ans) {
  if (low >= high) return;
  let mid = Math.floor((low + high) / 2);
  mergeSort(arr, low, mid, ans);
  mergeSort(arr, mid + 1, high, ans);
  merge(arr, low, mid, high, ans);
}

function merge(arr, low, mid, high, ans) {
  let temp = [];
  let left = low;
  let right = mid + 1;
  let count = 0;
  while (left <= mid && right <= high) {
    if (arr[right][0] > arr[left][0]) {
      temp.push(arr[right]);
      count++;
      right++;
    } else {
      ans[arr[left][1]] += count;
      temp.push(arr[left]);
      left++;
    }
  }

  while (left <= mid) {
    ans[arr[left][1]] += count;
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
}

let indices = [0, 4];
let arr = [3, 4, 2, 7, 5, 8, 10, 6];
// let res = countGreaterNumBrute(arr, indices);
let res = countGreaterNum(arr, indices);
console.log(res);
