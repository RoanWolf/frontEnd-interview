/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const map = new Map();
  // map(char,cnt)
  let ans = 0;
  for (let l = 0, r = 0; r < s.length; ++r) {
    map.has(s[r]) ? map.set(s[r], map.get(s[r]) + 1) : map.set(s[r], 1);
    while (map.get(s[r]) === 2) {
      map.set(s[l], map.get(s[l]) - 1);
      l++;
    }
    ans = Math.max(ans, r - l + 1);
  }
  return ans;
};
