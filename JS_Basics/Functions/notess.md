# JavaScript Functions — Interview Revision

Let's cover the important function concepts with simple definitions, examples, and 10 tricky MCQs for frontend/MERN interviews.

## 1. What is a function?

A function is a reusable block of code that performs a task.

```
function greet() {
  console.log("Hello!");
}

greet(); // Hello!
```

- Define: `function greet() { ... }`
- Call/invoke: `greet()`
- Code inside the function runs when it is called.

## 2. Important function types

1\. Function declaration

```
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // 5
```

A named function; can be called before its declaration because of function hoisting.

2\. Function expression

```
const add = function(a, b) {
  return a + b;
};
console.log(add(2, 3)); // 5
```

A function assigned to a variable. You cannot call it before the assignment executes.

3\. Arrow function

```
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5
```

Short syntax. Arrow functions don't have their own `this` or `arguments`, and cannot be used with `new`.

4\. Anonymous function

```
setTimeout(function() {
  console.log("Hello");
}, 1000);
```

A function without its own name, often used as a callback.

5\. IIFE (Immediately Invoked Function Expression)

```
(function() {
  console.log("Runs immediately");
})();
```

Defined and invoked immediately.

## 3. Parameters, arguments, and `return`

```
function multiply(a, b) {
  return a * b;
}

console.log(multiply(3, 4)); // 12
```

| Term              | Meaning                                    | Example                          |
| ----------------- | ------------------------------------------ | -------------------------------- |
| Parameter         | Variable in function definition            | `a`, `b`                         |
| Argument          | Value passed when calling                  | `3`, `4`                         |
| `return`          | Sends a result back and exits the function | `return a * b`                   |
| Default parameter | Value used if argument is `undefined`      | `function greet(name = "Guest")` |

Important: `return` and `console.log()` are different.

```
function add(a, b) {
  console.log(a + b);
}

console.log(add(2, 3));
```

Output:

```
5
undefined
```

The function prints `5` but returns nothing, so its return value is `undefined`.

## 4. Other important function concepts

### A. Default parameters

```
function greet(name = "Guest") {
  return "Hello " + name;
}

greet();          // "Hello Guest"
greet("Vibha");   // "Hello Vibha"
```

The default is used when the argument is `undefined`, not when it is `null`.

### B. Rest parameters (`...`)

Collect multiple arguments into an array.

```
function sum(...nums) {
  return nums.reduce((total, n) => total + n, 0);
}

sum(1, 2, 3); // 6
```

### C. Callback function

A function passed to another function to be executed later or by that function.

```
function greet(callback) {
  callback();
}

greet(() => console.log("Hello"));
```

Common in event handlers, array methods, and timers.

### D. Higher-order function

A function that accepts another function or returns a function.

```
function calculate(a, b, operation) {
  return operation(a, b);
}

calculate(2, 3, (x, y) => x + y); // 5
```

### E. Closure

A function remembers variables from its outer lexical scope, even after the outer function has finished.

```
function outer() {
  let count = 0;

  return function() {
    count++;
    return count;
  };
}

const counter = outer();
counter(); // 1
counter(); // 2
```

Closures are useful for private state and function factories.

### F. Recursion

A function calls itself. It needs a base case to stop.

```
function countdown(n) {
  if (n === 0) return;
  console.log(n);
  countdown(n - 1);
}

countdown(3); // 3, 2, 1
```

### G. Pure function

For the same inputs, it returns the same output and doesn't cause external side effects.

```
function square(n) {
  return n * n;
}
```

### H. Method

A function stored as an object's property.

```
const user = {
  name: "Sam",
  greet() {
    return "Hello " + this.name;
  }
};

user.greet(); // "Hello Sam"
```

### I. `this` in regular vs arrow functions

```
const user = {
  name: "Sam",
  regular() {
    return this.name;
  },
  arrow: () => this.name
};

user.regular(); // "Sam"
```

A regular method's `this` is determined by how it is called. An arrow function inherits `this` from its surrounding lexical scope, so `user.arrow()` does not get `this` from `user`.

### J. `call()`, `apply()`, and `bind()`

These let you set `this` for a regular function.

```
function greet() {
  return "Hello " + this.name;
}

const user = { name: "Sam" };

greet.call(user);  // "Hello Sam"
greet.apply(user); // "Hello Sam"

const fn = greet.bind(user);
fn();              // "Hello Sam"
```

- `call`: invokes immediately with arguments individually.
- `apply`: invokes immediately with arguments in an array.
- `bind`: returns a new function to invoke later.

Arrow functions do not have their own `this`, so these methods cannot change their `this`.

## 5. Ten tricky function interview questions

Choose the output for each question. These cover functions, hoisting, closures, callbacks, arrow functions, `this`, and timers.

### 1. What is the output?

function add(a, b) {   return;   a + b; } console.log(add(2, 3));

A. 5

B. undefined

C. 0

D. SyntaxError

### 2. What is the output?

console.log(square(4)); function square(n) {   return n \* n; }

A. 16

B. undefined

C. ReferenceError

D. TypeError

### 3. What is the output?

const add = (a, b) => { a + b; }; console.log(add(2, 3));

A. 5

B. undefined

C. null

D. SyntaxError

### 4. What is the output?

function greet(name = "Guest") {   return name; } console.log(greet(undefined)); console.log(greet(null));

A. Guest, Guest

B. undefined, null

C. Guest, null

D. null, Guest

### 5. What is the output?

function outer() {   let x = 10;   return function() { return x; }; } const fn = outer(); console.log(fn());

A. undefined

B. 10

C. ReferenceError

D. TypeError

### 6. What is the output?

function test() {   console.log(arguments.length); } test(10, 20, 30);

A. 0

B. 1

C. 2

D. 3

### 7. What is the output?

const obj = {   value: 7,   getValue() { return this.value; } }; const fn = obj.getValue; console.log(fn());

A. 7

B. undefined

C. Usually undefined (or a ReferenceError in strict mode)

D. TypeError in every mode

### 8. What is the output?

function sum(...nums) {   return nums.length; } console.log(sum(2, 4, 6, 8));

A. 2

B. 3

C. 4

D. undefined

### 9. What is the output?

function run(callback) {   return callback(5); } console.log(run(n => n \* 2));

A. 5

B. 10

C. undefined

D. TypeError

### 10. What is the output?

for (var i = 0; i < 2; i++) {   setTimeout(function() {     console.log(i);   }, 0); }

A. 0, 1

B. 1, 1

C. 2, 2

D. undefined, undefined

Check answers (0/10 answered)

Interview revision priority: Focus on `return`, function hoisting, closures, callbacks, arrow functions, `this`, and `var` with timers. These concepts often appear together in JavaScript output-based questions.