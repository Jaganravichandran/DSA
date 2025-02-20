// Find the number that appears once,and the others twice

function appearsOnceBrute(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let num = arr[i];
    let count = 0;
    for (let j = 0; j < n; j++) {
      if (arr[j] == num) {
        count++;
      }
    }
    if (count == 1) return num;
  }
}

function appearsOnceBetter(arr) {
  // Method 1 using Hash array
  //   let n = arr.length;
  //   let max = arr[0];
  //   for (let i = 0; i < n; i++) {
  //     max = Math.max(max, arr[i]);
  //   }
  //   let hash = new Array(max).fill(0);
  //   for (let i = 0; i < n; i++) {
  //     hash[arr[i]]++;
  //   }
  //   for (let i = 0; i < n; i++) {
  //     if (hash[arr[i]] == 1) return arr[i];
  //   }
  // Method 2 using Map
  let n = arr.length;
  let map = new Map();

  for (let i = 0; i < n; i++) {
    map.set(arr[i], (map.get(arr[i]) || 0) + 1);
  }
  for (let num of map.keys()) {
    if (map.get(num) == 1) {
      return num;
    }
  }
}

function appearsOnceOptimal(arr) {
  let n = arr.length;
  let xor = 0;
  for (let i = 0; i < n; i++) {
    xor = xor ^ arr[i];
  }
  return xor;
}

let arr = [1, 1, 2, 3, 3, 4, 4];
// let result = appearsOnceBrute(arr);
// let result = appearsOnceBetter(arr);
let result = appearsOnceOptimal(arr);
console.log(result);
