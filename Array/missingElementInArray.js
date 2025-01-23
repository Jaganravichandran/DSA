// <---------x------x----->

// Missing element in array

function missingElement(arr, n) {
  // Optimal
  // Method 1:
  // let sum = 0;
  // let n = arr.length + 1;
  // for (let i = 0; i < n - 1; i++) {
  //   sum += arr[i];
  // }
  // let expectedSum = (n * (n + 1)) / 2;
  // return expectedSum - sum;

  let N = n - 1;
  let xor1 = 0;
  let xor2 = 0;
  for (let i = 0; i < N; i++) {
    xor2 = xor2 ^ arr[i];
    xor1 = xor1 ^ (i + 1);
  }
  xor1 = xor1 ^ n;
  return xor1 ^ xor2;
}

function missingNum(arr, n) {
  // brute force
  // for (let i = 1; i <= n; i++) {
  //   let flag = 0;
  //   for (let j = 0; j < n - 1; j++) {
  //     if (arr[j] == i) {
  //       flag = 1;
  //       break;
  //     }
  //   }
  //   if (flag == 0) return i;
  // }

  // better approach
  let hash = new Array(n + 1).fill(0);
  for (let i = 0; i < n - 1; i++) {
    hash[arr[i]] = 1;
  }
  for (let i = 1; i < n; i++) {
    if (hash[i] == 0) return i;
  }
}

let arr = [1, 2, 4, 5];
// let result = missingNum(arr, 5);
let result = missingElement(arr, 5);
console.log(result);

// <---------x------x----->
