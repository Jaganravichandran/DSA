// Largest rectangle area in histogram

function largestRectangleAreaBrute(arr) {
  let n = arr.length;
  let nse = findNSE(arr);
  let pse = findPSE(arr);
  let largestArea = 0;
  for (let i = 0; i < n; i++) {
    let length = arr[i];
    let width = nse[i] - pse[i] - 1;
    let area = length * width;
    largestArea = Math.max(largestArea, area);
  }

  return largestArea;
}

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

// Optimal
function largestRectangleArea(arr) {
  let n = arr.length;
  let stack = [];
  let largestArea = 0;
  for (let i = 0; i < n; i++) {
    while (stack.length && arr[stack[stack.length - 1]] > arr[i]) {
      let elt = stack.pop();
      let nse = i;
      let pse = stack.length == 0 ? -1 : stack[stack.length - 1];
      let area = arr[elt] * (nse - pse - 1);
      largestArea = Math.max(largestArea, area);
    }
    stack.push(i);
  }
  while (stack.length) {
    let elt = stack.pop();
    let nse = n;
    let pse = stack.length == 0 ? -1 : stack[stack.length - 1];
    let area = arr[elt] * (nse - pse - 1);
    largestArea = Math.max(largestArea, area);
  }
  return largestArea;
}

let arr = [2, 1, 5, 6, 2, 3];
// let res = largestRectangleAreaBrute(arr);
let res = largestRectangleArea(arr);
console.log(res);
