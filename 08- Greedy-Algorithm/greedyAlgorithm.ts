//! Greedy Algorithm
// هو احد طرق حل بعض انواع ال problem optimization وليس الحل الوحيد
// المشاكل اللي بيحلها هي المشاكل اللي ليها خطوات معينه خطوات ورا بعضها
// وكل خطوه المفروض اني اختار اوبشن معين او اخد قرار معين

//! Elements of Greedy strategy:
// 1- sequential choices
// 2- local optimal solution (greedy choices)

//! how to tell if the greedy strategy will be applicable?
// 1- greedy-choice property
// 2- optimal substructure
//!------------------------------------------------------------------------------------------------------------------------------------------------
//! Example: Hiring process usually is a greedy algorithm
// 1- sequential choices: we have a list of candidates and we choose one by one
// 2- local optimal solution: we choose the best candidate at the moment
// 3- greedy-choice property: the best candidate at the moment is the best candidate overall but not always
//!------------------------------------------------------------------------------------------------------------------------------------------------
//! 18 – Greedy Algorithm – Activity Selection Problem – Algorithm – Code
// Activity Selection Problem is a problem of scheduling multiple activities that involve common resources, such as a meeting room.

// sudo code:
// 1- sort the activities by finish time
// 2- select the first activity from the sorted list by finish time
// 3- for each remaining activity in the sorted list
// 4- if the start time of the current activity is greater than or equal to the finish time of the last selected activity
// 5- select the current activity and add it to the list of selected activities
// 6- return the list of selected activities


//! Example:
function selectTasks(start: number[], end:number[]){
  let result: number[] = [0]
  let j = 0;
  for(var i = 1; i <= start.length - 1; i++){
    if(start[i] >= end[j]){
      result.push(i)
      j = i
    }
  }


  console.log(result)
}

let start = [9,10,11,12,13,15]
let end = [11,11,12,14,15,16]

selectTasks(start, end)
//!------------------------------------------------------------------------------------------------------------------------------------------------
//! 19 – Sorted Characters Frequencies – Algorithm – Code
// Input: text [ASCII letters only]
// Output: the frequency of each unique character
// Example:
// Inputs: "internet"
// Output: {i:1, n:2, t:2, e:2, r:1}

// Example:
// Inputs: "hello world"
// Output: {h:1, e:1, l:3, o:2, w:1, r:1, d:1}

//! Solution:
// if we have to use array only
// - create array of length = 127 .. so that each index represent one char .. the value of the item in each index is the frequency
// of the char

// - for each char in the text, find the proper index by getting the ASCII decimal code for the char then increase the item value by 1
// - print the array

//! Sorted ASCII Characters Frequencies

function asciiMethod(message: string){
  let freqArr = Array.from({length: 127}, (_, index) => 0)
  for(let i =0; i < message.length; i++){
      let current_code = message[i].charCodeAt(0);
      freqArr[current_code]++;
  }

  for(let i =0; i < freqArr.length; i++){
      if(freqArr[i] > 0){
          let char = String.fromCharCode(i)
          console.log(char,freqArr[i])
      }
  }
}

let msg1 = "hello world"
asciiMethod(msg1)
//!------------------------------------------------------------------------------------------------------------------------------------------------
//! Sorted Any Characters Frequencies

function anyCodeMethod(message: string){
  console.log('AnyMethod')
  let freqArr: {[key: string]: number} = {};
  for(let i =0; i < message.length; i++){
      freqArr[message[i]] = (freqArr[message[i]] || 0) + 1
  }

  let convertObjToArray = Object.entries(freqArr)
  sort(convertObjToArray,0, convertObjToArray.length-1)

  for(let i =0; i < convertObjToArray.length; i++){
      console.log(convertObjToArray[i])
  }
}

function sort(array:[string, number][], start: number, end:number){
  if(end <= start) return;

  let mid = Math.floor((start + end) / 2)

  sort(array, start, mid);
  sort(array, mid + 1, end);

  merge(array, start, mid, end)
}

function merge(array:[string, number][], start:number, mid: number, end:number){
    let left_length = mid - start +1;
    let right_length = end - mid;

    let left_array:[string, number][] = [];
    let right_array:[string, number][] = [];

    for(let i =0; i < left_length; i++){
        left_array[i] = array[start + i]
    }

    for(let j=0; j < right_length; j++){
        right_array[j] = array[mid + 1 + j]
    }

    let left_index =0;
    let right_index =0;
    let merge_index = start

    while(left_index < left_length && right_index < right_length){
        if(left_array[left_index][1] <= right_array[right_index][1]){
            array[merge_index] = left_array[left_index];
            left_index++
        } else {
            array[merge_index] = right_array[right_index]
            right_index++
        }
        merge_index++;
    }

    while(left_index < left_length){
        array[merge_index] = left_array[left_index];
        left_index++;
        merge_index++;
    }

    while(right_index < right_length){
        array[merge_index] = right_array[right_index];
        right_index++;
        merge_index++;
    }

}



let msg2 = "hello world";
anyCodeMethod(msg2)


