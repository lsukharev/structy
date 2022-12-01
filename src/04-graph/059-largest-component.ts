import { AdjacencyList } from './common';

/**
 * largest component
 *
 * Write a function, largestComponent, that takes in the adjacency list of an
 * undirected graph. The function should return the size of the largest
 * connected component in the graph.
 *
 * - n = number of nodes
 * - e = number of edges
 * - Time: O(e)
 * - Space: O(n)
 */
export default function largestComponent<T>(graph: AdjacencyList<T>): number {
  const visited = new Set<string>();
  let largestSize = 0;

  for (let node in graph) {
    const currentSize = explore(graph, node, visited);

    if (currentSize > largestSize) {
      largestSize = currentSize;
    }
  }

  return largestSize;
}

function explore<T>(graph: AdjacencyList<T>, node: string, visited: Set<string>): number {
  if (visited.has(node)) {
    return 0;
  }

  visited.add(node);

  let size = 1;

  for (let neighbor of graph[node]) {
    size += explore(graph, neighbor.toString(), visited);
  }

  return size;
}
