function digitCount(str) {
  let total = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] >= '0' && str[i] <= '9') {
      total += parseInt(str[i]);
    }
  }
  return total;
}

console.log(digitCount('vik1as9')); // 10
