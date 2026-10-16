# JavaScript Scope — 15 Tricky Interview Questions 🎯

These questions cover the most common interview patterns: global scope, function scope, block scope, lexical scope, scope chaining, shadowing, and `var` vs `let` vs `const`.

Try predicting the output without running the code. Choose one answer for each question.

0 of 15 answered

15 questions

### 1. Global vs local scope

let x = 10; 

function test() { 
    let x = 20; 
    console.log(x); //20
} 

test(); 

console.log(x); //10

A. 20, then 20

B. 10, then 10

C. 20, then 10

D. ReferenceError

### 2. var inside a block

if (true) 
{ 
    var a = 10; 
} 

console.log(a); //10

A. 10

B. undefined

C. ReferenceError

D. SyntaxError

### 3. let inside a block

if (true) 
{ 
    let a = 10; 
}

 console.log(a);

A. 10

B. undefined

C. ReferenceError

D. null

### 4. Function scope with var

function test() { 
    
    var x = 5; 
} 

test(); 
console.log(x); //referenceerror

A. 5

B. undefined

C. ReferenceError

D. null

### 5. Scope chaining

let a = 1; 
function outer() 
{ 
let b = 2; 
function inner() 
{ 
    console.log(a + b); 
} 
inner(); 
} 
outer();

A. 1

B. 2

C. 3

D. ReferenceError

### 6. Variable shadowing

let x = 10; 
function test() 
{ 
    let x = 20; 
{ 
    let x = 30; 
    console.log(x); //30
} 
console.log(x); //20
} 
test();

A. 10, then 20

B. 30, then 20

C. 30, then 10

D. 20, then 10

### 7. Lexical scope vs calling location

let name = "Global"; 
function show() 
{ 
    console.log(name); 
} 
function test() 
{ 
    let name = "Local"; 
show(); 
} 
test();

A. Global

B. Local

C. undefined

D. ReferenceError

### 8. var in a loop

for (var i = 0; i < 3; i++)
 {} 
 
console.log(i);

A. 0

B. 2

C. 3

D. ReferenceError

### 9. let in a loop

for (let i = 0; i < 3; i++) 
{} 

console.log(i);

A. 2

B. 3

C. undefined

D. ReferenceError

### 10. Inner function accessing outer variable

function outer() 
{ 
    let x = 10; 
    function inner() 
    { 
        console.log(x); 
    } 
    inner();
     } 
outer();

A. 10

B. undefined

C. ReferenceError

D. null

### 11. Outer function accessing inner variable

function outer() 
{ 
    function inner() 
    { 
        let x = 10; 
    } 
    inner(); 
console.log(x); 
} 
outer();

A. 10

B. undefined

C. ReferenceError

D. null

### 12. Nested var shadowing

var x = 10; 
function test() 
{ 
    console.log(x); 
    var x = 20; 
} 
test();

A. 10

B. 20

C. undefined

D. ReferenceError

### 13. Block shadowing with const

const x = 10; 
{ 
    const x = 20; 
    console.log(x); 
} 
console.log(x);

A. 10, then 10

B. 20, then 20

C. 20, then 10

D. SyntaxError

### 14. Same-scope let redeclaration

let x = 10; 
let x = 20;
console.log(x);

A. 10

B. 20

C. undefined

D. SyntaxError

### 15. Scope lookup with three levels

let x = 1; 
function outer() 
{ 
    let x = 2; 
    function inner() 
    { 
        console.log(x); 
    } 
        inner(); 
} 
    outer();

A. 1

B. 2

C. undefined

D. ReferenceError

Check my answers

## Final revision: 5 rules to remember

1. Global scope: Variables declared at the top level can be accessed from nested scopes, subject to module and environment rules.
2. Function scope: `var` declared inside a function belongs to that function.
3. Block scope: `let` and `const` belong to their `{ }` block.
4. Lexical scope: A function resolves variables based on where it was defined, not where it was called.
5. Scope chaining and shadowing: JavaScript searches from the current scope outward; the nearest matching variable wins.
=====================================================================================================================================================

Great effort! Let's check your 15 JavaScript scope answers and focus on the tricky patterns.

YOUR SCORE

# 13 / 15

You got 13 correct out of 15. Good work!

## Answer review

| Q  | Your answer | Correct answer | Result |
| -- | ----------- | -------------- | ------ |
| 1  | C           | C              | ✅      |
| 2  | A           | A              | ✅      |
| 3  | C           | C              | ✅      |
| 4  | C           | C              | ✅      |
| 5  | C           | C              | ✅      |
| 6  | B           | B              | ✅      |
| 7  | D           | A              | ❌      |
| 8  | A           | C              | ❌      |
| 9  | D           | D              | ✅      |
| 10 | A           | A              | ✅      |
| 11 | C           | C              | ✅      |
| 12 | C           | C              | ✅      |
| 13 | C           | C              | ✅      |
| 14 | D           | D              | ✅      |
| 15 | B           | B              | ✅      |

## Understand your 2 mistakes

### Q7. Lexical scope vs calling location

```
let name = "Global";

function show() {
    console.log(name);
}

function test() {
    let name = "Local";
    show();
}

test();
```

Correct answer: A) `"Global"`

Why? `show()` was defined in the global scope, so it looks for `name` in the scope where it was defined. It does not use `test()`'s local scope just because `test()` calls it.

Remember: Lexical scope depends on where a function is defined, not where it is called.

### Q8. `var` in a loop

```
for (var i = 0; i < 3; i++) {}

console.log(i);
```

Correct answer: C) `3`

Why? `var` is not block-scoped. The loop increments `i` to `3`, then stops when `i < 3` becomes false. The variable remains accessible after the loop.

Compare:

```
for (let i = 0; i < 3; i++) {}

console.log(i); // ReferenceError
```

Here, `let` is scoped to the loop.

## Final interview revision

- Scope chaining: Search current scope, then outer scopes.
- Shadowing: The nearest variable with the same name wins.
- Lexical scope: Variable access depends on where the function is defined.
- `var`: Function-scoped, not block-scoped.
- `let` / `const`: Block-scoped.

Your scope fundamentals are looking strong. Focus especially on lexical scope and `var` inside loops, then move on to closures—closures build directly on these concepts.

You got 5/5 correct! 🎉 Excellent work.

## Answer review

1\. Lexical Scope — B. `Hello`

```
let message = "Hello";
function greet() {
  console.log(message);
}
greet();
```

`greet()` can access `message` because the variable is available in its outer scope.

2\. Lexical Scope — B. `Global`

`showName()` was defined outside `test()`. It uses the `name` from where it was defined, not the local `name` inside `test()`.

Remember: Lexical scope depends on where a function is defined, not where it is called.

3\. `var` in a loop — B. `0, 1, 2, 3`

The loop prints `0`, `1`, and `2`. After the loop, `i` is `3`, so the final `console.log(i)` prints `3`.

`var` is not limited to the loop block.

4\. `var` in a loop — B. `Final: 2`

The loop runs with `i = 0` and `i = 1`. Then `i` becomes `2`, the condition `i < 2` becomes false, and the loop stops.

5\. Hoisting + Scope — B. `undefined`, `10`

Inside `test()`, the local `var x` is hoisted and initialized as `undefined`. It shadows the global `x`.

After `test()` finishes, the global `x` remains `10`.

## Key interview takeaways

- Lexical scope: A function looks for variables based on where it was defined.
- `var`: Function-scoped, not block-scoped.
- Loop behavior: A `var` loop variable remains accessible after the loop.
- Hoisting: A local `var` declaration is initialized to `undefined` before its assignment executes.

Next, practise the difference between `var` and `let` inside loops, especially with `setTimeout`—a common JavaScript interview question.