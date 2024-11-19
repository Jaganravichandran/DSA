// <---------x------x----->

// Missing element in array

function missingElement(arr) {
  let sum = 0;
  let n = arr.length + 1;
  for (let i = 0; i < n - 1; i++) {
    sum += arr[i];
  }
  let expectedSum = (n * (n + 1)) / 2;
  return expectedSum - sum;
}

console.log(missingElement([1, 2, 4]));

// <---------x------x----->
