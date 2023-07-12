//! Sigma Notation (Summation Notation) - المحصله
// syntax: ∑(n=1 to n = 3) 2n - 1
// 2(1) - 1 + 2(2) - 1 + 2(3) - 1 = 1 + 3 + 5 = 9
// sigma notation like for loop

//!--------------------------------------------------------------------------------------------------------------------------//
//! Algorithm to calculate standard deviation (σ) - الانحراف المعياري

// sigma small letter σ expression to calculate standard deviation - الانحراف المعياري

// σ = √(∑(xi - m)^2 / N)

// N = عدد العينه او طول العينه الاحصائيه
// N = number of samples or length of statistical sample (length of array)
// xi (x of i) => mean array value
// m => mean value of array or average value of array (المتوسط الحسابى)

// كدا هشيل ال xi واعبر بيها عن كل عنصر فى الاراى  وبعد كدا انفذ المعادله اللى فوق وبعد كدا انفذ المعادله تاني بتاني عنصر في الاراي
// وهكذا وفي الاخر هجمع النواتج دي كلها واقسمها علي طول الاراي (N) يعني هيكون معايا ناتج واحد وهو الانحراف المعياري

// m = 1/N * ∑(i = 1 to N) xi
// a = ∑(i = 1 to N) (xi-m)^2
// b = a / N
// σ = √b

//! sudo code
// 1- حجز مكان في الذاكرة ل x array if numbers و average value و sum  لتتجميع و N
// 2-  طلب ادخال قيمة N
// 3-  طلب ادخال عناصر  x  عدد N من المرات
// 4-  حساب متوسط القيمة
// 5-  عمليه تجميع  xi - m تربيع
// 6-  عمليه قسمه البسط علي المقام
// 7-  عمليه استخراج الجذر التربيعي للناتج
