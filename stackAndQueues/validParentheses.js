// check valid parentheses

// eg1 => ()[{}()] -> true
// eg2 => ()[{}(]) -> false

function isValidBrute(str) {
  let n = str.length;
  let stack = [];
  for (let i = 0; i < n; i++) {
    if (str[i] == "(" || str[i] == "[" || str[i] == "{") {
      stack.push(str[i]);
    } else {
      if (stack.length == 0) {
        return false;
      }
      let char = stack.pop();
      if (
        (str[i] == ")" && char == "(") ||
        (str[i] == "]" && char == "[") ||
        (str[i] == "}" && char == "{")
      ) {
        continue;
      } else {
        return false;
      }
    }
  }
  return stack.length == 0;
}

// Optimal
function isValid(str) {
  let map = new Map();
  map.set("(", ")");
  map.set("[", "]");
  map.set("{", "}");

  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (map.has(str[i])) {
      stack.push(map.get(str[i]));
    } else {
      if (stack.pop() != str[i]) {
        return false;
      }
    }
  }
  return stack.length == 0;
}

// more readable
function isValidOptimised(str) {
  if (!str.length) return true; // empty string is valid
  let map = new Map([
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
  ]);

  let stack = [];
  for (let char of str) {
    if (map.has(char)) {
      stack.push(map.get(char));
    } else {
      if (stack.pop() != char) {
        return false;
      }
    }
  }
  return stack.length == 0;
}

let str = "()[{}()]";
// let res = isValidBrute(str);
let res = isValid(str);
console.log(res);
