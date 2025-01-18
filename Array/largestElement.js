// Largest Element in the Array

function largestElement(arr) {
  let n = arr.length;
  let largest = arr[0];
  for (let i = 1; i < n; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

let arr = [3, 2, 1, 5, 2];
let result = largestElement(arr);
console.log(result);
