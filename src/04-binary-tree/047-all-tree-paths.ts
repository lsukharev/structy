import Node from './Node';

/**
 * all tree paths
 *
 * Write a function, allTreePaths, that takes in the root of a binary tree. The
 * function should return a 2-Dimensional array where each subarray represents
 * a root-to-leaf path in the tree.
 *
 * The order within an individual path must start at the root and end at the
 * leaf, but the relative order among paths in the outer array does not matter.
 *
 * You may assume that the input tree is non-empty.
 *
 * - n = number of nodes
 * - Time: ~O(n)
 * - Space: ~O(n)
 */
export default function allTreePaths(root: Node<any>): string[][] {
  if (root === null) {
    return [];
  }

  if (root.left === null && root.right === null) {
    return [[root.data]];
  }

  const paths: string[][] = [];

  for (let path of allTreePaths(root.left)) {
    paths.push([root.data, ...path]);
  }

  for (let path of allTreePaths(root.right)) {
    paths.push([root.data, ...path]);
  }

  return paths;
}
