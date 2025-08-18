/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const n = s.length;
    if (n < 2) {
        return s;
    }

    // dp[i][j] 表示 s[i..j] 是否是回文串
    const dp = new Array(n).fill(null).map(() => new Array(n).fill(false));

    let start = 0; 
    let maxLen = 1; 

    // 状态转移方程：dp[i][j] = (s[i] === s[j]) && dp[i + 1][j - 1]
    // 注意遍历顺序，为了保证 dp[i+1][j-1] 已经被计算，i 需要从大到小遍历
    for (let i = n - 1; i >= 0; i--) {
        for (let j = i; j < n; j++) {
            // 当子串长度为 1 或 2 时，j - i < 2，此时只需要判断 s[i] === s[j]
            if (s[i] === s[j] && (j - i < 2 || dp[i + 1][j - 1])) {
                dp[i][j] = true;

                // 如果找到了更长的回文串，则更新结果
                if (j - i + 1 > maxLen) {
                    maxLen = j - i + 1;
                    start = i;
                }
            }
        }
    }

    return s.substring(start, start + maxLen);
};