/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    const map = new Map();
    for(let num of nums){
        map.set(num , (map.get(num) || 0) + 1);
        if(map.get(num) === 2) return num;
    }
};

console.log(findDuplicate([1,3,4,2,2]));