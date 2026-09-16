function isValidParentheses(str) {
  const stack = [];
  const pairsObject = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let item of str) {
    if (item === "(" || item === "[" || item === "{") {
      stack.push(item);
    } else {
      if (stack.pop() !== pairsObject[item]) return false;
    }
  }

  return stack.length === 0;
}

console.log(isValidParentheses("()[]{}"));
// true

console.log(isValidParentheses("([)]"));
// false

console.log(isValidParentheses("(]"));
// false

console.log(isValidParentheses("([{}])"));
// true
