// *********** Solution: 1
function capitalize(str) {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === ' ') {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }

  return result;
}

// *********** Solution: 2
function capitalize(str) {
  const words = [];

  for (let word of str.split(' ')) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }

  return words.join(' ');
}

// *********** Solution: 3
// make firstletter to uppercase in each word and sort them on the basis of length.
function capitalise(str) {
  const splittedString = str.split(' ');
  const result = [];
  for (let i = 0; i < splittedString.length; i++) {
    const firstLetter = splittedString[i][0].toUpperCase();
    const finalAnswer = firstLetter + splittedString[i].slice(1);
    result.push(finalAnswer);
  }
  return result.join(' ');
}

console.log(capitalise('vikas is a good boy')); // Vikas Is A Good Boy
