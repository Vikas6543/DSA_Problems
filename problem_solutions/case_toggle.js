function casing(str) {
  const splittedStr = str.split('');
  var result = '';

  for (var i = 0; i < splittedStr.length; i++) {
    if (splittedStr[i] === splittedStr[i].toUpperCase()) {
      result += splittedStr[i].toLowerCase();
    } else {
      result += splittedStr[i].toUpperCase();
    }
  }

  return result;
}

console.log(casing('ViKAs')); // vIkaS

// *************** Solution: 3
function toggleCase(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      result += str[i].toLowerCase();
    } else {
      result += str[i].toUpperCase();
    }
  }
  return result;
}

console.log(toggleCase('ViKaS IS gOOd')); // vIkAs is GooD
