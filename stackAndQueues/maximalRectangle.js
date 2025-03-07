// maximal rectangle

function maximalRectangleArea(mat) {
  let n = mat.length;
  let m = mat[0].length;
  let maxArea = 0;
  let prefixSum = new Array(n).fill().map((elt) => Array(m).fill("0"));
  for (let j = 0; j < m; j++) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
      sum += Number(mat[i][j]);
      if (mat[i][j] == "0") sum = 0;
      prefixSum[i][j] = sum;
    }
  }
  for (let i = 0; i < n; i++) {
    let area = largestRectangleArea(prefixSum[i]);
    maxArea = Math.max(maxArea, area);
  }
  return maxArea;
}

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

let mat = [
  ["1", "0", "1", "0", "0"],
  ["1", "0", "1", "1", "1"],
  ["1", "1", "1", "1", "1"],
  ["1", "0", "0", "1", "0"],
];

let res = maximalRectangleArea(mat);
console.log(res);
