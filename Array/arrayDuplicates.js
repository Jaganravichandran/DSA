// <---------x------x----->

// Array Duplicates

function findDuplicates(arr) {
  const frequencyMap = {};
  const duplicates = [];

  for (let num of arr) {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;
  }

  for (let num in frequencyMap) {
    if (frequencyMap[num] > 1) {
      duplicates.push(Number(num));
    }
  }

  return duplicates;
}

const numbers = [1, 2, 4, 1, 2, 2];
console.log(findDuplicates(numbers));

// <----x-----x------->
