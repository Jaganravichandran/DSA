// Fruits into baskets

// Brute
function totalFruitsBrute(arr) {
  let n = arr.length;
  let maxLen = 0;
  for (let i = 0; i < n; i++) {
    let set = new Set();
    for (let j = i; j < n; j++) {
      set.add(arr[j]);
      if (set.size <= 2) {
        let len = j - i + 1;
        maxLen = Math.max(maxLen, len);
      } else {
        break;
      }
    }
  }
  return maxLen;
}

// Better
function totalFruitsBetter(arr) {
  let n = arr.length;
  let maxLen = 0;
  let left = 0;
  let right = 0;
  let map = new Map();
  while (right < n) {
    map.set(arr[right], (map.get(arr[right]) || 0) + 1);
    if (map.size > 2) {
      while (map.size > 2) {
        map.set(arr[left], map.get(arr[left]) - 1);
        if (map.get(arr[left]) == 0) map.delete(arr[left]);
        left++;
      }
    }
    if (map.size <= 2) {
      let len = right - left + 1;
      maxLen = Math.max(maxLen, len);
    }
    right++;
  }
  return maxLen;
}

let arr = [3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4];
// let res = totalFruitsBrute(arr);
let res = totalFruitsBetter(arr);
console.log(res);
