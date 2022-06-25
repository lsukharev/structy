import Node from './Node';

/**
 * tree value count
 *
 * Write a function, treeValueCount, that takes in the root of a binary tree
 * and a target value. The function should return the number of times that the
 * target occurs in the tree.
 *
 * - n = number of nodes
 * - Time: O(n)
 * - Space: O(n)
 */
export function treeValueCount<T>(root: Node<any> | null, target: T): number {
  if (root === null) {
    return 0;
  }

  const stack = [root];
  let count = 0;

  while (stack.length > 0) {
    const curr = stack.pop();

    if (curr.data === target) {
      count += 1;
    }

    if (curr.left !== null) {
      stack.push(curr.left);
    }

    if (curr.right !== null) {
      stack.push(curr.right);
    }
  }

  return count;
}

/**
 * tree value count (recursive)
 *
 * Write a recursive function, treeValueCountRecursive, that takes in the root
 * of a binary tree and a target value. The function should return the number
 * of times that the target occurs in the tree.
 *
 * - n = number of nodes
 * - Time: O(n)
 * - Space: O(n)
 */
export function treeValueCountRecursive<T>(root: Node<any> | null, target: T): number {
  if (root === null) {
    return 0;
  }

  return (
    (root.data === target ? 1 : 0)
    + treeValueCountRecursive(root.left, target)
    + treeValueCountRecursive(root.right, target)
  );
}
