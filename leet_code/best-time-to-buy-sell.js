function maxProfit(arr) {
  let maxProfit = 0;
  let minPrice = arr[0];

  for (let char of arr) {
    if (char < minPrice) {
      minPrice = char;
    }
    const profit = char - minPrice;
    if (profit > maxProfit) {
      maxProfit = profit;
    }
  }

  return maxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
