// Convert Infix to Prefix

function infixToPrefix(str) {
  let reversedStr = reverse(str);
  let stack = [];
  let ans = [];
  for (let char of reversedStr) {
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
        priority(char) < priority(stack[stack.length - 1])
      ) {
        ans.push(stack.pop());
      }
      stack.push(char);
    }
  }
  while (stack.length) {
    ans.push(stack.pop());
  }
  let res = ans.reverse().join("");
  return res;
}

function reverse(str) {
  let arr = str.split("");
  let left = 0;
  let right = arr.length - 1;

  // two pointer approach to reverse the string
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  // swap parentheses
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "(") {
      arr[i] = ")";
    } else if (arr[i] == ")") {
      arr[i] = "(";
    }
  }
  return arr.join("");
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

let str = "(A+B^E)*C-D^X+F";
let res = infixToPrefix(str);
console.log(res);
