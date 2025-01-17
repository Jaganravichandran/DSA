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

let arr = [13, 46, 24, 52, 20, 9];
// let arr2 = [2, 3, 5, 15, 20];
// let ans = selectionSort(arr);
let ans = insertionSort(arr);
console.log(ans);
