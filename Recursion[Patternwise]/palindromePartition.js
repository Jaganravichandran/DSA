// Palindrome partitioning

function isPalindrome(str, start, end) {
  while (start < end) {
    if (str[start] != str[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}

function findSubstring(str, start, end) {
  let res = "";
  for (let i = start; i < end; i++) {
    res += str[i];
  }
  return res;
}

function partition(ind, str, path, res) {
  if (ind == str.length) {
    res.push([...path]);
    return;
  }
  for (let i = ind; i < str.length; i++) {
    if (isPalindrome(str, ind, i)) {
      //   path.push(str.substring(ind, i + 1)); inbuild js method
      path.push(findSubstring(str, ind, i + 1));
      partition(i + 1, str, path, res);
      path.pop();
    }
  }
}

function main(str) {
  let res = [];
  let path = [];
  partition(0, str, path, res);
  return res;
}

let str = "aabb";
let result = main(str);
console.log(result);
