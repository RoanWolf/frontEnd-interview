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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    function dfs(l , r){
        if(l === null || r === null){
            return l === r;
        }

        return l.val === r.val && dfs(l.left, r.right) && dfs(l.right, r.left);
    }

    return dfs(root.left, root.right);
};