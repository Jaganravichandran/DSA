// Pascal's Triangle

// 1) Given Row and Col, tell the element at that place Row =5, Col=3

// Brute
function factorial(n) {
  if (n == 0) return 1;
  return n * factorial(n - 1);
}

function NCRBrute(n, r) {
  let n1 = factorial(n);
  let d1 = factorial(r - 1);
  let d2 = factorial(n - 1 - (r - 1));
  let res = n1 / (d1 * d2);
  return res;
}

// Optimal
function NCR(n, r) {
  let row = n - 1;
  let col = r - 1;
  let res = 1;
  for (let i = 0; i < col; i++) {
    res = res * (row - i);
    res = res / (i + 1);
  }
  return res;
}

// let res = NCRBrute(4, 2);
// let res = NCR(4, 2);
// console.log(res);

// 2) Print any Nth row of pascals triangle

// Brute
function nthRowBrute(row) {
  let ans = [];
  for (let col = 1; col <= row; col++) {
    let elt = NCR(row, col);
    ans.push(elt);
  }
  return ans;
}

// Optimal
function pascalsTriangleRow(row) {
  let ansRow = [];
  let val = 1;
  ansRow.push(val);

  for (let col = 1; col < row; col++) {
    val = val * (row - col);
    val = val / col;
    ansRow.push(val);
  }
  return ansRow;
}

// let res = nthRowBrute(3);
// let res = pascalsTriangleRow(2);
// console.log(res);

// Given N , print the entire pascals triangle

// Brute
function pascalsTriangleBrute(n) {
  let ans = [];
  for (let row = 1; row <= n; row++) {
    let temp = [];
    for (let col = 1; col <= row; col++) {
      temp.push(NCR(row, col));
    }
    ans.push(temp);
  }
  return ans;
}

// Optimal
function pascalsTriangle(n) {
  let ans = [];
  for (let row = 1; row <= n; row++) {
    ans.push(pascalsTriangleRow(row));
  }
  return ans;
}

// let res = pascalsTriangleBrute(5);
let res = pascalsTriangle(5);
console.log(res);
