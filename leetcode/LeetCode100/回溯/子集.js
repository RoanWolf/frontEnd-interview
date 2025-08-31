/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets1 = function(nums) {
    const res = [];
    const n = nums.length;
    
    // 枚举从 0 到 2^n - 1 的所有数字
    for (let i = 0; i < (1 << n); i++) {
        const subset = [];
        
        // 检查每一位是否为1
        for (let j = 0; j < n; j++) {
            // 如果第j位是1，则选择nums[j]
            if (i & (1 << j)) {
                subset.push(nums[j]);
            }
        }
        
        res.push(subset);
    }
    
    return res;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const res = [];
    const path = [];
    
    function backtrack(start) {
        // 每次递归都将当前路径加入结果
        res.push([...path]);
        
        // 从start开始遍历，避免重复
        for (let i = start; i < nums.length; i++) {
            path.push(nums[i]);        // 选择
            backtrack(i + 1);          // 递归
            path.pop();                // 回溯
        }
    }
    
    backtrack(0);
    return res;
};