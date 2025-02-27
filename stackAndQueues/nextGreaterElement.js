// Next Greater Element - I

function nextGreaterEltBrute(arr) {
  let n = arr.length;
  let ans = new Array(n).fill(-1);
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[j] > arr[i]) {
        ans[i] = arr[j];
        break;
      }
    }
  }
  return ans;
}

// Optimal
function nextGreaterElt(arr) {
  let n = arr.length;
  let ans = [];
  let stack = [];
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] <= arr[i]) {
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

let arr = [6, 0, 8, 1, 3];
// let res = nextGreaterEltBrute(arr);
let res = nextGreaterElt(arr);
console.log(res);
