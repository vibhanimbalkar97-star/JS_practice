# JavaScript Loops – Complete Beginner Notes

JavaScript loops are used to repeat a block of code multiple times.

For example, if you want to print `"Hello"` 5 times, instead of writing `console.log()` five times, you can use a loop.

```
for (let i = 1; i <= 5; i++) {
  console.log("Hello");
}
```

Output:

```
Hello
Hello
Hello
Hello
Hello
```

These notes cover loops from beginner to tricky interview-level concepts, with simple explanations, rules, examples, and common mistakes.

# 1. Types of Loops in JavaScript

| Loop         | Purpose                                     |
| ------------ | ------------------------------------------- |
| `for`        | Repeat code a known number of times         |
| `while`      | Repeat while a condition is true            |
| `do...while` | Execute at least once, then check condition |
| `for...of`   | Iterate over values of an iterable          |
| `for...in`   | Iterate over enumerable property keys       |
| Nested loop  | A loop inside another loop                  |

Other important concepts:

- `break`
- `continue`
- Infinite loops
- Loop scope
- Off-by-one errors
- Array iteration methods
- Tricky increment/decrement behavior











# 8. `continue` Statement

`continue` skips the current iteration and moves to the next one.

### Example: Skip 3

```
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }

  console.log(i);
}
```

Output:

```
1
2
4
5
```

### Example: Print only odd numbers

```
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;
  }

  console.log(i);
}
```

Output:

```
1
3
5
7
9
```

### Difference between `break` and `continue`

| `break`                        | `continue`                          |
| ------------------------------ | ----------------------------------- |
| Stops the complete loop        | Skips current iteration             |
| No further iterations          | Next iteration continues            |
| Used when the goal is achieved | Used when a value should be skipped |

## Important `continue` trick

```
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }

  console.log(i);
}
```

Why does it not become infinite?

Because in a `for` loop, `i++` still happens after `continue`.

But in a `while` loop, you must be careful.

```
let i = 1;

while (i <= 5) {
  if (i === 3) {
    i++;
    continue;
  }

  console.log(i);
  i++;
}
```

If you forget `i++` before `continue`, the loop will remain stuck at 3.

# 9. Nested Loops

A nested loop means one loop inside another loop.

[JavaScript Notes | Skillzam](https://images.openai.com/static-rsc-4/VxyeSBvgYLzrrMx2hohVV0u3hERYd1_zuT1A2UCQoTKA0P9XR4MaKw5D5UJMyzF1UAoCzIbOfzP7XOPCvnLrncxGXVnCVrO5sY6ZaheaWyUubf0wC3nNT3ClwVrqPxAa98Tz_LTuPV4A_Hg4jeI1uhYAXcyVxmBII8eqA3tWkO0?purpose=inline)

[Looping Techniques in JavaScript: A Comprehensive Guide | by Rabail Zaheer | Medium](https://images.openai.com/static-rsc-4/ohEN7T0Mg-pFtrgtJHmJrahBCYzjYNR0_qzinN6Qy3TLeWQAIq-EgiLr_g9m8dFMRhdEpXBvQIyGa6Avy9TcbOAOtKVZ5KxQDh217OPrrotqq3qCih2oKEMwK27q1p8N4bkTtpypsIDOpXF3-0pSxZjj6CSji52sJVJsPx8I4ls?purpose=inline)

[\[C++\] Nested Loops and Variations](https://images.openai.com/static-rsc-4/PLK0mjxQD5k1MoaJ5RmnZyYhWol9DxTZS35QXXp1m2xkd67-mcm-OPSy7-GkSDEEonnhHRUT0zp47uQ2LrXjVmTL2Ka7id6TdBfMcVci8dz5bIWr7n2saqW4ibcVQzVVD7rHLTpzT3tO7jtqQ_FazzwII6lml91ZVGKouMxNCRU?purpose=inline)

7

### Example

```
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(i, j);
  }
}
```

Output:

```
1 1
1 2
2 1
2 2
3 1
3 2
```

### How it works

- Outer loop runs 3 times.
- Inner loop runs 2 times for every outer iteration.
- Total executions = 3 × 2 = 6.

### Tricky example: Pattern printing

```
for (let i = 1; i <= 4; i++) {
  let result = "";

  for (let j = 1; j <= i; j++) {
    result += "*";
  }

  console.log(result);
}
```

Output:

```
*
**
***
****
```

### Multiplication table

```
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}
```

### Important rule

`break` inside an inner loop stops only the inner loop.

```
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (j === 2) break;
    console.log(i, j);
  }
}
```

Output:

```
1 1
2 1
3 1
```

The outer loop continues.

# 10. Labeled `break` and `continue`

Labels allow you to control an outer loop from inside a nested loop.

### Labeled break

```
outer:
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (i === 2 && j === 2) {
      break outer;
    }

    console.log(i, j);
  }
}
```

Output:

```
1 1
1 2
1 3
2 1
```

`break outer` stops both loops.

### Labeled continue

```
outer:
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 2; j++) {
    if (j === 2) {
      continue outer;
    }

    console.log(i, j);
  }
}
```

Output:

```
1 1
2 1
3 1
```

`continue outer` skips to the next outer iteration.

# 11. Tricky Increment and Decrement Operators

These are frequently asked in JavaScript interviews.

## Post-increment: `i++`

First use the current value, then increment.

```
let i = 5;

console.log(i++);
console.log(i);
```

Output:

```
5
6
```

## Pre-increment: `++i`

First increment, then use the value.

```
let i = 5;

console.log(++i);
console.log(i);
```

Output:

```
6
6
```

## Inside loops

### Example 1

```
for (let i = 0; i < 3; i++) {
  console.log(i++);
}
```

Output:

```
0
2
```

Why?

| Loop | Value before `console.log(i++)` | Value after | Update section `i++` |
| ---- | ------------------------------- | ----------- | -------------------- |
| 1    | 0                               | 1           | 2                    |
| 2    | 2                               | 3           | 4                    |

The condition fails at 4.

### Example 2

```
for (let i = 0; i < 5; i++) {
  console.log(++i);
}
```

Output:

```
1
3
```

### Remember

Each `i++` increases the value by 1. If there are two increments in one iteration, the value increases by 2.

# 12. Off-by-One Errors

An off-by-one error means your loop runs one time too many or one time too few.

### Example

```
let arr = ["A", "B", "C"];

for (let i = 0; i <= arr.length; i++) {
  console.log(arr[i]);
}
```

Output:

```
A
B
C
undefined
```

Why?

Array length is 3, but valid indexes are:

```
0, 1, 2
```

Correct code:

```
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

### Interview rule

For an array of length `n`:

- First index = `0`
- Last index = `n - 1`
- Use `i < arr.length` for normal forward iteration.

# 13. Infinite Loops

An infinite loop never stops because its condition remains true.

### Example 1

```
while (true) {
  console.log("Hello");
}
```

### Example 2

```
let i = 1;

while (i <= 5) {
  console.log(i);
  // Forgot i++
}
```

### Example 3: Wrong update direction

```
for (let i = 1; i <= 5; i--) {
  console.log(i);
}
```

`i` keeps decreasing, so `i <= 5` remains true.

### Example 4: Accidental semicolon

```
for (let i = 1; i <= 3; i++); {
  console.log("Hello");
}
```

Output:

```
Hello
```

The semicolon ends the loop body. The following block is separate.

This is a common interview trick.

# 14. Array Looping Methods

JavaScript has array methods that work like loops.

[10 Powerful JavaScript Array Methods That Will Make You a Better Developer | Tips & Examples | Medium](https://images.openai.com/static-rsc-4/y0JWkI1zeYKXlUdbhE-zMCf-n-ESP_tnDaUsoswJG0s5xMjvFzrwezowOHd2RAPxSB0y16dxLQ50ALMWBE2CaP9MI57x938PTGDq8EP5DydghrK3dlTxq3F5z3a__cWr9Jo975fY7nMzjhxZZ-2nY5dU4XmQKHArWMngNqAS7Io?purpose=inline)

[Mastering map(), filter(), reduce(), and forEach() in JavaScript | by shubham | Medium](https://images.openai.com/static-rsc-4/VbaFlRZgrG_g_Snn1yqToLdiiX9lMu4wwNgc6AtBTAMw3N2v8MmDr2wuXO8wq8uvtsV5_8cqorAtM2fBjGkCIJtufcX7qQJfIM5n4ftedft_EwdMo6Y-UYHB2jtleNtlau_suVqTuRTKZhDJ3ZuQpeM1KO6EEa5hMGMOQqU5-mQ?purpose=inline)

[Javascript For Each Loop](https://images.openai.com/static-rsc-4/sjSX9WA7byqQjcDUr3P46pj5KjTtqkREzUOVoGg_9LCJ0pc5AE8yTxFcVjufX2t4YgWHYYROcLSAoHedXcc4KrlG_CNW_QwUKqTDCmR6WkpdqR4aZkXx8s_4TZXtAlcVmYUD3wND2vyVYRBysMnVfFDHaQFEcTuNlZ3UqbeRk08?purpose=inline)

7

## `forEach()`

Executes a function for every array element.

```
let numbers = [1, 2, 3];

numbers.forEach((num) => {
  console.log(num);
});
```

Output:

```
1
2
3
```

Important: `forEach()` does not return a new array.

## `map()`

Creates a new array by transforming every element.

```
let numbers = [1, 2, 3];

let result = numbers.map((num) => num * 2);

console.log(result);
```

Output:

```
[2, 4, 6]
```

## `filter()`

Returns elements that satisfy a condition.

```
let numbers = [1, 2, 3, 4, 5];

let result = numbers.filter((num) => num > 3);

console.log(result);
```

Output:

```
[4, 5]
```

## `reduce()`

Combines array elements into one result.

```
let numbers = [1, 2, 3, 4];

let result = numbers.reduce((sum, num) => sum + num, 0);

console.log(result);
```

Output:

```
10
```

### Comparison table

| Method      | Purpose                   | Returns                                            |
| ----------- | ------------------------- | -------------------------------------------------- |
| `forEach()` | Execute for each item     | `undefined`                                        |
| `map()`     | Transform items           | New array                                          |
| `filter()`  | Select matching items     | New array                                          |
| `reduce()`  | Combine items             | Single accumulated result (or another chosen type) |
| `find()`    | Find first matching item  | Element or `undefined`                             |
| `some()`    | Check if any item matches | Boolean                                            |
| `every()`   | Check if all items match  | Boolean                                            |

### Tricky `forEach()` example

```
let result = [1, 2, 3].forEach((num) => num * 2);

console.log(result);
```

Output:

```
undefined
```

Why? `forEach()` is for performing actions, not creating a new array.

### Important difference

You cannot use `break` or `continue` directly inside `forEach()`.

Use a regular `for` loop when you need to stop early.

# 15. Looping Through Arrays and Objects

This is very important for React and MERN interviews.

## Array of objects

```
let students = [
  { name: "Amit", marks: 80 },
  { name: "Neha", marks: 90 },
  { name: "Raj", marks: 70 }
];
```

### Using `for`

```
for (let i = 0; i < students.length; i++) {
  console.log(students[i].name);
}
```

Output:

```
Amit
Neha
Raj
```

### Using `for...of`

```
for (let student of students) {
  console.log(student.name, student.marks);
}
```

Output:

```
Amit 80
Neha 90
Raj 70
```

### Using `map()`

```
let names = students.map((student) => student.name);

console.log(names);
```

Output:

```
["Amit", "Neha", "Raj"]
```

### Using `filter()`

```
let passed = students.filter((student) => student.marks >= 80);

console.log(passed);
```

Output:

```
[
  { name: "Amit", marks: 80 },
  { name: "Neha", marks: 90 }
]
```

### Tricky: Nested object

```
let users = [
  { name: "Amit", skills: ["JS", "React"] },
  { name: "Neha", skills: ["Python", "ML"] }
];

for (let user of users) {
  for (let skill of user.skills) {
    console.log(user.name, skill);
  }
}
```

Output:

```
Amit JS
Amit React
Neha Python
Neha ML
```

# 16. Loop Scope: `var`, `let`, and `const`

This is one of the most commonly asked JavaScript interview topics.

## Example 1: `var`

```
for (var i = 1; i <= 3; i++) {
  console.log(i);
}

console.log(i);
```

Output:

```
1
2
3
4
```

Why? `var` is function-scoped, not block-scoped. The variable is still accessible outside the loop.

## Example 2: `let`

```
for (let i = 1; i <= 3; i++) {
  console.log(i);
}

console.log(i);
```

Output:

```
1
2
3
ReferenceError
```

Why? `let` is block-scoped.

## Example 3: `const`

```
for (const i = 1; i <= 3; i++) {
  console.log(i);
}
```

Output:

```
1
TypeError
```

Why? `const` cannot be reassigned. The update `i++` attempts to change its value.

But this works:

```
const numbers = [10, 20, 30];

for (const num of numbers) {
  console.log(num);
}
```

Why? Each iteration creates a new loop binding for `num`.

## Important interview example: `var` inside a loop

```
for (var i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
```

Output after approximately 1 second:

```
4
4
4
```

Why? All callbacks refer to the same `var i`, which has reached 4.

Using `let`:

```
for (let i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
```

Output after approximately 1 second:

```
1
2
3
```

Why? `let` creates a separate binding for each iteration.

# 17. JavaScript Loop Tricky Rules – Quick Revision

| Rule                               | Example                          | Output                  |
| ---------------------------------- | -------------------------------- | ----------------------- |
| `for` condition checked first      | `for(let i=5;i<2;i++)`           | No output               |
| `do...while` executes once         | `do{console.log(1)}while(false)` | `1`                     |
| `break` stops loop                 | `if(i===3) break`                | Stops at 3              |
| `continue` skips current iteration | `if(i===3) continue`             | Skips 3                 |
| `for...of` gives values            | `for(let x of [10,20])`          | `10,20`                 |
| `for...in` gives keys              | `for(let x in [10,20])`          | `"0","1"`               |
| `i++` returns old value            | `console.log(i++)`               | Old value               |
| `++i` returns new value            | `console.log(++i)`               | New value               |
| `map()` returns new array          | `[1,2].map(x=>x*2)`              | `[2,4]`                 |
| `forEach()` returns undefined      | `[1,2].forEach(x=>x*2)`          | `undefined`             |
| `var` is function-scoped           | `var i`                          | Accessible outside loop |
| `let` is block-scoped              | `let i`                          | Not accessible outside  |
| Array last index                   | `arr.length - 1`                 | Last valid index        |
| Empty array is truthy              | `if([])`                         | Executes                |
| Empty object is truthy             | `if({})`                         | Executes                |

# 18. Common Loop Interview Questions

## Q1. What is the output?

```
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

Answer:

```
0
1
2
3
4
```

## Q2. What is the output?

```
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
```

Answer:

```
1
2
4
5
```

## Q3. What is the output?

```
let i = 1;

while (i < 4) {
  console.log(i);
  i++;
}
```

Answer:

```
1
2
3
```

## Q4. What is the output?

```
let arr = [10, 20, 30];

for (let i in arr) {
  console.log(typeof i);
}
```

Answer:

```
string
string
string
```

Why? `for...in` returns property keys, which are strings.

## Q5. What is the output?

```
let arr = [1, 2, 3];

console.log(arr.map(x => x * 2));
console.log(arr.forEach(x => x * 2));
```

Answer:

```
[2, 4, 6]
undefined
```

# 19. Beginner to Interview Practice Questions

Try to solve these without running the code first.

## JavaScript Loops Quiz

0/10 answered

1\. What is the output?

for (let i = 1; i <= 4; i++) {\
&#x20; console.log(i);\
}

1 2 3 4

0 1 2 3

1 2 3 4 5

2\. What is the output?

for (let i = 0; i < 5; i += 2) {\
&#x20; console.log(i);\
}

0 1 2 3 4

0 2 4

2 4 6

3\. What is the output?

let i = 5;\
do { console.log(i); } while (i < 3);

No output

5

Infinite loop

4\. What is the output?

for (let i = 1; i <= 5; i++) {\
&#x20; if (i === 4) break;\
&#x20; console.log(i);\
}

1 2 3

1 2 3 4

1 2 3 4 5

5\. What is the output?

for (let i = 1; i <= 4; i++) {\
&#x20; if (i === 2) continue;\
&#x20; console.log(i);\
}

1 2 3 4

1 3 4

1

6\. What is the output?

let arr = [10, 20];\
for (let x in arr) console.log(x);

10 20

0 1

undefined undefined

7\. What is the output?

let arr = [10, 20];\
for (let x of arr) console.log(x);

0 1

10 20

undefined undefined

8\. What is the output?

let i = 2;\
console.log(i++);\
console.log(++i);

2 3

2 4

3 4

9\. What is the output?

let nums = [1, 2, 3];\
console.log(nums.map(x => x + 1));

[1, 2, 3]

[2, 3, 4]

undefined

10\. What is the output?

for (var i = 0; i < 3; i++) {}\
console.log(i);

2

3

ReferenceError

Submit Answers

## What to revise next

My suggested order for your JavaScript interview revision:

1. Loops — current topic
2. Functions and return
3. Scope and hoisting
4. Arrays and array methods
5. Objects and destructuring
6. Closures
7. Promises and async/await
8. DOM and events

After loops, the most important practice is predicting the output of code, especially with `i++`, `break`, `continue`, nested loops, and `var` vs `let`.