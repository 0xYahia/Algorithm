//! 24 – Dynamic Programming – Longest Common Subsequence – Algorithm – Code
//! Longest Common Subsequence (LCS)
// Subsequence not Substring because there Longest Common Substring is different

//! One of the most popular uses of LCS:
// find the difference between two files like git diff in source control like git

// text_01 = "HELLO WORLD"
// text_02 = "ELWRD"

// بمسك اول حرفي في تاني تيكست وبشوف لو لقيته في الاول تمام لو ملقتوش بروح اشوف الحرف اللي بعده واكمل من بعد ما وقفت في التيكست الاولاني
// وبرجع ابدأ من تاني حرف في التيكست التاني واعيد نفس الاتيراشن

//! CS
// ELWRD  ==> //! LCS
// LWRD
// WRD
// RD
// D


//! Another Example

// text_01 = "HELLO WORLD"
// text_02 = "OHELOD"

//! CS
// OLD
// HELOD ==> //! LCS
// ELOD
// LOD
// OD
// D

//! We will make table to solve this problem
//! So the most people want called tabular method instead of dynamic programming

//! if not match:
// cell value = Max(top cell, left cell)

//! if match:
// cell value = top left cell + 1

//! This algorithm to calculate LCS

//!        H     E     L     L     O     W     O     R     L     D
//  O      0     0     0     0     1     1     1     1     1     1
//  H      1     1     1     1     1     1     1     1     1     1
//  E      1     2     2     2     2     2     2     2     2     2
//  L      1     2     3     3     3     3     3     3     3     3
//  O      1     2     3     3     4     4     4     4     4     4
//  D      1     2     3     3     4     4     4     4     4     5

// top cell = table[i-1, j]
// left cell = table[i, j-1]
// top left cell = table[i-1, j-1]

//! Then we will implement another algorithm to get the characters of LCS
// start from the bottom right cell
// if current value > left value
// --- if current value == top value
// ------ // the current value inherited from top cell
// ------  move to top row
// --- else
// ------ // the current value is origin of match
// ------ add the char to the solution
// ------ move to the top row
// ------ move to left column
// else
// --- move to left column

//! Implementation

let text_01 = "HELLO WORLD";
let text_02 = "OHELOD"
let n = text_01.length;
let m = text_02.length;

// to add row and column with zero values
text_01 = " " + text_01;
text_02 = " " + text_02;

let dp: any[] = []

for (let i = 0; i <= n; i++) {
  dp[i] = []
  for (let j = 0; j <= m; j++) {
    if (i == 0 || j == 0) {
      dp[i][j] = 0
    } else if (text_01[i] == text_02[j]) {
      dp[i][j] = dp[i - 1][j - 1] + 1
    } else {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
    }
  }
}


let str = '';

let i = n;
let j = m;

while (i > 0 && j > 0) {
  if (dp[i][j] > dp[i][j - 1]) {
    if (dp[i][j] == dp[i - 1][j]) {
      i--;
    } else {
      str = text_02[j] + str;
      i--;
      j--;
    }
  } else {
    j--;
  }
}

console.log(dp[n][m])
console.log(str)