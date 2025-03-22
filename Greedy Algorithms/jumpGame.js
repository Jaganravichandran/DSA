// Jump game

function jumpGame(arr) {
  let n = arr.length;
  let maxIndex = 0;
  for (let i = 0; i < n; i++) {
    if (i > maxIndex) return false;
    let jump = i + arr[i];
    maxIndex = Math.max(maxIndex, jump);
  }
  return true;
}

// method 2
function jumpGame2(arr) {
  let n = arr.length;
  let goal = n - 1;
  for (let i = n - 2; i >= 0; i--) {
    let jump = i + arr[i];
    if (jump >= goal) {
      goal = i;
    }
  }
  return goal === 0;
}

let arr = [1, 2, 3, 1, 1, 2, 5];
// let res = jumpGame(arr);
let res = jumpGame2(arr);
console.log(res);
