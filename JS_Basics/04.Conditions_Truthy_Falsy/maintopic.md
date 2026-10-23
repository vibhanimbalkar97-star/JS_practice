You got 4/10 in the quiz. No problem! These concepts are tricky at first. Let's understand them in simple English + Hindi with examples.

## 1. `new Boolean(false)` — most confusing concept

```
const a = false;
const b = new Boolean(false);

console.log(Boolean(a)); // false
console.log(Boolean(b)); // true
```

Why?

- `false` is a Boolean primitive value.
- `new Boolean(false)` creates a Boolean object.
- In JavaScript, every object is truthy, even if it contains `false`.

Hindi: `false` ek value hai, lekin `new Boolean(false)` ek object banata hai. Object truthy hota hai.

Primitive

```
if (false) console.log("YES");
```

Output: Nothing

Object

```
if (new Boolean(false)) console.log("YES");
```

Output: YES

Interview tip: Avoid `new Boolean()`. Usually, use `true` and `false` directly.

## 2. `&&` — AND operator

It returns the first falsy value, or the last value if all are truthy.

```
console.log(true && "YES");  // YES
console.log(false && "YES"); // false
console.log("" && "YES");    // ""
```

Hindi: Pehli value falsy hai toh wahi return hoti hai; warna next value check hoti hai.

Important quiz example:

```
const flag = new Boolean(false);
console.log(flag && "YES");
```

Output: `"YES"` because the object is truthy.

## 3. `||` — OR operator

Returns the first truthy value. If none is truthy, returns the last value.

```
console.log("" || "Guest");  // Guest
console.log("Vibha" || "Guest"); // Vibha
console.log(0 || 10);        // 10
```

Hindi: Pehli value falsy hui toh fallback value milti hai.

## 4. `??` — Nullish coalescing operator

Uses the fallback only when the value is `null` or `undefined`.

```
console.log(null ?? "Guest"); // Guest
console.log("" ?? "Guest");   // ""
console.log(0 ?? 100);        // 0
```

Remember this difference:

\| Expression | Output | |---|---| | `"" || "Guest"` | `"Guest"` | | `"" ?? "Guest"` | `""` | | `0 || 100` | `100` | | `0 ?? 100` | `0` |

## 5. Why does `??` with `||` sometimes give `SyntaxError`?

```
console.log("" ?? "A" || "B");
```

This gives SyntaxError because JavaScript does not allow mixing `??` directly with `||` or `&&` without parentheses.

Correct syntax:

```
console.log(("" ?? "A") || "B");
// B
```

Why `B`? `"" ?? "A"` returns `""`, then `"" || "B"` returns `"B"`.

## 6. `switch` fall-through

Look at this code:

```
const key = 2;

switch (key) {
  case "2":
    console.log("A");
    break;
  case 2:
    console.log("B");
  default:
    console.log("C");
  case 3:
    console.log("D");
    break;
}
```

Output:

```
B
C
D
```

Why?

1. `case "2"` does not match number `2` because one is a string and the other is a number.
2. `case 2` matches, so `"B"` prints.
3. There is no `break`, so execution continues through `default` and `case 3`.
4. The final `break` stops execution.

Rule: Add `break` when you want to stop a `switch` case from falling through.

## Quick revision

- `new Boolean(false)` → truthy object.
- `&&` → first falsy value, otherwise last value.
- `||` → first truthy value, otherwise last value.
- `??` → fallback only for `null` or `undefined`.
- `??` mixed directly with `||` or `&&` → `SyntaxError` unless you add parentheses.
- `switch` → matching case runs; without `break`, execution falls through.

Let's understand it step by step.

```
if (false) console.log("YES");
```

### 1. How does it work?

- `if` checks a condition.
- `false` means the condition is not satisfied.
- `console.log("YES")` runs only if the condition is true.
- Because the condition is `false`, JavaScript skips `console.log()`.

Output: Nothing — the console remains empty.

### 2. Compare these examples

```
if (true) console.log("YES");   
// Output: YES

if (false) console.log("YES");  
// Output: Nothing
```

### 3. What about `new Boolean(false)`?

```
if (new Boolean(false)) console.log("YES");
// Output: YES
```

Why? Because `new Boolean(false)` creates an object, and all objects are truthy in JavaScript, even if they contain `false`.

Remember:

| Condition                 | Result          |
| ------------------------- | --------------- |
| `if (false)`              | Skips the block |
| `if (true)`               | Runs the block  |
| `if (0)`                  | Skips the block |
| `if ("")`                 | Skips the block |
| `if (new Boolean(false))` | Runs the block  |

Hindi trick: `if` ke andar condition truthy honi chahiye. `false`, `0` aur `""` falsy hain, lekin `new Boolean(false)` ek object hai, isliye truthy hai.

=========================================================================================================================================

Sorry! The quiz may not have displayed properly. Here are your 10 very hard JavaScript tricky questions. Choose your answers first; I’ll check them afterward.

## JavaScript interview quiz — Hard level

## 10 questions

10/10 answered

1\. What is the output?

const x = new Boolean(false); console.log(!x, !!x, x === false);

A. true, false, trueB. false, true, falseC. true, true, falseD. false, false, true

&#x20;Correct

The Boolean object is truthy. Therefore !x is false, !!x is true, and the object is not strictly equal to primitive false.

2\. What happens?

console.log(0 && 'A' || 'B' ?? 'C');

A. BB. 0C. CD. SyntaxError

&#x20;Correct

JavaScript does not allow mixing || and ?? directly without parentheses.

3\. What is printed?

const a = ''; const b = a || 5; const c = b && 0; console.log(c ?? 10);

A. 0B. 10C. 5D. false

&#x20;Correct answer: 0

a || 5 returns 5; 5 && 0 returns 0; 0 ?? 10 preserves 0.

4\. Select all expressions that evaluate to primitive Boolean false.

A. !new Boolean(false) B. new Boolean(false) === false C. Boolean(new Boolean(false)) D. !!''

A. A, B and DB. A and CC. B and CD. A, B, C and D

&#x20;Correct

A and D produce false; B is also false because an object is not strictly equal to primitive false. C is true because the object is truthy.

5\. What is printed?

let x = null; x = x ?? ''; x = x || 'Fallback'; console.log(x);

A. nullB. Empty stringC. FallbackD. undefined

&#x20;Correct

null ?? '' gives an empty string; then '' || 'Fallback' gives Fallback.

6\. What is printed?

const value = 0; console.log(value ?? (value || 7));

A. 7B. 0C. undefinedD. SyntaxError

&#x20;Correct

The left side of ?? is 0, which is not null or undefined, so the result is 0.

7\. What is printed?

const n = 1; switch (n) {   case true: console.log('T'); break;   case 1: console.log('N');   case '1': console.log('S'); break;   default: console.log('D'); }

A. TB. N onlyC. N then SD. D

&#x20;Correct

Number 1 matches case 1, not Boolean true. Without break, execution falls through and prints S.

8\. True or false?

Boolean([]) === true

A. TrueB. False

&#x20;Correct

An empty array is an object, and objects are truthy in JavaScript.

9\. What happens?

console.log((false || '') ?? 'X' || 'Y');

A. XB. YC. Empty stringD. SyntaxError

&#x20;Correct

The expression still mixes ?? and || directly without grouping the full combination.

10\. What is printed?

let result = 0; switch (result) {   default: result += 1;   case 0: result += 2;   case 1: result += 3; break;   case 3: result += 4; } console.log(result);

A. 3B. 5C. 6D. 9

&#x20;Correct answer: 5

The matching case 0 starts execution. It adds 2, then falls through to case 1 and adds 3, giving 5.

## Your score: 8/10

Try again