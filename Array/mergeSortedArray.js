// Merge Two Sorted Array

function mergeTwoSortedArray(nums1, m, nums2, n) {
  let left = n - 1;
  let right = 0;

  while (left >= 0 && right < m) {
    if (nums1[left] > nums2[right]) {
      [nums1[left], nums2[right]] = [nums1[right], nums2[left]];
      left--, right++;
    } else {
      break;
    }
  }
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
}

// Merge sorted array with empty space

function mergeSortedArray(nums1, m, nums2, n) {
  let first = m - 1;
  let second = n - 1;
  let i = m + n - 1;

  while (second >= 0) {
    let firstVal = nums1[first];
    let secondVal = nums2[second];
    if (firstVal > secondVal) {
      nums1[i] = firstVal;
      i--;
      first--;
    } else {
      nums1[i] = secondVal;
      i--;
      second--;
    }
  }
}

// node mergeSortedArray.js
