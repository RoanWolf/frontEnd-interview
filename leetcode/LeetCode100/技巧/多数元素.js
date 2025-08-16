/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {

    let obj = null;
    
    for(let num of nums){
        if(obj === null) {
            obj = {val:num , cnt:1};
        }
        else if(obj.val === num){
            obj.cnt++;
        }else{
            
            if(--obj.cnt === 0){
                obj = null;
            }
        }
    }

    return obj.val;

};