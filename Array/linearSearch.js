// Linear Search

// First occurence

function firstOccurence(arr, num) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    if (arr[i] == num) {
      return i;
    }
  }
  return -1;
}

function lastOccurence(arr, num) {
  let n = arr.length;
  for (let i = n - 1; i >= 0; i--) {
    if (arr[i] == num) {
      return i;
    }
  }
  return -1;
}

function howManyTimesOccurs(arr, num) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
      count += 1;
    }
  }
  return count;
}

let arr = [1, 2, 4, 3, 4, 5, 4, 6];
// let result = firstOccurence(arr, 4);
// let result = lastOccurence(arr, 4);
let result = howManyTimesOccurs(arr, 4);
console.log(result);
