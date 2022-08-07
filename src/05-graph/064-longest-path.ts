import { AdjacencyList } from "./common";

/**
 * longest path
 *
 * Write a function, longestPath, that takes in an adjacency list for a
 * directed acyclic graph. The function should return the length of the longest
 * path within the graph. A path may start and end at any two nodes. The length
 * of a path is considered the number of edges in the path, not the number of
 * nodes.
 *
 * - e = number of edges
 * - n = number of nodes
 * - Time: O(e)
 * - Space: O(n)
 */
export default function longestPath<T>(graph: AdjacencyList<T>): number {
  const distance: { [key: string]: number } = {};

  for (let node in graph) {
    if (graph[node].length === 0) {
      distance[node] = 0;
    }
  }

  for (let node in graph) {
    traverseDistance(graph, node, distance);
  }

  return Math.max(...Object.values(distance));
}

function traverseDistance<T>(graph: AdjacencyList<T>, node: string, distance: { [key: string]: number }): number {
  if (node in distance) {
    return distance[node];
  }

  let maxDistance = 0;

  for (let neighbor of graph[node]) {
    const currentDistance = traverseDistance(graph, neighbor.toString(), distance);

    if (currentDistance > maxDistance) {
      maxDistance = currentDistance;
    }
  }

  distance[node] = maxDistance + 1;
  return distance[node];
}
