// Sorting

// Selection Sort

function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i <= n - 2; i++) {
    let mini = i;
    for (let j = i; j <= n - 1; j++) {
      if (arr[j] < arr[mini]) {
        mini = j;
      }
    }
    let temp = arr[mini];
    arr[mini] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

// Bubble Sort
function bubbleSort(arr) {
  let n = arr.length;
  // Optimising
  let didSwap = 0;
  for (let i = n - 1; i >= 1; i--) {
    for (let j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        didSwap = 1;
      }
    }
    if (didSwap == 0) {
      break;
    }
    console.log("runs");
  }
  return arr;
}

// Insertion Sort

function insertionSort(arr) {
  let n = arr.length;
  for (let i = 0; i <= n - 1; i++) {
    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      let temp = arr[j - 1];
      arr[j - 1] = arr[j];
      arr[j] = temp;
      j--;
    }
  }
  return arr;
}

// let arr = [13, 46, 24, 52, 20, 9];
// let arr2 = [2, 3, 5, 15, 20];
// let ans = selectionSort(arr);
// let ans = bubbleSort(arr);
// let ans = insertionSort(arr);
// console.log(ans);

// Merge Sort
function main(arr) {
  let n = arr.length;
  let low = 0;
  let high = n - 1;
  mergeDivide(arr, low, high);
  return arr;
}

function mergeDivide(arr, low, high) {
  if (low >= high) {
    return;
  }
  let mid = Math.floor((low + high) / 2);
  mergeDivide(arr, low, mid);
  mergeDivide(arr, mid + 1, high);
  mergeSort(arr, low, mid, high);
}

function mergeSort(arr, low, mid, high) {
  let temp = [];
  let left = low;
  let right = mid + 1;
  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
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
}

let arr = [3, 1, 2, 4, 1, 5, 6, 2, 4]; // [1,1,2,2,3,4,4,5,6]
let result = main(arr);
console.log(result);
