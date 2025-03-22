// shortest job first (SJF) CPU scheduling

function shortestJobFirst(arr) {
  let n = arr.length;
  arr = arr.sort((a, b) => a - b);
  let watingTime = 0;
  let time = 0;
  for (let i = 0; i < n; i++) {
    watingTime += time;
    time += arr[i];
  }
  let avg = Math.floor(watingTime / n);
  return avg;
}

let arr = [4, 3, 7, 1, 2];
let res = shortestJobFirst(arr);
console.log(res);
