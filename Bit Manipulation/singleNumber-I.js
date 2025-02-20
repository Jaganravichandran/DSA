// single Number - I

function findSingleNumBrute(arr) {
  let n = arr.length;
  let map = new Map();

  // traverse array
  for (let i = 0; i < n; i++) {
    map.set(arr[i], (map.get(arr[i]) || 0) + 1);
  }
  // traverse map
  for (let num of map.keys()) {
    if (map.get(num) == 1) {
      return num;
    }
  }
  return 0; // if there is no single number
}

function findSingleNum(arr) {
  let xor = 0;
  for (let i = 0; i < arr.length; i++) {
    xor = xor ^ arr[i];
  }
  return xor;
}

let arr = [4, 1, 2, 1, 2];
// let res = findSingleNumBrute(arr);
let res = findSingleNum(arr);
console.log(res);
