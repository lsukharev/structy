import Node from './Node';

/**
 * depth first values
 *
 * Write a function, depthFirstValues, that takes in the root of a binary tree.
 * The function should return an array containing all values of the tree in
 * depth-first order.
 *
 * Hey. This is our first binary tree problem, so you should be liberal with
 * watching the Approach and Walkthrough. Be productive, not stubborn. -AZ
 *
 * - n = number of nodes
 * - Time: O(n)
 * - Space: O(n)
 */
export function depthFirstValues(root: Node<any>): any[] {
  if (root === null) {
    return [];
  }

  const result = [];
  const stack = [root];

  while (stack.length > 0) {
    const curr = stack.pop();
    result.push(curr.data);

    if (curr.right !== null) {
      stack.push(curr.right);
    }

    if (curr.left !== null) {
      stack.push(curr.left);
    }
  }

  return result;
}

/**
 * depth first values (recursive)
 *
 * Write a recursive function, depthFirstValuesRecursive, that takes in the
 * root of a binary tree. The function should return an array containing all
 * values of the tree in depth-first order.
 *
 * Hey. This is our first binary tree problem, so you should be liberal with
 * watching the Approach and Walkthrough. Be productive, not stubborn. -AZ
 *
 * - n = number of nodes
 * - Time: O(n)
 * - Space: O(n)
 */
export function depthFirstValuesRecursive(root: Node<any>): any[] {
  if (root === null) {
    return [];
  }

  const leftData = depthFirstValuesRecursive(root.left);
  const rightData = depthFirstValuesRecursive(root.right);

  return [root.data, ...leftData, ...rightData];
}
