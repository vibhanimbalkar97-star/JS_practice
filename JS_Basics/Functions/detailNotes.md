# JavaScript Functions — Complete Interview Notes from Basic to Advanced

Let's learn JavaScript functions from the beginning in a way that helps you understand the concept, remember it, write code yourself, and answer interview questions confidently.

For every concept, we'll cover:

1. What is it? — simple English definition.
2. How does it work? — what JavaScript does behind the scenes.
3. Code example — with output.
4. Why does it behave like this? — the reasoning.
5. Interview question and answer — how to explain it in an interview.

Don't try to memorize every line. Understand the reason behind the output. That is what helps you remember.

# Part 1: Function fundamentals

## 1. What is a function?

What is it?

A function is a reusable block of code that performs a particular task.

Imagine you have to add two numbers 100 times. Instead of writing the addition logic 100 times, you write a function once and call it whenever needed.

How does it work?

1. Define the function.
2. JavaScript stores the function so it can be called.
3. Call the function.
4. JavaScript executes its code.
5. The function can return a result.

```

function add() {
    console.log(10 + 20);
}

add();
add();

```

Output:

```
30
30
```

Why does it print twice?

Because `add()` is called twice. Defining a function does not normally execute its body; calling it does.

Interview Q: Why do we use functions?

Answer: Functions help us reuse code, avoid repetition, organize logic, and make programs easier to maintain and test.

Remember: Definition creates the function; calling executes it.

## 2. Function declaration

What is it?

A function declaration defines a named function using the `function` keyword.

How does it work?

JavaScript creates the function during the scope's setup, allowing the function to be called before its declaration in that scope.

```

greet();

function greet() {
    console.log("Hello!");
}

```

Output:

```
Hello!
```

Why does it work before the declaration?

Function declarations are hoisted with their function definition initialized, so this call works.

Interview Q: What is a function declaration?

Answer: It is a way to define a named function using the `function` keyword. Function declarations can generally be called before their declaration within the same scope because of hoisting.

## 3. Function expression

What is it?

A function expression creates a function and assigns it to a variable.

How does it work?

The variable is declared according to its declaration rules. The function is assigned when execution reaches that assignment.

```

const greet = function () {
    console.log("Hello!");
};

greet();

```

Output:

```
Hello!
```

Why can't we call this before the assignment?

Because the function is not assigned to `greet` until the assignment executes. With `const`, trying to access `greet` before its initialization also causes a `ReferenceError`.

Interview Q: What is a function expression?

Answer: A function expression creates a function as an expression, often assigning it to a variable. Unlike a function declaration, it cannot be used before the variable is initialized.

## 4. Anonymous function

What is it?

An anonymous function is a function without its own name.

How does it work?

It can be assigned to a variable or passed directly as an argument to another function.

```

const greet = function () {
    console.log("Hello!");
};

greet();

```

Output:

```
Hello!
```

Why does it work without a name?

The variable `greet` provides a way to access and call the function.

Interview Q: Where are anonymous functions used?

Answer: They are commonly used in function expressions, callbacks, and event handlers.

## 5. Named function expression

What is it?

A function expression that has its own name.

How does it work?

The name is available inside the function itself, which is useful for recursion and debugging. The name is not generally available as a variable outside the expression.

```

const greet = function sayHello() {
    console.log("Hello!");
};

greet();

// sayHello(); // ReferenceError

```

Output:

```
Hello!
```

Why does `greet()` work but `sayHello()` not work outside?

`greet` refers to the assigned function. `sayHello` is the function's internal name and is not declared in the surrounding scope.

Interview Q: Why use a named function expression?

Answer: It can make recursive functions and stack traces easier to understand.

## 6. Arrow function

What is it?

An arrow function is a shorter way to write a function, introduced in ES6.

How does it work?

JavaScript evaluates its body when called. If you use an expression body without braces, the result is returned automatically.

```

const add = (a, b) => a + b;

console.log(add(10, 20));

```

Output:

```
30
```

Why is there no `return` keyword?

An arrow function with an expression body, such as `a + b`, implicitly returns that expression's value.

Compare:

```
const add = (a, b) => a + b;

const multiply = (a, b) => {
    return a * b;
};
```

With curly braces, you need an explicit `return` if you want to return a value.

Interview Q: How is an arrow function different from a normal function?

Answer: Arrow functions have shorter syntax and do not create their own `this` or `arguments` bindings. Normal functions have their own `this` based on how they are called.

## 7. Parameters and arguments

What are they?

- Parameters: Variable names in the function definition.
- Arguments: Actual values passed when calling the function.

How does it work?

JavaScript assigns the passed argument values to the corresponding parameters.

```

function greet(name) {
    console.log("Hello " + name);
}

greet("Vibha");

```

Output:

```
Hello Vibha
```

Here, `name` is a parameter and `"Vibha"` is an argument.

Why does the output contain Vibha?

When `greet("Vibha")` executes, the argument `"Vibha"` becomes the value of `name` inside that function call.

Interview Q: Can a function have multiple parameters?

Answer: Yes. A function can accept multiple parameters, and the arguments are assigned to them by position.

## 8. Default parameters

What is it?

A default parameter provides a fallback value when an argument is omitted or explicitly passed as `undefined`.

How does it work?

JavaScript uses the default value if the corresponding argument is missing or `undefined`.

```

function greet(name = "Guest") {
    console.log("Hello " + name);
}

greet();
greet("Vibha");
greet(undefined);
greet(null);

```

Output:

```
Hello Guest
Hello Vibha
Hello Guest
Hello null
```

Why does `null` print as null instead of Guest?

A default parameter is used for `undefined`, not for `null`. `null` is an intentional value.

Interview Q: When are default parameters useful?

Answer: They provide fallback values and reduce the need for extra checks when optional arguments are omitted.

## 9. Return statement

What is it?

`return` sends a value back to the code that called the function and ends that function's current execution.

How does it work?

JavaScript evaluates the expression after `return`, returns its value, and exits the function.

```

function add(a, b) {
    return a + b;
}

const result = add(5, 3);

console.log(result);

```

Output:

```
8
```

Why is the result 8?

`add(5, 3)` returns `8`, and that returned value is assigned to `result`.

Compare `return` and `console.log()`:

```
function first() {
    console.log(10);
}

function second() {
    return 10;
}

const a = first();  // prints 10
const b = second(); // returns 10

console.log(a); // undefined
console.log(b); // 10
```

`first()` prints `10` but does not return a value. `second()` returns `10` to its caller.

Interview Q: What happens if a function has no return statement?

Answer: It returns `undefined` by default. A bare `return;` also returns `undefined`.

# Part 2: How functions behave

## 10. Function scope and local variables

What is it?

A local variable is a variable declared inside a function. It is generally accessible only within that function.

How does it work?

When a function executes, its local variables are available within its scope. Code outside cannot directly access those local variables.

```
function test() {
    let message = "Hello";
    console.log(message);
}

test();

console.log(message);
```

Output:

```
Hello
ReferenceError: message is not defined
```

Why?

`message` was declared inside `test()`. The final `console.log()` is outside the function and cannot access that local variable.

Interview Q: What is function scope?

Answer: Function scope means a variable declared with `var` inside a function is accessible throughout that function, but not outside it. `let` and `const` follow block scope as well.

## 11. Lexical scope

What is it?

Lexical scope means a function can access variables from the scope in which it was defined.

How does it work?

JavaScript looks for a variable in the current scope. If it is not found, it searches outer scopes.

```
const name = "Vibha";

function outer() {
    const city = "Pune";

    function inner() {
        console.log(name);
        console.log(city);
    }

    inner();
}

outer();
```

Output:

```
Vibha
Pune
```

Why?

`inner()` can access `city` from `outer()` and `name` from the global scope because of where `inner()` was defined.

Interview Q: What is lexical scope?

Answer: It is the rule that determines variable accessibility based on where functions and blocks are written in the source code, not where a function is called.

## 12. Nested functions

What is it?

A nested function is a function defined inside another function.

How does it work?

The inner function can access variables from its outer function.

```
function outer() {
    function inner() {
        console.log("Inside inner");
    }

    inner();
}

outer();
```

Output:

```
Inside inner
```

Why?

`inner()` is called from inside `outer()`. The inner function is available in the scope where it was defined.

Interview Q: Can an inner function access the outer function's variables?

Answer: Yes. JavaScript's lexical scoping allows inner functions to access variables from their enclosing scopes.

## 13. Hoisting in functions

What is it?

Hoisting describes how JavaScript handles declarations during the setup of a scope before executing the code.

How does it work?

Function declarations are initialized with their function definitions, while function expressions depend on the initialization rules of their variables.

```
sayHello();

function sayHello() {
    console.log("Hello");
}
```

Output:

```
Hello
```

Compare this with:

```
sayHello();

const sayHello = function () {
    console.log("Hello");
};
```

Output: `ReferenceError`.

Why?

The function declaration can be called before its line. In the second example, `sayHello` is a `const` variable that is not initialized until its declaration executes.

Interview Q: Are all functions hoisted in the same way?

Answer: No. Function declarations behave differently from function expressions and arrow functions assigned to variables.

## 14. Callback function

What is it?

A callback is a function passed to another function as an argument.

How does it work?

The receiving function decides when to call the callback. It may call it immediately or later.

```
function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function welcome() {
    console.log("Welcome!");
}

greet("Vibha", welcome);
```

Output:

```
Hello Vibha
Welcome!
```

Why do we pass `welcome` instead of `welcome()`?

- `welcome` passes the function itself.
- `welcome()` executes the function immediately and passes its return value.

Interview Q: Where are callbacks used?

Answer: Callbacks are used in array methods such as `map()`, event handlers, timers, and asynchronous operations.

## 15. Higher-order function

What is it?

A higher-order function is a function that accepts another function as an argument, returns a function, or does both.

How does it work?

It receives a function as a value and invokes it when needed.

```
function calculate(a, b, operation) {
    return operation(a, b);
}

function add(a, b) {
    return a + b;
}

console.log(calculate(5, 3, add));
```

Output:

```
8
```

Why?

`add` is passed into `calculate`. Inside `calculate`, `operation(5, 3)` calls `add(5, 3)`.

Interview Q: What is the difference between a callback and a higher-order function?

Answer: A callback is the function being passed. A higher-order function is the function that receives or returns a function. These are related concepts, but they describe different roles.

## 16. Closure

What is it?

A closure happens when a function retains access to variables from its outer lexical scope, even after the outer function has finished executing.

How does it work?

The inner function retains access to the lexical environment it needs.

```
function outer() {
    let count = 0;

    return function inner() {
        count++;
        return count;
    };
}

const counter = outer();

console.log(counter());
console.log(counter());
console.log(counter());
```

Output:

```
1
2
3
```

Why does the count continue increasing?

`outer()` runs once and returns `inner`. The returned function still has access to the same `count` variable. Each call increments that retained variable.

Interview Q: Why are closures useful?

Answer: Closures help preserve state, create private variables, build function factories, and implement callbacks that need access to earlier variables.

## 17. Immediately Invoked Function Expression (IIFE)

What is it?

An IIFE is a function expression that executes immediately after it is created.

How does it work?

The parentheses make the function an expression, and the final `()` invokes it.

```
(function () {
    const message = "Executed immediately";
    console.log(message);
})();
```

Output:

```
Executed immediately
```

Why use it?

Traditionally, IIFEs were used to create a private scope and avoid polluting the global scope. Modern JavaScript also has modules and block-scoped variables.

Interview Q: Does an IIFE need a name?

Answer: No. An IIFE can be anonymous or named, but the common pattern is an anonymous function expression followed by `()`.

## 18. Recursion

What is it?

Recursion is when a function calls itself.

How does it work?

A recursive function needs:

- A base case that stops the recursion.
- A recursive call that moves toward the base case.

```
function countdown(n) {
    if (n === 0) {
        return;
    }

    console.log(n);
    countdown(n - 1);
}

countdown(3);
```

Output:

```
3
2
1
```

Why does it stop?

Each call decreases `n`. When `n` reaches `0`, the base case returns without calling the function again.

Without a suitable base case, recursion may continue until JavaScript throws a stack overflow error.

Interview Q: What is the difference between recursion and iteration?

Answer: Recursion repeats work through function calls; iteration repeats work using loops such as `for` and `while`. Both can solve many of the same problems, but recursion uses call-stack space.

## 19. Rest parameters

What is it?

A rest parameter collects remaining arguments into an array.

How does it work?

The `...` syntax gathers all arguments not already assigned to earlier parameters.

```
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(10, 20, 30));
```

Output:

```
60
```

Why does it return 60?

`numbers` becomes `[10, 20, 30]`. The `reduce()` method adds the values together.

Interview Q: What is the difference between rest and spread?

Answer: Rest collects multiple values into one array or object pattern. Spread expands an iterable or object into individual elements or properties. The same `...` syntax has different roles depending on where it is used.

## 20. The `arguments` object

What is it?

In a traditional function, `arguments` is an array-like object containing the arguments passed to that call.

How does it work?

A normal function can access the supplied arguments through `arguments`, even if it has no declared parameters.

```
function show() {
    console.log(arguments[0]);
    console.log(arguments.length);
}

show("Hello", "World");
```

Output:

```
Hello
2
```

Why is `arguments` not a regular array?

It has indexed values and a `length` property, but it does not have all regular array methods directly.

Arrow functions do not have their own `arguments` object.

Interview Q: What is preferred in modern JavaScript when handling multiple arguments?

Answer: Rest parameters, such as `function show(...items)`, because they provide a real array and make the intent clearer.

# Part 3: Important function behavior and interview traps

## 21. `this` in a normal function

What is it?

`this` is a keyword that refers to a value determined by how a function is called, with some exceptions such as arrow functions.

How does it work?

In a method call, `this` normally refers to the object before the dot.

```
const user = {
    name: "Vibha",

    greet: function () {
        console.log(this.name);
    }
};

user.greet();
```

Output:

```
Vibha
```

Why?

The call is `user.greet()`, so `this` refers to `user` in this method call.

If you extract the function into a separate variable and call it without the object, `this` may behave differently.

Interview Q: Does `this` always refer to the object where the function is written?

Answer: No. For a normal function, `this` generally depends on the call site. A method call, a plain function call, and a constructor call can produce different `this` values.

## 22. `this` in an arrow function

What is it?

An arrow function does not create its own `this`. It uses `this` from its surrounding lexical scope.

How does it work?

JavaScript resolves `this` based on where the arrow function was created, rather than giving it a new `this` based on the call.

```
const user = {
    name: "Vibha",

    greet: () => {
        console.log(this.name);
    }
};

user.greet();
```

Output: The result depends on the surrounding `this`; in a typical browser script where the outer `this` is the global object and it has no `name`, it prints `undefined`.

Why doesn't it print Vibha?

The arrow function does not get `this` from `user.greet()`. It inherits `this` from outside the object.

Interview Q: When should you avoid an arrow function as an object method?

Answer: Avoid it when you need `this` to refer to the object through a method call. Use a normal method or function instead.

## 23. `call()`, `apply()`, and `bind()`

What are they?

These are function methods that let you specify the `this` value for a normal function.

How do they work?

- `call()` invokes the function immediately with arguments supplied individually.
- `apply()` invokes it immediately with arguments supplied as an array or array-like value.
- `bind()` returns a new function with `this` set to the specified value.

```
function greet(city) {
    console.log(this.name + " from " + city);
}

const user = { name: "Vibha" };

greet.call(user, "Pune");
greet.apply(user, ["Mumbai"]);

const boundGreet = greet.bind(user, "Delhi");
boundGreet();
```

Output:

```
Vibha from Pune
Vibha from Mumbai
Vibha from Delhi
```

Why are the outputs different?

Each method supplies `user` as `this`, but the arguments are passed differently. `bind()` creates a new function without calling it immediately.

Interview Q: Which method executes the function immediately?

Answer: `call()` and `apply()`. `bind()` returns a new function for later execution.

Note: These methods cannot change the lexical `this` of an arrow function.

## 24. Pure functions

What is it?

A pure function returns the same output for the same inputs and does not cause side effects outside itself.

How does it work?

It calculates a result using its inputs without changing external state.

```
function add(a, b) {
    return a + b;
}

console.log(add(2, 3));
console.log(add(2, 3));
```

Output:

```
5
5
```

Why is it pure?

The output depends only on `a` and `b`, and the function does not change external variables or perform external actions.

Contrast with:

```
let total = 0;

function addToTotal(value) {
    total += value;
    return total;
}
```

This function changes external state, so it is not pure.

Interview Q: Why are pure functions useful in React?

Answer: They are easier to test, predict, debug, and reason about. Predictable calculations are especially useful in rendering and state updates.

## 25. Function as an object method

What is it?

A method is a function associated with an object.

How does it work?

The function is stored as an object property and can be called using that object.

```
const calculator = {
    add(a, b) {
        return a + b;
    }
};

console.log(calculator.add(4, 6));
```

Output:

```
10
```

Why call it a method?

Because `add` is a function defined as a property of `calculator`.

Interview Q: Is every function a method?

Answer: No. A function is called a method when it is used as a property of an object. The same function can also be stored in a variable and called independently.

## 26. Constructor functions

What is it?

A constructor function is a function conventionally used with `new` to create and initialize objects.

How does it work?

When a normal constructor function is called with `new`, JavaScript creates a new object, sets up its prototype relationship, binds `this` to the new object, and returns that object unless the function explicitly returns another object.

```
function User(name) {
    this.name = name;
}

const user1 = new User("Vibha");
const user2 = new User("Priya");

console.log(user1.name);
console.log(user2.name);
```

Output:

```
Vibha
Priya
```

Why do the objects have different names?

Each `new User(...)` call creates a separate object, and `this.name` sets the name on that new object.

Interview Q: What happens if you forget `new`?

Answer: The function is called like a regular function instead of a constructor. Depending on the function body and execution mode, `this` may be `undefined` or may refer to a global object. In strict mode, assigning `this.name` when `this` is `undefined` throws a `TypeError`.

In modern JavaScript, classes are often preferred when defining object types.

## 27. Function returning another function

What is it?

A function can return another function as its result.

How does it work?

The outer function creates or returns a function, which can be stored and called later.

```
function multiplier(factor) {
    return function (number) {
        return number * factor;
    };
}

const double = multiplier(2);

console.log(double(5));
```

Output:

```
10
```

Why does `double()` remember `factor`?

The returned inner function retains access to the outer function's lexical environment through a closure.

Interview Q: Where is this pattern useful?

Answer: It is useful for closures, function factories, reusable configuration, and creating specialized functions from general ones.

## 28. Immediately returning versus storing a result

What is it?

A function call produces a return value, which can be used directly or stored in a variable.

How does it work?

JavaScript evaluates the call first and then uses the returned value in the surrounding expression.

```
function getNumber() {
    return 10;
}

console.log(getNumber() + 5);

const number = getNumber();
console.log(number);
```

Output:

```
15
10
```

Why?

`getNumber()` evaluates to `10`. JavaScript uses that value in the addition or assigns it to `number`.

Interview Q: Can a function call be used inside another expression?

Answer: Yes. A function call can be used anywhere its returned value is valid, including arithmetic expressions, assignments, conditions, and arguments to other functions.

# Part 4: Advanced functions used in modern JavaScript

## 29. `map()`, `filter()`, and `reduce()` callbacks

These are array methods that commonly take callback functions.

### `map()`

What is it? Creates a new array by transforming each element.

```
const numbers = [1, 2, 3];

const result = numbers.map(n => n * 2);

console.log(result); // [2, 4, 6]
```

Why? The callback runs for each element and returns the corresponding transformed value.

### `filter()`

What is it? Creates a new array containing elements that pass a condition.

```
const numbers = [1, 2, 3, 4];

const result = numbers.filter(n => n > 2);

console.log(result); // [3, 4]
```

Why? The callback returns a truthy value for `3` and `4`, so only those values are kept.

### `reduce()`

What is it? Combines array elements into a single accumulated result.

```
const numbers = [1, 2, 3, 4];

const total = numbers.reduce((sum, n) => sum + n, 0);

console.log(total); // 10
```

Why? The accumulator starts at `0` and is updated for each element.

Interview Q: What is the difference between these methods?

Answer: `map()` transforms elements, `filter()` selects elements, and `reduce()` combines elements into one accumulated result. They generally return new results rather than modifying the original array.

## 30. Synchronous functions

What is it?

A synchronous function runs its code in the normal execution flow, and the caller continues after the function returns.

How does it work?

JavaScript executes the function's statements in order before continuing with the next statement in the caller.

```
function first() {
    console.log("First");
}

function second() {
    console.log("Second");
}

first();
second();
```

Output:

```
First
Second
```

Why?

The first function finishes before the next function call begins.

Interview Q: Are all JavaScript functions synchronous?

Answer: No. A regular function's own execution is synchronous, but it can start asynchronous work, such as a timer or network request, and return before that work completes.

## 31. Asynchronous functions and `async/await`

What is it?

An `async` function always returns a Promise. `await` lets the function pause its own progress until a Promise settles, without blocking the entire JavaScript thread.

How does it work?

JavaScript runs the function until it reaches an `await` whose result is pending. The function resumes later when the awaited Promise settles.

```
async function getData() {
    return "Data received";
}

getData().then(result => console.log(result));
```

Output:

```
Data received
```

Why does `.then()` work?

Even though `getData()` returns a string inside its body, JavaScript wraps the result in a fulfilled Promise. `.then()` handles that Promise's result.

Interview Q: What happens if an error is thrown inside an `async` function?

Answer: The Promise returned by that function becomes rejected. The error can be handled using `try/catch` inside the function or `.catch()` on the returned Promise.

## 32. Generator functions

What is it?

A generator function can pause and resume its execution, producing a sequence of values.

How does it work?

It is defined using `function*` and uses `yield` to produce a value and pause.

```
function* numbers() {
    yield 1;
    yield 2;
    yield 3;
}

const iterator = numbers();

console.log(iterator.next());
console.log(iterator.next());
```

Output:

```
{ value: 1, done: false }
{ value: 2, done: false }
```

Why does the first call not execute the entire function?

Calling a generator function creates an iterator. Each `next()` call runs until the next `yield` or until the function finishes.

Interview Q: How is a generator different from a normal function?

Answer: A normal function runs to completion or returns. A generator can pause at `yield` and resume later using its iterator.

# Part 5: Important interview concepts people often forget

## 33. First-class functions

What is it?

JavaScript treats functions as first-class values. This means functions can be stored in variables, passed as arguments, and returned from other functions.

How does it work?

```
function greet() {
    return "Hello";
}

const myFunction = greet;

console.log(myFunction());
```

Output:

```
Hello
```

Why?

`greet` passes the function itself to `myFunction`. It does not execute it at the time of assignment.

Interview Q: What does it mean that functions are first-class citizens?

Answer: Functions can be handled like other values: assigned to variables, passed to other functions, and returned from functions.

## 34. Does JavaScript support function overloading?

What is it?

Traditional function overloading means defining multiple functions with the same name but different parameter lists, as in some other programming languages.

How does it work in JavaScript?

JavaScript does not support traditional function overloading by parameter signature. A later function declaration with the same name in the same scope can replace the earlier declaration.

```
function add(a, b) {
    return a + b;
}

function add(a, b, c) {
    return a + b + c;
}

console.log(add(2, 3));
console.log(add(2, 3, 4));
```

Output:

```
NaN
9
```

Why does the first call return `NaN`?

The second declaration replaces the first. It expects three parameters, so the first call leaves `c` as `undefined`, and `2 + 3 + undefined` evaluates to `NaN`.

You can achieve similar behavior using default parameters, rest parameters, or conditional logic.

Interview Q: How can you handle different numbers of arguments in JavaScript?

Answer: Use default parameters, rest parameters, or explicit checks on the number and types of arguments.

## 35. Passing objects and primitives to functions

What is it?

JavaScript passes arguments by value. When an argument contains an object reference, the function receives a copy of that reference.

How does it work?

```
function changeNumber(x) {
    x = 20;
}

let number = 10;
changeNumber(number);

console.log(number);
```

Output:

```
10
```

Now consider an object:

```
function changeName(user) {
    user.name = "Priya";
}

const person = { name: "Vibha" };

changeName(person);

console.log(person.name);
```

Output:

```
Priya
```

Why?

For the number, `x` is a separate local parameter. Reassigning it doesn't change `number`.

For the object, the parameter contains a copy of the reference to the same object. Mutating that object is visible through the original reference.

However, reassigning `user` itself to a different object would not change `person`.

Interview Q: Are objects passed by reference in JavaScript?

Answer: Technically, JavaScript passes all arguments by value. For objects, the value being copied is a reference to the object, so mutations can be observed by the caller.

# Part 6: Quick revision — questions you must be able to answer

Use this list to check whether you've understood the topic.

Try answering aloud first, then reveal the answer.

1\. What is a function?

2\. What is the difference between parameters and arguments?

3\. What does return do?

4\. What happens when there is no return statement?

5\. What is hoisting?

6\. What is a callback?

7\. What is a higher-order function?

8\. What is a closure?

9\. What is recursion?

10\. What is an arrow function's main difference regarding this?

11\. What is an IIFE?

12\. What does bind() do?

13\. What does async guarantee?

14\. What is a pure function?

15\. Does JavaScript support traditional function overloading?Reveal all answers

# Part 7: How to make sure you don't forget

Don't study all these concepts repeatedly in one sitting. Use active recall: close the notes and try to explain each concept from memory.

## Your 5-day function revision plan

Day 1

Basics

Declarations, expressions, arrow functions, parameters, arguments and return.

Day 2

Scope and execution

Local scope, lexical scope, hoisting, nested functions and closures.

Day 3

Function patterns

Callbacks, higher-order functions, IIFEs, recursion, rest parameters and arguments.

Day 4

Advanced behavior

this, call/apply/bind, pure functions, constructors and returning functions.

Day 5

Async and interview test

map/filter/reduce, async/await, generators and 20 mixed output questions.

Use this checklist after every topic:

- I can define it in simple English.
- I can explain how it works.
- I can write an example without copying.
- I can predict the output and explain why.
- I can answer follow-up interview questions.
- I can connect it to a real React or Node.js example.

The most important rule: Don't move on just because you've read a concept. Move on when you can explain it without looking at your notes and solve a new example yourself.

For your JavaScript interviews, prioritize `return`, scope, hoisting, closures, callbacks, higher-order functions, arrow functions, `this`, and asynchronous functions. These concepts connect to many other JavaScript topics and are especially valuable for React and full-stack development.