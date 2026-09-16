// two pointers

function removeDuplicates(nums) {
  if (nums.length === 0) {
    return [];
  }

  let slow = 0;

  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow]) {
      slow++;
      nums[slow] = nums[fast];
    }
  }

  return nums.slice(0, slow + 1);
}

const nums = [1, 1, 2, 2, 3, 5, 9];

console.log(removeDuplicates(nums));
