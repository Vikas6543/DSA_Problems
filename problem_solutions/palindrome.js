// *********** Solution: 1
function palindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

// *********** Solution: 2
function palindrome(str) {
  return str.split("").every((char, i) => {
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

// ********** Solution: 3 (two pointers)
function palindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

console.log(palindrome("aracecara")); // true

// ********** Solution: 4 (two pointers) (leetcode: 125)
function palindromeComplex(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    while (left < right && !isAlphaNumeric(str[left])) {
      left++;
    }
    while (left < right && !isAlphaNumeric(str[right])) {
      right--;
    }
    if (str[left].toLowerCase() !== str[right].toLowerCase()) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

function isAlphaNumeric(char) {
  return /^[a-zA-Z0-9]$/.test(char);
}

console.log(palindromeComplex("A man, a plan, a canal: Panama"));
