import { AdjacencyList } from '../05-graph/common';

/**
 * Write a function, rareRouting, that takes in a number of cities (n) and a
 * two dimensional array where each subarray represents a direct road that
 * connects a pair of cities. The function should return a boolean indicating
 * whether or not there exists a unique route for every pair of cities. A route
 * is a sequence of roads that does not visit a city more than once.
 *
 * Cities will be numbered 0 to n - 1.
 *
 * You can assume that all roads are two-way roads. This means if there is a
 * road between A and B, then you can use that road to go from A to B or go
 * from B to A.
 *
 * ```txt
 * For example, given these roads:
 *
 * 0 --- 1
 * | \
 * |  \
 * |   \
 * 2    3
 *
 * There is a unique route for between every pair of cities.
 * So the answer is true.
 *
 * For example, given these roads:
 *
 * 0 --- 1
 * | \
 * |  \
 * |   \
 * 2 -- 3
 *
 * There are two routes that can be used to travel from city 1 to city 2:
 * - first route:  1, 0, 2
 * - second route: 1, 0, 3, 2
 * The answer is false, because routes should be unique.
 * ```
 *
 * - n = number of nodes
 * - Time: O(n^2)
 * - Space: O(n)
 */
export default function rareRouting(numCities: number, roads: [number, number][]): boolean {
  const graph = buildGraph(numCities, roads);
  const visited = new Set<string>();

  return validate(graph, 0, null, visited) === true && visited.size === numCities;
}

function validate(graph: AdjacencyList<number>, node: number, prevNode: number | null, visited: Set<string>): boolean {
  if (visited.has(node.toString())) {
    return false;
  }

  visited.add(node.toString());

  for (const neighbor of graph[node]) {
    if (neighbor === prevNode) {
      continue;
    }

    if (validate(graph, neighbor, node, visited) === false) {
      return false;
    }
  }

  return true;
}

function buildGraph(numCities: number, roads: [number, number][]): AdjacencyList<number> {
  const graph: AdjacencyList<number> = {};

  for (let index = 0; index < numCities; index += 1) {
    graph[index] = [];
  }

  for (const road of roads) {
    const [cityA, cityB] = road;

    graph[cityA].push(cityB);
    graph[cityB].push(cityA);
  }

  return graph;
}
