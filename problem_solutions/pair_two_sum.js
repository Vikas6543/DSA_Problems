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
