// find the First Non-Repeating Character in a String

function firstUniqueChar(str) {
  let map = {};

  for (let i = 0; i < str.length; i++) {
    if (map[str[i]]) {
      map[str[i]]++;
    } else {
      map[str[i]] = 1;
    }
  }

  for (let i = 0; i < str.length; i++) {
    if (map[str[i]] === 1) {
      return i;
    }
  }

  return -1;
}

console.log(firstUniqueChar("leetcode")); // Output: 0
console.log(firstUniqueChar("loveleetcode")); // Output: 2
console.log(firstUniqueChar("aabb")); // Output: -1
