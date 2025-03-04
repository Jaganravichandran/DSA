// next smaller element

function nextSmallerEltBrute(arr) {
  let n = arr.length;
  let ans = new Array(n).fill(-1);
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[i]) {
        ans[i] = arr[j];
        break;
      }
    }
  }
  return ans;
}

// Optimal
function nextSmallerElt(arr) {
  let n = arr.length;
  let stack = [];
  let ans = new Array(n).fill(-1);
  for (let i = n - 1; i >= 0; i--) {
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

let arr = [4, 2, 1, 5, 3];
// let res = nextSmallerEltBrute(arr);
let res = nextSmallerElt(arr);
console.log(res);
