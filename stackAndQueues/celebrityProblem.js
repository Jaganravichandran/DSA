// the celebrity problem

function celebrityProblemBrute(mat) {
  let n = mat.length;
  let knowMe = new Array(n).fill(0);
  let iKnow = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] == 1) {
        knowMe[j]++;
        iKnow[i]++;
      }
    }
  }
  for (let i = 0; i < n; i++) {
    if (knowMe[i] === n - 1 && iKnow[i] === 0) {
      return i;
    }
  }
  return -1;
}

// Optimal
function celebrityProblem(mat) {
  let n = mat.length;
  let top = 0;
  let down = n - 1;
  while (top < down) {
    if (mat[top][down] === 1) {
      top = top + 1;
    } else if (mat[down][top] === 1) {
      down = down - 1;
    } else {
      top++;
      down--;
    }
  }
  if (top > down) return -1;
  for (let i = 0; i < n; i++) {
    if (i == top) {
      continue;
    }
    if (mat[top][i] == 0 && mat[i][top] == 1) {
      continue;
    } else {
      return -1;
    }
  }
  return top;
}

let mat = [
  [0, 1, 1, 0],
  [0, 0, 0, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0],
];
// let res = celebrityProblemBrute(mat);
let res = celebrityProblem(mat);
console.log(res);
