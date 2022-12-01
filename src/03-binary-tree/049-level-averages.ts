import Node from './Node';

/**
 * level averages
 *
 * Write a function, levelAverages, that takes in the root of a binary tree
 * that contains number values. The function should return an array containing
 * the average value of each level.
 *
 * - n = number of nodes
 * - Time: O(n)
 * - Space: O(n)
 */
export function levelAverages(root: Node<number> | null): number[] {
  if (root === null) {
    return [];
  }

  const levels: number[][] = [];
  const stack = [{node: root, level: 0}];

  while (stack.length > 0) {
    const { node, level } = stack.pop();

    if (levels[level] === undefined) {
      levels[level] = [node.data];
    } else {
      levels[level].push(node.data);
    }

    if (node.left !== null) {
      stack.push({ node: node.left, level: level + 1 });
    }

    if (node.right !== null) {
      stack.push({ node: node.right, level: level + 1 });
    }
  }

  return levels.map(level => level.reduce((prev, curr) => prev + curr) / level.length);
}

/**
 * level averages (recursive)
 *
 * Write a recursive function, levelAveragesRecursive, that takes in the root
 * of a binary tree that contains number values. The function should return an
 * array containing the average value of each level.
 *
 * - n = number of nodes
 * - Time: O(n)
 * - Space: O(n)
 */
export function levelAveragesRecursive(root: Node<number> | null): number[] {
  function levelAveragesHelper(currentNode: { node: Node<number>, level: number }, levels: number[][]) {
    const { node, level } = currentNode;

    if (levels[level] === undefined) {
      levels[level] = [node.data];
    } else {
      levels[level].push(node.data);
    }

    if (node.left !== null) {
      levelAveragesHelper({ node: node.left, level: level + 1 }, levels);
    }

    if (node.right !== null) {
      levelAveragesHelper({ node: node.right, level: level + 1 }, levels);
    }
  }

  if (root === null) {
    return [];
  }

  const levels: number[][] = [];
  levelAveragesHelper({ node: root, level: 0 }, levels);
  return levels.map(level => level.reduce((prev, curr) => prev + curr) / level.length);
}
