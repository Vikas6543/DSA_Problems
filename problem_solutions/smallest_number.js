// ********* Solution: 1
// find the minimum number in two array and show them in a string
function minNumber(nums1, nums2) {
  let mini1;
  let mini2;
  for (let i = 0; i < nums1.length; i++) {
    for (let j = i + 1; j < nums1.length; j++) {
      if (nums1[i] > nums1[j]) {
        temp = nums1[i];
        nums1[i] = nums1[j];
        nums1[j] = temp;
      }
    }
  }
  mini1 = +nums1[0];

  for (let i = 0; i < nums2.length; i++) {
    for (let j = i + 1; j < nums2.length; j++) {
      if (nums2[i] > nums2[j]) {
        temp = nums2[i];
        nums2[i] = nums2[j];
        nums2[j] = temp;
      }
    }
  }

  mini2 = +nums2[0];

  const result = mini1.toString() + mini2.toString();

  return result;
}

console.log(minNumber([4, 1, 3], [5, 7])); // 1,5
