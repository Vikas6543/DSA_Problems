function temperature(arr) {
  debugger;
  let result = new Array(arr.length).fill(0);

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        console.log(arr[j] - arr[i]);
        result[i] = j - i;
        break;
      }
    }
  }

  return result;
}

console.log(temperature([73, 74, 75, 71, 69, 72, 76, 73]));
