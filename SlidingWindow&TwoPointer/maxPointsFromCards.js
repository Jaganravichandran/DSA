// maximum points you can obtain from cards

function maxScore(arr, k) {
  let n = arr.length;
  let leftSum = 0;
  let rightSum = 0;
  for (let i = 0; i < k; i++) {
    leftSum += arr[i];
  }
  let maxiSum = leftSum;
  let rightIndex = n - 1;
  for (let i = k - 1; i >= 0; i--) {
    leftSum = leftSum - arr[i];
    rightSum = rightSum + arr[rightIndex];
    rightIndex--;
    maxiSum = Math.max(maxiSum, leftSum + rightSum);
  }
  return maxiSum;
}

let arr = [6, 2, 3, 4, 7, 2, 1, 7, 1];
let res = maxScore(arr, 4);
console.log(res);
