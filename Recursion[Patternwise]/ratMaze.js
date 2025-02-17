// Rat in a Maze

function findPathHelperBrute(i, j, mat, n, ans, move, visited) {
  // Base condition
  if (i == n - 1 && j == n - 1) {
    ans.push(move);
    return;
  }

  // Mark current cell as visited
  visited[i][j] = 1;

  // down
  if (i + 1 < n && !visited[i + 1][j] && mat[i + 1][j] == 1) {
    visited[i][j] = 1;
    findPathHelperBrute(i + 1, j, mat, n, ans, move + "D", visited);
    visited[i][j] = 0;
  }

  // left
  if (j - 1 >= 0 && !visited[i][j - 1] && mat[i][j - 1] == 1) {
    visited[i][j] = 1;
    findPathHelperBrute(i, j - 1, mat, n, ans, move + "L", visited);
    visited[i][j] = 0;
  }

  // right
  if (j + 1 < n && !visited[i][j + 1] && mat[i][j + 1] == 1) {
    visited[i][j] = 1;
    findPathHelperBrute(i, j + 1, mat, n, ans, move + "R", visited);
    visited[i][j] = 0;
  }

  // up
  if (i - 1 >= 0 && !visited[i - 1][j] && mat[i - 1][j] == 1) {
    visited[i][j] = 1;
    findPathHelperBrute(i - 1, j, mat, n, ans, move + "U", visited);
    visited[i][j] = 0;
  }

  // unmark current cell as visited before returing (backtracking step)
  visited[i][j] = 0;
}

function findPathBrute(mat) {
  let n = mat.length;
  let ans = [];

  // Method 1 ==> using new Array() --> create new Array on each element(n) and fill 0 on each element(n)
  // let visited = new Array(n);
  // for (let i = 0; i < n; i++) {
  //   visited[i] = new Array(n).fill(0);
  // }

  // Method 2 ==> using Array.from() --> 1st parameter is object (length) and 2nd is mapFunction
  let visited = Array.from({ length: n }, () => Array(n).fill(0));
  if (mat[0][0] == 1) {
    visited[0][0] = 1; // Mark starting position as visited
    findPathHelperBrute(0, 0, mat, n, ans, "", visited);
  }
  return ans;
}

function findPathOptimal(mat) {
  let n = mat.length;
  let ans = [];
  let visited = Array.from({ length: n }, () => Array(n).fill(0));
  let di = [+1, 0, 0, -1];
  let dj = [0, -1, 1, 0];
  if (mat[0][0] == 1) {
    visited[0][0] = 1; // Mark starting position as visited
    findPathHelperOptimal(0, 0, mat, n, ans, "", visited, di, dj);
  }
  return ans;
}

function findPathHelperOptimal(i, j, mat, n, ans, move, visited, di, dj) {
  // Base condition
  if (i == n - 1 && j == n - 1) {
    ans.push(move);
    return;
  }

  let dir = "DLRU";

  // Mark current cell as visited
  visited[i][j] = 1;

  for (let ind = 0; ind < 4; ind++) {
    let nexti = i + di[ind];
    let nextj = j + dj[ind];
    if (
      nexti >= 0 &&
      nextj >= 0 &&
      nexti < n &&
      nextj < n &&
      !visited[nexti][nextj] &&
      mat[nexti][nextj] == 1
    ) {
      visited[i][j] = 1;
      findPathHelperOptimal(
        nexti,
        nextj,
        mat,
        n,
        ans,
        move + dir[ind],
        visited,
        di,
        dj
      );
      visited[i][j] = 0;
    }
  }

  // unmark current cell as visited before returing (backtracking step)
  visited[i][j] = 0;
}

let mat = [
  [1, 0, 0, 0],
  [1, 1, 0, 1],
  [1, 1, 0, 0],
  [0, 1, 1, 1],
];
// let result = findPathBrute(mat);
let result = findPathOptimal(mat);
console.log(result);
