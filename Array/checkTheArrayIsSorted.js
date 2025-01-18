// Check The Array is Sorted or not? (Non - descending order)

function sorted(arr) {
  let n = arr.length;

  for (let i = 1; i < n; i++) {
    if (arr[i] >= arr[i - 1]) {
    } else {
      return false;
    }
  }
  return true;
}

// let arr = [1, 2, 1, 3, 3, 4]; // false
let arr = [1, 2, 2, 3, 3, 4]; // true
let result = sorted(arr);
console.log(result);
