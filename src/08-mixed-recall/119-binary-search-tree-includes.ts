import Node from '../03-binary-tree/Node';

/**
 * binary search tree includes
 *
 * Write a function, binarySearchTreeIncludes, that takes in the root of a
 * binary search tree containing numbers and a target value. The function
 * should return a boolean indicating whether or not the target is found within
 * the tree.
 *
 * A {@link https://en.wikipedia.org/wiki/Binary_search_tree Binary Search Tree}
 * is a binary tree where all values within a node's left subtree are smaller
 * than the node's value and all values in a node's right subtree are greater
 * than or equal to the node's value.
 *
 * Your solution should have a best case runtime of O(log(n)).
 *
 *
 * Worst Case
 * - n = number of nodes
 * - Time: O(n)
 * - Space: O(n)
 *
 * Best Case (balanced-tree)
 * - n = number of nodes
 * - Time: O(log(n))
 * - Space: O(log(n))
 */
export default function binarySearchTreeIncludes(root: Node<number>, target: number): boolean {
  if (root === null) {
    return false;
  }

  if (root.data === target) {
    return true;
  }

  if (root.data > target) {
    return binarySearchTreeIncludes(root.left, target);
  }

  return binarySearchTreeIncludes(root.right, target);
}
