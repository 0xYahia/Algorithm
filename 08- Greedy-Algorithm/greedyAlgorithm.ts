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


function freqChar(message: string){
    let freq:number[] = Array.from({length: 127}, (value, index) => index + 1)
    for(let i =0; i < message.length; i++){
        let current_code = message[i].charCodeAt(0)
        freq[current_code]++
    }


    for(let i=0; i < freq.length; i++){
        if(freq[i] > 0){
            let char = String.fromCharCode(i)
            console.log(char)
        }
    }
}

freqChar('hellow')
