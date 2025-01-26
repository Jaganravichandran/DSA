// <----x-----x------->

// sort 0's, 1's and 2's

function sortArrBetter(arr) {
  let n = arr.length;
  let count0 = 0;
  let count1 = 0;
  let count2 = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] == 0) {
      count0++;
    } else if (arr[i] == 1) {
      count1++;
    } else {
      count2++;
    }
  }
  for (let i = 0; i < count0; i++) {
    arr[i] = 0;
  }
  for (let i = count0; i < count0 + count1; i++) {
    arr[i] = 1;
  }
  for (let i = count0 + count1; i < n; i++) {
    arr[i] = 2;
  }
  return arr;
}

// Dutch National Flag Algorithm

function sortArr(arr) {
  let n = arr.length;
  let low = 0,
    mid = 0,
    high = n - 1;
  while (mid <= high) {
    if (arr[mid] == 0) {
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      low++;
      mid++;
    } else if (arr[mid] == 1) {
      mid++;
    } else {
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    }
  }
  return arr;
}

// since it's a void we don't need to return any values

let arr = [0, 1, 2, 1, 2, 0, 0, 0, 1, 2, 1];
// let result = sortArrBetter(arr);
let result = sortArr(arr);
console.log(result);

// <------x-----x----->
