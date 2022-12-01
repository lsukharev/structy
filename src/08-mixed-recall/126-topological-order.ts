import { AdjacencyList } from '../04-graph/common';

/**
 * topological order
 *
 * Write a function, topologicalOrder, that takes in an object representing the
 * adjacency list for a directed-acyclic graph. The function should return an
 * array containing the
 * {@link https://en.wikipedia.org/wiki/Topological_sorting topological-order}
 * of the graph.
 *
 * The topological ordering of a graph is a sequence where "parent nodes"
 * appear before their "children" within the sequence.
 *
 * - e = number of edges
 * - n = number of nodes
 * - Time: O(e + n)
 * - Space: O(n)
 */
export default function topologicalOrder<T>(graph: AdjacencyList<T>): string[] {
  const numberOfParents: { [key: string]: number } = {};

  for (const node in graph) {
    numberOfParents[node] = 0;
  }

  for (const node in graph) {
    for (const child of graph[node]) {
      numberOfParents[child.toString()] += 1;
    }
  }

  const ready: string[] = [];

  for (const node in numberOfParents) {
    if (numberOfParents[node] === 0) {
      ready.push(node);
    }
  }

  const result: string[] = [];

  while (ready.length > 0) {
    const node = ready.pop();
    result.push(node);

    for (const child of graph[node]) {
      numberOfParents[child.toString()] -= 1;

      if (numberOfParents[child.toString()] === 0) {
        ready.push(child.toString());
      }
    }
  }

  return result;
}
