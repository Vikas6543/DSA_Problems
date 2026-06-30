// ********** Solution: 1
// convert an object to an array and just return the values
function objectToArray(obj) {
  var arr = [];
  for (var key in obj) {
    arr.push(obj[key]);
  }
  return arr;
}

console.log(objectToArray({ a: 1, b: 2, c: 3 }));

// ********** Solution: 2
// check whether an object contains given property
function hasProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

console.log(hasProperty({ name: 'John' }, 'name'));
