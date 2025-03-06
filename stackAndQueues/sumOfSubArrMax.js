// sum of subarray maximum

function sumOfSubArrMaxBrute(arr) {
  let n = arr.length;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    let maxi = arr[i];
    for (let j = i; j < n; j++) {
      maxi = Math.max(maxi, arr[j]);
      sum = sum + maxi;
    }
  }
  return sum;
}

// Optimal
function sumOfSubArrMax(arr) {
  let sum = 0;
  let n = arr.length;
  let nge = findNGE(arr);
  let pge = findPGE(arr);
  for (let i = 0; i < n; i++) {
    let left = i - pge[i];
    let right = nge[i] - i;
    sum = sum + right * left * arr[i];
  }
  return sum;
}

// find next greater element
function findNGE(arr) {
  let n = arr.length;
  let nge = [];
  let stack = [];
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && arr[stack[stack.length - 1]] <= arr[i]) {
      stack.pop();
    }
    nge[i] = stack.length == 0 ? n : stack[stack.length - 1];
    stack.push(i);
  }
  return nge;
}

// find previous greater element
function findPGE(arr) {
  let n = arr.length;
  let stack = [];
  let pge = [];
  for (let i = 0; i < n; i++) {
    while (stack.length && arr[stack[stack.length - 1]] < arr[i]) {
      stack.pop();
    }
    pge[i] = stack.length == 0 ? -1 : stack[stack.length - 1];
    stack.push(i);
  }
  return pge;
}

let arr = [1, 3, 2];
// let res = sumOfSubArrMaxBrute(arr);
let res = sumOfSubArrMax(arr);
console.log(res);
