//! Algorithms Analysis
//! Calculus
// What is function?
// A function is a relation between a set of variables and a set of permissible outputs with the property that each variable
// is related to exactly one output.

//! Example
// x, y

// y = 2x -5
// if x = 3, then y = 1
// if x = 4, then y = 3
// if x = 5, then y = 5

// What about equation?
// An equation is a statement that asserts the equality of two expressions. (not there relation between two variables)

//! Example

//  2x - 5 = 1
//  2x = 1 + 5
//  2x = 6
//  x = 6 / 2
//  x = 3

//! Another Syntax
// f(x) = 2x - 5
// f(3) = 2*3 - 5 = 1
// f(4) = 2*4 - 5 = 3
// f(5) = 2*5 - 5 = 5

//! NOTE => I can't change the value of x in equation, but I can change the value of x in function

//! Properties of function
// 1- Function Domain (مجال) (D)
// function domain is the set of all possible inputs for the function
// Lowest value <= x <= Greatest value
// Lower  bound <= x <= Upper bound

//! Example
// 0<= x <= +∞
// D = [0, +∞[

// 2- Function Range (مدي) (R)
// function range is the set of all possible outputs for the function

//! Example
// f(x) = √x - 16

// مجال الداله (D)
// 16 <= X <= +∞
// D = [16, +∞[

// مدي الداله (R)
// 0 <= Y <= +∞
// R = [0, +∞[

//!-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! Limits of Functions (حدود الدوال)  VIP
// الحدود هي القيمه التي تقترب منها الداله عندما تقترب المتغيرات من قيمه معينه

// f(x) = 3x^2 - 1
// lim 3*x^2 - 1 = ?
// x-> 2 (x approaching 2)

// when:
// x = 1.9 then f(x) = 10.59
// x = 1.99 then f(x) = 10.9599
// x = 1.999 then f(x) = 10.995999

// lim 3x^2 - 1 = 11
// x-> 2
// f(2) = 3*2^2 - 1 = 11 !
//!-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! Example
// f(x) = 2x^2 - 4 / x - 2
// x-> 2

// when:
// x = 1.9 then f(x) = 3.9
// x = 1.99 then f(x) = 3.99
// x = 1.999 then f(x) = 3.999
// = 4

// لو عوضت ب 2 هيديني غير معرفه (undefined)
// عشان القسمه عكس الضرب لما اقول صفر علي صفر المفروض يديني رقم لما اضربه في صرف يديني صفر
// في الحاله دي اي رقم لما اضربه في صفر هيديني صفر عشان كدا بنقول انها غير معرفه
// اي رم ينفع في الحاله دي
//!-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! Asymptotic Notation (التقريب اللامتناهي)
// Notation => a series of symbols used to represent numbers, amounts, or elements in something such as music or mathematics

//! Big O Notation
// We use Big O Notation to know growth rate of function (معدل النمو الفانكشن)
// The order of the function

//! Example
// f(n) = n^2 + 3n + 1 =>  f(n) asymptotically equivalent to n^2 as n -> ∞ OR f(n) = O(n^2)
// n -> ∞
// بناخد اكبر حد وبنتغاضي عن باقي الحدود
// اكبر حد هنا هو n^2

function sumit(n: number): number {
  let sum: number = 0; //! => 1
  for (let i = 0; i < n; i++) {
    //! => N
    sum += i; //! => 1
  }
  return sum; //! => 1
}

// 1 + N + 1 + 1
// f(n) = 1 + N + 1 + 1
// f(n) = O(N) as N -> ∞
//! O(N)

// any assignment => 1 but we must sure this assignment doesn't contain calling to another function
// any loop we look to the increment or decrement of loop variable (i++ or i--) if it's N then it's N
// بعض الناس بيقول ان لو لاقيت ديكلاريشن فقط فبنتجاهله
// في اللوب ببص علي الزياده بتاعتها بتكون عامله ازاي
// لو i++ او i-- فكدا انا متأكد انه بيلف علي  N كلها
// فبديها N
// بعد كدا هكتب اللي كتبته في صيغه فانكشن

//! Example (continued)

function sumit2(n: number): number {
  let sum = (n * (n + 1)) / 2; //! => 1
  return sum; //! => 1
}

// f(n) = 1 + 1
// f(n) = O(1) as N -> ∞
//! O(1)
//! O(1) is better than O(N)
//!-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! Complexity Classes (فئات التعقيد)

//!Notation               Pronunciation               Name in Math               Rate
// O(1)                   Oh one                      Constant                   Best
// O(log2 n) or O(log n)  Oh log n                    Logarithmic                Good
// O(n)                   Oh n                        Linear                     Fair
// O(n log n)             Oh n log n                                             Bad
// O(n^2) & O(n^3)        Oh n squared & Og n cube    Quadratic & Cubic          Worst
// O(2^n)                 Oh two to the n             Exponential                Worst
// O(n!)                  Oh n factorial                                         Horrible

// Logarithmic => is the inverse of exponential (عكس الاسي)
// Log n => log2 n (logarithm base 2)

// Log2 8 = N => بمعني 2 اس كام يديني 8
// Log2 8 = 3 => 2^3 = 8

// 2 => base in math = 10 but in computer science = 2 (we don't write the base in Big O Notation)
// N => exponent
// 8 => argument
// Log n => مش لازم يبقا بالضبط بمعني لو ال output اققل من ال input كل دا بيندرج تحت log n
// input = 100
// output = 80
// دا بيندرج تحت log n

// Factorial => 5! = 5 * 4 * 3 * 2 * 1 = 120
// هي ضرب العدد في كل الارقام اللي قبله وهكذا لحد ما اوصل للرقم 1
