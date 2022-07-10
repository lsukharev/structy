import Node from './Node';

/**
 * breadth first values
 *
 * Write a function, breadthFirstValues, that takes in the root of a binary
 * tree. The function should return an array containing all values of the tree
 * in breadth-first order.
 *
 * - n = number of nodes
 * - Time: O(n)
 * - Space: O(n)
 *
 * Note: this solution should really be considered O(n^2) runtime because the
 * JavaScript shift() methods runs in O(n). JavaScript does not have a native
 * queue data structure that is maximally efficient.
 */
export default function breadthFirstValues(root: Node<any> | null): any[] {
  if (root === null) {
    return [];
  }

  const result = [];
  const queue = [root];

  while (queue.length > 0) {
    const curr = queue.shift();
    result.push(curr.data);

    if (curr.left !== null) {
      queue.push(curr.left);
    }

    if (curr.right !== null) {
      queue.push(curr.right);
    }
  }

  return result;
}
