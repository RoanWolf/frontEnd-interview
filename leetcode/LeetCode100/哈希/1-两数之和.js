/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum1 = function (nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; ++i) {
        if (map.has(target - nums[i])) {
            return [i, map.get(target - nums[i])];
        }
        map.set(nums[i], i);
    }
}
var twoSum = function (nums, target) {
    let obj = [];

    // put in obj
    for (let i = 0; i < nums.length; ++i) {
        obj.push({ val: nums[i], idx: i });
    }

    // sort by val
    obj = obj.sort((a, b) => a.val - b.val);

    // two pointers
    let l = 0 , r = obj.length - 1;
    while (l < r) {
        if(obj[l].val + obj[r].val === target) {
            return [obj[l].idx, obj[r].idx];
        }
        else if(obj[l].val + obj[r].val < target) {
            l++;
        }
        else {
            r--;
        }
    }


};
