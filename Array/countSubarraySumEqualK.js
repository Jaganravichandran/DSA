// Count subarray sum equal k
function countSubArrBrute(arr, k) {
  let n = arr.length;
  let count = 0;
  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum = sum + arr[j];
      if (sum == k) {
        count++;
      }
    }
  }
  return count;
}

function countSubArrOptimal(arr, k) {
  let n = arr.length;
  let map = new Map();

  map.set(0, 1);
  console.log(map);
  preSum = 0;
  let count = 0;
  for (let i = 0; i < n; i++) {
    preSum += arr[i];
    let remove = preSum - k;
    console.log(remove);
    count += map.get(remove) || 0;
    console.log(count);

    map.set(preSum, (map.get(preSum) || 0) + 1);
    console.log(map);
  }
  return count;
}

let arr = [1, 2, 3, -3, 1, 1, 1, 4, 2, -3];
// let result = countSubArrBrute(arr, 3);
let result = countSubArrOptimal(arr, 3);
console.log(result);
