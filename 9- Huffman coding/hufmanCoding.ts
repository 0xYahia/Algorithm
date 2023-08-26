//! 20 – Greedy Algorithm – Huffman Coding – Algorithm
// we use huffman coding to compress data like text, images, videos, etc. to reduce the size of the data.
// Zip, JPEG, PNG,MP3..etc files are an example of using huffman coding.

// Character representation in computer:
// char              decimal           decimal to 8 bit Binary
// a                97                01100001
// A                65                01000001

// decimal to 16 bit Binary      decimal            char
// ب                1576              0000011001111000

//! in the name of God
// length:
// 18 characters
// 18 * 8 = 144 bits

// بسم الله الرحمن الرحيم
// length:
// 21 characters
// 21 * 16 = 336 bits
// 16 bit for each arabic character
// if represent that to binary 0 and 1 will be so long

//! Example:
// internet
// 01101001 01101110 01110100 01100101
// 01110010 01101110 01100101 01110100

// char      Bits
// i         01101001
// r         01110010
// n         01101110
// t         01110100
// e         01100101

//! 1) First we need to know the frequency of each character in the text and sort them from most frequent to least frequent (descending order)
// char      frequency
// e         2
// t         2
// n         2
// r         2
// i         1

//! 2) we create table from the characters and their frequencies and Auxiliary Message Ensembles (AME) for each character
// N = unique characters count
// Auxiliary Message Ensembles (AME) = N - 1
// Extra Town count = N - 1

//! char      frequency      1            2              3             4
//  *                                                                  8
//  *                                     4     [0]      4  [0]
//  *                                                    4  [1]
//  e  [10]   2  [10]        2            2     [10]
//  t  [11]   2  [11]        2            2     [11]
//  n         2  [00]        2   [00]
//  *                        2   [01]
//  r         1  [010]
//  i         1  [011]

//! char     code
// e        10
// t        11
// n        00
// r        010
// i        011


//! internet
//! char     frequency      Bits            new code
// i        1              01101001              011
// r        2              01110010              010
// n        2              01101110              00
// t        2              01110100              11
// e        2              01100101              10


//! Properties of Huffman Coding method:
// 1) No code could be used for more than one character
// 2) No code is a prefix of another code
// 3) Long codes for the least frequent characters and short codes for the most frequent characters

//! internet by binary
// 01101001 01101110 01110100 01100101
// 01110010 01101110 01100101 01110100

//! internet by huffman coding
// 011 00 11 10 010 00 10 11

//! Note if i reverse the table and start from the least frequent character will give me the same result but reverse the code
//! char    new code
//  e             01
//  t             00
//  n             11
//  r             101
//  i             100


//! Another method to explain huffman coding and the popular one (Binary Tree Method)
// look at the image in the slides

//! Note => the binary tree method will give me the same result as the table method but when i reverse the table

//! internet
//! Original [64 bits]:
// 01101001 01101110 01110100 01100101
// 01110010 01101110 01100101 01110100

//! Compressed [18 bits]:
// 100 11 00 01 101 11 01 00

//! Compressed + huffman map [78 bits]:
// 01100101 01 01110100 00 01101110 11
// 01110010 101 01101001 100
// {EOH}
// 100 11 00 01 101 11 01 00

//! internetinternet
//! Original [128 bits]:
// 01101001 01101110 01110100 01100101 01110010 01101110 01100101 01110100
// 01101001 01101110 01110100 01100101 01110010 01101110 01100101 01110100

//! Compressed [36 bits]:
// 100 11 00 01 101 11 01 00 100 11 00 01 101 11 01 00

//! Compressed + huffman map [96 bits]:
// 01100101 01 01110100 00 01101110 11
// 01110010 101 01101001 100
// {EOH}
// 100 11 00 01 101 11 01 00 100 11 00 01 101 11 01 00

// we see that the compressed + huffman map is bigger than the compressed only because the huffman map is too long
// but if we have a big text the huffman map will be smaller than the compressed only so we will save more space

//! Huffman Coding has many variants:
// 1) Huffman Coding
// 2) Adaptive Huffman Coding
// 3) n-ary Huffman Coding
// 4) Length-limited Huffman Coding
// 5) Huffman Template
// 6) Hu-Tucker Coding
// 7) Canonical Huffman
// and more
//!----------------------------------------------------------------------------------------------------------------------------
//! 21 – Greedy Algorithm – Huffman Coding
//! Some type of data structures:
//! Binary Tree:
// A tree via nodes and each node has 2 children (left and right)
// in binary tree maybe the node has only one child (left or right)

//! Complete Binary Tree:
// A binary tree each node has 2 children (left and right) and all levels are full except the last level
// the parent called node and the children called leaf or left child node and right child node

//! Node:
// Node is an object that has 3 properties
// 1) data
// 2) left
// 3) right

//! left and right are pointers (reference) to the left and right child node
// the node is an object so i can add more properties to it like i can add character property to it if i need it
//!----------------------------------------------------------------------------------------------------------------------------
//! Heap:
// Heap is a type of binary tree
// Heap is a complete binary tree

//! there are two cases of binary tree to be a heap
// 1) Max Heap
// if the data in parent node is bigger than the data in the children nodes
// 2) Min Heap
// if the data in parent node is smaller than the data in the children nodes

//! Heap Operations:
//! 1) Heapify:
// Convert any data structure to heap data structure (e.g convert array to heap)
//! 2) Find-max (of find-min)
//! 3) insertion
//! 4) deletion
//! 5) extract-max or extract-min: Returning and deleting the maximum o minimum element from the map
//!----------------------------------------------------------------------------------------------------------------------------
//! Queue:
// Queue is a data structure that has two operations
// 1) enqueue: add element to the queue
// 2) dequeue: remove element from the queue
// Queue is FIFO (First In First Out) and the flow of the data is from the first element to the last element in the queue

//! Priority Queue: is the special type of queue that has priority for each element in the queue
// the element with the highest priority will be the first element to be dequeued
// if two elements have the same priority the element that was enqueued first will be the first element to be dequeued

//! Priority Queue it's min heap or max heap
//!----------------------------------------------------------------------------------------------------------------------------
//! Conclusion:
// Priority Queue is Min-Heap or Max-Heap
// Heap is a complete binary tree
// Binary Tree is a collection of related nodes
// Node is an object has data and references to another nodes
//!----------------------------------------------------------------------------------------------------------------------------
//! Implementation
