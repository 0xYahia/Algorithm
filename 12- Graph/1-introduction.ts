//! 26 – Graph – Introduction
// We learned heap is a complete binary tree
// Heap also is a restricted graph

// Tha main points in graph  called vertics or node or point but vertics is the most common
// The lines that connect the vertics called edge or link or line but edge is the most common

//!------------------------------------------------------------------------------------------------------------------------------------------------------
//! Null Graph
// A graph with no edges is called a null graph nodes without edges
//!------------------------------------------------------------------------------------------------------------------------------------------------------
//! Directed Graph
// A graph in which all the edges are directed is called a directed graph
// every edge has a direction from one vertics to another vertics
//!------------------------------------------------------------------------------------------------------------------------------------------------------
//! Undirected Graph
// A graph in which all the edges are undirected is called a undirected graph
// in undirected graph every edge has no direction so we can go from one vertics to another vertics and vice versa
//!------------------------------------------------------------------------------------------------------------------------------------------------------
//! Connected Graph
// A graph is said to be connected if there is a path between every pair of vertics
// in connected graph we can go from any vertics to any other vertics
//!------------------------------------------------------------------------------------------------------------------------------------------------------
//! Disconnected Graph
// A graph is said to be disconnected if it is not connected, i.e., if there exist two vertices u, v such that no path exists between u and v.
//!------------------------------------------------------------------------------------------------------------------------------------------------------
//! Complete Graph
// A graph is said to be complete if there is an edge between every pair of vertics
// in complete graph we can go from any vertics to any other vertics directly
//!------------------------------------------------------------------------------------------------------------------------------------------------------
//! Pseudo Graph
// A graph is said to be pseudo if there is an edge between every pair of vertics
// in pseudo graph we can go from vertics to another vertics directly via two ways
// and there vertics can be connected to itself (self loop)
//!------------------------------------------------------------------------------------------------------------------------------------------------------
//! Application of Graph
// 1- Maps [roads are edges, the points connected by the road are vertices]
// 2- Social Networks [relation between friends and likes and shares are edges]
// 3- Operating Systems [processes and resources allocated to the process are vertices .. from process to the resource is edge]
// 4- Networks [computer networks, Electricity networks..ets]
//!------------------------------------------------------------------------------------------------------------------------------------------------------
//! Graph Representation
// graph is a drawing so to work with it we need to represent it in a data structure
// there are two ways common to represent graph
//! 1- Adjacency Matrix (we use it in Stagecoach)
// adjacency be describe the relationship between vertics and another vertics
//! Row ==> From
//! Column ==> To

//! Maybe the edges doesn't have data so we can use 0 and 1 to represent the edges (true or false)
// 1 ==> represent there relation between this vertics and that vertics (there is an edge between them)
// 0 ==> represent there is no relation between this vertics and that vertics (there is no edge between them)

//! Note : if the graph is undirected the matrix will be symmetric
//! Note : if the graph is directed the matrix will not be symmetric

//! the data in undirected graph is duplicated from the data in directed graph
//!------------------------------------------------------------------------------------------------------------------------------------------------------
//! 2- Adjacency List (the second way to represent graph)
// we use array of linked list to represent graph
//! To show it go to the last slide in the presentation