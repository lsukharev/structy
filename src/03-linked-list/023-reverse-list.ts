import Node from './Node';

/**
 * reverse list
 *
 * Write a function, reverseList, that takes in the head of a linked list as an
 * argument. The function should reverse the order of the nodes in the linked
 * list in-place and return the new head of the reversed linked list.
 *
 * - n = number of nodes
 * - Time: O(n)
 * - Space: O(1)
 */
export function reverseList(head: Node<any>): Node<any> {
  let curr = head;
  let prev = null;

  while (curr !== null) {
    const next = curr.next;
    curr.next = prev;

    prev = curr;
    curr = next;
  }

  return prev;
}

/**
 * reverse list (recursive)
 *
 * Write a recursive function, reverseListRecursive, that takes in the head of
 * a linked list as an argument. The function should reverse the order of the
 * nodes in the linked list in-place and return the new head of the reversed
 * linked list.
 *
 * - n = number of nodes
 * - Time: O(n)
 * - Space: O(n)
 */
export function reverseListRecursive(head: Node<any>, prev: Node<any> = null): Node<any> {
  if (head === null) {
    return prev;
  }

  const next = head.next;
  head.next = prev;
  return reverseListRecursive(next, head);
}
