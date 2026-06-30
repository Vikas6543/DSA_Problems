// Merge Intervals
// You are given an array of intervals, where intervals[i] = [start, end].
// Your job is to merge all overlapping intervals and return an array of the merged intervals.
// Input: [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]

// Input: [[1,4],[4,5]]
// Output: [[1,5]]

function merge(intervals) {
  if (intervals.length === 0) return [];

  // Step 1: Sort intervals by their starting time
  intervals.sort((a, b) => a[0] - b[0]);

  const result = [];
  let current = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    const next = intervals[i];

    // Step 2: Check for overlap
    if (next[0] <= current[1]) {
      // Overlap → merge
      current[1] = Math.max(current[1], next[1]);
    } else {
      // No overlap → push current and move to next
      result.push(current);
      current = next;
    }
  }

  // Push the last interval
  result.push(current);

  return result;
}

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
