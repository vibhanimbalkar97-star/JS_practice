# JavaScript Topic 4: Conditions and Truthy/Falsy — Short Notes

These notes cover the important concepts for interviews and revision, with simple English, Hindi explanations, and examples.

## 1. `if`, `else if`, `else`

Meaning: Execute different code depending on a condition.

Hindi: Condition ke according code execute hota hai.

```
let age = 20;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

Output: `Adult`

- `if` — checks the first condition.
- `else if` — checks another condition if the previous one is false.
- `else` — runs if all previous conditions are false.

## 2. Truthy and Falsy Values

Truthy: Behaves like `true` in a condition.

Falsy: Behaves like `false` in a condition.

```
console.log(Boolean("Hello")); // true
console.log(Boolean(0));       // false
```

Hindi: Non-empty string truthy hoti hai; `0` falsy hota hai.

## 3. All Falsy Values

Remember these values:

| Value       | Example              |
| ----------- | -------------------- |
| `false`     | `Boolean(false)`     |
| `0`         | `Boolean(0)`         |
| `-0`        | `Boolean(-0)`        |
| `0n`        | `Boolean(0n)`        |
| `""`        | `Boolean("")`        |
| `null`      | `Boolean(null)`      |
| `undefined` | `Boolean(undefined)` |
| `NaN`       | `Boolean(NaN)`       |

All return `false`.

Interview trick: `"0"`, `"false"`, `[]`, and `{}` are all truthy.

```
console.log(Boolean("0")); // true
console.log(Boolean([]));  // true
console.log(Boolean({}));  // true
```

## 4. Boolean Conversion

`Boolean()` converts a value to `true` or `false`.

```
console.log(Boolean(1));    // true
console.log(Boolean(""));   // false
console.log(Boolean("Hi")); // true
```

Hindi: Kisi bhi value ko Boolean mein convert karne ke liye `Boolean()` use karte hain.

## 5. Conditions with Logical Operators

\| Operator | Meaning | Example | |---|---|---| | `&&` | AND — both conditions must be true | `age >= 18 && age <= 60` | | `||` | OR — at least one condition true | `day === "Sat" || day === "Sun"` | | `!` | NOT — reverses truthiness | `!true` → `false` |

```
let age = 25;

if (age >= 18 && age <= 60) {
  console.log("Eligible");
}
```

Output: `Eligible`

Hindi: `&&` mein dono conditions true honi chahiye. `||` mein ek bhi true ho toh result true hota hai.

## 6. Nested `if`

An `if` inside another `if`.

```
let age = 25;
let hasID = true;

if (age >= 18) {
  if (hasID) {
    console.log("Allowed");
  }
}
```

Output: `Allowed`

Use it when one condition should be checked only after another condition succeeds.

## 7. `switch` Statement

Use `switch` to compare one value against multiple fixed values.

```
let day = 2;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  default:
    console.log("Invalid");
}
```

Output: `Tuesday`

- `case` — a value to match.
- `break` — stops execution from continuing into the next case.
- `default` — runs when no case matches.

Hindi: Multiple fixed values compare karne ke liye `switch` useful hai.

## 8. `if-else` vs `switch`

\| `if-else`                    | `switch` | 
|---                            |     ---| | 
Checks conditions and ranges    | Matches specific values | 
| Supports `>`, `<`, `&&`, `||` | Best for fixed cases | 
| Useful for grading             | Useful for menu choices |

Example: `marks >= 80` → `if-else`; `day === 2` → `switch`.

## 9. Ternary Operator `? :`

A short form of `if-else`.

Syntax:

```
condition ? valueIfTrue : valueIfFalse;
```

Example:

```
let age = 20;

let result = age >= 18 ? "Adult" : "Minor";

console.log(result); // Adult
```

Hindi: Condition true ho toh first value, false ho toh second value milti hai.

Use ternary for simple decisions, not complicated logic.

## 10. Nested Ternary

A ternary inside another ternary.

```
let marks = 85;

let grade = marks >= 90 ? "A" :
            marks >= 75 ? "B" : "C";

console.log(grade); // B
```

Too many nested ternaries make code hard to read. Prefer `if-else` when there are many conditions.

## 11. Comparison Operators in Conditions

| Operator | Meaning               |
| -------- | --------------------- |
| `>`      | Greater than          |
| `<`      | Less than             |
| `>=`     | Greater than or equal |
| `<=`     | Less than or equal    |
| `===`    | Strict equality       |
| `!==`    | Strict inequality     |

```
console.log(5 === "5"); // false
console.log(5 >= 3);    // true
```

Prefer `===` over `==` to avoid unexpected type conversion.

## 12. Short-Circuit Evaluation

JavaScript can stop evaluating logical expressions when the result is already determined.

### With `&&`

```
console.log(false && "Hello"); // false
```

The second operand is not evaluated.

### With `||`

```
console.log("" || "Guest"); // Guest
```

The second operand is returned because the first is falsy.

Remember: `&&` and `||` can return an operand's value, not necessarily a Boolean.

## 13. Nullish Coalescing `??`

Uses the right side only when the left side is `null` or `undefined`.

```
console.log(0 ?? 10);        // 0
console.log(null ?? 10);     // 10
console.log(undefined ?? 10); // 10
```

Hindi: `??` sirf `null` ya `undefined` hone par default value deta hai.

Compare:

```
console.log(0 || 10); // 10
console.log(0 ?? 10); // 0
```

`||` treats `0` as falsy; `??` does not.

## 14. Empty Arrays and Objects

Empty arrays and objects are truthy.

```
console.log(Boolean([]));  // true
console.log(Boolean({}));  // true
console.log(Boolean("")); // false
```

Hindi: Array ya object empty hone se woh falsy nahi hota.

## 15. Largest of Three Numbers

```
let a = 10, b = 25, c = 15;

if (a >= b && a >= c) {
  console.log(a);
} else if (b >= a && b >= c) {
  console.log(b);
} else {
  console.log(c);
}
```

Output: `25`

## 16. Leap Year Program

A year is a leap year if divisible by 400, or divisible by 4 but not by 100.

```
let year = 2024;

if (year % 400 === 0 ||
    (year % 4 === 0 && year % 100 !== 0)) {
  console.log("Leap year");
} else {
  console.log("Not a leap year");
}
```

Output: `Leap year`

## 17. Grading Program

```
let marks = 82;

if (marks >= 90) {
  console.log("A");
} else if (marks >= 75) {
  console.log("B");
} else if (marks >= 60) {
  console.log("C");
} else if (marks >= 40) {
  console.log("D");
} else {
  console.log("Fail");
}
```

Output: `B`

Conditions are checked from top to bottom. The first matching block executes.

## 18. Common Interview Traps

| Code                         | Output  | Why?               |
| ---------------------------- | ------- | ------------------ |
| `Boolean("0")`               | `true`  | Non-empty string   |
| `Boolean("false")`           | `true`  | Non-empty string   |
| `Boolean([])`                | `true`  | Arrays are truthy  |
| `Boolean({})`                | `true`  | Objects are truthy |
| `Boolean("")`                | `false` | Empty string       |
| `Boolean(NaN)`               | `false` | `NaN` is falsy     |
| `Boolean(" ")`               | `true`  | Contains a space   |
| `Boolean("false" === false)` | `false` | Different types    |

## Final revision checklist

- `if`, `else if`, `else`
- Truthy and falsy values
- `Boolean()` conversion
- Logical operators: `&&`, `||`, `!`
- Nested `if`
- `switch`, `case`, `break`, `default`
- Ternary and nested ternary
- Comparison operators
- Short-circuit evaluation
- `||` vs `??`
- Empty arrays and objects
- Largest number, leap year, and grading programs

Interview tip: Focus especially on falsy values, `"0"` vs `0`, empty arrays/objects, `switch` with `break`, and `||` vs `??`. These are common sources of tricky output questions.
====================================================================================================================================

# JavaScript Interview Topic 4: Conditions and Truthy/Falsy

We’ll cover all 10 interview questions with simple English + Hindi explanations + code + output.

## First, understand the basics

Conditions help JavaScript decide which code to execute.

| Statement | Use                                                  |
| --------- | ---------------------------------------------------- |
| `if`      | Executes code when a condition is true               |
| `else`    | Executes code when the condition is false            |
| `else if` | Checks another condition                             |
| `switch`  | Compares one expression against multiple cases       |
| `? :`     | Short form of `if-else`, called the ternary operator |

Example:

```
let age = 20;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

Output:

```
Adult
```

Hindi: Condition check hoti hai. Agar condition `true` hai, toh `if` wala code chalega; otherwise `else` wala code chalega.

## 1. What are truthy and falsy values?

Simple English

- Truthy: A value that behaves like `true` when JavaScript converts it to a Boolean.
- Falsy: A value that behaves like `false` when JavaScript converts it to a Boolean.

Hindi

- Truthy: Aisi value jo condition mein `true` ki tarah behave karti hai.
- Falsy: Aisi value jo condition mein `false` ki tarah behave karti hai.

Example:

```
if ("Hello") {
  console.log("Truthy");
}

if (0) {
  console.log("This will not execute");
} else {
  console.log("Falsy");
}
```

Output:

```
Truthy
Falsy
```

Why?

- `"Hello"` is a non-empty string, so it is truthy.
- `0` is falsy, so the `else` block executes.

Remember: Truthy/falsy is not the same as the actual Boolean type. For example, `"Hello"` is a string, not a Boolean, but it behaves as truthy in a condition.

## 2. Name all falsy values in JavaScript.

There are 8 commonly listed falsy values/categories in JavaScript:

| Value       | Explanation                  |
| ----------- | ---------------------------- |
| `false`     | Boolean false                |
| `0`         | Positive zero                |
| `-0`        | Negative zero                |
| `0n`        | BigInt zero                  |
| `""`        | Empty string                 |
| `null`      | Intentionally absent value   |
| `undefined` | Value not assigned/available |
| `NaN`       | Not-a-Number result          |

Note: `0`, `-0`, and `0n` are separate representations; `NaN` is also falsy.

Example:

```
console.log(Boolean(0));         // false
console.log(Boolean(""));        // false
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));       // false
console.log(Boolean(0n));        // false
```

Output:

```
false
false
false
false
false
false
```

Important interview trick: These values are truthy, not falsy:

```
Boolean("0");  // true
Boolean("false"); // true
Boolean([]);   // true
Boolean({});   // true
```

Hindi: Empty string `""` falsy hai, lekin `"0"` aur `"false"` strings hain, isliye truthy hain. Empty array `[]` aur empty object `{}` bhi truthy hote hain.

## 3. What is the output?

```
if ("0") {
  console.log("Yes");
} else {
  console.log("No");
}
```

Output:

```
Yes
```

Why?

`"0"` is a string containing one character. It is not an empty string, so it is truthy.

Hindi: `"0"` string empty nahi hai, isliye condition `true` ki tarah behave karti hai aur `"Yes"` print hota hai.

Compare:

```
if (0) {
  console.log("Yes");
} else {
  console.log("No");
}
```

Output:

```
No
```

The difference is `"0"` (string) versus `0` (number).

## 4. What is the difference between `if-else` and `switch`?

Simple English

- Use `if-else` for ranges, complex conditions, and multiple logical checks.
- Use `switch` when comparing one expression against several specific values.

Hindi

- `if-else` tab useful hai jab range check karni ho ya conditions complex hon.
- `switch` tab useful hai jab ek value ko multiple fixed values se compare karna ho.

### Using `if-else`

```
let marks = 75;

if (marks >= 90) {
  console.log("A");
} else if (marks >= 60) {
  console.log("B");
} else {
  console.log("C");
}
```

Output:

```
B
```

### Using `switch`

```
let day = 2;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  default:
    console.log("Invalid day");
}
```

Output:

```
Tuesday
```

Important: `switch` compares case values using strict equality (`===`-like matching). Use `break` to prevent execution from falling through into the next case. `default` runs if no case matches.

| `if-else`                            | `switch`                     |
| ------------------------------------ | ---------------------------- |
| Supports ranges such as `age >= 18`  | Best for exact value matches |
| Supports complex Boolean expressions | Organizes many fixed cases   |
| Checks conditions in order           | Finds a matching case        |

## 5. What is the ternary operator, and when should you use it?

Simple English: The ternary operator is a short way to write a simple `if-else`.

Syntax:

```
condition ? valueIfTrue : valueIfFalse;
```

Hindi: Ternary operator `if-else` ka short form hai. Condition true ho toh pehla result, false ho toh doosra result milta hai.

Example:

```
let age = 20;

let result = age >= 18 ? "Adult" : "Minor";

console.log(result);
```

Output:

```
Adult
```

Equivalent `if-else`:

```
let age = 20;
let result;

if (age >= 18) {
  result = "Adult";
} else {
  result = "Minor";
}

console.log(result);
```

Output:

```
Adult
```

When to use it: Use ternary for a simple decision that produces a value.

```
let isLoggedIn = true;
console.log(isLoggedIn ? "Welcome" : "Please login");
```

Output:

```
Welcome
```

Avoid using ternary when the logic has many conditions or multiple actions. A normal `if-else` is often easier to read.

## 6. What is the output?

```
console.log(Boolean([]), Boolean({}), Boolean(""));
```

Output:

```
true true false
```

Why?

| Value | Result  | Reason                   |
| ----- | ------- | ------------------------ |
| `[]`  | `true`  | Empty arrays are truthy  |
| `{}`  | `true`  | Empty objects are truthy |
| `""`  | `false` | Empty strings are falsy  |

Hindi: JavaScript mein empty array aur empty object bhi truthy hote hain. Sirf empty string falsy hai.

Interview trap:

```
if ([]) {
  console.log("Runs");
}
```

Output:

```
Runs
```

An empty array is not the same as a falsy value.

## 7. Write a program to find the largest of three numbers.

Logic: Compare each number against the other two.

```
let a = 15;
let b = 25;
let c = 10;

if (a >= b && a >= c) {
  console.log("Largest:", a);
} else if (b >= a && b >= c) {
  console.log("Largest:", b);
} else {
  console.log("Largest:", c);
}
```

Output:

```
Largest: 25
```

Hindi explanation:

1. Check karo kya `a`, `b` aur `c` dono se bada ya equal hai.
2. Agar nahi, toh check karo kya `b` dono se bada ya equal hai.
3. Otherwise, `c` largest hoga.

Using `>=` also handles equal numbers correctly.

Alternative using `Math.max()`:

```
let a = 15;
let b = 25;
let c = 10;

console.log("Largest:", Math.max(a, b, c));
```

Output:

```
Largest: 25
```

For an interview, understand the `if-else` approach first.

## 8. Write a program to check whether a year is a leap year.

Rules:

A year is a leap year if:

- It is divisible by 400, or
- It is divisible by 4 but not divisible by 100.

Hindi: Year 4 se divide hona chahiye, lekin agar 100 se bhi divide hota hai toh leap year nahi hoga—unless it is also divisible by 400.

```
let year = 2024;

if (year % 400 === 0) {
  console.log("Leap year");
} else if (year % 100 === 0) {
  console.log("Not a leap year");
} else if (year % 4 === 0) {
  console.log("Leap year");
} else {
  console.log("Not a leap year");
}
```

Output:

```
Leap year
```

Test these examples:

| Year   | Output          |
| ------ | --------------- |
| `2024` | Leap year       |
| `1900` | Not a leap year |
| `2000` | Leap year       |
| `2023` | Not a leap year |

Interview tip: Do not simply check `year % 4 === 0`. That would incorrectly classify 1900 as a leap year.

## 9. Write a grading program using `if-else`.

Let's use these grading rules:

| Marks    | Grade |
| -------- | ----- |
| 90–100   | A     |
| 75–89    | B     |
| 60–74    | C     |
| 40–59    | D     |
| Below 40 | Fail  |

```
let marks = 82;

if (marks < 0 || marks > 100) {
  console.log("Invalid marks");
} else if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else if (marks >= 60) {
  console.log("Grade C");
} else if (marks >= 40) {
  console.log("Grade D");
} else {
  console.log("Fail");
}
```

Output:

```
Grade B
```

Why does the order matter?

JavaScript checks conditions from top to bottom and executes the first matching block.

For example, if `marks = 95`, then `marks >= 90` is true, so Grade A prints and the remaining `else if` conditions are skipped.

Hindi: Sabse pehle highest marks wali condition check karo. Ek condition match hone ke baad baaki `else if` blocks execute nahi hote.

## 10. When can nested ternary operators make code difficult to maintain?

Simple English: Nested ternary operators put one ternary inside another. Too many nested conditions make code difficult to read, debug, and update.

Hindi: Jab ek ternary ke andar doosra ternary likhte hain, use nested ternary kehte hain. Bahut saare nested ternary code ko confusing bana dete hain.

### Difficult-to-read example

```
let marks = 82;

let grade =
  marks >= 90 ? "A" :
  marks >= 75 ? "B" :
  marks >= 60 ? "C" :
  marks >= 40 ? "D" : "Fail";

console.log(grade);
```

Output:

```
B
```

This works, but as the number of conditions grows, it becomes harder to understand.

### More readable alternative

```
let marks = 82;
let grade;

if (marks >= 90) {
  grade = "A";
} else if (marks >= 75) {
  grade = "B";
} else if (marks >= 60) {
  grade = "C";
} else if (marks >= 40) {
  grade = "D";
} else {
  grade = "Fail";
}

console.log(grade);
```

Output:

```
B
```

Use this rule in interviews:

- One simple condition → ternary is fine.
- Multiple conditions or complex logic → prefer `if-else`.
- Readability is more important than writing fewer lines.

## Quick interview revision

| Question              | Remember                                                   |
| --------------------- | ---------------------------------------------------------- |
| Truthy/falsy          | How a value behaves in a Boolean condition                 |
| Falsy values          | `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN` |
| `if ("0")`            | Prints `Yes` because `"0"` is truthy                       |
| `if-else` vs `switch` | Conditions/ranges vs exact values                          |
| Ternary               | `condition ? trueValue : falseValue`                       |
| `Boolean([])`         | `true`                                                     |
| Largest of three      | Compare using `&&` and `>=`                                |
| Leap year             | Divisible by 400, or by 4 but not 100                      |
| Grading               | Check conditions from highest to lowest                    |
| Nested ternary        | Can reduce readability                                     |

## Practice quiz — try without running the code

1\. What is the output?

console.log(Boolean('false'));

false

true

undefined

Correct answer: true. 'false' is a non-empty string, so it is truthy.

2\. What is the output?

if (null) console.log('A'); else console.log('B');

A

B

Error

Correct answer: B. null is falsy, so the else block runs.

3\. What is the output?

console.log(Boolean(''), Boolean(0), Boolean({}));

false false false

false false true

true false true

Correct answer: false false true. Empty string and zero are falsy; an empty object is truthy.

4\. What is the output?

console.log(5 >= 5 ? 'Yes' : 'No');

Yes

No

Error

Correct answer: Yes. 5 >= 5 is true, so the first result is selected.

5\. Which is a leap year?

Choose a year.

1900

2023

2000

2100

Correct answer: 2000. 2000 is divisible by 400, so it is a leap year.

## Score: 5 / 5

Try again