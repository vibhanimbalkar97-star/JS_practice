# 1. Scope

**Scope = where a variable can be accessed in your code.**

### Main types of scope

| Scope          | Meaning                              |
| -------------- | ------------------------------------ |
| Global scope   | Accessible throughout the program    |
| Function scope | Accessible inside the function       |
| Block scope    | Accessible inside `{ }`              |
| Module scope   | Available within a JavaScript module |

### `var` vs `let/const`

```javascript
if (true) {
    var a = 10;
    let b = 20;
}

console.log(a); // ✅ 10
console.log(b); // ❌ Error
```

Why?

* `var` → **function-scoped**
* `let` / `const` → **block-scoped**

### Interview answer

> "Scope determines where a variable can be accessed. `var` is function-scoped, while `let` and `const` are block-scoped."

---

## Lexical Scope

JavaScript uses **lexical scoping**, meaning an inner function can access variables from its outer scope.

```javascript
function outer() {
    let name = "Vibha";

    function inner() {
        console.log(name);
    }

    inner();
}
```

`inner()` can access `name` because it is defined inside the scope of `outer()`.

### ⭐ Remember

> **Inner scope can access outer scope, but outer scope cannot access variables created inside the inner scope.**

===========================================================================================================================

# JavaScript Scope — Interview Quick Revision

## 1. What is Scope?

Scope defines where a variable can be accessed in JavaScript.

```
let name = "Vibha";

function greet() {
    console.log(name); // Vibha
}

greet();
```

Here, `name` is declared in the global scope and can be accessed inside `greet()`.

There are 4 important scope concepts to understand:

- Global scope
- Function scope
- Block scope
- Lexical scope

## 2. Global Scope

A variable declared outside functions and blocks is generally accessible throughout its applicable global scope.

```
let age = 25;

function showAge() {
    console.log(age); // 25
}

showAge();
console.log(age); // 25
```

Remember: Global variables can be accessed from inner scopes, provided they aren't shadowed by another variable.

## 3. Function Scope

A variable declared inside a function is accessible within that function.

```
function test() {
    var x = 10;
    let y = 20;

    console.log(x); // 10
    console.log(y); // 20
}

test();

console.log(x); // ReferenceError
console.log(y); // ReferenceError
```

Both `var` and `let` are inaccessible outside this function because they are declared inside it.

Interview point: `var` is function-scoped, while `let` and `const` are block-scoped.

## 4. Block Scope

A block is code enclosed in curly braces `{ }`, such as an `if` statement or a `for` loop.

Variables declared with `let` and `const` inside a block are accessible only within that block.

```
if (true) {
    let a = 10;
    const b = 20;
    var c = 30;
}

console.log(a); // ReferenceError
console.log(b); // ReferenceError
console.log(c); // 30
```

Why?

- `let` → block-scoped
- `const` → block-scoped
- `var` → not block-scoped; it is function-scoped (or global-scoped when declared at the top level of a classic script)

Interview point: Prefer `let` and `const` when you want variables limited to a block.

## 5. Lexical Scope

Lexical scope means an inner function can access variables from its outer scope because of where the function is defined.

```
function outer() {
    let name = "Vibha";

    function inner() {
        console.log(name);
    }

    inner();
}

outer(); // Vibha
```

Here, `inner()` can access `name` from `outer()`.

But the reverse doesn't work:

```
function outer() {
    function inner() {
        let age = 25;
    }

    console.log(age); // ReferenceError
}
```

The outer function cannot access a variable declared inside the inner function.

Interview point: JavaScript uses lexical scoping, and this concept is the foundation of closures.

## 6. Scope vs Scope Types — Quick Comparison

| Concept        | Meaning                                             | Example                        |
| -------------- | --------------------------------------------------- | ------------------------------ |
| Global scope   | Accessible across the applicable global environment | `let x = 10` at top level      |
| Function scope | Accessible within a function                        | `var x = 10` inside a function |
| Block scope    | Accessible within `{ }`                             | `let x = 10` inside `if`       |
| Lexical scope  | Inner functions access enclosing variables          | Nested functions               |

## 7. Bonus: Scope Chaining

JavaScript searches for a variable in this order:

1. Current scope
2. Outer scope
3. Next enclosing scope
4. Global scope

```
let a = 10;

function outer() {
    let b = 20;

    function inner() {
        let c = 30;

        console.log(a, b, c); // 10 20 30
    }

    inner();
}

outer();
```

JavaScript looks outward until it finds each variable. If it cannot find a declared variable, it throws a `ReferenceError`.

## ⭐ 1-Minute Interview Revision

- Scope: Where a variable can be accessed.
- Global scope: Accessible throughout its applicable global environment.
- Function scope: Variables declared inside a function are limited to that function.
- Block scope: `let` and `const` are limited to their `{ }` block.
- Lexical scope: Inner functions can access variables from their enclosing scopes.
- Scope chaining: JavaScript searches from the current scope outward.
- Shadowing: An inner variable can use the same name as an outer variable, hiding the outer variable within that inner scope.

Most important interview trick: `var` ignores `if`-block boundaries, but `let` and `const` respect them.

=======================================================================================================================================

## JavaScript Scope Chaining

Scope chaining means JavaScript searches for a variable in the current scope first, then moves outward to the parent scopes until it finds the variable.

### Example

```
let a = 10; // Global scope

function outer() {
    let b = 20;

    function inner() {
        let c = 30;

        console.log(c);
        console.log(b);
        console.log(a);
    }

    inner();
}

outer();
```

Output:

```
30
20
10
```

### How does it work?

Global Scope

`a = 10`

Outer scope

Outer Function

`b = 20`

Can access `b` and global `a`

Inner Function

`c = 30`

Can access `c`, `b`, and `a`

When `console.log(b)` runs inside `inner()`:

1. JavaScript checks the inner scope. No `b` found.
2. It checks the outer function. Finds `b = 20`.
3. It returns `20` and stops searching.

### Tricky interview question

```
let x = 100;

function outer() {
    let x = 200;

    function inner() {
        let x = 300;
        console.log(x);
    }

    inner();
}

outer();
```

What is the output?

A) `100`

B) `200`

C) `300`

D) `ReferenceError`

Interview line to remember: JavaScript scope chaining searches from the innermost scope outward, and the nearest matching variable wins.
=========================================================================================================================================

✅ Correct! The output is `300`.

```
let x = 100;

function outer() {
    let x = 200;

    function inner() {
        let x = 300;
        console.log(x);
    }

    inner();
}

outer();
```

Why? JavaScript searches for `x` in this order:

1. Inner scope → finds `x = 300` ✅
2. Stops searching because the variable is found.

It doesn't check the outer or global scope.

Interview trick to remember: When variables have the same name in multiple scopes, JavaScript uses the nearest variable in the scope chain. This is called variable shadowing.
=======================================================================================================================================