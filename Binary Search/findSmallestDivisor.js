// Find smallest divisor given a threshold
function smallestDivisorBrute(arr, threshold) {
  let n = arr.length;
  let max = Math.max(...arr);
  for (let i = 1; i <= max; i++) {
    let sum = 0;
    for (let j = 0; j < n; j++) {
      sum += Math.ceil(arr[j] / i);
    }
    if (sum <= threshold) return i;
  }
  return -1;
}
function smallestDivisor(arr, threshold) {
  if (arr.length > threshold) return -1;
  let low = 1;
  let high = Math.max(...arr);
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let val = divisor(arr, mid, threshold);
    if (val == true) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return low;
}

function divisor(arr, divisor, threshold) {
  let n = arr.length;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += Math.ceil(arr[i] / divisor);
  }
  if (sum <= threshold) return true;
  return false;
}

let arr = [1, 2, 5, 9];
// let result = smallestDivisorBrute(arr, 5);
let result = smallestDivisor(arr, 6);
console.log(result);
