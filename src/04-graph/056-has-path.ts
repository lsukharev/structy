import { AdjacencyList } from './common';

/**
 * has path
 *
 * Write a function, hasPath, that takes in an object representing the
 * adjacency list of a directed acyclic graph and two nodes (src, dst). The
 * function should return a boolean indicating whether or not there exists a
 * directed path between the source and destination nodes.
 *
 * Hey. This is our first graph problem, so you should be liberal with watching
 * the Approach and Walkthrough. Be productive, not stubborn. -AZ
 *
 * - n = number of nodes
 * - e = number of edges
 * - Time: O(e)
 * - Space: O(n)
 */
export function hasPath<T>(graph: AdjacencyList<T>, source: T, destination: T): boolean {
  const stack = [source];

  while (stack.length > 0) {
    const current = stack.pop();

    if (current === destination) {
      return true;
    }

    for (let neighbor of graph[current.toString()]) {
      stack.push(neighbor);
    }
  }

  return false;
}

/**
 * has path (recursive)
 *
 * Write a recursive function, hasPathRecursive, that takes in an object
 * representing the adjacency list of a directed acyclic graph and two nodes
 * (src, dst). The function should return a boolean indicating whether or not
 * there exists a directed path between the source and destination nodes.
 *
 * Hey. This is our first graph problem, so you should be liberal with watching
 * the Approach and Walkthrough. Be productive, not stubborn. -AZ
 *
 * - n = number of nodes
 * - e = number of edges
 * - Time: O(e)
 * - Space: O(n)
 */
export function hasPathRecursive<T>(graph: AdjacencyList<T>, source: T, destination: T): boolean {
  if (source === destination) {
    return true;
  }

  for (let neighbor of graph[source.toString()]) {
    if (hasPathRecursive(graph, neighbor, destination) === true) {
      return true;
    }
  }

  return false;
}
