Here are the most important JavaScript keywords for interviews, explained simply with examples.

## 1. Variable declaration

| Keyword | Meaning                                                   | Example                   |
| ------- | --------------------------------------------------------- | ------------------------- |
| `var`   | Declares a function-scoped variable                       | `var age = 25;`           |
| `let`   | Declares a block-scoped variable that can be reassigned   | `let age = 25; age = 26;` |
| `const` | Declares a block-scoped binding that cannot be reassigned | `const PI = 3.14;`        |

## 2. Functions and control flow

`function` — defines a function

```
function greet() {
  console.log("Hello");
}
greet();
```

`return` — sends a value back and exits the function

```
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // 5
```

`if`, `else` — make decisions

```
let age = 20;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

`for`, `while` — repeat code

```
for (let i = 0; i < 3; i++) {
  console.log(i);
}
// 0, 1, 2
```

`break` — stops a loop

```
for (let i = 0; i < 5; i++) {
  if (i === 2) break;
  console.log(i);
}
// 0, 1
```

`continue` — skips the current loop iteration

```
for (let i = 0; i < 4; i++) {
  if (i === 2) continue;
  console.log(i);
}
// 0, 1, 3
```

## 3. Objects and classes

| Keyword   | Meaning                                                              | Example                       |
| --------- | -------------------------------------------------------------------- | ----------------------------- |
| `this`    | Refers to the current call's context in a regular function or method | `user.name` via `this.name`   |
| `new`     | Creates an instance of a constructor or class                        | `const d = new Date();`       |
| `class`   | Defines a class                                                      | `class User {}`               |
| `extends` | Inherits from another class                                          | `class Dog extends Animal {}` |
| `super`   | Calls a parent constructor or method                                 | `super()`                     |
| `static`  | Defines a class-level method or property                             | `static hello() {}`           |

Example:

```
class User {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return "Hello " + this.name;
  }
}

const user = new User("Sam");
console.log(user.greet()); // Hello Sam
```

## 4. Error handling and asynchronous JavaScript

`try`, `catch`, `finally` — handle errors

```
try {
  throw new Error("Something went wrong");
} catch (error) {
  console.log(error.message);
} finally {
  console.log("Finished");
}
```

`throw` — creates an error

```
throw new Error("Invalid input");
```

`async`, `await` — work with asynchronous operations

```
async function getData() {
  const response = await fetch("/api/users");
  return response.json();
}
```

`await` pauses this async function until the Promise settles; it doesn't block the entire JavaScript thread.

`import`, `export` — share code between modules

```
// math.js
export const add = (a, b) => a + b;

// app.js
import { add } from "./math.js";
```

## 5. Other useful keywords and values

| Keyword/value   | Meaning                                                                       |
| --------------- | ----------------------------------------------------------------------------- |
| `typeof`        | Checks a value's type, e.g. `typeof "Hi"` → `"string"`                        |
| `delete`        | Removes an object's configurable property                                     |
| `in`            | Checks whether a property exists in an object or its prototype chain          |
| `instanceof`    | Checks whether an object has a constructor's prototype in its prototype chain |
| `void`          | Evaluates an expression and returns `undefined`                               |
| `null`          | A primitive value representing intentional absence                            |
| `undefined`     | A primitive value often indicating a missing or unassigned value              |
| `true`, `false` | Boolean values                                                                |
| `const`         | Cannot reassign the binding, but object contents may still be changed         |

Interview tip: Start by mastering `var`, `let`, `const`, `return`, `this`, `new`, `typeof`, `if/else`, loops, `try/catch`, and `async/await`. These are especially useful in JavaScript and MERN interviews.
=======================================================================================================================================

Here are the 12 most important JavaScript keywords widely used in React and MERN development, with short explanations and examples.

## Most-used JavaScript keywords

1\. `const` — declare a variable that cannot be reassigned

```
const name = "Vibha";
console.log(name); // Vibha
```

Use it by default when you don't need to reassign the variable.

2\. `let` — declare a reassignable variable

```
let count = 0;
count = 1;
console.log(count); // 1
```

Commonly used for counters and changing values.

3\. `return` — send a result back from a function

```
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // 5
```

Execution exits the function when `return` runs.

4\. `if` / `else` — make decisions

```
const age = 20;
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

Executes different code based on a condition.

5\. `function` — create reusable code

```
function greet() {
  console.log("Hello");
}
greet();
```

The code inside runs when the function is called.

6\. `this` — refers to the current call context

```
const user = {
  name: "Sam",
  greet() {
    console.log(this.name);
  }
};
user.greet(); // Sam
```

In a regular object method call, `this` refers to the object before the dot.

7\. `new` — create an instance

```
const date = new Date();
console.log(date);
```

Commonly used with classes and constructors.

8\. `try` / `catch` — handle errors

```
try {
  JSON.parse("invalid");
} catch (error) {
  console.log("Invalid JSON");
}
```

Prevents a caught error from stopping the remaining code in the surrounding flow.

9\. `async` / `await` — work with asynchronous operations

```
async function getUsers() {
  const response = await fetch("/api/users");
  const data = await response.json();
  return data;
}
```

`await` waits for a Promise inside the async function before continuing.

10\. `import` / `export` — share code between files

```
// math.js
export const add = (a, b) => a + b;
```

```
// app.js
import { add } from "./math.js";
console.log(add(2, 3)); // 5
```

11\. `for` — repeat code

```
for (let i = 0; i < 3; i++) {
  console.log(i);
}
// 0, 1, 2
```

Repeats while the condition is true.

12\. `typeof` — check a value's type

```
console.log(typeof "Hello"); // string
console.log(typeof 25);      // number
```

Useful for understanding or checking data types.

## What should you remember for interviews?

| Priority                       | Concepts                                        |
| ------------------------------ | ----------------------------------------------- |
| Must know                      | `const`, `let`, `return`, `function`, `if/else` |
| Important for React/MERN       | `async/await`, `try/catch`, `import/export`     |
| Important for tricky questions | `this`, `new`, `typeof`, `for`                  |

Note: `const`, `let`, and `var` are declaration keywords. `if`, `return`, `function`, `new`, `this`, `async`, and `await` are also important JavaScript language constructs. Arrow functions (`=>`) are syntax, not a keyword.