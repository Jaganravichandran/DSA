// subset II

// brute approach
function powerSet(arr) {
  let n = arr.length;
  let ans = [];
  for (let num = 0; num < 1 << n; num++) {
    let sub = [];
    for (let i = 0; i < n; i++) {
      if (num & (1 << i)) {
        sub.push(arr[i]);
      }
    }
    ans.push(sub);
  }
  return ans;
}

// function main(arr) {
//   arr.sort();
//   let result = powerSet(arr);
//   let removeDuplicates = new Set(result.map((e) => e.join(",")));
//   let unique = Array.from(removeDuplicates, (str) =>
//     str == "" ? [] : str.split(",").map(Number)
//   );
//   return unique;
// }

// better approach
function printAllSubsequences(ind, ans, arr, res) {
  let n = arr.length;
  if (ind >= n) {
    res.push([...ans]); // Store a copy of the current subsequence
    return;
  }
  // Pick the current element
  ans.push(arr[ind]);
  printAllSubsequences(ind + 1, ans, arr, res);

  // Do not pick the current element
  ans.pop();
  printAllSubsequences(ind + 1, ans, arr, res);
}

// function main(arr) {
//   arr.sort();
//   let ans = [];
//   let res = [];
//   printAllSubsequences(0, ans, arr, res);
//   let removeDuplicates = new Set(res.map((e) => e.join(",")));
//   let unique = Array.from(removeDuplicates, (str) =>
//     str == "" ? [] : str.split(",").map(Number)
//   );
//   unique.sort();
//   return unique;
// }

//  Optimal Approach
function main(arr) {
  arr.sort();
  let ans = [];
  printAllUniqueSubset(0, arr, [], ans);
  return ans;
}

function printAllUniqueSubset(index, arr, ds, ans) {
  let n = arr.length;
  ans.push([...ds]);
  for (let i = index; i < n; i++) {
    if (i > index && arr[i] == arr[i - 1]) continue;
    ds.push(arr[i]);
    printAllUniqueSubset(i + 1, arr, ds, ans);
    ds.pop();
  }
}

let arr = [1, 2, 2, 2, 3, 3];
let result = main(arr);
console.log(result);
