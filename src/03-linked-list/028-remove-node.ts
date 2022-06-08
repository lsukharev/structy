import Node from './Node';

/**
 * remove node
 *
 * Write a function, removeNode, that takes in the head of a linked list and a
 * target value as arguments. The function should delete the node containing
 * the target value from the linked list and return the head of the resulting
 * linked list. If the target appears multiple times in the linked list, only
 * remove the first instance of the target in the list.
 *
 * Do this in-place.
 *
 * You may assume that the input list is non-empty.
 *
 * You may assume that the input list contains the target.
 *
 * - n = number of nodes
 * - Time: O(n)
 * - Space: O(1)
 */
export function removeNode<T>(head: Node<any>, target: T): Node<any> {
  if (head.data === target) {
    return head.next;
  }

  let curr = head;
  let prev = null;

  while (curr !== null) {
    if (curr.data === target) {
      prev.next = curr.next;
      break;
    }

    prev = curr;
    curr = curr.next;
  }

  return head;
}

/**
 * remove node (recursive)
 *
 * Write a recursive function, removeNodeRecursive, that takes in the head of a
 * linked list and a target value as arguments. The function should delete the
 * node containing the target value from the linked list and return the head of
 * the resulting linked list. If the target appears multiple times in the
 * linked list, only remove the first instance of the target in the list.
 *
 * Do this in-place.
 *
 * You may assume that the input list is non-empty.
 *
 * You may assume that the input list contains the target.
 *
 * - n = number of nodes
 * - Time: O(n)
 * - Space: O(n)
 */
export function removeNodeRecursive<T>(head: Node<any>, target: T): Node<any> {
  if (head === null) {
    return null;
  }

  if (head.data === target) {
    return head.next;
  }

  head.next = removeNodeRecursive(head.next, target);
  return head;
}
