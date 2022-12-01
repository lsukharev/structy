import { AdjacencyList, buildGraph } from '../04-graph/common';

enum Color { Red, Blue }

/**
 * tolerant teams
 *
 * Write a function, tolerantTeams, that takes in an array of rivalries as an
 * argument. A rivalry is a pair of people who should not be placed on the same
 * team. The function should return a boolean indicating whether or not it is
 * possible to separate people into two teams, without rivals being on the same
 * team. The two teams formed do not have to be the same size.
 *
 * - e = number of rivalries
 * - n = number of people
 * - Time: O(e)
 * - Space: O(n)
 */
export default function tolerantTeams(rivalries: [string, string][]): boolean {
  const graph = buildGraph(rivalries);
  const coloring: { [key: string]: Color } = {};

  for (const node in graph) {
    if (node in coloring) {
      continue;
    }

    if (isBipartite(graph, node, coloring, Color.Blue) === false) {
      return false;
    }
  }

  return true;
}

function isBipartite(graph: AdjacencyList<string>, node: string, coloring: { [key: string]: Color }, currentColor: Color): boolean {
  if (node in coloring) {
    return coloring[node] === currentColor;
  }

  coloring[node] = currentColor;

  for (const neighbor of graph[node]) {
    const nextColor = currentColor === Color.Blue ? Color.Red : Color.Blue;
    if (isBipartite(graph, neighbor, coloring, nextColor) === false) {
      return false;
    }
  }

  return true;
}
