function findLengthOfLCIS(arr) {
  let currentLength = 1;
  let maxLength = 1;

  for (i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      currentLength += 1;
      maxLength = Math.max(maxLength, currentLength);
    } else {
      currentLength = 1;
    }
  }

  return maxLength;
}

console.log(findLengthOfLCIS([1, 3, 5, 4, 7])); // 3
