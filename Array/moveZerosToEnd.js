// Move Zeros to end

function moveZerosToEndBrute(arr) {
  let n = arr.length;
  let temp = [];
  for (let i = 0; i < n; i++) {
    if (arr[i] != 0) {
      temp.push(arr[i]);
    }
  }
  let x = temp.length;
  for (let i = 0; i < x; i++) {
    arr[i] = temp[i];
  }
  for (let i = x; i < n; i++) {
    arr[i] = 0;
  }
  return arr;
}

function moveZerosToEndOptimal(arr) {
  let n = arr.length;
  let j = -1;
  for (let i = 0; i < n; i++) {
    if (arr[i] == 0) {
      j = i;
      break;
    }
    if (arr[i] != 0) {
      return arr;
    }
  }
  if (j == -1) {
    return arr;
  }
  for (let i = j + 1; i < n; i++) {
    if (arr[i] != 0) {
      let temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
      j++;
    }
  }
  return arr;
}

// let arr = [1, 0, 2, 3, 2, 0, 0, 4, 5, 1];
let arr = [1];
// let result = moveZerosToEndBrute(arr);
let result = moveZerosToEndOptimal(arr);
console.log(result);
