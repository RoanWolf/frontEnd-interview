/**
 * @param {number[][]} points
 * @return {number}
 */
var countTrapezoids = function(points) {
    const MOD = 1000000007;
    const cnt = new Map();
    
    for (const [x, y] of points) {
        cnt.set(y, (cnt.get(y) || 0) + 1);
    }
    
    // 关键：先收集所有 y，然后排序！
    const ys = Array.from(cnt.keys()).sort((a, b) => a - b);
    
    let ans = 0;
    let prev = 0;  // 之前所有层（y 更小的层）的水平边总数
    
    for (const y of ys) {
        const c = cnt.get(y);
        if (c < 2) continue;
        const cur = c * (c - 1) / 2;
        ans = (ans + prev * cur) % MOD;
        prev = (prev + cur) % MOD;
    }
    
    return ans;
};