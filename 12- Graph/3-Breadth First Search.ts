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



//! Implementation of Breadth First Search (BFS) algorithm using OOP

// class Vertex {
//   public name!: string;
//   public visited!: boolean
//   public vertexLinks!: Edge[]
// }

// class Edge {
//   public weight: number;
//   public source: Vertex;
//   public target: Vertex;
//   constructor(source: Vertex, target: Vertex, weight: number = 0) {
//     this.source = source;
//     this.target = target;
//     this.weight = weight;
//   }
// }

// class Graph {
//   private last_index: number = 0;
//   public vertices: Vertex[] = [];
//   constructor(names: string[]) {
//     this.vertices = new Vertex();
//     for (let name in names) {
//       this.vertices[this.last_index] = new Vertex()
//       this.vertices[this.last_index].name = name;
//       this.last_index++;
//     }
//   }

//   public AddEdges(vertecIndex: number, targets: number[]) {
//     this.vertices[vertecIndex].vertexLinks = new Edge();
//     for (let i = 0; i < targets.length; i++) {
//       this.vertices[vertecIndex].vertexLinks[i] =
//         new Edge(this.vertices[vertecIndex], this.vertices[targets[i]])
//     }
//   }

//   public BFS() {
//     console.log("BFS From Graph Class")
//     let v: number = this.vertices.length

//     const graph = new Map();

//     graph.set("A", ['B', 'C']);
//     graph.set("B", ['E', 'D', 'A']);
//     graph.set("C", ['D', 'F', 'A']);
//     graph.set("D", ['E', 'F', 'B']);
//     graph.set("E", ['F', 'B']);
//     graph.set("F", ['D', 'E', 'C', 'H']);
//     graph.set("G", ['H', 'I']);
//     graph.set("H", ['G', 'I', 'F']);
//     graph.set("I", ['G', 'H']);

//     let q: Array<Vertex> = new Array()
//     q.unshift(this.vertices[0]);
//     this.vertices[0].visited = true;

//     let current_vertex: Vertex | undefined;
//     let destinations: Edge[];

//     while (q.length > 0) {
//       current_vertex = q.pop()
//       destinations = graph.get(current_vertex)
//       for (let i = 0; i < destinations.length; i++) {
//         if (!destinations[i].target.visited) {
//           q.unshift(destinations[i].target);
//           destinations[i].target.visited = true
//           console.log(current_vertex!.name + " - " + destinations[i].target.name)
//         }
//       }
//     }
//     this.reset()
//   }

//   public reset(): void {
//     for (let i = 0; i < this.vertices.length; i++) {
//       this.vertices[i].visited = false
//     }
//   }

//   public DFS(): void {
//     console.log('DFS From Graph Class');
//     this.reset();
//   }

//   public DFSRecursion(current_vertex: Vertex): void {
//     current_vertex.visited = true;
//     let destinations: Edge[] = current_vertex.vertexLinks;
//     for (let i = 0; i < destinations.length; i++) {
//       if (!destinations[i].target.visited) {
//         console.log(current_vertex.name + " - " + destinations[i].target.name)
//         this.DFSRecursion(destinations[i].target)
//       }
//     }
//   }
// }

// let g: Graph = new Graph(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']);

// g.AddEdges(0, [1, 2]);
// g.AddEdges(1, [0, 3, 4]);
// g.AddEdges(2, [0, 3, 5]);
// g.AddEdges(3, [1, 2, 4]);
// g.AddEdges(4, [1, 5]);
// g.AddEdges(5, [2, 3, 4, 7]);
// g.AddEdges(6, [7, 8]);
// g.AddEdges(7, [5, 6, 8]);
// g.AddEdges(8, [6, 7]);

// g.DFS()