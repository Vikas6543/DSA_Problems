function romanToInt(s) {
  let total = 0;

  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let i = 0; i < s.length; i++) {
    const current = map[s[i]];
    const next = map[s[i + 1]];

    if (current < next) {
      total = total - current;
    } else {
      total = total + current;
    }
  }

  return total;
}

console.log(romanToInt("LVIII")); // 58

// "XIV"
//  X  = 10  → next is I (10 > 1)   → ADD    → 10
//  I  = 1   → next is V (1 < 5)    → SUBTRACT → -1
//  V  = 5   → no next              → ADD    → 5

// Total = 10 - 1 + 5 = 14 ✅
