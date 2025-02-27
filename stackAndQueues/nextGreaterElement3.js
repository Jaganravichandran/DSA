// Next Greater Element - III

// given => arr1 = [4,1,2] arr2 = [1,3,4,2]
// arr1 is subset of arr2
// Find NGE?

function nextGreaterELementBrute(arr1, arr2) {
  let n = arr1.length;
  let ans = new Array(n).fill(-1);
  for (let i = 0; i < n; i++) {
    let ind = arr2.indexOf(arr1[i]);
    for (let j = ind + 1; j < arr2.length; j++) {
      if (arr2[j] > arr1[i]) {
        ans[i] = arr2[j];
        break;
      }
    }
  }
  return ans;
}

// better
function nextGreaterELementBetter(arr1, arr2) {
  let n = arr2.length;
  let map = new Map();
  // precompute NGE for arr2
  for (let i = 0; i < n; i++) {
    let nextGreater = -1;
    for (let j = i + 1; j < n; j++) {
      if (arr2[j] > arr2[i]) {
        nextGreater = arr2[j];
        break;
      }
    }
    map.set(arr2[i], nextGreater);
  }
  // retrieve precomputed NGE for arr1 elements
  let ans = [];
  for (let i = 0; i < arr1.length; i++) {
    if (map.has(arr1[i])) {
      ans.push(map.get(arr1[i]));
    }
  }
  return ans;
}

// Optimal
function nextGreaterELement(arr1, arr2) {
  let n = arr2.length;
  let map = new Map();
  let stack = [];
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] <= arr2[i]) {
      stack.pop();
    }
    if (stack.length) {
      map.set(arr2[i], stack[stack.length - 1]);
    } else {
      map.set(arr2[i], -1);
    }
    stack.push(arr2[i]);
  }

  let m = arr1.length;
  let ans = new Array(m).fill(-1);
  for (let i = 0; i < m; i++) {
    if (map.has(arr1[i])) {
      ans[i] = map.get(arr1[i]);
    }
  }
  return ans;
}

let arr1 = [4, 1, 2];
let arr2 = [1, 3, 4, 2];
// let res = nextGreaterELementBrute(arr1, arr2);
// let res = nextGreaterELementBetter(arr1, arr2);
let res = nextGreaterELement(arr1, arr2);
console.log(res);
