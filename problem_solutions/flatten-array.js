function flattenArray(arr) {
  let result = [];

  function helper(subArr) {
    for (let i = 0; i < subArr.length; i++) {
      if (Array.isArray(subArr[i])) {
        helper(subArr[i]);
      } else {
        result.push(subArr[i]);
      }
    }
  }

  helper(arr);
  return result;
}

// Example usage
console.log(flattenArray([1, [2, [3, [4]], 5]])); // [1, 2, 3, 4, 5]
