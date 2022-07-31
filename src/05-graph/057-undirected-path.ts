import { AdjacencyList, buildGraph } from './common';

/**
 * undirected path
 *
 * Write a function, undirectedPath, that takes in an array of edges for an
 * undirected graph and two nodes (nodeA, nodeB). The function should return a
 * boolean indicating whether or not there exists a path between nodeA and
 * nodeB.
 *
 * - n = number of nodes
 * - e = number of edges
 * - Time: O(e)
 * - Space: O(n)
 */
export function undirectedPath<T>(edges: [T, T][], nodeA: T, nodeB: T): boolean {
  const graph = buildGraph(edges);
  return hasUndirectedPath<T>(graph, nodeA, nodeB);
}

function hasUndirectedPath<T>(graph: AdjacencyList<T>, source: T, destination: T): boolean {
  const stack = [source];
  const visited = new Set<string>();

  while (stack.length > 0) {
    const current = stack.pop();
    visited.add(current.toString());

    if (current === destination) {
      return true;
    }

    for (let neighbor of graph[current.toString()]) {
      if (visited.has(neighbor.toString())) {
        continue;
      }

      stack.push(neighbor);
    }
  }

  return false;
}

/**
 * undirected path (recursive)
 *
 * Write a recursive function, undirectedPathRecursive, that takes in an array
 * of edges for an undirected graph and two nodes (nodeA, nodeB). The function
 * should return a boolean indicating whether or not there exists a path
 * between nodeA and nodeB.
 *
 * - n = number of nodes
 * - e = number of edges
 * - Time: O(e)
 * - Space: O(n)
 */
export function undirectedPathRecursive<T>(edges: [T, T][], nodeA: T, nodeB: T): boolean {
  const graph = buildGraph(edges);
  return hasUndirectedPathRecursive<T>(graph, nodeA, nodeB, new Set<string>());
}

function hasUndirectedPathRecursive<T>(graph: AdjacencyList<T>, source: T, destination: T, visited: Set<string>): boolean {
  if (source === destination) {
    return true;
  }

  visited.add(source.toString());

  for (let neighbor of graph[source.toString()]) {
    if (visited.has(neighbor.toString())) {
      continue;
    }

    if (hasUndirectedPathRecursive(graph, neighbor, destination, visited) === true) {
      return true;
    }
  }

  return false;
}
