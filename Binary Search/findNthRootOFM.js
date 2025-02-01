// find Nth root of M

// linear search TC -> O(m log n)
function findNthRoot(n, m) {
  for (let i = 1; i <= m; i++) {
    let val = powerExponential(i, n);
    if (val == m) {
      return i;
    } else if (val > m) {
      break;
    }
  }
  return -1;
}

function powerExponential(i, n) {
  let result = 1;
  if (n == 0) return 1;
  while (n > 0) {
    if (n % 2 != 0) result *= i;
    i *= i;
    n = Math.floor(n / 2);
  }
  return result;
}

// Binary Search

function NthRoot(n, m) {
  let low = 1;
  let high = m;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let val = powerExponential(mid, n);
    if (val == m) {
      return mid;
    } else if (val > m) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}

// overflow cases
function overflowCase(mid, n, m) {
  let ans = 1;
  for (let i = 1; i <= n; i++) {
    ans = ans * mid;
    if (ans > m) return 2;
  }
  if (ans === m) return 1;
  return 0;
}

function NthRootOverflow(n, m) {
  let low = 1;
  let high = m;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let val = overflowCase(mid, n, m);
    if (val === 1) {
      return mid;
    } else if (val === 0) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

// let result = findNthRoot(4, 81);
// let result = NthRoot(4, 69);
let result = NthRootOverflow(3, 27);
console.log(result);
