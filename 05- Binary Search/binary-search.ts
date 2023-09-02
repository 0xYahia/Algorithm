//! Binary Search => we can use binary search only on sorted arrays of data (numbers or strings) not items
//! to sorted array of items we use linear search

//! Seudo Code
// Search for key in x array
// 1) Set low to 0 and high to n-1
// 2) calculate mid based on low and high
// 3) if x[mid] == key, return mid
// 4) if x[mid] > key, set high to mid-1 and goto step 2
// 5) if x[mid] < key, set low to mid+1 and goto step 2
// 6) repeat until key == x[mid]

//! Implementation
function binarySearch(arr: number[], key: number): number | undefined{
  let low = 0
  let hight = arr.length - 1;

while(low  <= hight){
  let mid = Math.floor((low + hight) / 2)
  if(key === arr[mid]) {
    return mid
  } else if (key > arr[mid]) {
    low = mid + 1
  } else {
    hight = mid - 1
  }
}
  return -1;
}

let arr = [1,2,3,4,5,6,7,8,9,10]

console.log(binarySearch(arr, 0))

//! Time Complexity => O(log n)
//! rule => if loop depend on number not move to every element in array Time Complexity  will be => O(log n)