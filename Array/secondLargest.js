// <------x-----x----->

// Second Largest Element in the Array

function getSecondLargest(arr) {
  var largest = -1;
  var secondLargest = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] != largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

// <------x-----x----->
