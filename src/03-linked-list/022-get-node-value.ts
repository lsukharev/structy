import Node from './Node';

/**
 * get node value
 *
 * Write a function, getNodeValue, that takes in the head of a linked list and
 * an index. The function should return the value of the linked list at the
 * specified index.
 *
 * If there is no node at the given index, then return null.
 *
 * - n = number of nodes
 * - Time: O(n)
 * - Space: O(1)
 */
export function getNodeValue<T>(head: Node<T>, index: number): T {
  let curr = head;
  let iter = 0;

  while (curr !== null) {
    if (iter === index) {
      return curr.data;
    }

    iter += 1;
    curr = curr.next;
  }

  return null;
}

/**
 * get node value (recursive)
 *
 * Write a recursive function, getNodeValueRecursive, that takes in the head of
 * a linked list and an index. The function should return the value of the
 * linked list at the specified index.
 *
 * If there is no node at the given index, then return null.
 *
 * - n = number of nodes
 * - Time: O(n)
 * - Space: O(n)
 */
export function getNodeValueRecursive<T>(head: Node<T>, index: number): T {
  if (head === null) {
    return null;
  }

  if (index === 0) {
    return head.data;
  }

  return getNodeValueRecursive(head.next, index - 1);
}
