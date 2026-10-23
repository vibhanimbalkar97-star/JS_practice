## 7. Difference between `++x` and `x++`

Both increase `x` by `1`. The difference is the value returned by the expression.

- `++x` (pre-increment): Increases first, then returns the updated value.
- `x++` (post-increment): Returns the old value first, then increases the variable.

Hindi: `++x` में पहले increment होता है। `x++` में पहले पुरानी value मिलती है, फिर increment होता है।

Example:

```
let x = 5;
console.log(++x);

let y = 5;
console.log(y++);
console.log(y);
```

Output:

```
6
5
6
```

Remember: Even though `y++` returns `5`, the variable `y` becomes `6` after the expression.

## JavaScript Pre-Increment (`++x`) vs Post-Increment (`x++`)

Both operators increase a variable's value by 1. The difference is when the increment happens.

### 1. Pre-increment (`++x`)

First increase the value, then use it.

```
let x = 5;
console.log(++x);
```

Output:

```
6
```

How it works:

1. `x` is `5`.
2. `++x` increases it to `6`.
3. Prints `6`.

### 2. Post-increment (`x++`)

First use the current value, then increase it.

```
let x = 5;
console.log(x++);
console.log(x);
```

Output:

```
5
6
```

How it works:

1. `x++` returns the old value, `5`.
2. After that, `x` becomes `6`.
3. The next `console.log` prints `6`.

### 3. Tricky example

```
let x = 5;
let y = x++ + 2;

console.log(y, x);
```

Output:

```
7 6
```

Why?

- `x++` gives the old value `5`.
- `5 + 2 = 7`, so `y = 7`.
- Then `x` increases to `6`.

### Remember this trick

| Operator | Rule                | Example result when `x = 5` |
| -------- | ------------------- | --------------------------- |
| `++x`    | Increment first     | `6`                         |
| `x++`    | Use old value first | `5`                         |

Important: Both operators eventually increase `x` by 1. Only the value returned during the expression differs.

Here are 5 tricky JavaScript questions on pre-increment (`++x`) and post-increment (`x++`). Try to predict the output before submitting your answers. Answers are hidden for now.

### Quick reminder

- `++x` — increment first, then use the new value.
- `x++` — use the old value first, then increment.

## Increment Quiz

5/5 answered

Q1. What is the output?

let x = 5; console.log(x++, ++x);

A. 5 6

B. 5 7

C. 6 7

D. 6 6

Correct!

x++ returns 5, then x becomes 6. ++x makes x 7 and returns 7.

Q2. What is the output?

let a = 3; let b = a++ + ++a; console.log(b, a);

A. 7 5

B. 8 5

C. 8 4

D. 7 4

Correct!

a++ returns 3, then a becomes 4. ++a makes it 5 and returns 5. So b = 3 + 5 = 8, a = 5.

Q3. What is the output?

let n = 2; console.log(++n + n++);

A. 5

B. 6

C. 4

D. 7

Correct!

++n returns 3, then n++ returns 3 and increments n to 4. Output: 6.

Q4. What is the output?

let x = 4; let y = x++; let z = ++x; console.log(x, y, z);

A. 6 4 6

B. 5 4 5

C. 6 5 6

D. 5 4 6

Correct!

y gets 4, then x becomes 5. ++x changes x to 6 and z gets 6. Output: 6 4 6.

Q5. What is the output?

let x = 1; let result = x++ + x++ + ++x; console.log(result, x);

A. 6 4

B. 7 4

C. 6 3

D. 5 4

Correct!

First x++ returns 1, x becomes 2. Second x++ returns 2, x becomes 3. ++x changes x to 4 and returns 4. Result = 1 + 2 + 4 = 7; x = 4.

### Your score: 5/5

=======================================================================================================================================

## 2. Pre/post decrement

Decrement reduces a value by `1`.

```
let x = 5;

console.log(--x); // 4: decrease first
console.log(x--); // 4: use old value, then decrease
console.log(x);   // 3
```

Remember:

- `--x` → decrease first, then use.
- `x--` → use first, then decrease.
