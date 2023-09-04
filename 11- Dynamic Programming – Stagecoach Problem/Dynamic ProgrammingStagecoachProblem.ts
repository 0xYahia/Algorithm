//! 23 – Dynamic Programming – Stagecoach Problem – Algorithm – Code
//! Stagecoach Problem – Dynamic Programming – Algorithm – Code

// Convert the graph to adjacency matrix (Multi-dimensional array)

// In any point we have current point and next point and after next point
//! Min cost calculation for current point = (cost of the next point + total cost of the next point)
//! OR
//! Min cost calculation for current point = (cost of the after next point + total cost of the after next point)

// total cost = cost from a point to the final destination
// matrix[i][j] + total_cost[j]
//! OR
// matrix[i][j + 1] + total_cost[j + 1]

//! Matrix
//!     A     B      C      D      E      F      G      H      I      J
//! A   0     2      4      3      0      0      0      0      0      0
//! B   0     0      0      0      7      4      6      0      0      0
//! C   0     0      0      0      3      2      4      0      0      0
//! D   0     0      0      0      4      1      0      0      0      0
//! E   0     0      0      0      0      0      0      1      4      0
//! F   0     0      0      0      0      0      0      6      3      0
//! G   0     0      0      0      0      0      0      3      3      0
//! H   0     0      0      0      0      0      0      0      0      3
//! I   0     0      0      0      0      0      0      0      0      4
//! J   0     0      0      0      0      0      0      0      0      0

// for i = n-1 to 0;
//    current_point_total_cost = MaAX_NUMBER

//   for j= i + 1 to n;
//     new_cost = matrix[i][j] + total_cost[j]
//     current_point_total_cost = min(current_point_total_cost, new_cost)

//   total_cost[i] = current_point_total_cost

//! Total Cost
//!     A     B      C      D      E      F      G      H      I      J
//      0     0      7      0      4      7      6      3      4      0

//! We will add row to know this calculation to total cost come from which point
//!     A     B      C      D      E      F      G      H      I      J
//      11    11     7      8      4      7      6      3      4      0
//      C     E      E      H      H      I      H      J      J      -

// A becomes 11 from C
// C becomes 7 from E
// E becomes 4 from H
// H becomes 3 from J

//! Path from A to J = A -> C -> E -> H -> J


//! Example (Implementation)

let labels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

let matrix = [
  [0, 2, 4, 3, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 7, 4, 6, 0, 0, 0],
  [0, 0, 0, 0, 3, 2, 4, 0, 0, 0],
  [0, 0, 0, 0, 4, 1, 5, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 4, 0],
  [0, 0, 0, 0, 0, 0, 0, 6, 3, 0],
  [0, 0, 0, 0, 0, 0, 0, 3, 3, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

let n = matrix.length;
console.log(n)
let states: { from: string, to: string, cost: number }[] = [];
states[n - 1] = { "from": '', "to": '', "cost": 0 }
let newCost;

for (var i = n - 2; i >= 0; i--) {
  states[i] = { "from": labels[i], "to": labels[j], "cost": Number.MAX_SAFE_INTEGER }
  for (var j = i + 1; j < n; j++) {
    if (matrix[i][j] == 0) continue;

    newCost = matrix[i][j] + states[j].cost
    if (newCost < states[j].cost) {
      states[i].to = labels[j];
      states[i].cost = newCost
    }
  }
}

console.log(states)

let path = ["A"];
var i = 0;
var j = 0

while (i < states.length) {
  if (states[i].from == path[j]) {
    path[j + 1] = states[i].to;
    j++
  }
  i++;
}



console.log("Minimum Cost:", states[0].cost);
console.log("Minimum path:", path);

