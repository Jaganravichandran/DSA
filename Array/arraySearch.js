// <---------x------------>

// Array Search

function arrSearch(arr, x) {
  //   let res = arr.indexOf(x);
  //   return res;  //  In-build method
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      return i;
    }
  }
  return -1;
}

console.log(arrSearch([1, 2, 2, 3, 4, 5], 3));

// <---------x------x----->
