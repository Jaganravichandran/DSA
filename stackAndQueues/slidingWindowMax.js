// sliding window maximum

function maxSlidingWindowBrute(arr, k) {
  let n = arr.length;
  let ans = [];
  for (let i = 0; i <= n - k; i++) {
    let maxi = arr[i];
    for (let j = i; j <= i + k - 1; j++) {
      maxi = Math.max(maxi, arr[j]);
    }
    ans.push(maxi);
  }
  return ans;
}

// Optimal
function maxSlidingWindow(arr, k) {
  let n = arr.length;
  let ans = [];
  let dq = [];
  for (let i = 0; i < n; i++) {
    if (dq.length && dq[0] <= i - k) {
      dq.shift();
    }
    while (dq.length && arr[dq[dq.length - 1]] <= arr[i]) {
      dq.pop();
    }
    dq.push(i);
    if (i >= k - 1) {
      ans.push(arr[dq[0]]);
    }
  }
  return ans;
}

let arr = [1, 3, -1, -3, 5, 3, 6, 7];
// let res = maxSlidingWindowBrute(arr, 3);
let res = maxSlidingWindow(arr, 3);
console.log(res);
