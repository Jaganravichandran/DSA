// number of greater elements to the right

function countNgesBrute(arr, indices) {
  let n = arr.length;
  let countArr = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] > arr[i]) {
        count++;
      }
    }
    countArr[i] = count;
  }
  let ans = [];
  for (let i = 0; i < indices.length; i++) {
    ans.push(countArr[indices[i]]);
  }
  return ans;
}

let indices = [0, 4];
let arr = [3, 4, 2, 7, 5, 8, 10, 6];
let res = countNgesBrute(arr, indices);
console.log(res);
