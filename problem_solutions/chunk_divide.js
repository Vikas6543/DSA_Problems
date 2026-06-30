// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// *********** Solution: 1
function chunk(array, size) {
  const result = [];
  let index = 0;

  while (index < array.length) {
    const newArray = array.slice(index, index + size);
    result.push(newArray);
    index += size;
  }

  return result;
}

console.log(chunk([1, 2, 3, 4, 5], 4));

// Solution: 2
function chunk(array, size) {
  const chunked = [];

  for (let i = 0; i < array.length; i += size) {
    chunked.push(array.slice(i, i + size));
  }

  return chunked;
}

console.log(chunk([1, 2, 3, 4, 5], 4));
