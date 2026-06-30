// ********* Solution: 1
function longestWord(str) {
  const split = str.split(' ');
  longest = '';
  for (const word of split) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest.length;
}
console.log(longestWord('hi im vikas shambhu'));
