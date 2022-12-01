import { AdjacencyList } from '../../src/04-graph/common';

enum Color { Red, Blue }

/**
 * can color
 *
 * Write a function, canColor, that takes in an object representing the
 * adjacency list of an undirected graph. The function should return a boolean
 * indicating whether or not it is possible to color nodes of the graph using
 * two colors in such a way that adjacent nodes are always different colors.
 *
 * ```txt
 * For example, given this graph:
 *
 * x-y-z
 *
 * It is possible to color the nodes by using red for x and z, then use blue
 * for y. So the answer is true.
 *
 * For example, given this graph:
 *   q
 *  / \
 * s - r
 *
 * It is not possible to color the nodes without making two adjacent nodes the
 * same color. So the answer is false.
 * ```
 *
 * - n = number of nodes
 * - Time: O(n^2)
 * - Space: O(n)
 */
export default function canColor<T>(graph: AdjacencyList<T>): boolean {
  const coloring: { [key: string]: Color } = {};

  for (const node in graph) {
    if (node in coloring) {
      continue;
    }

    if (validate(graph, node, coloring, Color.Blue) === false) {
      return false;
    }
  }

  return true;
}

function validate<T>(graph: AdjacencyList<T>, node: string, coloring: { [key: string]: Color }, currentColor: Color): boolean {
  if (node in coloring) {
    return coloring[node] === currentColor;
  }

  coloring[node] = currentColor;

  for (const neighbor of graph[node]) {
    const nextColor = currentColor === Color.Blue ? Color.Red : Color.Blue;
    if (validate(graph, neighbor.toString(), coloring, nextColor) === false) {
      return false;
    }
  }

  return true;
}
