// <------x-----x----->

// Second Largest Element in the Array

// better approach
function secondLargest(arr) {
  let n = arr.length;
  let largest = arr[0];
  let secondLargest = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  for (let i = 0; i < n; i++) {
    if (arr[i] > secondLargest && arr[i] != largest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

function secondSmallest(arr) {
  let n = arr.length;
  let smallest = arr[0];
  let secondSmallest = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  for (let i = 0; i < n; i++) {
    if (arr[i] != smallest && arr[i] < secondSmallest) {
      secondSmallest = arr[i];
    }
  }
  return secondSmallest;
}

// Optimal approach

function getSecondLargest(arr) {
  let largest = arr[0];
  let secondLargest = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] != largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

function getSecondSmallest(arr) {
  let n = arr.length;
  let smallest = arr[0];
  let secondSmallest = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < n; i++) {
    if (arr[i] < smallest) {
      secondSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] != smallest && arr[i] < secondSmallest) {
      secondSmallest = arr[i];
    }
  }
  return secondSmallest;
}

let arr = [1, 2, 4, 7, 7, 5];
// let result = secondLargest(arr);
// let result = secondSmallest(arr);
// let result = getSecondLargest(arr);
let result = getSecondSmallest(arr);
console.log(result);

// <------x-----x----->
