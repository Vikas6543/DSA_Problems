//You’re given a string s, and your goal is to find the length of the longest substring that has no repeating characters.

function lengthOfLongestSubstring(s) {
  let left = 0;
  let right = 0;
  let maxLen = 0;
  const charSet = new Set();

  while (right < s.length) {
    if (!charSet.has(s[right])) {
      charSet.add(s[right]);
      maxLen = Math.max(maxLen, right - left + 1);
      right++;
    } else {
      charSet.delete(s[left]);
      left++;
    }
  }

  return maxLen;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
