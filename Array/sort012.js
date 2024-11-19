// <----x-----x------->

// sort 0's, 1's and 2's

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
}

// since it's a void we don't need to return any values

// <------x-----x----->
