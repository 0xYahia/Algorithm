//! 16 – Calculus – Optimization Problems – Max Profit Example
//! Optimization Problems
// Optimization problems is => the problem of finding the best solution from all feasible solutions.

// Optimization problem usually about finding Maximum something or Minimum something
// like Maz profit or Min cost, within specific criteria or constraints.

//! Example:
// شرطه عايزة تعرف ايه الكميه المناسبه من صنف معين اذا تم بيعها هيحققو اعلي مكسب ممكن وفقا للامكانيات الصناعيه للشركة.
// عملو دراسه للسوق وطلعوا منها بأنهم لو سعروا الصنف ب 1.5 دولار فالسوق يسحب منهم 5000 وحده من الصنف
// وعلي كل 10 سنت هيخفضوها هيقدرو يبيعو 1000 وحده اضافيه.
//وطبعا لو حاولت الشركة تزود السعر فالمبيعات هتقل وبالتالي المكسب هيقل.
// الشركه عندها تكاليف ثابته للانتاج تقدر ب 2000 دولار
// بالاضافه الي تكلفه تصنيع الصنف الواحد تقدر بنصف دولار.

// الشركة عايزه تعرف اي انسب سعر للصنف يحققلها أعلي مكسب ممكن.

//! Solution:
// x = price, p = profit, n = quantity
// p(x) = (n * x) - (0.5 * n + 2000)
// p(x) = nx - 0.5n - 2000
// n(x) = 5000 - 1000(1.5 - x)/0.10
// p(x) = (5000 - 1000(1.5 - x)/0.10)x - 0.5(5000 - 1000(1.5 - x)/0.10) - 2000
// p(x) = -1000x^2 + 25000x - 12000

// D = [0, 1.5]
//! derivative (المشتقه)
// p'(x) = -2000x + 25000 = 0
// x = 12.5/1000 = 1.25

// x = 1.25 => p(x) = 3625 => n(x) = 7500
// x = 1.5 => p(x) = 3000
// x = 1.1 => p(x) = 3400