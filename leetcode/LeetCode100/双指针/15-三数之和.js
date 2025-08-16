/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 答案中不可以包含重复的三元组。
var threeSum = function (nums) {
  nums = nums.sort((a, b) => a - b);
  const ans = [];
  for (let i = 0; i + 2 < nums.length; ++i) {
    let l = i + 1,
      r = nums.length - 1;
    while (l < r) {
      if (nums[l] + nums[r] === -nums[i]) {
        let cur = [nums[i], nums[l], nums[r]];
        let ok = true;
        for(let arr of ans){
            if(isEqual(arr,cur)) {
                ok = false;
                break;
            }
        }
        ok && ans.push(cur);
        l++;
      } else if (nums[l] + nums[r] < -nums[i]) l++;
      else r--;
    }
  }
  return ans;
};

function isEqual(a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
  }
