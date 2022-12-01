import Node from './Node';

/**
 * linked list find
 *
 * Write a function, linkedListFind, that takes in the head of a linked list
 * and a target value. The function should return a boolean indicating whether
 * or not the linked list contains the target.
 *
 * - n = number of nodes
 * - Time: O(n)
 * - Space: O(1)
 */
export function linkedListFind<T>(head: Node<T>, target: T): boolean {
  let curr = head;

  while (curr !== null) {
    if (curr.data === target) {
      return true;
    }

    curr = curr.next;
  }

  return false;
}

/**
 * linked list find (recursive)
 *
 * Write a recursive function, linkedListFindRecursive, that takes in the head
 * of a linked list and a target value. The function should return a boolean
 * indicating whether or not the linked list contains the target.
 *
 * - n = number of nodes
 * - Time: O(n)
 * - Space: O(n)
 */
export function linkedListFindRecursive<T>(head: Node<T>, target: T): boolean {
  if (head === null) {
    return false;
  }

  if (head.data === target) {
    return true;
  }

  return linkedListFindRecursive(head.next, target);
}
