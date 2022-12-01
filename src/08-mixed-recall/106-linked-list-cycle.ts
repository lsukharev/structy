import Node from '../02-linked-list/Node';

/**
 * linked list cycle
 *
 * Write a function, linkedListCycle, that takes in the head of a linked list
 * as an argument. The function should return a boolean indicating whether or
 * not the linked list contains a cycle.
 *
 * - n = number of nodes
 * - Time: O(n)
 * - Space: O(1)
 */
export default function linkedListCycle<T>(head: Node<T> | null): boolean {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}
