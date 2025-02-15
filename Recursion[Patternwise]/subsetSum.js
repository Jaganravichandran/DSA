// subset Sum

function subsetSumBrute(arr) {
  let n = arr.length;
  let ans = [];
  for (let num = 0; num < 1 << n; num++) {
    let sub = [];
    for (let i = 0; i < n; i++) {
      if (num & (1 << i)) {
        sub.push(arr[i]);
      }
    }
    // let sum = sub.reduce((acc, curr) => {
    //   return acc + curr;
    // }, 0);
    let sum = calSum(sub);
    ans.push(sum);
  }
  ans.sort((a, b) => a - b);
  return ans;
}

function calSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function main(arr) {
  let n = arr.length;
  let ans = [];
  findSubsetSum(0, 0, arr, n, ans);
  ans.sort((a, b) => a - b);
  return ans;
}

function findSubsetSum(index, sum, arr, n, ans) {
  if (index == n) {
    ans.push(sum);
    return;
  }
  // pick the element
  findSubsetSum(index + 1, sum + arr[index], arr, n, ans);
  // donot pick the element
  findSubsetSum(index + 1, sum, arr, n, ans);
}

let arr = [3, 1, 2];
// let result = subsetSumBrute(arr);
let result = main(arr);
console.log(result);
