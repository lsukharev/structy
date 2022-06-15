import Node from './Node';

/**
 * add lists
 *
 * Write a function, addLists, that takes in the head of two linked lists, each
 * representing a number. The nodes of the linked lists contain digits as
 * values. The nodes in the input lists are reversed; this means that the least
 * significant digit of the number is the head. The function should return the
 * head of a new linked listed representing the sum of the input lists. The
 * output list should have its digits reversed as well.
 *
 * ```txt
 * Say we wanted to compute 621 + 354 normally. The sum is 975:
 *
 *   621
 * + 354
 * -----
 *   975
 *
 * Then, the reversed linked list format of this problem would appear as:
 *
 *    1 -> 2 -> 6
 * +  4 -> 5 -> 3
 * --------------
 *    5 -> 7 -> 9
 * ```
 *
 * - n = length of list 1
 * - m = length of list 2
 * - Time: O(max(n, m))
 * - Space: O(max(n, m))
 */
export function addLists(head1: Node<number>, head2: Node<number>): Node<number> {
  const head = new Node(null);
  let tail = head;
  let curr1 = head1;
  let curr2 = head2;
  let carry = 0;

  while (curr1 !== null || curr2 !== null || carry !== 0) {
    const digit1 = curr1 === null ? 0 : curr1.data;
    const digit2 = curr2 === null ? 0 : curr2.data;
    const sum = digit1 + digit2 + carry;
    carry = sum > 9 ? 1 : 0;

    const digit = sum % 10;
    tail.next = new Node(digit);
    tail = tail.next;

    if (curr1 !== null) {
      curr1 = curr1.next;
    }

    if (curr2 !== null) {
      curr2 = curr2.next;
    }
  }

  return head.next;
}

/**
 * add lists (recursive)
 *
 * Write a recursive function, addListsRecursive, that takes in the head of two
 * linked lists, each representing a number. The nodes of the linked lists
 * contain digits as values. The nodes in the input lists are reversed; this
 * means that the least significant digit of the number is the head. The
 * function should return the head of a new linked listed representing the sum
 * of the input lists. The output list should have its digits reversed as well.
 *
 * ```txt
 * Say we wanted to compute 621 + 354 normally. The sum is 975:
 *
 *   621
 * + 354
 * -----
 *   975
 *
 * Then, the reversed linked list format of this problem would appear as:
 *
 *    1 -> 2 -> 6
 * +  4 -> 5 -> 3
 * --------------
 *    5 -> 7 -> 9
 * ```
 *
 * - n = length of list 1
 * - m = length of list 2
 * - Time: O(max(n, m))
 * - Space: O(max(n, m))
 */
export function addListsRecursive(head1: Node<number>, head2: Node<number>, carry: number = 0): Node<number> {
  if (head1 === null && head2 === null && carry === 0) {
    return null;
  }

  const digit1 = head1 === null ? 0 : head1.data;
  const digit2 = head2 === null ? 0 : head2.data;
  const sum = digit1 + digit2 + carry;

  const digit = sum % 10;
  const head = new Node(digit);
  const next1 = head1 === null ? null : head1.next;
  const next2 = head2 === null ? null : head2.next;
  const nextCarry = sum > 9 ? 1 : 0;
  head.next = addListsRecursive(next1, next2, nextCarry);
  return head;
}
