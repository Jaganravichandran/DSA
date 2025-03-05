// sum of subarray minimums

function sumSubArrayMinsBrute(arr) {
  let n = arr.length;
  let sum = 0;
  let mod = 1e9 + 7;

  for (let i = 0; i < n; i++) {
    let min = arr[i];
    for (let j = i; j < n; j++) {
      min = Math.min(min, arr[j]);
      sum = (sum + min) % mod;
    }
  }
  return sum;
}

// Optimal
function sumSubArrayMins(arr) {
  let n = arr.length;
  let total = 0;
  let mod = 1e9 + 7;
  let nse = findNSE(arr);
  let pse = findPSE(arr);
  for (let i = 0; i < n; i++) {
    let left = i - pse[i];
    let right = nse[i] - i;
    total = (total + ((right * left * arr[i]) % mod)) % mod;
  }
  return total;
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

let arr = [3, 1, 2, 4];
// let res = sumSubArrayMinsBrute(arr);
let res = sumSubArrayMins(arr);
console.log(res);
