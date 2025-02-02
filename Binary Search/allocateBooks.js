// Book allocation

// linear search TC -> O((high - low) x N)
function bookAllocateBrute(arr, students) {
  if (students > arr.length) return -1;
  let sum = arr.reduce((acc, pages) => acc + pages, 0);
  let low = Math.max(...arr);
  let high = sum;
  for (let i = low; i <= high; i++) {
    let val = countStudents(arr, i);
    if (val == students) {
      return i;
    }
  }
}

function countStudents(arr, pages) {
  let n = arr.length;
  let student = 1;
  let pagesHold = 0;
  for (let i = 0; i < n; i++) {
    if (pagesHold + arr[i] <= pages) {
      pagesHold += arr[i];
    } else {
      student++;
      pagesHold = arr[i];
    }
  }
  return student;
}

function bookAllocateOptimal(arr, students) {
  if (students > arr.length) return -1;
  let sum = arr.reduce((acc, pages) => acc + pages, 0);
  let low = Math.max(...arr);
  let high = sum;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let val = countStudents(arr, mid);
    if (val <= students) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return low;
}

let arr = [25, 46, 28, 49, 24];
// let result = countStudents(arr, 71, 4);
// let result = bookAllocateBrute(arr, 4);
let result = bookAllocateOptimal(arr, 4);
console.log(result);
