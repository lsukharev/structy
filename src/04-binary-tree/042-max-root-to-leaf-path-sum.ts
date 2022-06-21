import Node from './Node';

/**
 * max root to leaf path sum
 *
 * Write a function, maxPathSum, that takes in the root of a binary tree that
 * contains number values. The function should return the maximum sum of any
 * root to leaf path within the tree.
 *
 * You may assume that the input tree is non-empty.
 *
 * - n = number of nodes
 * - Time: O(n)
 * - Space: O(n)
 */
export default function maxPathSum(root: Node<number>): number {
  if (root === null) {
    return -Infinity;
  }

  if (root.left === null && root.right === null) {
    return root.data;
  }

  return root.data + Math.max(maxPathSum(root.left), maxPathSum(root.right));
}
