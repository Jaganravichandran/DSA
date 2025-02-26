// convert prefix to infix

function pretfixToInfix(str) {
  let stack = [];
  let n = str.length;
  for (let i = n - 1; i >= 0; i--) {
    if (/[a-zA-Z0-9]/.test(str[i])) {
      stack.push(str[i]);
    } else {
      let top1 = stack.pop();
      let top2 = stack.pop();
      let expression = `(${top1} ${str[i]} ${top2})`;
      // let expression = "(" + `${top1}` + `${str[i]}` + `${top2}` + ")";
      stack.push(expression);
    }
  }
  return stack.pop();
}

let str = "*+PQ-MN";
let res = pretfixToInfix(str);
console.log(res);
