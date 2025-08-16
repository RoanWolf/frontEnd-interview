/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let q = [];

    let ans = [];
    for(let i = 0;i < nums.length; ++i){
        // 维护头
        while(q.length && q[0] <= i - k){
            q.shift();
        }
        // 维护尾
        while(q.length && nums[q[q.length - 1]] <= nums[i]){
            q.pop();
        }

        q.push(i);

        if(i >= k - 1){
            ans.push(nums[q[0]]);
        }
    }

    return ans;
};