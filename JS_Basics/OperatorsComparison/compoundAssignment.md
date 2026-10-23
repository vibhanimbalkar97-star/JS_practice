## JavaScript Compound Assignment — Rules to Solve Questions

### Rule 1: Know what each operator means

| Operator  | Equivalent   |
| --------- | ------------ |
| `x += 3`  | `x = x + 3`  |
| `x -= 3`  | `x = x - 3`  |
| `x *= 3`  | `x = x * 3`  |
| `x /= 3`  | `x = x / 3`  |
| `x %= 3`  | `x = x % 3`  |
| `x **= 3` | `x = x ** 3` |

### Rule 2: Calculate the right-hand side first

```
let x = 5;
x += 2 * 3;
console.log(x); // 11
```

First `2 * 3 = 6`, then `5 + 6 = 11`.

### Rule 3: Assignment expressions return the assigned value

```
let x = 4;
x *= 2;
console.log(x); // 8
```

The expression `x *= 2` changes `x` to `8` and evaluates to `8`.

### Rule 4: Chained assignments associate right to left

```
let a = 2;
let b = 3;
a += b *= 2;
console.log(a, b); // 8 6
```

1. `b *= 2` → `b = 6`.
2. `a += 6` → `a = 8`.

### Rule 5: If the same variable appears twice, track every update

```
let x = 4;
x += x *= 2;
console.log(x); // 16
```

1. Inner `x *= 2` → `x = 8`.
2. Outer `x += 8` → `x = 16`.

### Rule 6: Follow operator precedence on the right-hand side

```
let x = 3;
x *= 2 + 1 ** 2;
console.log(x); // 9
```

1. `1 ** 2 = 1`.
2. `2 + 1 = 3`.
3. `x = 3 * 3 = 9`.

### Rule 7: Don't confuse assignment with comparison

```
let x = 5;
x += 2;       // assignment: x becomes 7
console.log(x === 7); // true: comparison
```

- `=` assigns a value.
- `==` compares with type conversion.
- `===` compares without type conversion.

## The safest method for interview questions

1. Write the initial value of every variable.
2. Evaluate the right-hand side using normal operator precedence.
3. Follow assignment order, especially in chained expressions.
4. Update the variable immediately after each assignment.
5. Check the final value before predicting the output.

Important: For expressions involving the same variable multiple times, don't guess based on visual order. Track each operation and its returned value carefully.

## JavaScript Compound Assignment Operators

Compound assignment means perform an operation and assign the result back to the same variable.

### 1. Simple examples

| Operator | Same as          | Example          | Result |
| -------- | ---------------- | ---------------- | ------ |
| `+=`     | `x = x + value`  | `x = 5; x += 2`  | `7`    |
| `-=`     | `x = x - value`  | `x = 5; x -= 2`  | `3`    |
| `*=`     | `x = x * value`  | `x = 5; x *= 2`  | `10`   |
| `/=`     | `x = x / value`  | `x = 10; x /= 2` | `5`    |
| `%=`     | `x = x % value`  | `x = 10; x %= 3` | `1`    |
| `**=`    | `x = x ** value` | `x = 2; x **= 3` | `8`    |

Example:

```
let x = 5;
x += 3;

console.log(x); // 8
```

`x += 3` means `x = x + 3`, so `5 + 3 = 8`.

## 2. Tricky questions — try yourself

## Compound assignment quiz

5/5 answered

Q1. What is the output?

let x = 5; x \*= 2 + 3; console.log(x);

A. 13

B. 25

C. 15

D. 10

Correct!

Calculate 2 + 3 first. Then x = 5 \* 5 = 25.

Q2. What is the output?

let x = 10; x %= 4; console.log(x);

A. 2

B. 4

C. 2.5

D. 0

Correct!

10 divided by 4 leaves a remainder of 2.

Q3. What is the output?

let x = 4; x += x \*= 2; console.log(x);

A. 12

B. 16

C. 8

D. 10

Correct answer: 12

Important: assignments associate right to left. x \*= 2 executes first, making x = 8; then x += 8 makes x = 16.

Q4. What is the output?

let x = 3; x \*\*= 2 + 1; console.log(x);

A. 9

B. 27

C. 12

D. 6

Correct!

2 + 1 = 3, so x = 3 \*\* 3 = 27.

Q5. What is the output?

let x = 10; x -= 3; x /= 7; console.log(x);

A. 1

B. 7

C. 7/10

D. 10

Correct!

First x becomes 7. Then 7 / 7 = 1.

### Score: 4/5

Try again

Interview tip: For most compound assignment questions, rewrite the operator into its longer form, then calculate carefully. Be extra careful when the right-hand side also changes the same variable.