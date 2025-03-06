// sum of subarray ranges

function sumOfSubArrRangesBrute(arr) {
  let n = arr.length;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    let min = arr[i];
    let max = arr[i];
    for (let j = i; j < n; j++) {
      min = Math.min(min, arr[j]);
      max = Math.max(max, arr[j]);
      let range = max - min;
      sum += range;
    }
  }
  return sum;
}

// Optimal
function sumMax(arr) {
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

function sumMin(arr) {
  let n = arr.length;
  let total = 0;
  let nse = findNSE(arr);
  let pse = findPSE(arr);
  for (let i = 0; i < n; i++) {
    let left = i - pse[i];
    let right = nse[i] - i;
    total = total + right * left * arr[i];
  }
  return total;
}

// find next smaller element
function findNSE(arr) {
  let n = arr.length;
  let nse = new Array(n);
  let stack = [];
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && arr[stack[stack.length - 1]] >= arr[i]) {
      stack.pop();
    }
    nse[i] = stack.length == 0 ? n : stack[stack.length - 1];
    stack.push(i);
  }
  return nse;
}

// find previous smaller element
function findPSE(arr) {
  let n = arr.length;
  let pse = new Array(n);
  let stack = [];
  for (let i = 0; i < n; i++) {
    while (stack.length && arr[stack[stack.length - 1]] > arr[i]) {
      stack.pop();
    }
    pse[i] = stack.length == 0 ? -1 : stack[stack.length - 1];
    stack.push(i);
  }
  return pse;
}

function sumOfSubArrRanges(arr) {
  let maxSum = sumMax(arr);
  let minSum = sumMin(arr);
  return maxSum - minSum;
}

let arr = [4, -2, -3, 4, 1];
// let res = sumOfSubArrRangesBrute(arr);
let res = sumOfSubArrRanges(arr);
console.log(res);
