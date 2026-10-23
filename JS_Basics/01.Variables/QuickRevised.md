# JavaScript — Interview Quick Revision

These are the **must-remember points** for interviews. Focus on **definition + difference + one example**.

---

## 1. `var`, `let`, `const`

### Quick comparison

| Feature            | `var`    | `let`  | `const` |
| ------------------ | -------- | ------ | ------- |
| Scope              | Function | Block  | Block   |
| Redeclaration      | ✅ Yes    | ❌ No   | ❌ No    |
| Reassignment       | ✅ Yes    | ✅ Yes  | ❌ No    |
| Hoisted            | ✅ Yes    | ✅ Yes* | ✅ Yes*  |
| Temporal Dead Zone | ❌ No     | ✅ Yes  | ✅ Yes   |

*`let` and `const` are hoisted but **cannot be accessed before declaration** because of the **Temporal Dead Zone (TDZ)**.

### Interview answer

> "`var` is function-scoped and can be redeclared and reassigned. `let` and `const` are block-scoped. `let` can be reassigned, while `const` cannot be reassigned. In modern JavaScript, I prefer `const` by default and use `let` when reassignment is required."

### Important example

```javascript
var x = 10;
var x = 20; // ✅

let y = 10;
y = 20;     // ✅
// let y = 30; ❌

const z = 10;
// z = 20;   ❌
```

### Common interview trap

```javascript
const user = {
    name: "Vibha"
};

user.name = "John"; // ✅
```

`const` prevents **reassignment of the variable**, not mutation of the object.

---

# 2. JavaScript Data Types

JavaScript has **8 primitive data types**:

### Primitive

1. `String`
2. `Number`
3. `BigInt`
4. `Boolean`
5. `Undefined`
6. `Null`
7. `Symbol`

### Non-primitive

8. `Object`

Arrays and functions are technically objects.

```javascript
let name = "Vibha";       // String
let age = 25;             // Number
let isActive = true;      // Boolean
let value;                // Undefined
let data = null;          // Null
let user = { name: "A" }; // Object
let numbers = [1, 2, 3];  // Object/Array
```

### Interview answer

> "JavaScript has primitive and non-primitive data types. The primitive types are string, number, bigint, boolean, undefined, null, and symbol. Objects are non-primitive and include objects, arrays, and functions."

### Important interview trap

```javascript
typeof null
```

Output:

```javascript
"object"
```

This is a **historical JavaScript behavior/quirk**.

Also:

```javascript
typeof []
// "object"

typeof function() {}
// "function"
```

---

# 3. `==` vs `===`

This is **very important for interviews**.

### `==` — Loose Equality

It compares values **after type coercion when necessary**.

```javascript
5 == "5"
// true
```

JavaScript converts `"5"` to a number before comparison.

### `===` — Strict Equality

It checks **both value and type**.

```javascript
5 === "5"
// false
```

Because:

```text
5      → number
"5"    → string
```

### Easy rule

> `==` → value comparison with type conversion
> `===` → value + type comparison

### More examples

```javascript
0 == false
// true

0 === false
// false
```

```javascript
null == undefined
// true

null === undefined
// false
```

### Interview answer

> "`==` performs loose equality and can perform type coercion, while `===` performs strict equality and checks both value and data type. I generally prefer `===` because it gives more predictable behavior."

### Best practice

Use:

```javascript
===
```

unless you have a specific reason to use loose equality.

---

# 4. Truthy / Falsy

JavaScript converts values to Boolean when they are used in a Boolean context such as:

```javascript
if (value) {
    ...
}
```

## Falsy values

**Remember these:**

```javascript
false
0
-0
0n
""
null
undefined
NaN
```

These become:

```javascript
Boolean(value) // false
```

### Interview shortcut

> **Falsy = false, 0, -0, 0n, "", null, undefined, NaN**

Everything else is generally **truthy**.

---

## Truthy examples

```javascript
"hello"     // truthy
"0"         // truthy
[]          // truthy
{}          // truthy
42          // truthy
-1          // truthy
```

### Very common interview trap

```javascript
if ([]) {
    console.log("Yes");
}
```

Output:

```text
Yes
```

Why?

Because **arrays are objects and objects are truthy**, even when empty.

Similarly:

```javascript
if ({}) {
    console.log("Yes");
}
```

Output:

```text
Yes
```

---

# ⭐ 1-Minute Interview Revision

Before an interview, remember this:

### `var` / `let` / `const`

> `var` → function scoped
> `let` → block scoped + can reassign
> `const` → block scoped + cannot reassign

### Data Types

> Primitive → String, Number, BigInt, Boolean, Undefined, Null, Symbol
> Non-primitive → Object

### `==` / `===`

> `==` → loose equality + type coercion
> `===` → strict equality + type + value

### Truthy / Falsy

> Falsy → `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN`
> Everything else → generally truthy

### ⭐ Most likely interview traps

```javascript
typeof null
// "object"
```

```javascript
[] == false
// true
```

```javascript
[] === false
// false
```

```javascript
Boolean([])
// true
```

```javascript
Boolean({})
// true
```

```javascript
"5" == 5
// true
```

```javascript
"5" === 5
// false
```

=======================================================================================================================================

### `const` with an object

```javascript
const user = {
    name: "Vibha"
};

user.name = "John"; // ✅ Allowed
```

Why is this allowed?

Because you are **not changing the `user` variable**. You are changing a **property inside the object**.

Think of it like this:

```text
user ───────► { name: "Vibha" }
```

After:

```javascript
user.name = "John";
```

It becomes:

```text
user ───────► { name: "John" }
```

The `user` variable is still pointing to the **same object**.

---

### But this is NOT allowed

```javascript
const user = {
    name: "Vibha"
};

user = {
    name: "John"
}; // ❌ Error
```

Here you're trying to make `user` point to a **completely new object**.

So:

```text
const → cannot change the variable's reference
      → can still modify the object's contents
```

### Another example

```javascript
const user = {
    name: "Vibha",
    age: 25
};

user.age = 26;        // ✅
user.name = "John";   // ✅
user.city = "Pune";  // ✅
```

But:

```javascript
user = {};            // ❌
```

### ⭐ Interview answer

> **"Const prevents reassignment of the variable, but if the variable holds an object, the object's properties can still be mutated. To prevent object mutation, we can use `Object.freeze()`."**

Example:

```javascript
const user = {
    name: "Vibha"
};

Object.freeze(user);

user.name = "John"; // ❌ Cannot modify
```

**Remember:** `const` means **the reference cannot be changed**, not that the object itself is immutable.
=========================================================================================================================================


* **Redeclare** = create the **same variable again**
* **Reassign** = change the **value of an existing variable**

### `let`

```javascript
let age = 25;

// Reassign ✅
age = 30;

// Redeclare ❌
let age = 35;
```

* `age = 30` → **reassigning** → allowed
* `let age = 35` → **redeclaration** → not allowed in the same scope

### `const`

```javascript
const age = 25;

// Reassign ❌
age = 30;

// Redeclare ❌
const age = 35;
```

Both are **not allowed**.

### Quick memory trick

| Keyword | Redeclare | Reassign |
| ------- | --------- | -------- |
| `let`   | ❌         | ✅        |
| `const` | ❌         | ❌        |

**Interview line:**

> "`let` allows reassignment but not redeclaration in the same scope. `const` allows neither reassignment nor redeclaration."
=======================================================================================================================================


### `const` with an object

```javascript
const user = {
    name: "Vibha"
};

user.name = "John"; // ✅ Allowed
```

Why is this allowed?

Because you are **not changing the `user` variable**. You are changing a **property inside the object**.

Think of it like this:

```text
user ───────► { name: "Vibha" }
```

After:

```javascript
user.name = "John";
```

It becomes:

```text
user ───────► { name: "John" }
```

The `user` variable is still pointing to the **same object**.

---

### But this is NOT allowed

```javascript
const user = {
    name: "Vibha"
};

user = {
    name: "John"
}; // ❌ Error
```

Here you're trying to make `user` point to a **completely new object**.

So:

```text
const → cannot change the variable's reference
      → can still modify the object's contents
```

### Another example

```javascript
const user = {
    name: "Vibha",
    age: 25
};

user.age = 26;        // ✅
user.name = "John";   // ✅
user.city = "Pune";  // ✅
```

But:

```javascript
user = {};            // ❌
```

### ⭐ Interview answer

> **"Const prevents reassignment of the variable, but if the variable holds an object, the object's properties can still be mutated. To prevent object mutation, we can use `Object.freeze()`."**

Example:

```javascript
const user = {
    name: "Vibha"
};

Object.freeze(user);

user.name = "John"; // ❌ Cannot modify
```

**Remember:** `const` means **the reference cannot be changed**, not that the object itself is immutable.
======================================================================================================================================


### Q1 — `let` reassign

```javascript
let x = 10;
x = 20;

console.log(x);
```

What is the output?

A) `10`
B) `20`
C) Error
D) `undefined`

---

### Q2 — `let` redeclare

```javascript
let x = 10;
let x = 20;

console.log(x);
```

What happens?

A) `20`
B) `10`
C) `undefined`
D) Error

---

### Q3 — `const` object

```javascript
const user = {
    name: "Vibha"
};

user.name = "John";

console.log(user.name);
```

What is the output?

A) `Vibha`
B) `John`
C) Error
D) `undefined`

---

### Q4 — `const` reassignment

```javascript
const user = {
    name: "Vibha"
};

user = {
    name: "John"
};
```

What happens?

A) Object changes
B) `John` is printed
C) Error
D) `undefined`

---

### Q5 — `==` vs `===`

```javascript
console.log(5 == "5");
console.log(5 === "5");
```

What is the output?

A)

```text
true
true
```

B)

```text
false
false
```

C)

```text
true
false
```

D)

```text
false
true
```

---

### Q6 — `null` and `undefined`

```javascript
console.log(null == undefined);
console.log(null === undefined);
```

What is the output?

A)

```text
true
true
```

B)

```text
false
false
```

C)

```text
true
false
```

D)

```text
false
true
```

---

### Q7 — Truthy/Falsy

Which of these values is **falsy**?

A) `"0"`
B) `[]`
C) `{}`
D) `0`

---

### Q8 — Empty array

```javascript
if ([]) {
    console.log("Hello");
} else {
    console.log("Bye");
}
```

What is the output?

A) `Hello`
B) `Bye`
C) Error
D) Nothing

---

### Q9 — `typeof`

```javascript
console.log(typeof null);
```

What is the output?

A) `"null"`
B) `"undefined"`
C) `"object"`
D) `"boolean"`

---

### Q10 — Mixed tricky question

```javascript
let value = "";

if (value) {
    console.log("A");
} else {
    console.log("B");
}
```

What is the output?

A) `A`
B) `B`
C) Error
D) `undefined`

---

### 🎯 Your turn

Reply like this:

```text
1. B
2. D
3. ...
```

=======================================================================================================================================


| Q  | Your Answer | Correct | Key concept                                       |
| -- | ----------- | ------- | ------------------------------------------------- |
| 1  | B           | ✅       | `let` allows reassignment                         |
| 2  | D           | ✅       | `let` cannot be redeclared in same scope          |
| 3  | B           | ✅       | `const` object properties can be mutated          |
| 4  | C           | ✅       | `const` variable cannot be reassigned             |
| 5  | C           | ✅       | `==` converts types; `===` doesn't                |
| 6  | C           | ✅       | `null == undefined` → `true`, but `===` → `false` |
| 7  | D           | ✅       | `0` is falsy                                      |
| 8  | A           | ✅       | Empty arrays `[]` are truthy                      |
| 9  | C           | ✅       | `typeof null` is `"object"`                       |
| 10 | B           | ✅       | Empty string `""` is falsy                        |

### ⭐ What you should remember before interview

**`let`**

```javascript
let x = 10;
x = 20;       // ✅ Reassign
// let x = 30; // ❌ Redeclare
```

**`const`**

```javascript
const x = 10;
// x = 20;     // ❌ Reassign
// const x=30; // ❌ Redeclare
```

**But objects:**

```javascript
const user = { name: "Vibha" };

user.name = "John"; // ✅ Mutation
// user = {};       // ❌ Reassignment
```

**Equality:**

```javascript
5 == "5"    // true
5 === "5"   // false
```

**Falsy values:**

```text
false
0
-0
0n
""
null
undefined
NaN
```

**Important traps:**

```javascript
Boolean([])       // true
Boolean({})       // true
typeof null       // "object"
null == undefined // true
null === undefined // false