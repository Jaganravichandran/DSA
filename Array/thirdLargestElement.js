// <---------x------------>

// Find Third Largest Element

function thirdLargestFind(arr) {
  var largest = arr[0];
  var secondLargest = -1;
  var thirdLargest = -1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      thirdLargest = secondLargest;
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest) {
      thirdLargest = secondLargest;
      secondLargest = arr[i];
    } else if (arr[i] > thirdLargest) {
      thirdLargest = arr[i];
    }
  }
  return thirdLargest;
}

console.log(
  thirdLargestFind([
    855, 450, 132, 359, 233, 825, 604, 481, 262, 337, 720, 525, 652, 300, 906,
    219, 926, 906, 293, 864, 817, 498, 30, 639, 661,
  ])
);

// <---------x------------>
