// minimum days to make m bouquets

function minimumDaysBrute(arr, m, k) {
  let n = arr.length;
  let total = m * k;
  if (total > n) return -1;
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  for (let i = min; i <= max; i++) {
    let val = possible(arr, i, m, k);
    if (val == true) {
      return i;
    }
  }
  return -1;
}

function possible(arr, day, m, k) {
  let count = 0;
  let numOFBouquet = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= day) {
      count++;
    } else {
      numOFBouquet += Math.floor(count / k);
      count = 0;
    }
  }
  numOFBouquet += Math.floor(count / k);
  if (numOFBouquet >= m) return true;
  return false;
}

function minimumDaysOptimal(arr, m, k) {
  if (arr.length < m * k) return -1;
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let low = min;
  let high = max;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let val = possible(arr, mid, m, k);
    if (val == true) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return low;
}

let arr = [1, 10, 3, 10, 2]; //[7, 7, 7, 7, 13, 11, 12, 7]
// let result = minimumDaysBrute(arr, 2, 3);
let result = minimumDaysOptimal(arr, 2, 3);
console.log(result);
