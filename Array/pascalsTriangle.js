// Pascal's Triangle

// 1) Given Row and Col, tell the element at that place Row =5, Col=3

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

// console.log(NCR(5, 3));

// 2) Print any Nth row of pascals triangle

function pascalsTriangleRow(row) {
  let ans = 1;
  let ansRow = [1];

  for (let col = 1; col < row; col++) {
    ans = ans * (row - col);
    ans = ans / col;
    ansRow.push(ans);
  }
  return ansRow;
}

// console.log(pascalsTriangleRow(5));

// Given N , print the entire pascals triangle

function pascalsTriangle(n) {
  let ans = [];
  for (let row = 1; row <= n; row++) {
    ans.push(pascalsTriangleRow(row));
  }
  return ans;
}

console.log(pascalsTriangle(5));
