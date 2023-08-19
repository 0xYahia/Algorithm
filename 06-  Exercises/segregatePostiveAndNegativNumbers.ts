//! Segregat positive and negative numbers in an array without sorting the array using merge sort

//! Steps (Plain English)(merge sort)
// 1- Read the array (x), Start and End index of the portion that we need to sort
// 2- Don't continue if End equal or greater than Start
// 3- Calculate the Midpoint = (Start + End) / 2 => floor it
// 4- Divide the portion of the array into NEW two arrays
// 5- Call yourself twice, one for the left portion, the other for the right portion
// 6- Merge the two portions.
// 7- Print x

//! Pseudocode (Merge Sort)
// 1- mergeSort(x, start, end)
// 2- if end >= start then return
// 3- mid = floor((start + end) / 2)
// 4- mergeSort(x, start, mid)
// 5- mergeSort(x, mid + 1, end)
// 6- merge(x, start, mid, end)
// 7- print x

//! Steps (Plain English)(merge only)
// 1- Read the array (x), Start, Midpoint and End index.
// 2- Create two new arrays, one for the left portion, the other for the right portion. create copy of the left portion and the right portion.
// 3- Compare all items in the arrays and segregate it in the original array.
// 4- Move remain items in each array to the original array as is

//! Algorithm (Details)
// 2) Create two new arrays for each side.
// - define the length of each subarray
// - create two empty subarrays based on calculated length
// - loop from start index to midpoint to fill the left subarray

// 3) compare all items in the arrays and sort it in the original array
// - loop over the left subarray
//  -- if current item < 0 then add it to the main array and increade its counter
// - loop over the right subarray
//  -- if current item < 0 then add it to the main array and increade its counter

//! Merge considerations
// start check the left subarray first
// move the negative numbers only
// bothe subarrays could have remain numbers
// all remain numbers should be positive only
// start mobing remain numbers from left subarray first then right subarray


//! Implementation
function segregate(arr: number[], start:number, end: number){
  if (end <= start) return;

    let mid = Math.floor((start + end) / 2);

    segregate(arr, start, mid)
    segregate(arr, mid+1, end)

    merge(arr, start, mid, end)
  }

  function merge(arr: number[], start: number, mid: number, end: number){
    let i,j,k;

    let left_length = mid - start + 1;
    let right_length = end - mid;

    let left_array: number[] = [];
    let right_array: number[] = [];

    for(i =0; i < left_length; i++){
      left_array[i] = arr[start + i];
    }

    for(j=0; j < right_length; j++){
      right_array[j] = arr[mid + 1 + j]
    }

    i = j = 0;
    k = start;

    while(i < left_length && left_array[i] <= 0){
      arr[k] = left_array[i];
      i++;
      k++;
    }

    while(j < right_length && right_array[j] <=0){
      arr[k] = right_array[j]
      j++;
      k++
    }

    while(i < left_length){
      arr[k] = left_array[i];
      i++;
      k++;
    }

    while(j < right_length){
      arr[k] = right_array[j];
      j++;
      k++;
    }
  }


  let arr = [6, -5, 12, 10, -9, -1]
  console.log(arr)
  segregate(arr, 0, arr.length - 1)
  console.log(arr)
