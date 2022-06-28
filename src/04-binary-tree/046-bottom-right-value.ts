import Node from './Node';

/**
 * bottom right value
 *
 * Write a function, bottomRightValue, that takes in the root of a binary tree.
 * The function should return the right-most value in the bottom-most level of
 * the tree.
 *
 * You may assume that the input tree is non-empty.
 *
 * - n = number of nodes
 * - Time: O(n)
 * - Space: O(n)
 *
 * Note: this solution should really be considered O(n^2) runtime because the
 * JavaScript shift() methods runs in O(n). JavaScript does not have a native
 * queue data structure that is maximally efficient.
 */
export default function bottomRightValue(root: Node<any>): any {
  const queue = [root]
  let curr = null;

  while (queue.length > 0) {
    curr = queue.shift();

    if (curr.left !== null) {
      queue.push(curr.left);
    }

    if (curr.right !== null) {
      queue.push(curr.right);
    }
  }

  return curr.data;
}
