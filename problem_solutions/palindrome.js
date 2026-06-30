// *********** Solution: 1
function palindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

// *********** Solution: 2
function palindrome(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

// *********** Solution: 3
function palindrome(value) {
  const str = value.toString();
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
