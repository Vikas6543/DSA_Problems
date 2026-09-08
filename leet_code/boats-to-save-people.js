// LeetCode 881 — Boats to Save People
function numRescueBoats(people, limit) {
  people.sort((a, b) => a - b);

  let left = 0;
  let right = people.length - 1;
  let boats = 0;

  while (left <= right) {
    if (people[left] + people[right] <= limit) {
      left++;
      right--;
    } else {
      right--;
    }

    boats++;
  }

  return boats;
}

console.log(numRescueBoats([3, 2, 2, 1], 3));
// 3

console.log(numRescueBoats([3, 5, 3, 4], 5));
// 4
