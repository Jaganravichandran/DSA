// 4 sum

// Brute
function fourSumBrute(arr, target) {
  let n = arr.length;
  let set = new Set();
  let ans = [];
  for (let a = 0; a < n; a++) {
    for (let b = a + 1; b < n; b++) {
      for (let c = b + 1; c < n; c++) {
        for (let d = c + 1; d < n; d++) {
          let sum = arr[a] + arr[b] + arr[c] + arr[d];
          if (sum == target) {
            let temp = [arr[a], arr[b], arr[c], arr[d]];
            temp.sort((a, b) => a - b);
            let key = temp.toString();
            if (!set.has(key)) {
              set.add(key);
              ans.push(temp);
            }
          }
        }
      }
    }
  }
  return ans;
}

// Brute optimised
function fourSumBruteOptimised(arr, target) {
  let n = arr.length;
  let ans = [];
  arr.sort((a, b) => a - b);
  for (let a = 0; a < n - 3; a++) {
    if (a > 0 && arr[a] == arr[a - 1]) continue;
    for (let b = a + 1; b < n - 2; b++) {
      if (b > a + 1 && arr[b] == arr[b - 1]) continue;
      for (let c = b + 1; c < n - 1; c++) {
        if (c > b + 1 && arr[c] == arr[c - 1]) {
          continue;
        }
        for (let d = c + 1; d < n; d++) {
          if (d > c + 1 && arr[d] == arr[d - 1]) {
            continue;
          }
          let sum = arr[a] + arr[b] + arr[c] + arr[d];
          if (sum == target) {
            let temp = [arr[a], arr[b], arr[c], arr[d]];
            ans.push(temp);
          }
        }
      }
    }
  }
  return ans;
}

// Better
function fourSumBetter(arr, target) {
  let n = arr.length;
  let set = new Set();
  let ans = [];
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let hashSet = new Set();
      for (let k = j + 1; k < n; k++) {
        let sum = arr[i] + arr[j] + arr[k];
        let quad = target - sum;
        if (hashSet.has(quad)) {
          let temp = [arr[i], arr[j], arr[k], quad];
          temp.sort((a, b) => a - b);
          let key = temp.toString();
          if (!set.has(key)) {
            set.add(key);
            ans.push(temp);
          }
        }
        hashSet.add(arr[k]);
      }
    }
  }
  return ans;
}

// Optimal
function fourSum(arr, target) {
  let n = arr.length;
  let ans = [];
  arr.sort((a, b) => a - b);
  for (let i = 0; i < n; i++) {
    if (i > 0 && arr[i] == arr[i - 1]) continue;
    for (let j = i + 1; j < n; j++) {
      if (j > i + 1 && arr[j] == arr[j - 1]) continue;
      let k = j + 1;
      let l = n - 1;
      while (k < l) {
        let sum = arr[i] + arr[j] + arr[k] + arr[l];
        if (sum < target) {
          k++;
        } else if (sum > target) {
          l--;
        } else {
          temp = [arr[i], arr[j], arr[k], arr[l]];
          ans.push(temp);
          k++;
          l--;
          while (k < l && arr[k] == arr[k - 1]) k++;
          while (k < l && arr[l] == arr[l + 1]) l--;
        }
      }
    }
  }
  return ans;
}

let arr = [1, 0, -1, 0, -2, 2]; // [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
// let res = fourSumBrute(arr, 0);
// let res = fourSumBruteOptimised(arr, 0);
// let res = fourSumBetter(arr, 0);
let res = fourSum(arr, 0);
console.log(res);
