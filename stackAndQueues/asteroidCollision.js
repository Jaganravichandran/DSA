// Asteroid collision

function asteroidCollisionBrute(arr) {
  let n = arr.length;
  let stack = [];
  for (let i = 0; i < n; i++) {
    if (arr[i] > 0) {
      stack.push(arr[i]);
    } else {
      let absVal = Math.abs(arr[i]);
      while (
        stack.length &&
        stack[stack.length - 1] > 0 &&
        stack[stack.length - 1] < absVal
      ) {
        stack.pop();
      }
      if (stack.length && stack[stack.length - 1] == absVal) {
        stack.pop();
      } else if (stack.length == 0 || stack[stack.length - 1] < 0) {
        stack.push(arr[i]);
      }
    }
  }
  return stack;
}

let arr = [10, 2, -5];
let res = asteroidCollisionBrute(arr);
console.log(res);
