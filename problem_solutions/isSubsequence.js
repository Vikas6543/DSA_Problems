function isSubsequence(a, b) {
  let left = 0;
  let right = 0;

  while (right < b.length) {
    if (a[left] === b[right]) {
      left++;
    }
    right++;
  }
  return left === a.length;
}

// the string in first seq should match the order in second sequence in order
console.log(isSubsequence("abc", "ahbgdc")); // true
console.log(isSubsequence("acb", "ahbgdc")); // false
