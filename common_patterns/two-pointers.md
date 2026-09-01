# Two Pointers

## The Core Idea

Two pointers means tracking two indices into a data structure (usually an array or string) and moving them based on some condition, instead of using nested loops. That turns an O(n²) brute force into O(n).

There are two common shapes:

---

## 1. Opposite Ends, Converging Inward

Used when the array is sorted and you're looking for a pair/combination.

- Start `left = 0`, `right = n - 1`
- Compare something at both ends
- Move `left` forward or `right` backward depending on the comparison
- Continue until the pointers meet or cross
- Stop when they cross

### Template

```javascript
function twoSumSorted(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === target) {
      return [arr[left], arr[right]];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return null; // No pair found
}

twoSumSorted([2, 3, 6, 7, 11, 15], 9); // returns [2, 7]
```

---

## 2. Same Direction, Sliding Window

Used when you're looking for a subarray or substring that meets some condition.

- Start `left = 0`, `right = 0`
- Expand `right` to include more elements until the condition is met
- Once the condition is met, move `left` forward to try to shrink the window while still meeting the condition
- Continue until `right` reaches the end of the array

### Template

```javascript
function minSubArrayLen(arr, target) {
  let left = 0;
  let sum = 0;
  let minLength = Infinity;

  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];

    while (sum >= target) {
      minLength = Math.min(minLength, right - left + 1);
      sum -= arr[left];
      left++;
    }
  }

  return minLength === Infinity ? 0 : minLength;
}

minSubArrayLen([2, 3, 1, 2, 4, 3], 7); // returns 2 (subarray [4,3])
```
