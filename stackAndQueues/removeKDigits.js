// remove k digits

function removeKdigits(num, k) {
  let n = num.length;
  let stack = [];
  for (let i = 0; i < n; i++) {
    while (stack.length && k > 0 && stack[stack.length - 1] > num[i]) {
      stack.pop();
      k--;
    }
    if (stack.length == 0 && num[i] == "0") continue;
    stack.push(num[i]);
  }
  while (k > 0) {
    stack.pop();
    k--;
  }
  if (stack.length == 0) {
    return "0";
  }
  return stack.join("");
}

let num = "10";
let res = removeKdigits(num, 1);
console.log(res);
