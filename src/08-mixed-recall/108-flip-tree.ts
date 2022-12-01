import Node from '../03-binary-tree/Node';

/**
 * flip tree
 *
 * Write a function, flipTree, that takes in the root of a binary tree. The
 * function should flip the binary tree, turning left subtrees into right
 * subtrees and vice-versa. This flipping should occur in-place by modifying
 * the original tree. The function should return the root of the tree.
 *
 * - n = number of nodes
 * - Time: O(n)
 * - Space: O(n)
 */
export default function flipTree<T>(root: Node<T>): Node<T> {
  if (root === null) {
    return null;
  }

  const left = flipTree(root.left)
  const right = flipTree(root.right);
  root.left = right;
  root.right = left;

  return root;
}
