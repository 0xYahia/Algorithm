//! Sorting Algorithms
// We have alot of sorting algorithms this is 10 most important known sorting algorithms:
// 1- Insertion Sort
// 2- Selection Sort
// 3- Bubble Sort
// 4- Merge Sort
// 5- Quick Sort
// 6- Heap Sort
// 7- Counting Sort
// 8- Radix Sort
// 9- Bucket Sort
// 10- Shell Sort

//! But we will talk the most popular sorting algorithms:
//! Insertion Sort

// inputs => Process => outputs
// unsorted data => sorting algorithm => sorted data

//! Pseudocode
// 1- x = [], key = 0
// 2- read x
// 3- for i = 1 forward i < x.length
// 3.1- key = x[i]
// 3.2- for j = i - 1 backward j >= 0
// 3.2.1- if key < x[j] then x[j + 1] = x[j]
// 3.2.2- else break this loop
// 3.3- x[j + 1] = key
// 4- print x

//! Code
function insertionSort(x: number[]) {
  for (var i = 1; i < x.length; i++) {
    //! n
    let key = x[i]; //! n
    for (var j = i - 1; j >= 0; --j) {
      //! n * n
      if (x[j] > key) {
        //! n * n
        x[j + 1] = x[j]; //! n * n
      } else {
        break; //! n * n
      }
    }
    x[j + 1] = key; //! n
  }
  console.log(x); //! 1
}
insertionSort([9, 5, 1, 4, 3]);

// n + n + n^2 + n^2 + n^2 + n^2 + n + 1
// f(n) = 4n^2 + 3n + 2
// f(n) = O(n^2) as n -> ∞
//! O(n^2)

//! if i have loop inside another loop when i calculate the complexity i must multiply the two loops (n * n) not sum them (n + n)
