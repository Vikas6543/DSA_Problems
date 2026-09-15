function minSubArrayLen(target, nums) {
  let left = 0;
  let sum = 0;
  let minLength = Infinity;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right]; // add nums[right]

    while (sum >= target) {
      minLength = Math.min(minLength, right - left + 1); // update minimum length
      sum -= nums[left]; // remove nums[left]
      left++; // move left
    }
  }

  return minLength === Infinity ? 0 : minLength;
}

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // 2

// [2, 3, 1, 2] → sum 8  → length 4
// [3, 1, 2, 4] → sum 10 → length 4
// [4, 3]       → sum 7  → length 2  ✅
