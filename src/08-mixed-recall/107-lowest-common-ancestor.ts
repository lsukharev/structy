import Node from '../03-binary-tree/Node';

/**
 * lowest common ancestor
 *
 * Write a function, lowestCommonAncestor, that takes in the root of a binary
 * tree and two values. The function should return the value of the lowest
 * common ancestor of the two values in the tree.
 *
 * You may assume that the tree values are unique and the tree is non-empty.
 *
 * Note that a node may be considered an ancestor of itself.
 *
 * - n = number of nodes
 * - Time: O(n)
 * - Space: O(n)
 */
export default function lowestCommonAncestor<T>(root: Node<T>, value1: T, value2: T): T {
  const firstPath = findPath(root, value1);
  const secondPath = findPath(root, value2);
  const secondSet = new Set<T>(secondPath);

  for (const value of firstPath) {
    if (secondSet.has(value)) {
      return value;
    }
  }
}

function findPath<T>(root: Node<T>, targetValue: T): T[] {
  if (root === null) {
    return null;
  }

  if (root.data === targetValue) {
    return [root.data];
  }

  const leftPath = findPath(root.left, targetValue);
  if (leftPath !== null) {
    leftPath.push(root.data);
    return leftPath;
  }

  const rightPath = findPath(root.right, targetValue);
  if (rightPath !== null) {
    rightPath.push(root.data);
    return rightPath;
  }

  return null;
}
