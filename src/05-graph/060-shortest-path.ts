import { buildGraph } from './common';

/**
 * shortest path
 *
 * Write a function, shortestPath, that takes in an array of edges for an
 * undirected graph and two nodes (nodeA, nodeB). The function should return
 * the length of the shortest path between A and B. Consider the length as the
 * number of edges in the path, not the number of nodes. If there is no path
 * between A and B, then return -1.
 *
 * - e = number of edges
 * - Time: O(e)
 * - Space: O(e)
 */
export default function shortestPath<T>(edges: [T, T][], nodeA: T, nodeB: T): number {
  const graph = buildGraph(edges);
  const queue = [{ node: nodeA, distance: 0 }];
  const visited = new Set<string>();

  while (queue.length > 0) {
    const { node, distance } = queue.shift();
    visited.add(node.toString());

    if (node === nodeB) {
      return distance;
    }

    for (let neighbor of graph[node.toString()]) {
      if (visited.has(neighbor.toString())) {
        continue;
      }

      queue.push({ node: neighbor, distance: distance + 1});
    }
  }

  return -1;
}
