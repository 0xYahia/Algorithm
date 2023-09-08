//! 28 – Graph – Breadth First Search – Algorithm – Code
//! Graph Traversal Algorithm – Breadth First Search (BFS)

//! Steps to implement Breadth First Search (BFS) algorithm

// 1- Choice vertics as starting vertics and add it to queue this vertics is the head of the first level
// 2- add the first vertics to the queue and add it to visited list
// 3- remove the first vertics from the queue
// 4- add all vertices that are connected to the first vertics and not visited before to the queue and add them to visited list
// 5- repeat step 3 and 4 until the queue is empty


//! Implementation of Breadth First Search (BFS) algorithm

let v: number = 9
const graph = new Map();

graph.set("A", ['B', 'C']);
graph.set("B", ['E', 'D', 'A']);
graph.set("C", ['D', 'F', 'A']);
graph.set("D", ['E', 'F', 'B']);
graph.set("E", ['F', 'B']);
graph.set("F", ['D', 'E', 'C', 'H']);
graph.set("G", ['H', 'I']);
graph.set("H", ['G', 'I', 'F']);
graph.set("I", ['G', 'H']);

let q: string[] = new Array()
let visited: Map<string, boolean> = new Map()
q.unshift('A');

let current_vertex: string | undefined;
let destination: string[];

while (q.length > 0) {
  current_vertex = q.pop()
  destination = graph.get(current_vertex)
  for (let i = 0; i < destination.length; i++) {
    if (!visited.get(destination[i])) {
      q.unshift(destination[i]);
      visited.set(destination[i], true);
      console.log(current_vertex + " - " + destination[i])
    }
  }
}




