// Write a program to find the largest of three numbers.
let a= 20
let b = 30
let c= 40

if (a >= b && a >= c){
    console.log("a is largest number")
}
else if (b >= a && b >= c ){
    console.log("b is largest number")
}
else {
    console.log("c is largest number")
}

// Write a program to check whether a year is a leap year.
// Rules:

// A year is a leap year if:
// - It is divisible by 400, or
// - It is divisible by 4 but not divisible by 100.

let year = 1900

if(year % 400 === 0 || ((year % 4 === 0) && (year % 100 !== 0))){
    console.log("leap year")
} else{
    console.log("Not leap year")
}

// Write a grading program using if-else.
// Let's use these grading rules:
// Marks	Grade
// 90–100	A
// 75–89	B
// 60–74	C
// 40–59	D
// Below 40	Fail

let m = 60

// if (marks >= 40 && marks <= 59){
//     console.log("D")
// } else if (marks >= 60 && marks <= 74){
//     console.log("c")
// } else if (marks >= 75 && marks <= 89){
//     console.log("b")
// } else if(marks >= 90 && marks <=100){
//     console.log("A")
// } else {
//     console.log("Fail")
// }

let marks = 60;

if (marks < 0 || marks > 100) {
    console.log("Invalid marks");
} else if (marks >= 90) {
    console.log("A");
} else if (marks >= 75) {
    console.log("B");
} else if (marks >= 60) {
    console.log("C");
} else if (marks >= 40) {
    console.log("D");
} else {
    console.log("Fail");
}