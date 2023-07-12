//! Algorithm to calculate the area of a circle

// A = πr² (pi * radius * radius)

//! To do any algorithm we need to know the inputs, processes, outputs
//! may be need to another step in some language (declare [initialize] variables)
//! Steps: بحدد 3 حاجات
//  Inputs ==> Processes ==> Outputs
// 1- قراءة او ادخال قيمه نصف قطر الدائرة
// 2- ضرب نصف القطر في نفسه وضرب الناتج في باي
// inputs: pi (constant), radius (unknown)
// processes: area = pi * radius * radius
// 3- طباعة ناتج العملية
// outputs: area

//! Flowchart

//! Code
function circleArea(r: number): number {
  let area: number;
  area = Math.PI * (r * r);
  return area;
}

console.log(circleArea(10)); // 314.1592653589793
console.log(circleArea(20)); // 1256.6370614359173

//!-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! Lab 1
//! مطلوب كتابه algorithm  ورسم flowchart وكود بأي لغ للاتي :
// 1 => calculate the area of a Parallelogram
// 2 => calculate the area of a Trapezoid

//! Assignment 1 => calculate the area of a Parallelogram
// area of a Parallelogram = base * height
// A = b * h

//! Sudo code
// 1- قراءة او ادخال قيمه قاعدة وارتفاع المتوازي
// 2- ضرب قاعدة المتوازي في ارتفاعه
// 3- طباعة ناتج العملية

//! Flowchart

//! Code
function parallelogramArea(b: number, h: number): number {
  let area: number;
  area = b * h;
  return area;
}

console.log(parallelogramArea(10, 20)); // 200
console.log(parallelogramArea(20, 5)); // 100
//!-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! Assignment 1 => calculate the area of a Trapezoid
// مساحه شبه المنحرف = نصف مجموع القاعدتين * الارتفاع (1/2 * (a + b) * h)
// area of a Trapezoid = 1/2 * (a + b) * h

//! Sudo code
// 1- قراءة او ادخال قيمه قاعدة العليا والسفلى والارتفاع
// 2- جمع قاعدة العليا والسفلى وقسمها على 2 وضربها في الارتفاع
// 3- طباعة ناتج العملية

//! Flowchart

//! Code
function trapezoidArea(a: number, b: number, h: number): number {
  let area: number;
  area = 0.5 * (a + b) * h;
  return area;
}

console.log(trapezoidArea(8, 13, 7));
