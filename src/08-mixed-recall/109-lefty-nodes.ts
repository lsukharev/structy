import Node from '../03-binary-tree/Node';

/**
 * lefty nodes
 *
 * Write a function, leftyNodes, that takes in the root of a binary tree. The
 * function should return an array containing the left-most value on every
 * level of the tree. The array must be ordered in a top-down fashion where the
 * root is the first element.
 *
 * Note that the left-most node on a level may not necessarily be a left child.
 *
 * - n = number of nodes
 * - Time: O(n)
 * - Space: O(n)
 */
export default function leftyNodes<T>(root: Node<T> | null): T[] {
  function traverse(node: Node<T>, level: number) {
    if (node === null) {
      return;
    }

    if (values[level] === undefined) {
      values[level] = node.data;
    }

    traverse(node.left, level + 1);
    traverse(node.right, level + 1);
  }

  const values: T[] = [];
  traverse(root, 0);
  return values;
}
