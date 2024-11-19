// <---------x------------>

// Min and Max in Array

function minMax(arr) {
  let min = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return [min, max];
}
console.log(minMax([1, 2, 3, 4]));

// <---------x------------>
