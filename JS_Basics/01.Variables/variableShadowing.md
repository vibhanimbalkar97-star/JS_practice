## What is Variable Shadowing in JavaScript?

English: Variable shadowing happens when a variable declared in an inner scope has the same name as a variable in an outer scope. The inner variable hides the outer variable inside that scope.

Hindi: Jab inner scope ke andar ek variable ka naam outer scope ke variable jaisa hi hota hai, toh inner variable, outer variable ko hide kar deta hai. Isse Variable Shadowing kehte hain.

### Example

```
let name = "Vibha"; // Outer variable

function greet() {
  let name = "Rahul"; // Inner variable (shadowing)
  console.log(name);
}

greet();
console.log(name);
```

Output:

```
Rahul
Vibha
```

How it works:

- `greet()` ke andar `name` ki value `"Rahul"` hai, kyunki inner variable outer variable ko shadow karta hai.
- Function ke bahar `name` ki value `"Vibha"` hi rehti hai.
- Inner variable, outer variable ki value ko change nahi karta.

### Important interview point

Shadowing is allowed when the inner variable is declared in a separate scope.

```
let x = 10;

{
  let x = 20;
  console.log(x); // 20
}

console.log(x); // 10
```

Remember: Same name + different scopes + inner variable hides outer variable = Variable Shadowing.

Here are the important variable shadowing rules in JavaScript for interviews, in simple English + Hindi.

## 1. Basic shadowing — allowed

Inner scope mein same name ka variable outer variable ko hide karta hai.

```
let x = 10;

function test() {
  let x = 20;
  console.log(x); // 20
}

test();
console.log(x); // 10
```

## 2. `let` and `const` — block scope

`let` aur `const` ko different blocks mein same name se declare kar sakte hain.

```
let a = 10;

{
  const a = 20;
  console.log(a); // 20
}

console.log(a); // 10
```

## 3. Same scope mein `let` redeclaration — not allowed

Ek hi scope mein `let` ko dobara declare nahi kar sakte.

```
let x = 10;
let x = 20; // SyntaxError
```

Hindi: Same scope mein `let` ka same naam dobara declare karna error deta hai.

## 4. `var` and `let` — illegal shadowing

Agar inner block mein `let` ya `const`, outer `var` ko shadow karne ki koshish kare, toh error ho sakta hai.

```
var x = 10;

{
  let x = 20; // Allowed!
  console.log(x); // 20
}
```

This is allowed because `let` is inside a separate block.

But this is illegal shadowing:

```
let x = 10;

{
  var x = 20; // SyntaxError
}
```

Why? `var` is not block-scoped. It would conflict with the outer `let` in the same surrounding scope.

## 5. Function parameters can shadow outer variables

```
let name = "Vibha";

function greet(name) {
  console.log(name);
}

greet("Rahul"); // Rahul
console.log(name); // Vibha
```

Parameter `name` function ke andar outer `name` ko shadow karta hai.

## 6. Nested scopes — nearest variable wins

JavaScript pehle current scope mein variable search karta hai, phir outer scope mein.

```
let x = 1;

function outer() {
  let x = 2;

  function inner() {
    let x = 3;
    console.log(x);
  }

  inner();
}

outer(); // 3
```

Rule: Nearest matching variable is used.

## 7. Shadowing with `var`

`var` function-scoped hota hai, block-scoped nahi.

```
var x = 10;

function test() {
  var x = 20;
  console.log(x); // 20
}

test();
console.log(x); // 10
```

Different function scope mein shadowing allowed hai.

## 8. Shadowing vs reassignment

These are different concepts.

Shadowing:

```
let x = 10;

{
  let x = 20;
  console.log(x); // 20
}

console.log(x); // 10
```

Reassignment:

```
let x = 10;
x = 20;
console.log(x); // 20
```

- Shadowing: another variable in a different scope.
- Reassignment: changing the value of the same variable.

## Quick interview revision

| Rule                                                                 | Result      |
| -------------------------------------------------------------------- | ----------- |
| Inner `let` shadows outer `let` in another scope                     | Allowed     |
| Inner `const` shadows outer variable in another scope                | Allowed     |
| Same-scope `let` redeclaration                                       | SyntaxError |
| Inner `var` shadows outer `var` in a function                        | Allowed     |
| Inner `let` shadows outer `var` in a block                           | Allowed     |
| Inner `var` conflicts with outer `let` in the same surrounding scope | SyntaxError |
| Function parameter has the same name as an outer variable            | Allowed     |

Remember: Shadowing is about the same name in different scopes. Illegal shadowing happens when `var` conflicts with a lexical declaration (`let`/`const`).

Same surrounding scope means variables are declared in the same scope or variable environment, so they can conflict with each other.

### Example 1: Same scope

```
let x = 10;
let x = 20; // ❌ SyntaxError
```

Both `let x` declarations are in the same scope (global scope). JavaScript does not allow this redeclaration.

### Example 2: Different scopes

```
let x = 10;

{
  let x = 20; // ✅ Allowed
  console.log(x); // 20
}

console.log(x); // 10
```

Here, the second `x` is inside a separate block scope, so shadowing is allowed.

### Example 3: Tricky `var` case

```
let x = 10;

{
  var x = 20; // ❌ SyntaxError
}
```

Why? `var` ignores the block `{}` and belongs to the surrounding function or global scope. It conflicts with the existing `let x`.

Remember:

- Same scope + redeclaring `let` → ❌ Error.
- Different scope + same variable name → ✅ Shadowing is usually allowed.
- `var` inside a block can still conflict with an outer `let` or `const`.


let x = 10;

{
  let x = 20;
  {
    let x = 30;
    console.log(x); 
  }
  console.log(x);
}

console.log(x);  
30 20 10

var a = 10;

{
  let a = 20;
  console.log(a);
}

console.log(a);
2
20 10

let x = 10;

function test() {
  var x = 20;
  console.log(x);
}

test();
console.log(x);
20 10

let num = 100;

{
  var num = 200;
}

console.log(num); syntaxerror Identifier 'num' has already been declared

let value = 5;

function test(value) {
  value = value + 10;
  console.log(value);
}

test(20);
console.log(value); 
30 5

let x = 1;

function outer() {
  let x = 2;

  function inner() {
    console.log(x);
  }

  inner();
}

outer();
2



let a = 10;

function test() {
  a = 20;
  let a = 30;
  console.log(a);
}

test();
console.log(a);

ReferenceError: Cannot access 'a' before initialization

This code gives a ReferenceError because of the Temporal Dead Zone (TDZ).

```
let a = 10;

function test() {
  a = 20;          // ❌ ReferenceError
  let a = 30;
  console.log(a);
}

test();
console.log(a);
```

### Why does the error happen?

1. `let a = 10` — outer `a` is initialized with `10`.
2. `function test()` — when the function runs, JavaScript recognizes the inner `let a`.
3. `a = 20` — ❌ the inner `a` already shadows the outer `a`, but it hasn't been initialized yet. So JavaScript throws a `ReferenceError`.
4. `let a = 30` — never executes because of the error.
5. `console.log(a)` and the final `console.log(a)` — never execute in this run.

Important rule: A `let` variable shadows the outer variable throughout its scope, even before its declaration line. Before initialization, it is in the Temporal Dead Zone (TDZ).

To make it work, move the initialization before accessing `a`:

```
let a = 10;

function test() {
  let a = 30;
  a = 20;
  console.log(a); // 20
}

test();
console.log(a); // 10
```

Here, the inner `a` is separate from the outer `a`, so changing it doesn't affect the outer variable.

Good question! 😊 But `a = 20` is assignment, not initialization.

Let's understand the difference.

### 1. Initialization vs Assignment

```
let a = 30; // Initialization: declare + assign initial value

a = 20;     // Assignment: change the existing value
```

- Initialization: Giving a variable its first value.
- Assignment: Giving an already initialized variable a new value.

### 2. Your example

```
let a = 10;

function test() {
  a = 20;     // ❌ Error
  let a = 30; // Initialization happens here
  console.log(a);
}

test();
```

JavaScript treats the inner `let a` as a separate variable throughout the function scope.

| Code                       | What happens?                                                      |
| -------------------------- | ------------------------------------------------------------------ |
| `let a = 10` (outside)     | Outer `a` initialized with `10`                                    |
| `a = 20` (inside function) | Tries to access inner `a`, which is not initialized yet            |
| `let a = 30`               | Inner `a` would be initialized here, but execution already stopped |

Remember: JavaScript doesn't skip the inner `a` and use the outer `a`. The inner `a` shadows the outer variable, and before initialization it is in the Temporal Dead Zone (TDZ).