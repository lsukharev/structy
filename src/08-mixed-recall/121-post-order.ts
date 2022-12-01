import Node from '../03-binary-tree/Node';

/**
 * post order
 *
 * Write a function, postOrder, that takes in the root of a binary tree. The
 * function should return an array containing the post-ordered values of the
 * tree.
 *
 * {@link https://en.wikipedia.org/wiki/Tree_traversal#Post-order,_LRN Post-order}
 * traversal is when nodes are recursively visited in the order: left child,
 * right child, self.
 *
 * - n = number of nodes
 * - Time: O(n)
 * - Space: O(n)
 */
export default function postOrder<T>(root: Node<T>): T[] {
  const values: T[] = [];
  postOrderTraversal(root, values);
  return values;
}

function postOrderTraversal<T>(root: Node<T>, values: T[]) {
  if (root === null) {
    return;
  }

  postOrderTraversal(root.left, values);
  postOrderTraversal(root.right, values);
  values.push(root.data);
}
