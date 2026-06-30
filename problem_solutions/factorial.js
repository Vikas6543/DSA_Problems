// ********** Solution: 1
function factorial(num) {
  if (num == 0) {
    return 1;
  }
  return num * factorial(num - 1);
}

console.log(factorial(5)); // 120

// ********** Solution: 2
function factorial(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    total *= i;
  }
  return result;
}

console.log(factorial(5)); // 120
