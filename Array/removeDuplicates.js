// Remove duplicates from sorted array

function removeDuplicates(arr) {
  let n = arr.length;
  // brute force
  //   let set = new Set();
  //   for (let i = 0; i < n; i++) {
  //     set.add(arr[i]);
  //   }
  //   return set.size;

  // optimal solution
  let i = 0;
  for (let j = 1; j < n; j++) {
    if (arr[j] != arr[i]) {
      arr[i + 1] = arr[j];
      i++;
    }
  }
  return i + 1;
}

let arr = [1, 1, 2, 2, 2, 3, 3];
let result = removeDuplicates(arr);
console.log(result);
