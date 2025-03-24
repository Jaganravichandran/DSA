// Valid parenthesis string

// Brute
function validParenthesisBrute(s) {
  let n = s.length;
  return isValidParenthesis(s, 0, 0, n);
}

function isValidParenthesis(s, index, count, n) {
  if (count < 0) {
    return false;
  }
  if (index == n) {
    return count == 0;
  }

  let char = s[index];
  if (char == "(") {
    return isValidParenthesis(s, index + 1, count + 1, n);
  }
  if (char == "(") {
    return isValidParenthesis(s, index + 1, count - 1, n);
  } else {
    let asOpen = isValidParenthesis(s, index + 1, count + 1, n);
    if (asOpen) return true;

    let asClosed = isValidParenthesis(s, index + 1, count - 1, n);
    if (asClosed) return true;
  }

  return isValidParenthesis(s, index + 1, count, n);
}

// Optimal
function validParenthesis(s) {
  let mini = 0;
  let maxi = 0;
  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (char == "(") {
      mini += 1;
      maxi += 1;
    } else if (char == ")") {
      mini = Math.max(0, mini - 1);
      maxi--;
      if (maxi < 0) {
        return false;
      }
    } else {
      mini = Math.max(0, mini - 1);
      maxi++;
    }
  }
  return mini == 0;
}

let s = "(*()";
// let res = validParenthesisBrute(s);
let res = validParenthesis(s);
console.log(res);
