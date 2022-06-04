import Node from './Node';

/**
 * merge lists
 *
 * Write a function, mergeLists, that takes in the head of two sorted linked
 * lists as arguments. The function should merge the two lists together into a
 * single sorted linked list. The function should return the head of the merged
 * linked list.
 *
 * Do this in-place, by mutating the original Nodes.
 *
 * You may assume that both input lists are non-empty and contain increasing
 * sorted numbers.
 *
 * n = length of list 1
 * m = length of list 2
 * Time: O(min(n, m))
 * Space: O(1)
 */
export function mergeLists(head1: Node<number>, head2: Node<number>): Node<number> {
  let curr1 = head1;
  let curr2 = head2;
  let head = new Node(null);
  let tail = head;

  while (curr1 !== null && curr2 !== null) {
    if (curr1.data <= curr2.data) {
      tail.next = curr1;
      curr1 = curr1.next;
    } else {
      tail.next = curr2;
      curr2 = curr2.next;
    }

    tail = tail.next;
  }

  if (curr1 !== null) {
    tail.next = curr1;
  }

  if (curr2 !== null) {
    tail.next = curr2;
  }

  return head.next;
}

/**
 * merge lists (recursive)
 *
 * Write a recursive function, mergeListsRecursive, that takes in the head of
 * two sorted linked lists as arguments. The function should merge the two
 * lists together into a single sorted linked list. The function should return
 * the head of the merged linked list.
 *
 * Do this in-place, by mutating the original Nodes.
 *
 * You may assume that both input lists are non-empty and contain increasing
 * sorted numbers.
 *
 * n = length of list 1
 * m = length of list 2
 * Time: O(min(n, m))
 * Space: O(min(n, m))
 */
export function mergeListsRecursive(head1: Node<number>, head2: Node<number>): Node<number> {
  if (head1 === null && head2 === null) {
    return null;
  }

  if (head1 === null) {
    return head2;
  }

  if (head2 === null) {
    return head1;
  }

  if (head1.data <= head2.data) {
    const next1 = head1.next;
    head1.next = mergeListsRecursive(next1, head2);
    return head1;
  } else {
    const next2 = head2.next;
    head2.next = mergeListsRecursive(head1, next2);
    return head2;
  }
}
