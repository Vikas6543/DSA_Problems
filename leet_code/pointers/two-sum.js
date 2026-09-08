function twoSum(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [numbers[left], numbers[right]];
    }

    if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
}

console.log(twoSum([2, 3, 7, 11, 15], 10)); // [ 3, 7 ]
