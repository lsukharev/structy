import { AdjacencyList } from './common';

/**
 * has cycle
 *
 * Write a function, hasCycle, that takes in an object representing the
 * adjacency list of a directed graph. The function should return a boolean
 * indicating whether or not the graph contains a cycle
 *
 * - n = number of nodes
 * - e = number of edges
 * - Time: O(e)
 * - Space: O(n)
 */
export default function hasCycle<T>(graph: AdjacencyList<T>): boolean {
  const visited = new Set<string>();

  for (let node in graph) {
    if (detectCycle(graph, node, new Set<string>(), visited) === true) {
      return true;
    }
  }

  return false;
}

function detectCycle<T>(graph: AdjacencyList<T>, node: string, visiting: Set<string>, visited: Set<string>): boolean {
  if (visiting.has(node)) {
    return true;
  }

  if (visited.has(node)) {
    return false;
  }

  visiting.add(node);

  for (let neighbor of graph[node]) {
    if (detectCycle(graph, neighbor.toString(), visiting, visited) === true) {
      return true;
    }
  }

  visiting.delete(node);
  visited.add(node);

  return false;
}
