// candy

// Brute
function candyBrute(arr) {
  let n = arr.length;
  let left = new Array(n);
  let right = new Array(n);
  left[0] = 1;
  right[n - 1] = 1;
  for (let i = 1; i < n; i++) {
    if (arr[i] > arr[i - 1]) {
      left[i] = left[i - 1] + 1;
    } else {
      left[i] = 1;
    }
  }

  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] > arr[i + 1]) {
      right[i] = right[i + 1] + 1;
    } else {
      right[i] = 1;
    }
  }

  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += Math.max(left[i], right[i]);
  }
  return sum;
}

// Better
function candyBetter(arr) {
  let n = arr.length;
  let left = new Array(n);
  left[0] = 1;
  for (let i = 1; i < n; i++) {
    if (arr[i] > arr[i - 1]) {
      left[i] = left[i - 1] + 1;
    } else {
      left[i] = 1;
    }
  }

  let current = 1;
  let right = 1;
  let sum = Math.max(1, left[n - 1]);
  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] > arr[i + 1]) {
      current = right + 1;
      right = current;
    } else {
      current = 1;
      right = 1;
    }
    sum += Math.max(left[i], current);
  }

  return sum;
}

// Optimal
function candy(arr) {
  let n = arr.length;
  let i = 1;
  let sum = 1;
  while (i < n) {
    if (arr[i] == arr[i - 1]) {
      sum = sum + 1;
      i++;
      continue;
    }
    let peak = 1;
    while (i < n && arr[i] > arr[i - 1]) {
      peak = peak + 1;
      sum += peak;
      i++;
    }
    let down = 1;
    while (i < n && arr[i] < arr[i - 1]) {
      sum += down;
      down++;
      i++;
    }
    if (down > peak) {
      sum += down - peak;
    }
  }
  return sum;
}

let arr = [1, 2, 3];
// let res = candyBrute(arr);
// let res = candyBetter(arr);
let res = candy(arr);
console.log(res);
