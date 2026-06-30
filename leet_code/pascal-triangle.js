function pascal(num) {
  let res = [];

  if (num >= 1) {
    res.push([1]);
  }

  if (num >= 2) {
    res.push([1, 1]);
  }

  for (let i = 2; i < num; i++) {
    let firstNumber = 1;
    let lastNumber = 1;
    let prevArray = res[i - 1];

    let add = [];

    for (let j = 0; j < prevArray.length - 1; j++) {
      add.push(prevArray[j] + prevArray[j + 1]);
    }

    res.push([firstNumber, ...add, lastNumber]);
  }
  return res;
}

console.log(pascal(5)); // [ [ 1 ], [ 1, 1 ], [ 1, 2, 1 ], [ 1, 3, 3, 1 ], [ 1, 4, 6, 4, 1 ] ]
