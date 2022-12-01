import { AdjacencyList } from '../05-graph/common';
import topologicalOrder from './126-topological-order';

/**
 * safe cracking
 *
 * Oh-no! You forgot the number combination that unlocks your safe. Luckily,
 * you knew that you'd be forgetful so you previously wrote down a bunch of
 * hints that can be used to determine the correct combination. Each hint is a
 * pair of numbers 'x, y' that indicates you must enter digit 'x' before 'y'
 * (but not necessarily immediately before y).
 *
 * The keypad on the safe has digits 0-9. You can assume that the hints will
 * generate exactly one working combination and that a digit can occur zero or
 * one time in the answer.
 *
 * Write a function, safeCracking, that takes in an array of hints as an
 * argument and determines the combination that will unlock the safe. The
 * function should return a string representing the combination.
 *
 * - e = number of hints
 * - Time: O(e)
 * - Space: O(e)
 */
export default function safeCracking(hints: [number, number][]): string {
  const graph = buildGraph(hints);
  return topologicalOrder(graph).join('');
}

function buildGraph(edges: [number, number][]): AdjacencyList<number> {
  const graph: AdjacencyList<number> = {};

  for (const [nodeA, nodeB] of edges) {
    if (!(nodeA in graph)) {
      graph[nodeA] = [];
    }

    if (!(nodeB in graph)) {
      graph[nodeB] = [];
    }

    graph[nodeA].push(nodeB);
  }

  return graph;
}
