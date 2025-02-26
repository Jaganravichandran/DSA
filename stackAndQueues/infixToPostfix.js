// convert Infix to Postfix

function infixToPostfix(str) {
  let i = 0;
  let n = str.length;
  let stack = [];
  let ans = [];
  while (i < n) {
    if (/[a-zA-Z0-9]/.test(str[i])) {
      ans.push(str[i]);
    } else if (str[i] == "(") {
      stack.push(str[i]);
    } else if (str[i] == ")") {
      while (stack.length && stack[stack.length - 1] != "(") {
        ans.push(stack.pop());
      }
      stack.pop();
    } else {
      while (
        stack.length &&
        priority(str[i]) <= priority(stack[stack.length - 1])
      ) {
        ans.push(stack.pop());
      }
      stack.push(str[i]);
    }
    i++;
  }

  while (stack.length) {
    ans.push(stack.pop());
  }
  return ans.join("");
}

// more readable
function infixToPostfixOptimal(str) {
  let stack = [];
  let ans = [];
  for (let char of str) {
    if (/[a-zA-Z0-9]/.test(char)) {
      ans.push(char);
    } else if (char == "(") {
      stack.push(char);
    } else if (char == ")") {
      while (stack.length && stack[stack.length - 1] != "(") {
        ans.push(stack.pop());
      }
      stack.pop();
    } else {
      while (
        stack.length &&
        priority(char) <= priority(stack[stack.length - 1])
      ) {
        ans.push(stack.pop());
      }
      stack.push(char);
    }
  }

  while (stack.length) {
    ans.push(stack.pop());
  }
  return ans.join("");
}

function priority(op) {
  if (op == "+" || op == "-") {
    return 1;
  }
  if (op == "*" || op == "/") {
    return 2;
  }
  if (op == "^") {
    return 3;
  }
  return 0;
}

let str = "a+b*(c^d-e)^(f+g*h)-i"; // abcd^e-fgh*+^*+i-
let res = infixToPostfix(str);
// let res = infixToPostfixOptimal(str);
console.log(res);
