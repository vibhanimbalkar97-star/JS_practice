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