// convert prefix to postfix

function prefixToPostfix(str) {
  let stack = [];
  let n = str.length;
  for (let i = n - 1; i >= 0; i--) {
    if (/[a-zA-Z0-9]/.test(str[i])) {
      stack.push(str[i]);
    } else {
      let top1 = stack.pop();
      let top2 = stack.pop();
      let expression = `${top1}${top2}${str[i]}`;
      //   let expression = `${top1}` + `${top2}` + `${str[i]}`;
      stack.push(expression);
    }
  }
  return stack.pop();
}

let str = "/-AB*+DEF";
let res = prefixToPostfix(str);
console.log(res);
