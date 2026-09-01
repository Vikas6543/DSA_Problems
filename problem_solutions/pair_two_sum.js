function findPair(arr, sum) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        result.push([arr[i], arr[j]]);
      }
    }
  }
  return result;
}

console.log(findPair([1, 2, 3, 4, 5, 6], 6)); // Output: [ [ 1, 5 ], [ 2, 4 ] ]

// -----------------
function twoSumSorted(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === target) {
      return [arr[left], arr[right]];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return null; // No pair found
}

twoSumSorted([2, 3, 6, 7, 11, 15], 9); // returns [2, 7]
