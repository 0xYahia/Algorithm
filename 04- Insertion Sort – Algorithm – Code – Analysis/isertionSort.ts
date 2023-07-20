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
//!-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 1- Bubble Sort
// Steps
// 1- بعمل لوب علي الاراي وببدا من العنصر الاول وبقارنه باللي بعده لو العنصر الاول اكبر من اللي بعده بعملهم شيفت لقدام خطوه واتجاه اللوب بيكون تصاعدي
// ولو العنصر اللي ماسكه مش اكبر من اللي بعده بمسك اللي بعده وهكذا هنلاحظ ان كل لفه بيتم ترتيب عنصر واحد من الكبير

//! Implementation
function bubbleSort(x: number[]) {
  var iterations = 0;
  var sorted = false;
  for (var i = 0; i < x.length - 1 && sorted == false; i++) {
    sorted = true;
    for (var j = 0; j < x.length - 1 - i; j++) {
      var temp;
      if (x[j] > x[j + 1]) {
        temp = x[j];
        x[j] = x[j + 1];
        x[j + 1] = temp;
        sorted = false;
      }
      iterations++;
    }
  }
  console.log(iterations);
  console.log(x); //! 1
}

bubbleSort([4, 3, 5, 2, 6, 1]); //! 15
bubbleSort([1, 2, 3, 4, 6, 5]); //! 9
bubbleSort([1, 2, 3, 4, 5, 6]); //! 5
//!-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 2- Selection Sort
// Steps
// بفترض ان اول عنصر في الاراي هو الاصغر وبخزن الانديكس بتاعه في متغير اسمه min
// بعمل لوب علي الاراي وببدا اقارن العنصر الاول باللي بعده لو اللي بعده اصغر من اللي قبله بخزن الانديكس بتاعه في المتغير اسمه min وهكذا لحد ما اخلص اللوب
// انا بدأت افتراض ان العنصر اللي في اول انديكس هو الاصغر واكتشفت ان العنصر اللي في الانديكس رقم خمسه مثلا هو الاصغر فبعمل سواب بين العنصر الاول والعنصر اللي في الانديكس رقم خمسه
//ونكرر نفس العمليه مع تاني عنصر وهكذا لحد ما اخلص اللوب

//! Implementation
function selectionSort(x: number[]) {
  for (var i = 0; i < x.length - 1; i++) {
    for (var j = i + 1; j < x.length; j++) {
      if (x[j] < x[i]) {
        var temp;
        temp = x[i];
        x[i] = x[j];
        x[j] = temp;
      }
    }
  }
  console.log(x);
}

selectionSort([4, 3, 5, 2, 6, 1]);

// ميزه ال selection sort انه بيعمل اقل عدد من السوابات
// وعيبها اني مش بقدر اكتشف ان الاراي اللي جايالي مترتبه ولا لأ
//!-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! But we will talk the most popular sorting algorithms:
//! 3- Insertion Sort
//! Steps
// 1- بعمل لوب علي الاراي وببدا من العنصر الثاني عشان بقارنه باللي قبله وبالتالي العنصر الاول مفيش قبله حاجه واتجاه اللوب بيكون تصاعدي
// 2- بحفظ العنصر اللي انا جايبه في متغير اسمه key
// 3- بعمل لوب تاني علي الاراي وببدا من العنصر اللي قبل العنصر اللي انا جايبه بس المره دي اتجاه اللوب تنازلي
// 4- بقارن العنصر اللي انا جايبه من تاني اراي مع العنصر اللي قبله في الاراي الاولي اللي  هو ال key ولو العنصر اللي انا جايبه اكبر من ال key
// بعمله شيفت لقدام خطوه وبكرر العمليه دي لحد ما اوصل لعنصر مفيش قبله عناصر اكبر منه
// لو else بمعني ان الغنصر اللي انا جايبه اصغر من او يساوي ال key بخرج من اللوب break
// 5- بحط ال key في العنصر اللي بعده

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

//! Implementation
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

//! Another Solution

function insertionSort2(x: number[]) {
  for (var i = 1; i < x.length; i++) {
    //! n
    var key = x[i]; //! n
    var j = i - 1; //! n
    while (j >= 0 && x[j] > key) {
      x[j + 1] = x[j]; //! n
      j--; //! n
    }
    x[j + 1] = key; //! n
  }
  console.log(x); //! 1
}

insertionSort2([9, 5, 1, 4, 3]);
//!-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! Recursion
// Recursion is a technique for iterating over an operation by having a function call itself repeatedly until it arrives at a result.
// Recursion is a method of solving problems that involves breaking a problem down into smaller and smaller subproblem until you get
// to a small enough problem that it can be solved trivially.

// Recursion still work until arrive to base case (base case is the smallest problem that can be solved trivially)

//! Example
// 1- Factorial
class Program {
  public static factorial(num: number) {
    if (num == 1) {
      return 1;
    }
    // num - 1 => base case
    return num * Program.factorial(num - 1);
    // 5 * 4 * 3 * 2 * 1
  }

  public static main(args: string[]) {
    console.log(Program.factorial(5));
  }
}

//! NOTE => الريترن مش بتتنفذ غير لما الجزء اللي علي يمينها يخلص عشان كدا كل ما بتنادي علي نفسها بترجع تعمل كول لنفسها مش بتعمل ريترن
// وبعد كدا عمليه الاكسيوت بتتم في الستاك بالعكس وبيتم التعويض بالريترن بتاع الفانكشن وهكذا
// في الفاكتوريال عندي عدد وعايز اضربه في كل الارقام اللي قبله لحد ما اوصل للرقم 1
//! NOTE => Recursion will be work toward base case (Must)

// Console.WriteLine(factorial(4));
// factorial(4) => 4 * factorial(4 - 1)
// factorial(4 - 1) => 3 * factorial(3 - 1)
// factorial(3 - 1) => 2 * factorial(2 - 1)
// factorial(2 - 1) => 1

// عند ال execute
// Console.WriteLine(factorial(24));
// factorial(4) => 4 * 4
// factorial(4 - 1) => 3 * 2
// factorial(3 - 1) => 2 * 1
// factorial(2 - 1) => 1

// في الفاكتوريال لو عملت الفاكتوريال بالطريقه العاديه هيكون الكود كدا
function factorial(num: number) {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  return fact;
}
console.log(factorial(5));

// 2- Fibonacci
//!-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! Merge Sort
// Merge Sort is a Divide and Conquer algorithm. It divides input array in two halves, calls itself for the two halves and then merges the two sorted halves.
// عباره عن اني بقسم الاراي اللي جايالي الي نصين وبعد كدا بقسم كل نص الي نصين وهكذا لحد ما اوصل لنصين واحد في كل نص وبعد كدا ببدأ اعمل مرحله الدمج
// وانا بدمج بقارن العنصر الاول في النص الاول بالعنصر الاول في النص التاني واللي اصغر بحطه في الاراي النهائي وهكذا لحد ما اخلص الارايين

//! مثال توضيحي
// [6, 5, 12, 10, 9, 1]
// [6, 5, 12] : [10, 9, 1]
// [6] : [5, 12] : [10] : [9, 1]
// [6] : [5] : [12] : [10] : [9] : [1]
// [5, 6] : [10, 12] : [1, 9]
// [5, 6, 10, 12] : [1, 9]
// [1, 5, 6, 9, 10, 12]

//! Steps (Plain English)
// 1- Read the array (x), Start and End index of the portion that we need to sort
// 2- Don't continue if End equal or greater than Start
// 3- Calculate the Midpoint = (Start + End) / 2 => floor it
// 4- Divide the portion of the array into NEW two arrays
// 5- Call yourself twice, one for the left portion, the other for the right portion
// 6- Merge the two portions.
// 7- Print x

//! Pseudocode (Merge Sort)
// 1- mergeSort(x, start, end)
// 2- if end <= start then return
// 3- mid = floor((start + end) / 2)
// 4- mergeSort(x, start, mid)
// 5- mergeSort(x, mid + 1, end)
// 6- merge(x, start, mid, end)
// 7- print x
