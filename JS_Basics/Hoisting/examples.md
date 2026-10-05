Absolutely. For interviews, **hoisting questions are usually code-output questions**. The interviewer wants to check whether you understand `var`, `let`, `const`, function declarations, and function expressions.

# JavaScript Hoisting — 10 Interview Questions

Try to predict the output **before looking at the answer**.

---

### Q1. `var` hoisting — very common

```javascript
console.log(a);

var a = 10;
```

What is the output?

A) `10`
B) `undefined`
C) `ReferenceError`
D) `null`

---

### Q2. `let` and TDZ — very common

```javascript
console.log(a);

let a = 10;
```

What happens?

A) `undefined`
B) `10`
C) `ReferenceError`
D) `null`

---

### Q3. `const`

```javascript
console.log(a);

const a = 10;
```

What happens?

A) `undefined`
B) `10`
C) `ReferenceError`
D) `null`

---

### Q4. `var` with reassignment

```javascript
var a = 10;

console.log(a);

var a = 20;

console.log(a);
```

What is the output?

A)

```text
10
20
```

B)

```text
20
20
```

C) Error

D)

```text
undefined
20
```

---

### Q5. Function declaration — very common

```javascript
sayHello();

function sayHello() {
    console.log("Hello");
}
```

What is the output?

A) `Hello`
B) `undefined`
C) `ReferenceError`
D) `TypeError`

---

### Q6. Function + `var`

```javascript
console.log(a);

var a = function() {
    console.log("Hello");
};
```

What is the output?

A) `Hello`
B) `undefined`
C) `function`
D) `ReferenceError`

---

### Q7. Function expression called before initialization

```javascript
sayHello();

var sayHello = function() {
    console.log("Hello");
};
```

What happens?

A) `Hello`
B) `undefined`
C) `TypeError`
D) `ReferenceError`

---

### Q8. `let` inside block

```javascript
let a = 10;

if (true) {
    console.log(a);
    let a = 20;
}
```

What happens?

A) `10`
B) `20`
C) `undefined`
D) `ReferenceError`

---

### Q9. Tricky `var` inside function

```javascript
var a = 10;

function test() {
    console.log(a);

    var a = 20;
}

test();
```

What is the output?

A) `10`
B) `20`
C) `undefined`
D) `ReferenceError`

---

### Q10. Most important tricky one 🔥

```javascript
var a = 10;

function test() {
    console.log(a);

    if (true) {
        var a = 20;
    }

    console.log(a);
}

test();
```

What is the output?

A)

```text
10
20
```

B)

```text
undefined
20
```

C)

```text
20
20
```

D) `ReferenceError`

---

## ⭐ Bonus Question — Interviewer may ask this

What is the difference between these two?

### Function declaration

```javascript
sayHello();

function sayHello() {
    console.log("Hello");
}
```

### Function expression

```javascript
sayHello();

var sayHello = function() {
    console.log("Hello");
};
```

Why does the first one work but the second one fail?

---

### Your turn 🎯

Reply only with:

```text
1. B
2. C
3. ...
```

Good attempt 👍 You got **6/10 correct**. The mistakes are mainly around **function scope + hoisting**, which are exactly the tricky interview areas.

| Q  | Your answer | Correct | Result |
| -- | ----------- | ------- | ------ |
| 1  | B           | **B**   | ✅      |
| 2  | C           | **C**   | ✅      |
| 3  | C           | **C**   | ✅      |
| 4  | A           | **A**   | ✅      |
| 5  | A           | **A**   | ✅      |
| 6  | B           | **B**   | ✅      |
| 7  | C           | **C**   | ✅      |
| 8  | D           | **D**   | ✅      |
| 9  | A           | **C**   | ❌      |
| 10 | A           | **B**   | ❌      |

Actually, **Q1–Q8 are all correct — 8/10.** 🎯

---

# Q9 — Important Tricky Question

```javascript
var a = 10;

function test() {
    console.log(a);

    var a = 20;
}

test();
```

You answered **A) 10**, but correct is:

**C) `undefined`**

### Why?

Because `var a` inside the function is **function-scoped** and gets hoisted to the top of `test()`.

Conceptually JavaScript sees:

```javascript
var a = 10;

function test() {
    var a;          // hoisted

    console.log(a); // undefined

    a = 20;
}
```

So the local `a` **shadows** the global `a`.

### ⭐ Remember

> If a `var` variable is declared anywhere inside a function, that declaration is function-scoped and is hoisted to the top of that function.

---

# Q10 — Very Important

```javascript
var a = 10;

function test() {
    console.log(a);

    if (true) {
        var a = 20;
    }

    console.log(a);
}

test();
```

You answered:

```text
10
20
```

Correct:

```text
undefined
20
```

### Why?

Again, `var` is **function-scoped**, not block-scoped.

This:

```javascript
if (true) {
    var a = 20;
}
```

does **NOT** create a separate `a` for the `if` block.

Conceptually:

```javascript
function test() {
    var a;              // hoisted

    console.log(a);     // undefined

    if (true) {
        a = 20;
    }

    console.log(a);     // 20
}
```

---

# 🔥 The Most Important Hoisting Rule

When you see:

```javascript
function test() {
    console.log(x);

    var x = 100;
}
```

Immediately think:

```javascript
function test() {
    var x;
    console.log(x);
    x = 100;
}
```

Therefore:

```text
undefined
```

---

# 🧠 One Rule That Will Save You in Interviews

### `var`

```text
var → function scoped
     → declaration hoisted
     → initialized as undefined
```

### `let` / `const`

```text
let/const → block scoped
          → hoisted
          → TDZ
          → accessing before declaration = ReferenceError
```

### Function declaration

```javascript
hello();

function hello() {
    console.log("Hello");
}
```

✅ Works because the **function declaration is hoisted with its definition**.

### Function expression

```javascript
hello();

var hello = function() {};
```

❌ `TypeError: hello is not a function`

Because:

```javascript
var hello;  // hoisted

hello();    // trying to call undefined

hello = function() {};
```

---

## ⭐ Interview Cheat Sheet

| Code                                | Result           |
| ----------------------------------- | ---------------- |
| `console.log(x); var x = 10`        | `undefined`      |
| `console.log(x); let x = 10`        | `ReferenceError` |
| `console.log(x); const x = 10`      | `ReferenceError` |
| `hello(); function hello(){}`       | ✅ Works          |
| `hello(); var hello = function(){}` | ❌ TypeError      |
| `var` inside `if`                   | Function-scoped  |
| `let` inside `if`                   | Block-scoped     |

**Your main weak point to revise:** `var` + **function scope**. Once that is clear, Q9/Q10 become easy.
