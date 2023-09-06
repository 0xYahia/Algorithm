//! 25 – Dynamic Programming – 0/1 Knapsack Problem – Algorithm – Code
// 0/1 Knapsack Problem is different from ordinary Knapsack Problem, here we are allowed to take item or not take item (0/1).
// in ordinary Knapsack Problem, we are allowed to take item or divide item into parts (fractional).
// in dynamic programming, we are trying every possible but in greedy algorithm, we are trying to find optimal solution.

//! Example:

//! Item        #1      #2      #3      #4
//! Profit($)    4       9      12      11
//! Weight(kg)   1       3       5       4

// maxWeight = 8 Kg

//!   $    W
//    4    1      #1
//    9    3      #2
//    12   5      #3
//    11   4      #4

// we will make table and put the first column and row as 0.
//  and  make columns as weight and rows as items.

//! Algorithm to calculate the best profit:

// if item weight <= current stage weight
//   --- cell value = Max of(profit of the item + value of cell at: j = difference between j weight and item weight, i = the top row or top cell value)
//  --- هجيب البروفيت بتاع العنصر دا وبروفيت العنصر اللي موجود في الصف اللي قبلي بس في عمود مختلف طب بعرف العمود ازاي
//  --- رقم العمود هو الفرق بين وزن العنصر اللي انا واقف علليه والوزن بتاع العمود اللي انا في اللي هو ال J
//  --- واخود القيمه اللي هلاقيها في العمود دا في الصف اللي قبلي واجمعها علي البروفيت بتاع العنصر الحالي
//  --- واقارن بينها وبين العنصر اللي فوقي واخود الكبير
// else
//   --- cell value = top cell value

//!   $    W          0    1    2    3    4    5    6    7    8
//                    0    0    0    0    0    0    0    0    0
//    4    1    #1    0    4    4    4    4    4    4    4    4
//    9    3    #2    0    4    4    9    13   13   13   13   13
//    12   5    #3    0    4    4    9    13   13   16   16   21
//    11   4    #4    0    4    4    9    13   13   16   21   24

//! the best profit is 24 and 13 and 4

//! Algorithm to get the get the data of the best profit:

// start from bottom right cell
// remain = max weight
// while remain > 0
// -- if value > top cell value
// -- -- items is part of the solution
// -- -- remain = remain -  item weight
// -- -- go to column[remain]
// -- -- go to top row
// -- else
// -- -- move to top row