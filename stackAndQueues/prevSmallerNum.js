// Previour smaller number

function prevSmallerNumBrute(arr) {
  let n = arr.length;
  let ans = new Array(n).fill(-1);
  for (let i = 0; i < n; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] < arr[i]) {
        ans[i] = arr[j];
        break;
      }
    }
  }
  return ans;
}

// Optimal
function prevSmallerNum(arr) {
  let n = arr.length;
  let stack = [];
  let ans = new Array(n).fill(-1);
  for (let i = 0; i < n; i++) {
    while (stack.length && stack[stack.length - 1] >= arr[i]) {
      stack.pop();
    }
    if (stack.length == 0) {
      ans[i] = -1;
    } else {
      ans[i] = stack[stack.length - 1];
    }
    stack.push(arr[i]);
  }
  return ans;
}

let arr = [1, 5, 0, 3, 4, 5]; // -1 1 -1 0 3 4
// let res = prevSmallerNumBrute(arr);
let res = prevSmallerNum(arr);
console.log(res);
