// functions :
function add(a,b) {
    return a+b
}
let r = add(5,5)
console.log(r)

// function declaration
function sum(a,b){
    return a+b
}

let s = sum(5,5)
console.log(s)

// we can call named function before declaration dut to hoisting.
sum1(5,5)

function sum1(a,b){
    return a+b
}

// function expression
const greet = function (){
    console.log("Hello")
}
greet()

// anonymous function
const greet1 = function () {
    console.log("Hello")
}
greet()

// named function expression
const greet2 = function say(){
    console.log("Hello welcome")
}
greet2() //hello welcome

// say() // reference error

// arrow function
const add1 = (a,b) => a+b

console.log(add1(5,5))

// parameter and argument
const greet3 = (name) => console.log(`Hello ${name}`)

greet3("ABCD")

// null is an intentional value means a developer explicitly assigns null to a variable or object property to show it is empty or has no value on purpose
// Default parameters
const greet4 = (name = "guest") => console.log(`Hello ${name}`)

greet4("ABCD") //ABCD
greet4()       //guest
greet4(null) //null
greet4(undefined)//guest

// return keyword
function first(){
    console.log(10)
}

function second(){
    return 20
}

let a = first() // 10
console.log(a) // undefined

let b = second() // returns 20
console.log(b) //20

// callback functions
function greet5(name,callback){
    console.log(name)
    callback()
}

function welcome(){
    console.log("welcome")
}

greet5("abcd",welcome)

// higher order functions
function greet6(a,b, operation){
    return operation(a,b)
}

function add6(a,b){
    return a+b
}

// console.log(greet6(5,5,add6))

// IIFE
(function () {
    const message = "Hey";
    console.log(message)
})();