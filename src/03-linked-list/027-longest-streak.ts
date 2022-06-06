import Node from './Node';

/**
 * longest streak
 *
 * Write a function, longestStreak, that takes in the head of a linked list as
 * an argument. The function should return the length of the longest
 * consecutive streak of the same value within the list.
 *
 * - n = number of nodes
 * - Time: O(n)
 * - Space: O(1)
 */
export default function longestStreak(head: Node<any>): number {
  let curr = head;
  let prev = new Node(null);
  let currStreak = 0;
  let maxStreak = 0;

  while (curr !== null) {
    if (curr.data === prev.data) {
      currStreak += 1;
    } else {
      currStreak = 1;
    }

    if (currStreak > maxStreak) {
      maxStreak = currStreak;
    }

    prev = curr;
    curr = curr.next;
  }

  return maxStreak;
}
