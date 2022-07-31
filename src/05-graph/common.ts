export interface AdjacencyList<T> {
  [key: string]: T[];
}

export function buildGraph<T>(edges: [T, T][]): AdjacencyList<T> {
  const graph: AdjacencyList<T> = {};

  for (let edge of edges) {
    const [nodeA, nodeB] = edge;

    if (nodeA in graph) {
      graph[nodeA.toString()].push(nodeB);
    } else {
      graph[nodeA.toString()] = [nodeB];
    }

    if (nodeB in graph) {
      graph[nodeB.toString()].push(nodeA);
    } else {
      graph[nodeB.toString()] = [nodeA];
    }
  }

  return graph;
}
