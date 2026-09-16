function groupAnagrams(arr) {
  const result = {};

  for (let item of arr) {
    const sorted = item.split("").sort().join("");
    if (!result[sorted]) {
      result[sorted] = [];
    }

    result[sorted].push(sorted);
  }

  return Object.values(result);
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
