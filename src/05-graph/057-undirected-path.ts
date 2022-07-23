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
export function undirectedPath(edges: string[][], nodeA: string, nodeB: string): boolean {
  const graph = buildGraph(edges);
  return hasUndirectedPath(graph, nodeA, nodeB);
}

function hasUndirectedPath(graph: AdjacencyList, source: string, destination: string): boolean {
  const stack = [source];
  const visited = new Set<string>();

  while (stack.length > 0) {
    const current = stack.pop();
    visited.add(current);

    if (current === destination) {
      return true;
    }

    for (let neighbor of graph[current]) {
      if (visited.has(neighbor)) {
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
export function undirectedPathRecursive(edges: string[][], nodeA: string, nodeB: string): boolean {
  const graph = buildGraph(edges);
  return hasUndirectedPathRecursive(graph, nodeA, nodeB, new Set<string>());
}

function hasUndirectedPathRecursive(graph: AdjacencyList, source: string, destination: string, visited: Set<string>): boolean {
  if (source === destination) {
    return true;
  }

  visited.add(source);

  for (let neighbor of graph[source]) {
    if (visited.has(neighbor)) {
      continue;
    }

    if (hasUndirectedPathRecursive(graph, neighbor, destination, visited) === true) {
      return true;
    }
  }

  return false;
}
