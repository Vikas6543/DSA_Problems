function lengthOfLongestSubstring(s) {
  let left = 0;
  let maxLength = 0;
  const set = new Set();

  for (let right = 0; right < s.length; right++) {
    // Remove characters until duplicate is gone
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }

    // Add current character
    set.add(s[right]);

    // Calculate current window length
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb")); // 3

console.log(lengthOfLongestSubstring("bbbbb")); // 1

console.log(lengthOfLongestSubstring("pwwkew")); // 3
