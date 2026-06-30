// *********** Solution: 1 (for loop)
function union(arr1, arr2) {
  var newArr = [...arr1];
  for (var j = 0; j < arr2.length; j++) {
    if (!newArr.includes(arr2[j])) {
      newArr.push(arr2[j]);
    }
  }
  return newArr;
}

console.log(union([1, 2, 3, 4], [2, 3, 4, 5, 9, 11])); // [ 1, 2, 3, 4, 5, 9 ]

// *********** Solution: 2 (Set method)
function union(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}

// *********** Solution: 3 (reduce method)
function union(arr1, arr2) {
  return arr2.reduce(
    (acc, item) => {
      if (!acc.includes(item)) acc.push(item);
      return acc;
    },
    [...arr1]
  );
}

console.log(union([1, 2, 3, 4], [2, 3, 4, 5, 9, 11]));
