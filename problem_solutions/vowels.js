// ********* Solution: 1 (for loop)
function countVowels(str) {
  var vowels = ["a", "e", "i", "o", "u"];
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("hello"));

// ********* Solution: 2 (filter method)
const countVowels = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  return str.split("").filter((char) => vowels.includes(char)).length;
};

console.log(countVowels("vikas"));

// ********* Solution: 3 (reduce method)
function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  const result = str
    .split("")
    .reduce((acc, char) => (vowels.includes(char) ? acc + 1 : acc), 0);

  return result;
}

console.log(countVowels("hello"));

// ********* Solution: 4 (recursion method)
function countVowels(str, index = 0, count = 0) {
  if (index === str.length) return count;

  const vowels = ["a", "e", "i", "o", "u"];

  return countVowels(
    str,
    index + 1,
    vowels.includes(str[index]) ? count + 1 : count
  );
}

console.log(countVowels("hello"));
