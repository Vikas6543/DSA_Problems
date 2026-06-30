// *********** Solution: 1
const arr1 = [1, 6, 2, 9, 10, 20, 11];
const indexes = [0, 4, 6];

function newArray(arr, ind) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!ind.includes(i)) {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(newArray(arr1, indexes)); // [ 6, 2, 9, 20 ]

// *********** Solution: 2 - without altering previous array
const arr2 = [1, 6, 2, 9, 10, 20, 11];
const delIndexes = [0, 4, 6];

function newArray(arr, arrIndex) {
  const result = arr.filter((_, index) => !arrIndex.includes(index));
  return result;
}

console.log(newArray(arr2, delIndexes));
