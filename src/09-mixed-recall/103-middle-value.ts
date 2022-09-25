import Node from '../03-linked-list/Node';

/**
 * middle value
 *
 * Write a function, middleValue, that takes in the head of a linked list as an
 * argument. The function should return the value of the middle node in the
 * linked list. If the linked list has an even number of nodes, then return the
 * value of the second middle node.
 *
 * You may assume that the input list is non-empty.
 *
 * - n = number of nodes
 * - Time: O(n)
 * - Space: O(1)
 */
export default function middleValue<T>(head: Node<T>): T {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow.data;
}
