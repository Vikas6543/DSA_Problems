// Solution: 1
// remove a specific element from an given array Using splice
function removeElement(arr, element) {
  var index = arr.indexOf(element);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

console.log(removeElement([1, 2, 3, 4, 5, 6], 3));

// Solution: 2
// using filter
function removeElement(arr, element) {
  return arr.filter((value) => value !== element);
}

console.log(removeElement([1, 2, 3, 4, 5, 6], 3));
