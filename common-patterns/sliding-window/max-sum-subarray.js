function maxSumSubarray(nums, k) {
  let left = 0;
  let sum = 0;
  let maxSum = -Infinity;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    if (right - left + 1 === k) {
      maxSum = Math.max(maxSum, sum);

      sum -= nums[left];
      left++;
    }
  }

  return maxSum;
}

console.log(maxSumSubarray([2, 1, 5, 1, 3, 2], 3)); // [5, 1, 3] → 9  ← maximum
