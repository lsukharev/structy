import Node from './Node';

/**
 * tree min value
 *
 * Write a function, treeMinValue, that takes in the root of a binary tree that
 * contains number values. The function should return the minimum value within
 * the tree.
 *
 * You may assume that the input tree is non-empty.
 *
 * - n = number of nodes
 * - Time: O(n)
 * - Space: O(n)
 */
export function treeMinValue(root: Node<number>): number {
  const stack = [root];
  let min = Infinity;

  while (stack.length > 0) {
    const curr = stack.pop();

    if (curr.data < min) {
      min = curr.data;
    }

    if (curr.right !== null) {
      stack.push(curr.right);
    }

    if (curr.left !== null) {
      stack.push(curr.left);
    }
  }

  return min;
}

/**
 * tree min value (recursive)
 *
 * Write a recursive function, treeMinValueRecursive, that takes in the root of
 * a binary tree that contains number values. The function should return the
 * minimum value within the tree.
 *
 * You may assume that the input tree is non-empty.
 *
 * - n = number of nodes
 * - Time: O(n)
 * - Space: O(n)
 */
export function treeMinValueRecursive(root: Node<number>): number {
  if (root === null) {
    return Infinity;
  }

  return Math.min(root.data, treeMinValueRecursive(root.left), treeMinValueRecursive(root.right));
}
