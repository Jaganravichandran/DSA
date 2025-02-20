// power set or print all subsets

// it also has recursive approach => check recursion[patternwise] folder (printAllSubsequences.js)
function powerSet(arr) {
  let n = arr.length;
  let ans = [];
  for (let num = 0; num < 1 << n; num++) {
    let list = [];
    for (let i = 0; i < n; i++) {
      if (num & (1 << i)) {
        list.push(arr[i]);
      }
    }
    ans.push(list);
  }
  return ans;
}

let arr = [1, 2, 3];
let result = powerSet(arr);
console.log(result);
