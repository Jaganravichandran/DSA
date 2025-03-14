// Merge Two Sorted Array

// Brute
function mergeTwoSortedArrayBrute(nums1, nums2) {
  let n = nums1.length;
  let m = nums2.length;
  let arr3 = new Array();
  let left = 0;
  let right = 0;
  while (left < n && right < m) {
    if (nums1[left] <= nums2[right]) {
      arr3.push(nums1[left]);
      left++;
    } else {
      arr3.push(nums2[right]);
      right++;
    }
  }
  while (left < n) {
    arr3.push(nums1[left]);
    left++;
  }
  while (right < m) {
    arr3.push(nums2[right]);
    right++;
  }

  for (let i = 0; i < n + m; i++) {
    if (i < n) nums1[i] = arr3[i];
    else {
      nums2[i - n] = arr3[i];
    }
  }
  return {
    nums1,
    nums2,
  };
}

// Merge sorted array without extra space

// Optimal 1
function mergeTwoSortedArray1(nums1, nums2) {
  let n = nums1.length;
  let m = nums2.length;
  let left = n - 1;
  let right = 0;

  while (left >= 0 && right < m) {
    if (nums1[left] > nums2[right]) {
      [nums1[left], nums2[right]] = [nums2[right], nums1[left]];
      left--, right++;
    } else {
      break;
    }
  }
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  return {
    nums1,
    nums2,
  };
}

// Optimal 2
function swapIfGreater(nums1, nums2, ind1, ind2) {
  if (nums1[ind1] > nums2[ind2]) {
    [nums1[ind1], nums2[ind2]] = [nums2[ind2], nums1[ind1]];
  }
}
function mergeTwoSortedArray2(nums1, nums2) {
  let n = nums1.length;
  let m = nums2.length;
  let len = n + m;
  let gap = Math.ceil(len / 2); // Math.floor(len/2) + (len % 2);
  while (gap > 0) {
    let left = 0;
    let right = left + gap;
    while (right < len) {
      // nums1 and nums2 compare elts
      if (left < n && right >= n) {
        swapIfGreater(nums1, nums2, left, right - n);
      } // nums2 and nums2 compare elts
      else if (left >= n) {
        swapIfGreater(nums2, nums2, left - n, right - n);
      } // nums1 and nums1 compare elts
      else {
        swapIfGreater(nums1, nums1, left, right);
      }
      left++;
      right++;
    }
    if (gap == 1) break;
    gap = Math.ceil(gap / 2);
  }
  return {
    nums1,
    nums2,
  };
}

// Optimal 3 (modify nums1 in-place instead)
function mergeTwoSortedArray3(nums1, nums2) {
  let n = nums1.length;
  let m = nums2.length;
  let i = n - 1;
  let j = m - 1;
  let k = n + m - 1;

  while (j >= 0) {
    let val1 = nums1[i];
    let val2 = nums2[j];
    if (val1 > val2) {
      nums1[k] = val1;
      k--;
      i--;
    } else {
      nums1[k] = val2;
      k--;
      j--;
    }
  }
  return nums1;
}

let arr1 = [1, 3, 5, 7];
let arr2 = [0, 2, 6, 8, 9];
// let res = mergeTwoSortedArrayBrute(arr1, arr2);
// let res = mergeTwoSortedArray1(arr1, arr2);
// let res = mergeTwoSortedArray2(arr1, arr2);
let res = mergeTwoSortedArray3(arr1, arr2);
console.log(res);

// node mergeSortedArray.js
