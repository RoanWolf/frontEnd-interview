/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
    let ans = 0;
    const map = new Map();

    map.set(0, 1);
    let dfs=(root, sum)=>{
        if (root === null) return;
        sum += root.val;
        if (map.has(sum - targetSum)) {
            ans += map.get(sum - targetSum);
        }
        map.set(sum, (map.get(sum) || 0) + 1);
        dfs(root.left, sum);
        dfs(root.right, sum);

        map.set(sum , (map.get(sum) || 0) - 1)
    }
    dfs(root, 0);
    return ans;
};