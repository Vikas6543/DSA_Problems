function isPalindrome(str) {
  const splittedArray = str.split("");
  let left = 0;
  let right = splittedArray.length - 1;

  while (left < right) {
    if (
      splittedArray[left].toLowerCase() === splittedArray[right].toLowerCase()
    ) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("racecar")); // true

function isPalindrome(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (left < right && !/[a-zA-Z0-9]/.test(s[left])) {
      left++;
    }

    while (left < right && !/[a-zA-Z0-9]/.test(s[right])) {
      right--;
    }

    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

isPalindrome("A man, a plan, a canal: Panama"); // true
