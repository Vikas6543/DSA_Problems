// *********** Solution: 1
function reverseString(str) {
  let reversedStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

console.log(reverseString('hello')); // Output: "olleh"

// *********** Solution: 2
function reverse(str) {
  const splited = str.split('');
  const reversed = splited.reverse();
  const joined = reversed.join('');
  return joined;
}

// *********** Solution: 3
function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
}

// *********** Solution: 4
function reverse(str) {
  let reversed = '';

  for (let character of str) {
    reversed = character + reversed;
  }

  return reversed;
}

// *********** reverse number
function reverseInt(num) {
  const reversed = num.toString().split('').reverse().join('');

  return parseInt(reversed) * Math.sign(num);
}
