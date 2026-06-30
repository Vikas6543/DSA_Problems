// Test cases
// console.log(areAnagrams('listen', 'silent')); // true
// console.log(areAnagrams('hello', 'world')); // false
// console.log(areAnagrams('astronomer', 'moonstarer')); // true

// *********** Solution: 1
function areAnagrams(string1, string2) {
  const casedStr1 = string1.toLowerCase();
  const casedStr2 = string2.toLowerCase();

  const charMap1 = {};
  const charMap2 = {};

  for (let i = 0; i < casedStr1.length; i++) {
    if (charMap1[casedStr1[i]]) {
      charMap1[casedStr1[i]]++;
    } else {
      charMap1[casedStr1[i]] = 1;
    }
  }

  for (let i = 0; i < casedStr2.length; i++) {
    if (charMap2[casedStr2[i]]) {
      charMap2[casedStr2[i]]++;
    } else {
      charMap2[casedStr2[i]] = 1;
    }
  }

  for (let char in charMap1) {
    if (charMap1[char] !== charMap2[char]) {
      return false;
    }
  }

  return true;
}

console.log(areAnagrams('astronomer', 'moonstarer'));

// *********** Solution: 2
function areAnagrams(str1, str2) {
  const modifiedStr1 = str1.split(' ').join('').toLowerCase();
  const modifiedStr2 = str2.split(' ').join('').toLowerCase();
  const charMap1 = {};
  const charMap2 = {};

  i = 0;
  while (i < modifiedStr1.length) {
    if (charMap1[modifiedStr1[i]]) {
      charMap1[modifiedStr1[i]] = charMap1[modifiedStr1[i]] + 1;
    } else {
      charMap1[modifiedStr1[i]] = 1;
    }
    i++;
  }

  j = 0;
  while (j < modifiedStr2.length) {
    if (charMap2[modifiedStr2[j]]) {
      charMap2[modifiedStr2[j]] = charMap2[modifiedStr2[j]] + 1;
    } else {
      charMap2[modifiedStr2[j]] = 1;
    }
    j++;
  }

  for (let char in charMap1) {
    if (charMap1[char] !== charMap2[char]) {
      return false;
    }
  }

  return true;
}
