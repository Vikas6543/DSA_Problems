// ********** Solution: 1
// find the largest number in an array
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(findMax([10, 5, 20, 8, 15])); // Output: 20

// ********** Solution: 2
// Finding largest number in 2D-Array
function largest(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    var maxi = arr[i][0];
    for (var j = 0; j < arr[i].length; j++) {
      var currentMaxi = arr[i][j];
      if (currentMaxi >= maxi) {
        maxi = currentMaxi;
      }
    }
    result.push(maxi);
  }
  return result;
}
console.log(
  largest([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [10, 20, 30, -40],
  ])
); // Output: [ 4, 8, 30 ]

// ********** Solution: 3
// find all the largest number in an array of a given size
function findLargerElements(arr, size) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > size) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(findLargerElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8));
