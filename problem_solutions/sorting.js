// ************ Solution: 1
// sort an array by Value & by Name
var items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 },
];

// sort by value
items.sort(function (a, b) {
  return a.value - b.value;
});

// sort by name
items.sort((a, b) => {
  var nameA = a.name.toUpperCase();
  var nameB = b.name.toUpperCase();
  if (nameA < nameB) {
    return -1;
  }
  return 1;
});

console.log(items);

// ************ Solution: 2
// just sort
var givenArray = [5, 1, 99, 25];

// a) ascending order
givenArray.sort((a, b) => {
  return a - b;
});

// b) descending order
givenArray.sort((a, b) => {
  return b - a;
});

// c) sorts an array alphabetically
const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
const result = fruits.sort();

// ************ Solution: 3
// get the smallest two numbers from array & add first two numbers in that array

// Using ES6
function sorted(numbers) {
  const sortedNum = numbers.sort((a, b) => a - b);
  const [firstNum, secondNum] = sortedNum;
  return firstNum + secondNum;
}

// Using For Loop
function smallTobig(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i; j < numbers.length; j++) {
      if (numbers[i] > numbers[j]) {
        let temp = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = temp;
      }
    }
    result.push(numbers[i]);
  }
  const [first, second] = result;
  return first + second;
}

console.log(smallTobig([5, 2, 1, 4]));
