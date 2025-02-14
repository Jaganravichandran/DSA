// print all subsequences which sum to k

function printAllSubsequences(index, arr, ans, res, sum, k) {
  if (index == arr.length) {
    if (sum == k) {
      res.push([...ans]);
    }
    return;
  }
  ans.push(arr[index]);
  total += arr[index];
  printAllSubsequences(index + 1, arr, ans, res, sum, k);
  ans.pop();
  total -= arr[index];
  printAllSubsequences(index + 1, arr, ans, res, sum, k);
}

// function main() {
//   let arr = [1, 2, 1];
//   let ans = [];
//   let res = [];
//   let sum = 0;
//   printAllSubsequences(0, arr, ans, res, sum, 2);
//   return res;
// }

// print any subsequences whose sum is k
function printOneSubsequences(index, arr, ans, res, sum, k) {
  if (index == arr.length) {
    // condition satisfied
    if (sum == k) {
      return true;
    }
    // condition not satisfied
    return false;
  }
  ans.push(arr[index]);
  total += arr[index];
  if (printOneSubsequences(index + 1, arr, ans, res, sum, k) == true) {
    return true;
  }

  ans.pop();
  total -= arr[index];
  if (printOneSubsequences(index + 1, arr, ans, res, sum, k) == true) {
    return true;
  }
  return false;
}

// function main() {
//   let arr = [1, 2, 1];
//   let ans = [];
//   let res = [];
//   let sum = 0;
//   let boolean = printOneSubsequences(0, arr, ans, res, sum, 2);
//   return boolean;
// }

// count the subsequences with sum == k
function count(index, arr, sum, k) {
  if (index == arr.length) {
    // condition satisfied
    if (sum == k) {
      return 1;
    }
    // condition not satisfied
    return 0;
  }
  sum += arr[index];
  let left = count(index + 1, arr, sum, k);
  sum -= arr[index];
  let right = count(index + 1, arr, sum, k);
  return left + right;
}
function main() {
  let arr = [1, 2, 1];
  let sum = 0;
  let ans = count(0, arr, sum, 2);
  return ans;
}

let result = main();
console.log(result);
