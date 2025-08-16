/**
 * @param {number[]} h
 * @return {number}
 */
var maxArea = function (h) {
    // h = (j - i) * min(h[i] , h[j])

    let i = 0 , j = h.length  - 1;
    let ans = 0;
    while(i < j){
        ans = Math.max(ans , (j - i) * Math.min(h[i] , h[j]));

        h[i] < h[j] ? i++ : j--;
    }

    return ans;
};