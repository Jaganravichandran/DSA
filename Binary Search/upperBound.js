// Upper Bound

// smallest index such that (arr[mid] > x)

// lower bound => smallest index such that (arr[mid] >= x)

function upperBound(arr, x) {
  let n = arr.length;
  let low = 0;
  let high = n - 1;
  let ans = n;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] > x) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
}

function getFloorAndCeil(x, arr) {
  arr.sort((a, b) => a - b); // Sort the array before applying binary search
  let n = arr.length;
  let low = 0;
  let high = n - 1;
  let floor = -1;
  let ceil = -1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] == x) {
      floor = ceil = arr[mid]; // Exact match, both floor and ceil are x
      return [floor, ceil];
    } else if (x <= arr[mid]) {
      ceil = arr[mid];
      high = mid - 1;
    } else {
      floor = arr[mid];
      low = mid + 1;
    }
  }
  return [floor, ceil];
}

// let arr = [2, 3, 6, 7, 8, 8, 11, 11, 11, 12];
let arr = [5, 6, 8, 8, 6, 5, 5, 6];
// let result = upperBound(arr, 9);
let result = getFloorAndCeil(10, arr);
console.log(result);
