/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest1 = function (nums, k) {
    return nums.sort((a, b) => b - a)[k - 1];
};



// 考察手写堆 大根堆
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    
};