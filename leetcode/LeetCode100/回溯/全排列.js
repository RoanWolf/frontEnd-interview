/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const n = nums.length;
    const path = [];
    const used = new Array(n).fill(false);

    const res = [];
    function dfs(){
        if(path.length === n){
            res.push([...path]);
            return;
        }

        for(let i = 0; i < n; i++){
            if(used[i]) continue;
            used[i] = true;
            path.push(nums[i]);
            dfs();
            path.pop();
            used[i] = false;
        }
    }
    dfs();
    return res;
};