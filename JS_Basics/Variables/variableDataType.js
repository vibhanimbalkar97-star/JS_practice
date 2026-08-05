// console related
// display current year
let a = new Date()
console.log(a.getFullYear())

// create variable and concate them
let firstName = "Karan"
let lastName="Khurana"
console.log(firstName+ " " +lastName)
console.log(`${firstName} ${lastName}`)

// track value by logging befor and after updating
firstName="Kareena"
console.log(firstName)

// error using error
console.error("An error occurred")

// square of 12
console.log(12*12)

// print type
let valid = true
console.log(typeof(valid))

// console age
let age = 25
age > 18 ?  console.log("greater") : console.log("smaller")

// check output
console.log(100/0) //infinity

// variables and data types
// declare variable
let ab = "Hello"
console.log(ab)

// create constant
const pi = Math.PI
console.log(pi)

// reassign value of let
ab="good morning"
console.log(ab)

// type of null
let b = null
console.log(typeof b) //object

// declare variable without assign a value and check its type
let c;
console.log(typeof c) //undefined

let cc = undefined;
console.log(typeof cc) //undefined
// Nan type = number
// null type=object


// random number
let d = Math.random()
console.log(d)

// create an array using const and try to reassign and observe the error
let arr = ["Hello", 12, "hey", true ]
arr = ["abc", 23, "dd", false]
console.log(arr) //["abc", 23, "dd", false]

const arr = ["Hello", 12, "hey", true ]
arr = ["abc", 23, "dd", false]
console.log(arr) //error assign to constant variable =

// Note: in conat variable reassign not done but updation we can do like arr.push(6)
// a++ gives an erro bcz a = a+1 is again assign to variable.