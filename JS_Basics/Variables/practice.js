let age; // variable declaration = create a variable by giving its a name.

// = 40; initialization = Assigning a value to variable for the first time.

console.log(age) //access = read or using the value stored in a variables.

// var = can be redeclared
var a = 20;
var a = 30
console.log(a)

// var can be reassign
var b = 26
b = 50
console.log(b)

// let = can be reassign but not redeclared
let c = 10
// let c = 20

c = 55 // reassign
console.log(c) //syntaxerror


// const = cannot be redeclared and reassign
const d = 20
// const d = 5

// d = 5 //typeerror assignment to const variable

console.log(d)// alredy declared syntaxerror


// before declaration access variable

console.log(name) // undefined
var name;

console.log(name1) //reference error = tdz, cannot access variabke before initializtion
let name1 = 6; 

console.log(name2) //same as let
const name2 = 8;



console.log(a); //undefined
var a = 10;

console.log(a); //reference error
let a = 10;


const x = 10;
x = 20; 
console.log(x); //type error

var a = 1; 
var a = 2; 
console.log(a); //2

let a = 1; 
let a = 2; 
console.log(a) //syntax error

for (var i=0; i < 4; i++) {
    console.log(i) // 0 1 2 3 
}
console.log(i) //4

for (let i=0; i < 4; i++) {
    console.log(i) // 0 1 2 3 
}
// console.log(i) //reference error = i not defined


