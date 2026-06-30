// *********** Solution: 1 (swap first and last item in an array)
function swap(array) {
  if (array.length < 2) {
    return array;
  }
  const firstIndex = array[0];
  const lastIndex = array[array.length - 1];

  array[0] = lastIndex;
  array[array.length - 1] = firstIndex;

  return array;
}

console.log(swap([1, 2, 3, 4]));
