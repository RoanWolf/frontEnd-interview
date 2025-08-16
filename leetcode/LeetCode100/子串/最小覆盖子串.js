/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let n = s.length;
  let m = t.length;
  if (n < m) return "";

  // 记录t中字符的个数
  // 可重复 统计
  let tMap = new Map();
  for (let c of t) {
    tMap.set(c, (tMap.get(c) || 0) + 1);
  }

  

  // 怎么判断频率表合适？
  let vaildCnt = tMap.size;

  // 滑动窗口
  let sMap = new Map();
  let r = 0;
  let l = 0;
  let cur = 0;

  let ans = Infinity;
  let idx = 0;
  while(r < n) {
    sMap.set(s[r], (sMap.get(s[r]) || 0) + 1);
    
    if (tMap.has(s[r]) && sMap.get(s[r]) === tMap.get(s[r])) {
      cur++;
    }

    // 接下来要做的是，使用双指针（左指针 left 和 右指针 right）来扩展和收缩窗口。
    while(l <= r && cur === vaildCnt) {
        if(r - l + 1 < ans) {
            ans = r - l + 1;
            idx = l;
        }

        sMap.set(s[l], sMap.get(s[l]) - 1);
        if (tMap.has(s[l]) && sMap.get(s[l]) < tMap.get(s[l])) {
          cur--;
        }
        l++;
    }

    r++;
  }

  return ans === Infinity ? "" : s.slice(idx, idx + ans);
};
