/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange1 = function (nums, target) {
  let left1 = 0,
    right1 = nums.length - 1;
  let left2 = 0,
    right2 = nums.length - 1;
  let lans = 0,
    rans = 0;

  // find left index if target exists
  while (left1 <= right1) {
    let mid = Math.floor((left1 + right1) / 2);
    if (nums[mid] >= target) {
      lans = mid;
      right1 = mid - 1;
    } else {
      left1 = mid + 1;
    }
  }

  // find right index if target exists
  while (left2 <= right2) {
    let mid = Math.floor((left2 + right2) / 2);
    if (nums[mid] <= target) {
      rans = mid;
      left2 = mid + 1;
    } else {
      right2 = mid - 1;
    }
  }
  return [nums[lans] === target ? lans : -1, nums[rans] === target ? rans : -1];
};


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let l = 0, r = nums.length - 1;
    let left = 0;
    // find left index if target exists
    while(l <= r){
        let mid = Math.floor((l + r) / 2);
        if(nums[mid] >= target){
            left = mid;
            r = mid - 1;
        }
        else {
            l = mid + 1;
        }
    }
    // no exist target
    if(nums[left] !== target) return [-1 ,-1];

    const ans = [left];

    while(left + 1  < nums.length) {
        if(nums[left] === nums[left + 1]) left++;
        else break;
    }
    ans.push(left);

    return ans;
};