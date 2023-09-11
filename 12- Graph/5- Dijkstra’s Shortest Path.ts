//! 30 – Graph – Dijkstra’s Shortest Path – Algorithm – Code

// Dijkstra’s Shortest Path Algorithm common use case is to find the shortest path from a source vertex to all other vertices in the graph.
// like google map, we want to find the shortest path from a source to all other vertices in the graph.

//! Steps to apply Dijkstra’s Shortest Path Algorithm:
// 1) we choice vertex to start from it, we call it source vertex.
// 2) make  table from three columns, first column is the vertex, second column is the distance from the source vertex to this vertex,
// third column is the previous vertex (source vertex). and we fill the table with the source vertex and infinity for the distance
// but we set the distance of the source vertex to itself to be zero. and we put null for the previous vertex.
// 3) we choice the vertex with the minimum distance from the source vertex with infinity in the first calculation, and we call it current vertex.
// 4) we loop on the current vertex neighbors, and we calculate the distance from the source vertex to each neighbor, and we compare it with the distance
// in the table, if the distance in the table is bigger than the distance we calculated, we update the distance in the table with the new distance
// and we update the previous vertex with the current vertex.
// 5) we repeat step 3 and 4 until we loop on all the vertices in the graph.
// 6) in the last vertex, we loop on the previous vertex make this shortest path. and go back to the source vertex. and so on.


//! Implementation

class Vertex {
  public name!: string;
  public visited!: boolean

  public totalLength!: number;
  public sourceOfTotalLength: Vertex | null;
  public vertexLinks!: Edge[]
}

class Edge {
  public weight: number;
  public source: Vertex;
  public target: Vertex;
  constructor(source: Vertex, target: Vertex, weight: number = 0) {
    this.source = source;
    this.target = target;
    this.weight = weight;
  }
}

class Graph {
  private last_index: number = 0;
  public vertices: Vertex[] = [];
  constructor(names: string[]) {
    this.vertices = new Array(names.length)
    for (let name in names) {
      this.vertices[this.last_index] = new Vertex()
      this.vertices[this.last_index].name = name;
      this.last_index++;
    }
  }

  public AddEdges(vertexIndex: number, targets: number[], weight?: number[]): void {
    this.vertices[vertexIndex].vertexLinks = new Array(targets.length)
    for (let i = 0; i < targets.length; i++) {
      this.vertices[vertexIndex].vertexLinks[i] =
        new Edge(this.vertices[vertexIndex], this.vertices[targets[i]])
    }
  }

  public BFS() {
    console.log("BFS From Graph Class")
    let v: number = this.vertices.length

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

    let q: Array<Vertex> = new Array()
    q.unshift(this.vertices[0]);
    this.vertices[0].visited = true;

    let current_vertex: Vertex | undefined;
    let destinations: Edge[];

    while (q.length > 0) {
      current_vertex = q.pop()
      destinations = graph.get(current_vertex)
      for (let i = 0; i < destinations.length; i++) {
        if (!destinations[i].target.visited) {
          q.unshift(destinations[i].target);
          destinations[i].target.visited = true
          console.log(current_vertex!.name + " - " + destinations[i].target.name)
        }
      }
    }
    this.reset()
  }

  public reset(): void {
    for (let i = 0; i < this.vertices.length; i++) {
      this.vertices[i].visited = false
      this.vertices[i].totalLength = 0
      this.vertices[i].sourceOfTotalLength = null;
    }
  }

  public DFS(): void {
    console.log('DFS From Graph Class');
    this.reset();
  }

  public DFSRecursion(current_vertex: Vertex): void {
    current_vertex.visited = true;
    let destinations: Edge[] = current_vertex.vertexLinks;
    for (let i = 0; i < destinations.length; i++) {
      if (!destinations[i].target.visited) {
        console.log(current_vertex.name + " - " + destinations[i].target.name)
        this.DFSRecursion(destinations[i].target)
      }
    }
  }

  public Dijkstra(): void {
    console.log('Dijkstra From Graph Class');
    // for (let i = 0; i < this.vertices.length; i++) {
    for (let i = 1; i < this.vertices.length; i++) {
      this.vertices[i].totalLength = Infinity;
    }

    let current_vertex: Vertex;
    for (let i = 0; i < this.vertices.length; i++) {
      current_vertex = this.vertices[i];
      let destinations: Edge[] = current_vertex.vertexLinks;
      if (destinations === null) continue;
      let current_edge: Edge;

      for (let j = 0; j < destinations.length; j++) {
        current_edge = destinations[j];
        let new_length: number = current_vertex.totalLength + current_edge.weight;
        if (new_length < current_edge.target.totalLength) {
          current_edge.target.totalLength = new_length;
          current_edge.target.sourceOfTotalLength = current_vertex;
        }
      }
    }

    let path: string = this.vertices[this.vertices.length - 1].name;;
    let v: Vertex = this.vertices[this.vertices.length - 1];

    while (v.sourceOfTotalLength !== null) {
      path = v.sourceOfTotalLength.name + " - " + path;
      v = v.sourceOfTotalLength;
    }
    console.log(this.vertices[this.vertices.length - 1].totalLength);
    console.log(path);
    this.reset();
  }

}

let g: Graph = new Graph(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']);

g.AddEdges(0, [1, 2], [2, 4, 3]);
g.AddEdges(1, [0, 3, 4], [7, 4, 6]);
g.AddEdges(2, [0, 3, 5], [3, 2, 4]);
g.AddEdges(3, [1, 2, 4], [4, 1, 5]);
g.AddEdges(4, [1, 5], [1, 4]);
g.AddEdges(5, [2, 3, 4, 7], [6, 3]);
g.AddEdges(6, [7, 8], [3, 3]);
g.AddEdges(7, [5, 6, 8], [3]);
g.AddEdges(8, [6, 7], [4]);

g.BFS()

g.Dijkstra()