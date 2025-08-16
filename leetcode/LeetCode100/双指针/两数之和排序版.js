/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

// https://leetcode.cn/problems/kLl5u1/description/
var twoSum = function(numbers, target) {
    let i = 0 ,  j = numbers.length - 1;
    while(i < j){
        if(numbers[i] + numbers[j] === target) return [i,j];
        else if(numbers[i] + numbers[j] < target){
            i++;
        }
        else{
            j--;
        }
    }
};