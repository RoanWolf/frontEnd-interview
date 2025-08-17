/**
 * @param {number[]} a
 * @return {number[]}
 */
var dailyTemperatures = function (a) {
  const n = a.length;
  const result = new Array(n).fill(0); 
  const stack = []; 

  for (let i = 0; i < n; ++i) {
    // 小压大 栈
    while (stack.length > 0 && a[stack.at(-1)] < a[i]) {
      let pop = stack.pop();
      result[pop] = i - pop; 
    }

    stack.push(i); 
  }

  return result;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
// [1, 1, 4, 2, 1, 1, 0, 0]
