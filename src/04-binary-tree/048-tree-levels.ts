import Node from './Node';

/**
 * tree levels
 *
 * Write a function, treeLevels, that takes in the root of a binary tree. The
 * function should return a 2-Dimensional array where each subarray represents
 * a level of the tree.
 *
 * - n = number of nodes
 * - Time: O(n)
 * - Space: O(n)
 */
export function treeLevels(root: Node<any> | null): any[][] {
  if (root === null) {
    return [];
  }

  const levels: any[][] = [];
  const stack = [{ node: root, level: 0}];

  while (stack.length > 0) {
    const { node, level } = stack.pop();

    if (levels[level] === undefined) {
      levels[level] = [node.data];
    } else {
      levels[level].push(node.data);
    }

    if (node.right !== null) {
      stack.push({ node: node.right, level: level + 1 });
    }

    if (node.left !== null) {
      stack.push({ node: node.left, level: level + 1 });
    }
  }

  return levels;
}

/**
 * tree levels (recursive)
 *
 * Write a recursive function, treeLevelsRecursive, that takes in the root of a
 * binary tree. The function should return a 2-Dimensional array where each
 * subarray represents a level of the tree.
 *
 * - n = number of nodes
 * - Time: O(n)
 * - Space: O(n)
 */
export function treeLevelsRecursive(root: Node<any> | null): any[][] {
  function treeLevelsHelper(currentNode: { node: Node<any>, level: number}, levels: any[][]) {
    const { node, level } = currentNode;

    if (levels[level] === undefined) {
      levels[level] = [node.data];
    } else {
      levels[level].push(node.data);
    }

    if (node.left !== null) {
      treeLevelsHelper({ node: node.left, level: level + 1 }, levels);
    }

    if (node.right !== null) {
      treeLevelsHelper({ node: node.right, level: level + 1 }, levels);
    }
  }

  if (root === null) {
    return [];
  }

  const levels: any[][] = [];
  treeLevelsHelper({ node: root, level: 0 }, levels);
  return levels;
}
