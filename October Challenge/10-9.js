/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  const result = [];

  function DFS(node) {
      if(!node) {
          result.push('X');
          return;
      }
      result.push(node.val);
      DFS(node.left);
      DFS(node.right);
  }

  DFS(root);
  console.log('res', result)
  return result.join('.');
};

var deserialize = function(data) {
  const queue = data.split('.');
  let idx = 0;
  function traverse() {
      const currNode = queue[idx];
      idx++;
      if(currNode === 'X') return null;

      const tree = new TreeNode(+currNode);
      tree.left = traverse();
      tree.right = traverse();
      return tree;
  }
  return traverse(0)
};


/**
* Decodes your encoded data to tree.
*
* @param {string} data
* @return {TreeNode}
*/


/**
* Your functions will be called as such:
* deserialize(serialize(root));
*/
