// Left Rotate array by one place

function leftRotateBy1(arr) {
  let temp = arr[0];
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    arr[i - 1] = arr[i];
  }
  arr[n - 1] = temp;
  return arr;
}

// let arr = [1, 2, 3, 4, 5];
// let result = leftRotateBy1(arr);
// console.log(result);

function leftRotateByD(arr, d) {
  let n = arr.length;
  if (d > n) {
    d = d % n;
  }
  let temp = [];
  for (let i = 0; i < d; i++) {
    temp.push(arr[i]);
  }
  //   Shifting
  for (let i = d; i < n; i++) {
    arr[i - d] = arr[i];
  }
  // Put Back temp
  let index = n - d;
  //   let j = 0;
  for (let i = index; i < n; i++) {
    // arr[i] = temp[j];
    // j++;
    arr[i] = temp[i - index];
  }
  return arr;
}

function optimalLeftRotateByD(arr, d) {
  let n = arr.length;
  if (d > n) {
    d = d % n;
  }
  reverse(arr, 0, d - 1);
  reverse(arr, d, n - 1);
  reverse(arr, 0, n - 1);
  return arr;
}

function reverse(arr, start, end) {
  while (start <= end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

let arr = [1, 2, 3, 4, 5, 6, 7];
// let result = leftRotateByD(arr, 6);
let result = optimalLeftRotateByD(arr, 55);
console.log(result);
