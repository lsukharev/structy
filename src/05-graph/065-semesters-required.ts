import { AdjacencyList } from './common';

/**
 * semesters required
 *
 * Write a function, semestersRequired, that takes in a number of courses (n)
 * and a list of prerequisites as arguments. Courses have ids ranging from 0
 * through n - 1. A single prerequisite of [A, B] means that course A must be
 * taken before course B. Return the minimum number of semesters required to
 * complete all n courses. There is no limit on how many courses you can take
 * in a single semester, as long the prerequisites of a course are satisfied
 * before taking it.
 *
 * Note that given prerequisite [A, B], you cannot take course A and course B
 * concurrently in the same semester. You must take A in some semester before
 * B.
 *
 * You can assume that it is possible to eventually complete all courses.
 *
 * - p = number of prereqs
 * - c = number of courses
 * - Time: O(p)
 * - Space: O(c)
 */
export default function semestersRequired(numCourses: number, prereqs: [number, number][]): number {
  const graph = buildGraph(numCourses, prereqs);
  const distance: { [key: string]: number } = {};

  for (let node in graph) {
    if (graph[node].length === 0) {
      distance[node] = 1;
    }
  }

  for (let node in graph) {
    traverseDistance(graph, node, distance);
  }

  return Math.max(...Object.values(distance));
}

function traverseDistance(graph: AdjacencyList<number>, node: string, distance: { [key: string]: number }): number {
  if (node in distance) {
    return distance[node];
  }

  let maxDistance = 0;

  for (let neighbor of graph[node]) {
    const currentDistance = traverseDistance(graph, neighbor.toString(), distance);

    if (currentDistance > maxDistance) {
      maxDistance = currentDistance;
    }
  }

  distance[node] = maxDistance + 1;
  return distance[node];
}

function buildGraph(numCourses: number, prereqs: [number, number][]): AdjacencyList<number> {
  const graph: AdjacencyList<number> = {};

  for (let index = 0; index < numCourses; index += 1) {
    graph[index] = [];
  }

  for (let prereq of prereqs) {
    const [courseA, courseB] = prereq;
    graph[courseA].push(courseB);
  }

  return graph;
}
