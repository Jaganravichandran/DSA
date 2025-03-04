// count of smaller numbers after self

function countSmallerNumBrute(arr) {
  let n = arr.length;
  let countArr = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[i]) {
        count++;
      }
    }
    countArr[i] = count;
  }
  return countArr;
}

// better => using fenwick tree
class FenwickTree {
  constructor(size) {
    this.size = size;
    this.tree = new Array(size + 1).fill(0);
  }

  update(index, val) {
    while (index <= this.size) {
      this.tree[index] += val;
      index += index & -index;
    }
  }

  prefixSum(index) {
    let sum = 0;
    while (index > 0) {
      sum += this.tree[index];
      index -= index & -index;
    }
    return sum;
  }
}

function countSmallerNumBetter(arr) {
  let n = arr.length;
  let sortedArr = [...arr].sort((a, b) => a - b);
  let rankMap = new Map();
  let rank = 1;
  for (let num of sortedArr) {
    if (!rankMap.has(num)) {
      rankMap.set(num, rank++);
    }
  }
  let bit = new FenwickTree(n);
  let ans = new Array(n).fill(0);
  for (let i = n - 1; i >= 0; i--) {
    let compressedIndex = rankMap.get(arr[i]);
    ans[i] = bit.prefixSum(compressedIndex - 1);
    bit.update(compressedIndex, 1);
  }

  return ans;
}

// Optimal => using merge sort
function countSmallerNum(arr) {
  let n = arr.length;
  let indexedArr = [];
  for (let i = 0; i < n; i++) {
    indexedArr.push([arr[i], i]);
  }
  let ans = new Array(n).fill(0);
  mergeSort(indexedArr, 0, n - 1, ans);
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
    if (arr[right][0] < arr[left][0]) {
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

let arr = [5, 2, 6, 1]; //[4,1,3,2]
// let res = countSmallerNumBrute(arr);
// let res = countSmallerNumBetter(arr);
let res = countSmallerNum(arr);
console.log(res);
