//! 20 – Greedy Algorithm – Huffman Coding – Algorithm
// we use huffman coding to compress data like text, images, videos, etc. to reduce the size of the data.
// Zip, JPEG, PNG,MP3..etc files are an example of using huffman coding.

// Character representation in computer:
// char             decimal           decimal to 8 bit Binary
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


class PriorityQueue<T> {
  private heap: { priority: number; value: T }[] = [];

  private getParentIndex(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  private getLeftChildIndex(index: number): number {
    return 2 * index + 1;
  }

  private getRightChildIndex(index: number): number {
    return 2 * index + 2;
  }

  private siftUp(index: number): void {
    if (index === 0) return;

    const parentIndex = this.getParentIndex(index);
    if (this.heap[parentIndex].priority > this.heap[index].priority) {
      [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
      this.siftUp(parentIndex);
    }
  }

  private siftDown(index: number): void {
    const leftChildIndex = this.getLeftChildIndex(index);
    const rightChildIndex = this.getRightChildIndex(index);
    let smallest = index;

    if (leftChildIndex < this.heap.length && this.heap[leftChildIndex].priority < this.heap[smallest].priority) {
      smallest = leftChildIndex;
    }

    if (rightChildIndex < this.heap.length && this.heap[rightChildIndex].priority < this.heap[smallest].priority) {
      smallest = rightChildIndex;
    }

    if (smallest !== index) {
      [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
      this.siftDown(smallest);
    }
  }

  enqueue(item: T, priority: number): void {
    this.heap.push({ priority, value: item });
    this.siftUp(this.heap.length - 1);
  }

  dequeue(): T | undefined {
    if (this.heap.length === 0) return undefined;

    const top = this.heap[0];
    const last = this.heap.pop()!;
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.siftDown(0);
    }
    return top.value;
  }

  isEmpty(): boolean {
    return this.heap.length === 0;
  }


  peek(): T | undefined {
    if (this.heap.length === 0) return undefined;
    return this.heap[0].value;
  }
}




class HeapNode {
  public left: HeapNode | null;
  public right: HeapNode | null
  public data: string;
  public freq: number;

  constructor(data: string, freq: number){
      this.left = this.right = null
      this.data = data;
      this.freq = freq
  }
}

class Huffman{
    public minHeap:PriorityQueue<HeapNode> = new PriorityQueue<HeapNode>();
    public codes:any = {}
    public emptyChar = String.fromCharCode(0)
    constructor(message:string){
        let freq: {[key:string]: number} = {}
        for(let i =0; i < message.length; i++){
            freq[message[i]] = (freq[message[i]] || 0) + 1
        }
        for(let k in freq){
         let newNode: HeapNode = new HeapNode(k, freq[k])
         this.minHeap.enqueue(newNode, freq[k])
        }

        let top: HeapNode;
        let left, right;
        var newFreq
        while(!this.minHeap.isEmpty()){
            left = this.minHeap.dequeue();
            right = this.minHeap.dequeue()
            newFreq = left!.freq + right!.freq
            top = new HeapNode(this.emptyChar, newFreq)
            this.minHeap.enqueue(top, newFreq)
        }

        this.generateCodes(this.minHeap.peek(), '')
    }

    private generateCodes(node: HeapNode | undefined | null, str: string){
        if(node === null) return;
        if(node!.data != this.emptyChar){
            this.codes[node!.data] = str
        }

        this.generateCodes(node!.left, str + '0');
        this.generateCodes(node!.right, str + '1');
    }
}

let msg = 'internet'
let huff: Huffman = new Huffman(msg);

for(let k in huff.codes){
    console.log(k, huff.codes[k])
}


//! Implementation using C#:

// using System;
// using System.Collections;
// using System.Collections.Generic;

// public class HeapNode
// {
//     public char data;
//     public int freq;
//     public HeapNode left;
//     public HeapNode right;
//     public HeapNode(char data, int freq)
//     {
//         left = right = null;
//         this.data = data;
//         this.freq = freq;
//     }
// }

// public class Huffman
// {
//     private char internal_char = (char)0;
//     public Hashtable codes = new Hashtable();
//     private PriorityQueue<HeapNode, int> minHeap = new PriorityQueue<HeapNode, int>();

//     public Huffman(string message)
//     {
//         // Get the chars frequences
//         Hashtable freqHash = new Hashtable();
//         int i;
//         for (i = 0; i < message.Length; i++)
//         {
//             if (freqHash[message[i]] == null)
//             {
//                 freqHash[message[i]] = 1;
//             }
//             else
//             {
//                 freqHash[message[i]] = (int)freqHash[message[i]] + 1;
//             }
//         }

//         // Convert Hashtable to Queue[minHeap]
//         i = 0;
//         foreach (char k in freqHash.Keys)
//         {
//             HeapNode newNode = new HeapNode(k, (int)freqHash[k]);
//             minHeap.Enqueue(newNode, (int)freqHash[k]);
//             i++;
//         }

//         // we will use the priority queue to build the huffman map .. because we can move nodes with it's child nodes as we did in the presentation .. this is the ultimate reson why we using Prioriy queue
//         HeapNode top, left, right;
//         int newFreq;
//         while (minHeap.Count != 1)
//         {
//             left = minHeap.Dequeue();
//             right = minHeap.Dequeue();
//             newFreq = left.freq + right.freq;
//             top = new HeapNode(internal_char, newFreq);
//             top.right = right;
//             top.left = left;
//             minHeap.Enqueue(top, newFreq);

//         }

//         //Generate Codes
//         this.generateCodes(minHeap.Peek(), "");

//     }

//     private void generateCodes(HeapNode node, string str)
//     {
//         if (node == null)
//         {
//             return;
//         }
//         if (node.data != internal_char)
//         {
//             codes[node.data] = str;
//         }

//         generateCodes(node.left, str + "0");
//         generateCodes(node.right, str + "1");


//     }
// }

//! main.cs
// using System;

// class Program
// {
//     public static void Main(string[] args)
//     {
//         string msg = "The output from Huffman's algorithm can be viewed as a variable length code table for encoding a source symbol. The algorithm derives this table from the estimated probability or frequency of occurrence for each possible value of the source symbol. as in other entropy encoding methods, more common symbols are generally represented using fewer bits than less common symbols. Huffman's method can be efficiently implemented, finding a code in time linear to the number of input weights if these weights are sorted. However, although optimal among methods encoding symbols separately, Huffman coding is not always optimal among all compression methods it is replaced with arithmetic coding or asymmetric numeral systems if better compression ratio is required.";

//         //msg = "internet";
//         Huffman huff = new Huffman(msg);

//       foreach(char k in huff.codes.Keys)
//       {
//         Console.Write(k + " ");
//         Console.WriteLine(huff.codes[k]);
//       }

//     }
// }