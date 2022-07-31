import { AdjacencyList } from "./common";

/**
 * connected components count
 *
 * Write a function, connectedComponentsCount, that takes in the adjacency list
 * of an undirected graph. The function should return the number of connected
 * components within the graph.
 *
 * - n = number of nodes
 * - e = number of edges
 * - Time: O(e)
 * - Space: O(n)
 */
export default function connectedComponentsCount<T>(graph: AdjacencyList<T>): number {
  const visited = new Set<string>();
  let count = 0;

  for (let node in graph) {
    if (explore(graph, node, visited) === true) {
      count += 1;
    }
  }

  return count;
}

function explore<T>(graph: AdjacencyList<T>, node: string, visited: Set<string>): boolean {
  if (visited.has(node)) {
    return false;
  }

  visited.add(node);

  for (let neighbor of graph[node]) {
    explore(graph, neighbor.toString(), visited);
  }

  return true;
}
