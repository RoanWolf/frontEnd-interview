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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let ans = 0;
  let cnt = 0;
  function dfs(node) {
    if (!node || cnt >= k) return;

    dfs(node.left);
    cnt++;
    if (cnt === k) {
      ans = node.val;
      return;
    }
    dfs(node.right);
  }
  dfs(root);
  return ans;
};

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest1 = function (root, k) {
  const ans = [];
  const dfs = (node) => {
    if (node === null) return null;
    dfs(node.left);
    ans.push(node.val);
    dfs(node.right);
  };
  dfs(root);
  return ans[k - 1];
};
