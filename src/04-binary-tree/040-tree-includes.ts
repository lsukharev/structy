import Node from './Node';

/**
 * tree includes
 *
 * Write a function, treeIncludes, that takes in the root of a binary tree and
 * a target value. The function should return a boolean indicating whether or
 * not the value is contained in the tree.
 *
 * - n = number of nodes
 * - Time: O(n)
 * - Space: O(n)
 */
export function treeIncludes<T>(root: Node<any> | null, target: T): boolean {
  if (root === null) {
    return false;
  }

  const stack = [root];

  while (stack.length > 0) {
    const curr = stack.pop();

    if (curr.data === target) {
      return true;
    }

    if (curr.right !== null) {
      stack.push(curr.right);
    }

    if (curr.left !== null) {
      stack.push(curr.left);
    }
  }

  return false;
}

/**
 * tree includes (recursive)
 *
 * Write a recursive function, treeIncludesRecursive, that takes in the root of
 * a binary tree and a target value. The function should return a boolean
 * indicating whether or not the value is contained in the tree.
 *
 * - n = number of nodes
 * - Time: O(n)
 * - Space: O(n)
 */
export function treeIncludesRecursive<T>(root: Node<any> | null, target: T): boolean {
  if (root === null) {
    return false;
  }

  if (root.data === target) {
    return true;
  }

  return treeIncludesRecursive(root.left, target) || treeIncludesRecursive(root.right, target);
}
