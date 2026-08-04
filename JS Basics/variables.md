variables and data types used to manged and stored data in program.
They define how information is declared, stored, and manipulated during execution.
Variables: Declared using var, let, and const to store data values.

Primitive Data Types: Includes Number, String, Boolean, Null, Undefined, BigInt, and Symbol.
Non-Primitive Data Types: Includes Object, Array, and Function used to store complex data.

Variables
A variable is like a container that holds data that can be reused or updated later in the program. In JavaScript, variables are declared using the keywords var, let, or const.

1. var ===> it has function scoped or globally scoped behaviour. reassigning is allowed. It is hoisted.
 var a = 10
 var a = 20 // reassigning is allowed

 2. let ===> is introduced in es6, has block scoped and nd not hoisted to the top, suitable for mutable variables. cannot be redeclared in same scope.
 let a = 10
 a = 20 // reassigning allowed

 let a= 20 // cannot redeclared

 3. const ===> cannot be reassigned and its block scope.immutable bindings that can't be reassigned, though objects can still be mutated.
 const a=10
 a=20 //reassigning not allowed

 Declaring Variables in JavaScript
Before ES6 (2015): Variables were declared only with var, which is function-scoped and global-scoped, causing issues like hoisting and global pollution.
ES6 Introduction:let and const were introduced to provide safer alternatives for declaring variables.
Scope: let and const are block-scoped (limited to { } block) or global-scoped, reducing errors compared to var.


Rules for Naming Variables
When naming variables in JavaScript, follow these rules

Variable names must begin with a letter, underscore (_), or dollar sign ($).
Subsequent characters can be letters, numbers, underscores, or dollar signs.
Variable names are case-sensitive (e.g., age and Age are different variables).
Reserved keywords (like function, class, return, etc.) cannot be used as variable names.
let userName = "Suman";  // Valid
let $price = 100;         // Valid
let _temp = 0;            // Valid
let 123name = "Ajay";    // Invalid
let function = "gfg"; // Invalid

=========================================================================================

Interesting Facts about Variables in JavaScript
1.  let or const are preferred over var: Initially, all the variables in JavaScript were written using the var keyword but in ES6 the keywords let and const were introduced. The main issue with var is, scoping.
if (true){
    var a=10;
    let b=20
}
console.log(a) // 10 (var is function-scoped)
console.log(b) // Error (let is block-scoped)

2.  var is function scoped: Can be accessed outside block if within the function.
if (true) {
  var x = 10; 
}
// Accessible outside the block
// because we are in same function
console.log(x);

3. let and const are block scoped : Cannot be accessed outside block even if inside the same function
if (true) {
  let y = 20;
  const z = 30;
}
console.log(y, z); // ReferenceError

4. var can be redeclared in the same scope, but let and const cannot be
var x = 10;
var x = 20; // Allowed

let y = 30;
let y = 40; // SyntaxError

const z = 50;
const z = 60; // SyntaxError

5. We can change elements of array or objects even if declared as const.
const ob = { a: 10 };
ob.a = 20; // Allowed

const arr = [10, 20, 30]
arr[2] = 40
console.log(arr)  // Allowed

/* TypeError in the below lines
obj = { b: 30 }; 
arr = [50, 100] */