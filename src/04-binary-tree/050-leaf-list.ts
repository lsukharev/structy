import Node from './Node';

/**
 * leaf list
 *
 * Write a function, leafList, that takes in the root of a binary tree and
 * returns an array containing the values of all leaf nodes in left-to-right
 * order.
 *
 * - n = number of nodes
 * - Time: O(n)
 * - Space: O(n)
 */
export function leafList(root: Node<any> | null): any[] {
  if (root === null) {
    return [];
  }

  const stack = [root];
  const leaves: any[] = [];

  while (stack.length > 0) {
    const current = stack.pop();

    if (current.right !== null) {
      stack.push(current.right);
    }

    if (current.left !== null) {
      stack.push(current.left);
    }

    if (current.left === null && current.right === null) {
      leaves.push(current.data);
    }
  }

  return leaves;
}

/**
 * leaf list (recursive)
 *
 * Write a recursive function, leafListRecursive, that takes in the root of a
 * binary tree and returns an array containing the values of all leaf nodes in
 * left-to-right order.
 *
 * - n = number of nodes
 * - Time: O(n)
 * - Space: O(n)
 */
export function leafListRecursive(root: Node<any> | null): any[] {
  function leafListHelper(root: Node<any> | null, leaves: any[]) {
    if (root === null) {
      return;
    }

    if (root.left === null && root.right === null) {
      leaves.push(root.data);
    }

    leafListHelper(root.left, leaves);
    leafListHelper(root.right, leaves);
  }

  const leaves: any[] = [];
  leafListHelper(root, leaves);
  return leaves;
}
