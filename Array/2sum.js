// 2 Sum

function twoSumBrute(arr, target) {
  // 1st Variant
  let n = arr.length;
  let ans = [];
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] + arr[j] == target) {
        ans.push(i);
        ans.push(j);
      }
    }
  }
  return ans;

  // 2nd variant
  //   let n = arr.length;
  //   for (let i = 0; i < n; i++) {
  //     for (let j = i + 1; j < n; j++) {
  //       if (arr[i] + arr[j] == target) {
  //         return true;
  //       }
  //     }
  //   }
  //   return false;
}

function twoSumBetter(arr, target) {
  let n = arr.length;
  let hash = new Map();
  for (let i = 0; i < n; i++) {
    let a = arr[i];
    let more = target - a;
    if (hash.has(more)) {
      return [hash.get(more), i];
    }
    hash.set(a, i);
    // else {
    //   hash.set(a, i);
    // }
    // if (!hash.has(more)) {
    //     hash.set(a, i);
    // }
  }
}

function twoSumOptimal(arr, target) {
  let n = arr.length;
  let left = 0;
  let right = n - 1;
  // sorting ==> TC -> O(n^2)
  //   for (let i = 0; i < n - 1; i++) {
  //     if (arr[i] > arr[i + 1]) {
  //       let temp = arr[i + 1];
  //       arr[i + 1] = arr[i];
  //       arr[i] = temp;
  //     }
  //   }

  arr.sort((a, b) => a - b); // TC -> O(N log N)
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum == target) {
      return "YES";
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return "NO";
}

let arr = [2, 6, 5, 8, 11];
let target = 14;
// let result = twoSumBrute(arr, target);
// let result = twoSumBetter(arr, target);
let result = twoSumOptimal(arr, target);
console.log(result);
