import hasCycle from './067-has-cycle';
import { AdjacencyList } from './common';

/**
 * prereqs possible
 *
 * Write a function, prereqsPossible, that takes in a number of courses (n) and
 * prerequisites as arguments. Courses have ids ranging from 0 through n - 1. A
 * single prerequisite of [A, B] means that course A must be taken before
 * course B. The function should return a boolean indicating whether or not it
 * is possible to complete all courses.
 *
 * - n = number of courses
 * - p = number of prereqs
 * - Time: O(n + p)
 * - Space: O(n + p)
 */
export default function prereqsPossible(numCourses: number, prereqs: [number, number][]): boolean {
  const graph = buildGraph(numCourses, prereqs);

  if (hasCycle(graph)) {
    return false;
  }

  return true;
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
