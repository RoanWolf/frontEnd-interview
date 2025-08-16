/**
 * @param {number[][]} nums
 * @return {number[][]}
 */
var merge = function(nums) {
    nums = nums.sort((a, b) => a[0] - b[0]);

    let ans = [nums[0]];
    for(let i = 1;i < nums.length; ++i){
        let curL = nums[i][0];
        let curR = nums[i][1];

        let lastR = ans[ans.length - 1][1];

        // 有交集
        if(curL <= lastR){
            ans[ans.length - 1][1] = Math.max(lastR, curR);
        }
        // 无交集
        else{
            ans.push(nums[i]);
        }
    }

    return ans;
};