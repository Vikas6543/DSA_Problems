function removeDuplicates(nums) {
  let k = 1; // write pointer: first element is always unique, so start after it

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[k - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }

  return nums.slice(0, k);
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 4, 5])); // [ 0, 1, 2, 3, 4, 5 ]
