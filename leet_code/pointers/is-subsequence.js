function isSubsequence(s, t) {
  let left = 0;
  let right = 0;

  while (left < s.length && right < t.length) {
    if (s[left] === t[right]) {
      left++;
    }

    right++;
  }

  return left === s.length;
}

console.log(isSubsequence("abc", "ahbgdc")); // true
console.log(isSubsequence("axc", "ahbgdc")); // false
