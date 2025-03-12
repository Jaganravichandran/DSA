// 3 sum

// Brute => TLE
function threeSumBrute(arr) {
  let n = arr.length;
  let set = new Set();
  let ans = [];
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        if (arr[i] + arr[j] + arr[k] == 0) {
          let temp = [arr[i], arr[j], arr[k]].sort((a, b) => a - b);
          let key = temp.toString();
          if (!set.has(key)) {
            set.add(key);
            ans.push(temp);
          }
        }
      }
    }
  }
  return ans;
}

// brute Optimised
function threeSumBruteOptimised(arr) {
  let n = arr.length;
  let ans = [];

  arr.sort();

  for (let i = 0; i < n - 2; i++) {
    if (i > 0 && arr[i] == arr[i - 1]) continue;
    for (let j = i + 1; j < n - 1; j++) {
      if (j > i + 1 && arr[j] == arr[j - 1]) continue;
      for (let k = j + 1; k < n; k++) {
        if (k > j + 1 && arr[k] == arr[k - 1]) continue;
        if (arr[i] + arr[j] + arr[k] == 0) {
          let temp = [arr[i], arr[j], arr[k]];
          ans.push(temp);
        }
      }
    }
  }
  return ans;
}

// Better
function threeSumBetter(arr) {
  let n = arr.length;
  let set = new Set();
  let ans = [];
  for (let i = 0; i < n; i++) {
    let hashSet = new Set();
    for (let j = i + 1; j < n; j++) {
      let third = -(arr[i] + arr[j]);
      if (hashSet.has(third)) {
        let temp = [arr[i], arr[j], third].sort();
        let key = temp.toString();
        if (!set.has(key)) {
          set.add(key);
          ans.push(temp);
        }
      }
      hashSet.add(arr[j]);
    }
  }
  return ans;
}

// Optimal
function threeSum(arr) {
  let n = arr.length;
  let ans = [];
  arr.sort((a, b) => a - b);
  for (let i = 0; i < n; i++) {
    if (i > 0 && arr[i] == arr[i - 1]) continue;
    let j = i + 1;
    let k = n - 1;
    while (j < k) {
      let sum = arr[i] + arr[j] + arr[k];
      if (sum < 0) {
        j++;
      } else if (sum > 0) {
        k--;
      } else {
        let temp = [arr[i], arr[j], arr[k]];
        ans.push(temp);
        j++;
        k--;
        while (j < k && arr[j] == arr[j - 1]) j++;
        while (j < k && arr[k] == arr[k + 1]) k--;
      }
    }
  }
  return ans;
}
let arr = [-1, 0, 1, 2, -1, -4];
// let res = threeSumBrute(arr);
// let res = threeSumBruteOptimised(arr);
// let res = threeSumBetter(arr);
let res = threeSum(arr);
console.log(res);
