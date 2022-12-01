import Node from './Node';

/**
 * tree path finder
 *
 * Write a function, pathFinder, that takes in the root of a binary tree and a
 * target value. The function should return an array representing a path to the
 * target value. If the target value is not found in the tree, then return
 * null.
 *
 * You may assume that the tree contains unique values.
 *
 * - n = number of nodes
 * - Time: O(n^2)
 * - Space: O(n)
 */
export function pathFinder<T>(root: Node<any> | null, target: T): string[] {
  if (root === null) {
    return null;
  }

  if (root.data === target) {
    return [root.data];
  }

  const leftPath = pathFinder(root.left, target);
  if (leftPath !== null) {
    return [root.data, ...leftPath];
  }

  const rightPath = pathFinder(root.right, target);
  if (rightPath !== null) {
    return [root.data, ...rightPath];
  }

  return null;
}

/**
 * tree path finder (optimized)
 *
 * Write a function, pathFinderOptimized, that takes in the root of a binary
 * tree and a target value. The function should return an array representing a
 * path to the target value. If the target value is not found in the tree, then
 * return null.
 *
 * You may assume that the tree contains unique values.
 *
 * - n = number of nodes
 * - Time: O(n)
 * - Space: O(n)
 */
export function pathFinderOptimized<T>(root: Node<any> | null, target: T): string[] {
  function pathFinderHelper(root: Node<any> | null): string[] {
    if (root === null) {
      return null;
    }

    if (root.data === target) {
      return [root.data];
    }

    const leftPath = pathFinderHelper(root.left)
    if (leftPath !== null) {
      leftPath.push(root.data);
      return leftPath;
    }

    const rightPath = pathFinderHelper(root.right)
    if (rightPath !== null) {
      rightPath.push(root.data);
      return rightPath;
    }

    return null;
  }

  const result = pathFinderHelper(root);

  if (result === null) {
    return null;
  }

  return result.reverse();
}
