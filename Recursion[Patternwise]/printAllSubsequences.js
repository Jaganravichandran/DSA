// print all subsequences

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

function main() {
  let arr = [3, 1, 2];
  let ans = [];
  let res = [];
  printAllSubsequences(0, ans, arr, res);
  return res;
}

let result = main();
console.log(result);
