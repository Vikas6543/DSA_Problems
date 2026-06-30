function tokens(arr) {
  let stack = [];

  for (let item of arr) {
    if (item.match(/[0-9]/)) {
      stack.push(+item);
    } else {
      let firstItem = stack.pop();
      let secondItem = stack.pop();
      let result;
      if (item === "+") {
        result = firstItem + secondItem;
      } else {
        result = firstItem * secondItem;
      }

      stack.push(result);
    }
  }

  return stack.pop();
}

console.log(tokens(["2", "1", "+", "3", "*"])); // 9
