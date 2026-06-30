// ********* Solution: 1
function findLongestName(array) {
  var longestName = array[0];
  for (var i = 0; i < array.length; i++) {
    if (array[i].length > longestName.length) {
      longestName = array[i];
    }
  }
  return longestName;
}

console.log(findLongestName(['vikas', 'vishwamitra', 'viru']));
