# 3. Functions

A function is a **reusable block of code** that performs a task.

```javascript
function add(a, b) {
    return a + b;
}

console.log(add(2, 3)); // 5
```

### Important function concepts

Remember:

**Parameters** → variables defined in function

```javascript
function add(a, b) {
```

`a` and `b` are parameters.

**Arguments** → actual values passed

```javascript
add(2, 3);
```

`2` and `3` are arguments.

---

### Return

```javascript
function add(a, b) {
    return a + b;
}
```

`return` sends a value back to the caller.

Without `return`:

```javascript
function add(a, b) {
    a + b;
}

console.log(add(2, 3));
```

Output:

```text
undefined
```

---

## Function Declaration vs Function Expression

### Function Declaration

```javascript
function greet() {
    console.log("Hello");
}
```

Can generally be called before its declaration because the function declaration is hoisted.

### Function Expression

```javascript
const greet = function() {
    console.log("Hello");
};
```

The function is assigned to a variable.

Calling it before initialization:

```javascript
greet(); // ❌ ReferenceError

const greet = function() {};
```

---

# 4. Arrow Functions

Arrow functions provide a **shorter syntax for writing functions**.

### Normal function

```javascript
function add(a, b) {
    return a + b;
}
```

### Arrow function

```javascript
const add = (a, b) => {
    return a + b;
};
```

### Short version

```javascript
const add = (a, b) => a + b;
```

This is called **implicit return**.

---

## Single parameter

You can omit parentheses with one parameter:

```javascript
const square = x => x * x;
```

With multiple parameters:

```javascript
const add = (a, b) => a + b;
```

---

# ⭐ Most Important: Arrow Function and `this`

This is **very commonly asked**.

Arrow functions **do not have their own `this`**.

They inherit `this` from their surrounding lexical scope.

Normal function:

```javascript
const user = {
    name: "Vibha",

    greet: function() {
        console.log(this.name);
    }
};

user.greet(); // Vibha
```

Arrow function:

```javascript
const user = {
    name: "Vibha",

    greet: () => {
        console.log(this.name);
    }
};
```

The arrow function does **not** get `this` from `user`.

### Interview answer

> "Arrow functions don't have their own `this`; they inherit `this` from the surrounding lexical scope. Regular functions have their own `this` depending on how they are called."

---

# Arrow Functions — Other Important Differences

| Feature             | Regular Function | Arrow Function |
| ------------------- | ---------------- | -------------- |
| Short syntax        | ❌                | ✅              |
| Own `this`          | ✅                | ❌              |
| Own `arguments`     | ✅                | ❌              |
| Can use `new`       | ✅                | ❌              |
| Common in callbacks | Yes              | Very common    |

Example in React:

```javascript
users.map(user => user.name);
```

Arrow functions are very common in React callbacks such as:

```javascript
map()
filter()
forEach()
useEffect()
event handlers
```

---

# 🔥 1-Minute Interview Revision

### Scope

> **Scope = where a variable is accessible.**

```text
var       → function scope
let/const → block scope
```

> Inner scope can access outer scope.

---

### Hoisting

> JavaScript processes declarations before execution.

```javascript
console.log(x);
var x = 10;

// undefined
```

```javascript
console.log(x);
let x = 10;

// ReferenceError
```

> `let` and `const` → TDZ before initialization.

---

### Functions

> Functions are reusable blocks of code.

Remember:

```text
parameter → function definition
argument  → value passed to function
return    → sends value back
```

---

### Arrow Functions

> Shorter function syntax.

```javascript
const add = (a, b) => a + b;
```

Most important:

> **Arrow functions don't have their own `this`; they inherit it from the surrounding scope.**

### ⭐ Interview traps to remember

```javascript
console.log(a);
var a = 10;
// undefined
```

```javascript
console.log(a);
let a = 10;
// ReferenceError
```

```javascript
hello();

function hello() {
    console.log("Hello");
}
// works
```

```javascript
hello();

const hello = () => {
    console.log("Hello");
};
// ReferenceError
```

And the **big one for React interviews**:

> **Regular function → `this` depends on how it is called.**
> **Arrow function → `this` comes from the surrounding lexical scope.**
