import Node from '../03-binary-tree/Node';

/**
 * is binary search tree
 *
 * Write a function, isBinarySearchTree, that takes in the root of a binary
 * tree. The function should return a boolean indicating whether or not the
 * tree satisfies the binary search tree property.
 *
 * A {@link https://en.wikipedia.org/wiki/Binary_search_tree Binary Search Tree}
 * is a binary tree where all values within a node's left subtree are smaller
 * than the node's value and all values in a node's right subtree are greater
 * than or equal to the node's value.
 *
 * - n = number of nodes
 * - Time: O(n)
 * - Space: O(n)
 */
export default function isBinarySearchTree(root: Node<number>): boolean {
  const values: number[] = [];

  inOrderTraversal(root, values);

  for (let index = 0; index < values.length - 1; index += 1) {
    if (values[index] > values[index + 1]) {
      return false;
    }
  }

  return true;
}

function inOrderTraversal(root: Node<number>, values: number[]) {
  if (root === null) {
    return;
  }

  inOrderTraversal(root.left, values);
  values.push(root.data);
  inOrderTraversal(root.right, values);
}
