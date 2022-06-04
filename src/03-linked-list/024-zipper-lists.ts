import Node from './Node';

/**
 * zipper lists
 *
 * Write a function, zipperLists, that takes in the head of two linked lists as
 * arguments. The function should zipper the two lists together into a single
 * linked list by alternating nodes. If one of the linked lists is longer than
 * the other, the resulting list should terminate with the remaining nodes. The
 * function should return the head of the zippered linked list.
 *
 * Do this in-place, by mutating the original Nodes.
 *
 * You may assume that both input lists are non-empty.
 *
 * - n = length of list 1
 * - m = length of list 2
 * - Time: O(min(n, m))
 * - Space: O(1)
 */
export function zipperLists(head1: Node<any>, head2: Node<any>): Node<any> {
  let tail = head1;
  let curr1 = head1.next;
  let curr2 = head2;
  let iter = 0;

  while (curr1 !== null && curr2 !== null) {
    if (iter % 2 === 0) {
      tail.next = curr2;
      curr2 = curr2.next;
    } else {
      tail.next = curr1;
      curr1 = curr1.next;
    }

    tail = tail.next;
    iter += 1;
  }

  if (curr1 !== null) {
    tail.next = curr1;
  }

  if (curr2 !== null) {
    tail.next = curr2;
  }

  return head1;
}

/**
 * zipper lists (recursive)
 *
 * Write a recursive function, zipperListsRecursive, that takes in the head of
 * two linked lists as arguments. The function should zipper the two lists
 * together into a single linked list by alternating nodes. If one of the
 * linked lists is longer than the other, the resulting list should terminate
 * with the remaining nodes. The function should return the head of the
 * zippered linked list.
 *
 * Do this in-place, by mutating the original Nodes.
 *
 * You may assume that both input lists are non-empty.
 *
 * - n = length of list 1
 * - m = length of list 2
 * - Time: O(min(n, m))
 * - Space: O(min(n, m))
 */
export function zipperListsRecursive(head1: Node<any>, head2: Node<any>): Node<any> {
  if (head1 === null && head2 === null) {
    return null;
  }

  if (head1 === null) {
    return head2;
  }

  if (head2 === null) {
    return head1;
  }

  const next1 = head1.next;
  head1.next = head2;

  const next2 = head2.next;
  head2.next = zipperListsRecursive(next1, next2);

  return head1;
}
