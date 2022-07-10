import Node from './Node';

/**
 * tree sum
 *
 * Write a function, treeSum, that takes in the root of a binary tree that
 * contains number values. The function should return the total sum of all
 * values in the tree.
 *
 * - n = number of nodes
 * - Time: O(n)
 * - Space: O(n)
 */
export function treeSum(root: Node<number> | null): number {
  if (root === null) {
    return 0;
  }

  const stack = [root];
  let sum = 0;

  while (stack.length > 0) {
    const curr = stack.pop();
    sum += curr.data;

    if (curr.right !== null) {
      stack.push(curr.right);
    }

    if (curr.left !== null) {
      stack.push(curr.left);
    }
  }

  return sum;
}

/**
 * tree sum (recursive)
 *
 * Write a recursive function, treeSumRecursive, that takes in the root of a
 * binary tree that contains number values. The function should return the
 * total sum of all values in the tree.
 *
 * - n = number of nodes
 * - Time: O(n)
 * - Space: O(n)
 */
export function treeSumRecursive(root: Node<number> | null): number {
  if (root === null) {
    return 0;
  }

  return root.data + treeSumRecursive(root.left) + treeSumRecursive(root.right);
}
