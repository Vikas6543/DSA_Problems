function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let miniIndex = i;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[miniIndex]) {
        miniIndex = j;
      }
    }
    [arr[i], arr[miniIndex]] = [arr[miniIndex], arr[i]];
  }
  return arr;
}

console.log(selectionSort([4, 2, 1, 6, 0, 5, 3])); // [0, 1, 2, 3, 4, 5, 6]
