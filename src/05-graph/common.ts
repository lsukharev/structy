export interface AdjacencyList {
  [node: string]: string[];
}

export function buildGraph(edges: string[][]): AdjacencyList {
  const graph: AdjacencyList = {};

  for (let edge of edges) {
    const [nodeA, nodeB] = edge;

    if (nodeA in graph) {
      graph[nodeA].push(nodeB);
    } else {
      graph[nodeA] = [nodeB];
    }

    if (nodeB in graph) {
      graph[nodeB].push(nodeA);
    } else {
      graph[nodeB] = [nodeA];
    }
  }

  return graph;
}
