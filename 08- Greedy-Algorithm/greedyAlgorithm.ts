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
//!------------------------------------------------------------------------------------------------------------------------------
//! Example: Hiring process usually is a greedy algorithm
// 1- sequential choices: we have a list of candidates and we choose one by one
// 2- local optimal solution: we choose the best candidate at the moment
// 3- greedy-choice property: the best candidate at the moment is the best candidate overall but not always