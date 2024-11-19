// <---------x------------>

// reverse an array

function reverseArray(arr) {
  let originalArr = arr;
  let tempArr = originalArr.reverse();
  originalArr = tempArr;
  return originalArr;
}

console.log(reverseArray([1, 2, 3, 5]));

// without inbuild method

function reverseArrayOptimised(arr) {
  let n = arr.length;
  let left = 0;
  let right = n - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
}
const arr = [1, 2, 3, 5];
reverseArrayOptimised(arr);
console.log(arr.join(" "));

// <---------x------------>
