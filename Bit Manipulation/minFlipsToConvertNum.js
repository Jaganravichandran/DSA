// minimum flips to convert a number

function minFlipsBrute(start, goal) {
  let ans = start ^ goal;
  let count = 0;
  for (let i = 0; i <= Math.log2(ans); i++) {
    if (ans & (1 << i)) {
      count++;
    }
  }
  return count;
}
function minFlips(start, goal) {
  let ans = start ^ goal;
  let count = 0;
  while (ans > 0) {
    ans = ans & (ans - 1);
    count++;
  }
  return count;
}

// let res = minFlipsBrute(10, 7);
let res = minFlips(10, 7);
console.log(res);
