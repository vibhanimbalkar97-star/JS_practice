# JavaScript — Scope, Hoisting & Functions

### Interview Quick Revision

These are **very commonly asked** in JavaScript/React interviews. Remember the definition, key difference, and one example.

# 2. Hoisting

**Hoisting = JavaScript processes declarations before executing the code.**

But **variables are not simply moved to the top as normal values**. Different declarations behave differently.

---

### `var`

```javascript
console.log(x);

var x = 10;
```

Output:

```text
undefined
```

Conceptually:

```javascript
var x;
console.log(x); // undefined
x = 10;
```

---

### `let` and `const`

```javascript
console.log(x);

let x = 10;
```

❌ `ReferenceError`

Same with `const`.

They are hoisted, but they remain in the **Temporal Dead Zone (TDZ)** until their declaration is reached.

### Interview answer

> "Hoisting is JavaScript's behavior of processing declarations before code execution. `var` is initialized with `undefined`, while `let` and `const` are hoisted but remain in the Temporal Dead Zone until initialization."

---

### Function declaration hoisting

This works:

```javascript
sayHello();

function sayHello() {
    console.log("Hello");
}
```

Output:

```text
Hello
```

Function declarations are hoisted with their function definition.

---

### ⭐ Important difference

```javascript
sayHello(); // ❌ Error

const sayHello = () => {
    console.log("Hello");
};
```

Arrow functions assigned to `const` behave like variables. They **cannot be called before initialization**.

---

