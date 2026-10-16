# JavaScript Hoisting — Simple Interview Notes

## 1. What is hoisting?

Hoisting is JavaScript's behavior of processing declarations before executing the code.

Important: JavaScript doesn't literally move your code to the top. It prepares declarations during the creation phase.

## 2. Hoisting rules with examples

### 1. `var` hoisting

The variable is initialized with `undefined` before its assignment runs.

```
console.log(a);
var a = 10;
```

Output:

```
undefined
```

Behind the scenes, think of it like:

```
var a;
console.log(a); // undefined
a = 10;
```

### 2. `let` hoisting

`let` is hoisted, but cannot be accessed before initialization. This period is called the Temporal Dead Zone (TDZ).

```
console.log(a);
let a = 10;
```

Output: `ReferenceError`

### 3. `const` hoisting

Same TDZ behavior as `let`.

```
console.log(a);
const a = 10;
```

Output: `ReferenceError`

Also, `const` must be initialized when declared.

### 4. Function declaration hoisting

A function declaration can be called before its definition.

```
greet();

function greet() {
  console.log("Hello");
}
```

Output: `Hello`

### 5. Function expression with `var`

The variable declaration is hoisted, but the function assignment is not.

```
greet();

var greet = function () {
  console.log("Hello");
};
```

Output: `TypeError`

Why? `greet` is `undefined` when JavaScript tries to call it.

### 6. Arrow function with `const`

```
greet();

const greet = () => {
  console.log("Hello");
};
```

Output: `ReferenceError`

Why? `greet` is still in its TDZ when called.

### 7. Function scope and hoisting

```
var x = 10;

function test() {
  console.log(x);
  var x = 20;
}

test();
```

Output: `undefined`

Why? The local `var x` is hoisted inside `test()` and shadows the global `x`.

### 8. `var` redeclaration vs `let`

```
var a = 1;
var a = 2;
console.log(a); // 2
```

This is allowed.

```
let b = 1;
let b = 2; // SyntaxError in the same scope
```

### 9. Class hoisting

Classes are also inaccessible before their declaration.

```
const obj = new Person();

class Person {}
```

Output: `ReferenceError`

### 10. Quick revision table

| Declaration                 | Hoisted?      | Usable before declaration? |
| --------------------------- | ------------- | -------------------------- |
| `var`                       | Yes           | Yes, as `undefined`        |
| `let`                       | Yes           | No — TDZ                   |
| `const`                     | Yes           | No — TDZ                   |
| Function declaration        | Yes           | Yes                        |
| Function expression (`var`) | Variable only | No, not callable yet       |
| Arrow function (`const`)    | Variable only | No — TDZ                   |
| `class`                     | Yes           | No — TDZ                   |

Interview tip: Remember that hoisting applies to declarations, not their assignments.

# 10 tricky hoisting interview questions

Choose the output for each question. Answers and explanations will appear when you check.

### 1. What is the output?

console.log(a); var a = 5;

A. 5

B. undefined

C. ReferenceError

D. SyntaxError

Correct!

The var declaration is initialized to undefined before its assignment executes.

### 2. What is the output?

console.log(a); let a = 5;

A. 5

B. undefined

C. ReferenceError

D. SyntaxError

Correct!

let is in its Temporal Dead Zone until its declaration is initialized.

### 3. What is the output?

greet(); function greet() {   console.log("Hi"); }

A. Hi

B. undefined

C. TypeError

D. ReferenceError

Correct!

Function declarations are available before their textual definition.

### 4. What is the output?

greet(); var greet = function () {   console.log("Hi"); };

A. Hi

B. undefined

C. TypeError

D. ReferenceError

Correct!

greet is undefined at the call, so calling it produces a TypeError.

### 5. What is the output?

var x = 10; function test() {   console.log(x);   var x = 20; } test();

A. 10

B. 20

C. undefined

D. ReferenceError

Correct!

The local var x is hoisted and shadows the global x.

### 6. What is the output?

console.log(a); const a = 10;

A. 10

B. undefined

C. ReferenceError

D. TypeError

Correct!

const is in the TDZ before initialization.

### 7. What is the output?

var a = 1; var a = 2; console.log(a);

A. 1

B. 2

C. undefined

D. SyntaxError

Correct!

Redeclaring a var variable in the same scope is allowed; the latest assignment wins.

### 8. What is the result?

let a = 1; let a = 2; console.log(a);

A. 1

B. 2

C. undefined

D. SyntaxError

Correct!

Declaring the same let name twice in one scope is a syntax error.

### 9. What is the output?

say(); var say = () => console.log("Hello");

A. Hello

B. undefined

C. TypeError

D. ReferenceError

Correct answer: C

The var binding exists but is undefined when say() is called.

### 10. What is the output?

var a = 1; function test() {   console.log(a);   let a = 2; } test();

A. 1

B. 2

C. undefined

D. ReferenceError

Correct answer: D

The local let a shadows the global a but is in its TDZ at the console.log.

## Your score: 8/10
