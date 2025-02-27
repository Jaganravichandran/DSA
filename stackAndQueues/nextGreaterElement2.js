// Next greater element - II

function nextGreaterEltBrute(arr) {
  let n = arr.length;
  let ans = new Array(n).fill(-1);
  for (let i = 0; i < n; i++) {
    for (let j = 1; j < n; j++) {
      let index = (i + j) % n;
      if (arr[index] > arr[i]) {
        ans[i] = arr[index];
        break;
      }
    }
  }
  return ans;
}

function nextGreaterElt(arr) {
  let n = arr.length;
  let ans = new Array(n).fill(-1);
  let stack = [];
  for (let i = 2 * n - 1; i >= 0; i--) {
    let ind = i % n;
    while (stack.length && stack[stack.length - 1] <= arr[ind]) {
      stack.pop();
    }
    if (i < n) {
      ans[i] = stack.length ? stack[stack.length - 1] : -1;
    }
    stack.push(arr[ind]);
  }
  return ans;
}

let arr = [2, 10, 12, 1, 11];
// let res = nextGreaterEltBrute(arr);
let res = nextGreaterElt(arr);
console.log(res);
