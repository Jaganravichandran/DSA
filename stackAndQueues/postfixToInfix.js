// convert postfix to infix

function postfixToInfix(str) {
  let stack = [];
  for (let char of str) {
    if (/[a-zA-Z0-9]/.test(char)) {
      stack.push(char);
    } else {
      let top1 = stack.pop();
      let top2 = stack.pop();
      let expression = `(${top2} ${char} ${top1})`;
      //   let expression = "(" + `${top2}` + `${char}` + `${top1}` + ")";
      stack.push(expression);
    }
  }
  return stack.pop();
}

let str = "AB-DE+F*/";
let res = postfixToInfix(str);
console.log(res);
