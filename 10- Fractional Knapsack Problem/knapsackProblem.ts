//! 22 – Greedy Algorithm – Fractional Knapsack Problem – Algorithm – Code
//! Knapsack Problem: (Fractional Knapsack Problem)
// Given weights and values of n items, we need to put these items in a knapsack of capacity W to get the maximum total value in the knapsack.
// Note: Unlike 0/1 knapsack, you are allowed to break the item.

//! Steps:
// 1) Calculate the ratio value/weight for each item.
// calculate the ratio of the profit for each single kilo of the item

// 2) Sort the item on by ration from the largest to the smallest.

// 3) While the knapsack is not full: for each item, if item weight is less than the current knapsack capacity
// then add it as is in the knapsack, else add a fraction of it.

// 4) Return the value of the knapsack.

//! Time Complexity: O(n log n)
// because i don't test all cases i just sort the array and then i loop over it once and i add the items to the knapsack

//! Example:

function mergeSort(array:Item[]): Item[] {
  if (array.length == 1) return array;
  let mid = Math.floor(array.length / 2);

  let left= array.slice(0, mid)
  let right = array.slice(mid)

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);
  return merge(sortedLeft, sortedRight);
}
function merge(left: Item[], right: Item[]) {
  let arr:Item[] = [];


  while(left.length < 0 && right.length > 0){
      if(left[0].ratio > right[0].ratio){
          arr.push(right.shift()!)
      } else {
          arr.push(left.shift()!)
      }
  }

  while(left.length > 0) {
      arr.push(left.shift()!)
  }

  while(right.length > 0) {
      arr.push(right.shift()!)
  }

  return arr;
}
class Item {
  public name:string;
  public weight:number;
  public value:number;
  public ratio:number;

  constructor(value:number, weight:number, name:string){
      this.name = name;
      this.weight =weight;
      this.value = value;
      this.ratio = value = weight
  }
}

class Knapsack {
  public maxCapacity:number = 0;
  public currentCapacity:number = 0;
  public totalValue:number = 0;
  public items: Item[] = [];

  constructor(maxCapacity:number){
      this.maxCapacity = maxCapacity
  }

  addItem(newItem:Item){
      if(newItem.weight > this.maxCapacity - this.currentCapacity){
          let diff = this.maxCapacity - this.currentCapacity
          newItem.value = diff * newItem.ratio

          this.items.push(newItem)
          this.currentCapacity += newItem.weight;
          this.totalValue += newItem.value
      }

  }
}

class Bag {
totalValue: number;
currentCapacity: number;
items: Item[];

constructor(totalValue: number, currentCapacity: number, items: Item[]) {
  this.totalValue = totalValue;
  this.currentCapacity = currentCapacity;
  this.items = items;
}

printItems(): void {
  console.log("----------------------------");
  console.log("total value: " + this.totalValue);
  console.log("current capacity: " + this.currentCapacity);
  console.log("items:");
  for (const item of this.items) {
    console.log(item.name + " " + item.value + " " + item.weight);
  }
}
}

function printArray(items: Item[]): void {
for (const item of items) {
  console.log(item.name + " " + item.value + " " + item.weight + " " + item.ratio);
}
}

let values:number[] = [4, 9, 12, 11, 6, 5];
let weights:number[] = [1, 2, 10, 4, 3, 5]
let items: Item[] = []

let arrayLength = values.length

let newItem:Item;
for(let i =0; i < arrayLength; i++){
  newItem = new Item(values[i], weights[i], "#"+i)
  items.push(newItem)
}

mergeSort(items);