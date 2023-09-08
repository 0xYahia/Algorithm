//! 27 – Graph – Prim’s Minimum Spanning Tree – Algorithm – Code
// Minimum Spanning Tree (MST) problem:
// Given connected graph G with positive edge weights, find a min weight set of edges that connects all of the vertices.
// MST => minimum spanning tree we need to find the minimum weight to connect all the vertices
// MST Edges = v-1 (v is the number of vertices)
//!------------------------------------------------------------------------------------------------------------------------------------------------------
//! Graph it edges carry data called weight graph
// in the example below this graph is undirected weighted graph

//! Steps to apply Prim’s Minimum Spanning Tree Algorithm:
// 1- choice any vertics to start from it
// 2- find the minimum weight edge from this vertics to another vertics
// 3- add this edge to the MST
// 4- find the minimum weight edge from the vertics in the MST to another vertics but check if this vertics is not in the MST
// 5- add this edge to the MST
// 6- repeat step 4 and 5 until we have v-1 edges in the MST

//! NOTE => this way is greedy algorithm because we choice the minimum weight edge in each step and we don't care about the next steps
//!------------------------------------------------------------------------------------------------------------------------------------------------------

//! Pesudo Code:

// add first arbitrary vertics in the solution
// while selected edges count < v-1
// - crete min store with biggest possible value
// - crete temp store for the position of the min in the graph
// - for i = 0, i < v
// --- if i is in the solution
// ----- for j = 0, j < v
// ------- if j is not in the solution and graph[i][j] > 0 and < min
// --------- assign graph[i][j] to min
// --------- assign i,j to the position temp store
// - add temp position to the solution
// - increase selected edges count by one

//! Implementation:

const labels: string[] = ['1', '2', '3', '4', '5', '6']

const graph: Array<number>[] = [
  [0, 6.7, 5.2, 2.8, 5.6, 3.6],
  [6.7, 0, 5.7, 7.3, 5.1, 3.2],
  [5.2, 5.7, 0, 3.4, 8.5, 4.0],
  [2.8, 7.3, 3.4, 0, 8, 4.4],
  [5.6, 5.1, 8.5, 8, 0, 4.6],
  [3.6, 3.2, 4, 4.4, 4.6, 0]
];

let v: number = graph.length;

let selected_edges_count: number = 0;
let selected: boolean[] = Array(v).fill(false)
selected[0] = true;


while (selected_edges_count < v - 1) {
  let min = Number.MAX_SAFE_INTEGER;
  let temp_from: number = -1
  let temp_to: number = -1;
  for (let i = 0; i < v; i++) {
    if (selected[i]) {
      for (let j = 0; j < v; j++) {
        if (selected[j] == false && graph[i][j] > 0 && graph[i][j] < min) {
          min = graph[i][j];
          temp_from = i;
          temp_to = j;
        }
      }
    }
  }
  selected[temp_to] = true;
  selected_edges_count++;
  console.log(labels[temp_from] + "->" + labels[temp_to] + " : " + graph[temp_from][temp_to])
}