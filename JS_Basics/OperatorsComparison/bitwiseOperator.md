## 4. Bitwise operators — next important topic

Bitwise operators work on the binary bits of numbers.

For example, `5 = 101` and `3 = 011` in binary.

| Operator | Meaning                    | Example   | Result |
| -------- | -------------------------- | --------- | ------ |
| `&`      | AND — both bits must be 1  | `5 & 3`   | `1`    |
| `\\|`    | OR — at least one bit is 1 | `5 \\| 3` | `7`    |
| `^`      | XOR — bits must differ     | `5 ^ 3`   | `6`    |
| `<<`     | Left shift                 | `5 << 1`  | `10`   |
| `>>`     | Signed right shift         | `5 >> 1`  | `2`    |

Example:

```
console.log(5 & 3); // 1
console.log(5 | 3); // 7
console.log(5 ^ 3); // 6
```

You don't need to master every bitwise operator immediately, but understand `&`, `|`, and `^` for tricky output questions.

## 5. Five tricky practice questions

Try these without running the code.

## Operators mini-quiz

5/5 answered

Q1. What is the output?

let x = 4; console.log(x++ + ++x);

A. 9

B. 10

C. 8

D. 7

Correct!

x++ returns 4, then x becomes 5; ++x makes x 6. Output: 10.

Q2. What is the output?

let x = 5; console.log(--x + x--);

A. 8

B. 9

C. 10

D. 7

Correct!

Output is 8: --x returns 4, then x-- returns 4. The original options' correct answer is A.

Q3. What is the output?

console.log(2 + 3 \* 2 \*\* 2);

A. 20

B. 14

C. 16

D. 25

Correct!

Exponentiation first: 2 \*\* 2 = 4. Then 3 \* 4 = 12. Finally 2 + 12 = 14.

Q4. What is the output?

console.log(5 ^ 3);

A. 1

B. 7

C. 6

D. 8

Correct!

5 is 101 and 3 is 011. XOR gives 110, which is 6.

Q5. What is the output?

let x = 3; x \*= 2 + 1; console.log(x);

A. 7

B. 9

C. 12

D. 6

Review the answer

The right-hand side is evaluated first: 2 + 1 = 3. Then x \*= 3 means x = 3 \* 3 = 9.

### Score: 4/5
=============================================================================================================================

Let's understand JavaScript Left Shift (`<<`) and Right Shift (`>>`) step by step.

## 1. Left Shift (`<<`)

Left shift moves the binary bits to the left. For positive numbers, each shift usually multiplies the number by 2.

Example:

```
console.log(5 << 1);
```

Step 1: Convert `5` to binary.

```
5 = 00000101
```

Step 2: Shift the bits left by `1` position.

```
Before: 00000101
After:  00001010
```

The empty position on the right is filled with `0`.

Step 3: Convert binary back to decimal.

```
00001010 = 8 + 2 = 10
```

Output: `10`

### What if we shift by 2?

```
console.log(5 << 2);
```

Move the bits left by two positions:

```
Before: 00000101  (5)
After:  00010100  (20)
```

Output: `20`

For positive numbers, shifting left by 2 multiplies by \\(2^2=4\\), so \\(5 \times 4=20\\).

## 2. Right Shift (`>>`)

Right shift moves the binary bits to the right. For positive numbers, each shift usually divides by 2 and rounds down.

Example:

```
console.log(5 >> 1);
```

Step 1: Convert `5` to binary.

```
5 = 00000101
```

Step 2: Shift the bits right by `1` position.

```
Before: 00000101
After:  00000010
```

The rightmost bit is removed, and the left side is filled with `0` for this positive number.

Step 3: Convert binary back to decimal.

```
00000010 = 2
```

Output: `2`

### What if we shift by 2?

```
console.log(20 >> 2);
```

```
20 = 00010100
       ↓ shift right twice
     00000101 = 5
```

Output: `5`

## 3. Compare them

| Code      | Calculation                | Output |
| --------- | -------------------------- | ------ |
| `5 << 1`  | \\(5 \times 2\\)           | `10`   |
| `5 << 2`  | \\(5 \times 4\\)           | `20`   |
| `5 >> 1`  | \\(\lfloor 5/2 \rfloor\\)  | `2`    |
| `20 >> 2` | \\(\lfloor 20/4 \rfloor\\) | `5`    |
| `7 >> 1`  | \\(\lfloor 7/2 \rfloor\\)  | `3`    |

The floor symbol means round down to the nearest integer.

## 4. Try these interview questions

Q1. What is the output?

console.log(3 << 2);

A. 6

B. 9

C. 12

D. 16

Q2. What is the output?

console.log(16 >> 2);

A. 8

B. 4

C. 2

D. 6

Q3. What is the output?

console.log(7 >> 1);

A. 4

B. 3

C. 3.5

D. 2

Check answers

Important interview note: JavaScript's `<<` and `>>` operators work with 32-bit integers. The multiply/divide shortcut is useful for positive integers, but can be misleading for negative numbers or values outside the 32-bit range.

## Binary positions and their values

Each binary position represents a power of 2. Count positions from right to left, starting at 0.

| Position | \\(2^{position}\\) | Value |
| -------- | ------------------ | ----- |
| 7        | \\(2^7\\)          | 128   |
| 6        | \\(2^6\\)          | 64    |
| 5        | \\(2^5\\)          | 32    |
| 4        | \\(2^4\\)          | 16    |
| 3        | \\(2^3\\)          | 8     |
| 2        | \\(2^2\\)          | 4     |
| 1        | \\(2^1\\)          | 2     |
| 0        | \\(2^0\\)          | 1     |

### Example: Binary `00000101`

## 0

7

## 0

6

## 0

5

## 0

4

## 0

3

## 1

2

## 0

1

## 1

0

Top row: binary bits · Bottom row: positions

Only positions with bit `1` contribute to the number:

\\[ 2^2 + 2^0 = 4 + 1 = 5 \\]

## How positions help with shifting

Left shift: `5 << 1`

```
Position:  4 3 2 1 0
Before:    0 0 1 0 1   = 5
After:     0 1 0 1 0   = 10
```

Each bit moves one position left.

Right shift: `5 >> 1`

```
Position:  4 3 2 1 0
Before:    0 0 1 0 1   = 5
After:     0 0 0 1 0   = 2
```

Each bit moves one position right; the bit falling off the right side is discarded.

Remember: Position `0` has value `1`, position `1` has value `2`, position `2` has value `4`, position `3` has value `8`, and so on.
=======================================================================================================================================

## JavaScript Bitwise Operators — Short Explanation

Bitwise operators work on the binary form (0s and 1s) of numbers. To solve questions, convert the numbers to binary, compare each bit, and convert the answer back to decimal.

### Step 1: Learn binary basics

| Decimal | Binary |
| ------- | ------ |
| 1       | `001`  |
| 2       | `010`  |
| 3       | `011`  |
| 4       | `100`  |
| 5       | `101`  |
| 6       | `110`  |
| 7       | `111`  |

### Step 2: Understand the main operators

1\. AND (`&`) — Both bits must be 1

```
console.log(5 & 3); // 1
```

```
  101  (5)
& 011  (3)
-----
  001  = 1
```

2\. OR (`|`) — At least one bit must be 1

```
console.log(5 | 3); // 7
```

```
  101
| 011
-----
  111  = 7
```

3\. XOR (`^`) — Bits must be different

```
console.log(5 ^ 3); // 6
```

```
  101
^ 011
-----
  110  = 6
```

Same bits → 0. Different bits → 1.

### Step 3: Learn shift operators

Left shift (`<<`) shifts bits left; for positive numbers, each shift usually multiplies by 2.

```
console.log(5 << 1); // 10
```

`101` → `1010` = `10`

Right shift (`>>`) shifts bits right; for positive numbers, each shift usually divides by 2 and rounds down.

```
console.log(5 >> 1); // 2
```

`101` → `10` = `2`

### Quick revision table

| Operator | Rule             | Example         |
| -------- | ---------------- | --------------- |
| `&`      | Both 1 → 1       | `5 & 3` = `1`   |
| `\\|`    | Either 1 → 1     | `5 \\| 3` = `7` |
| `^`      | Different → 1    | `5 ^ 3` = `6`   |
| `<<`     | Shift left       | `5 << 1` = `10` |
| `>>`     | Shift right      | `5 >> 1` = `2`  |
| `~`      | Flip all 32 bits | `~5` = `-6`     |

### Try these 3 questions

Q1. What is `6 & 3`?

1

2

3

Q2. What is `6 | 3`?

5

6

7

Q3. What is `6 ^ 3`?

4

5

7

Check answers

Q1: Correct! — `110 & 011 = 010`.

Q2: Correct! — `110 | 011 = 111`.

Q3: Correct! — `110 ^ 011 = 101`.

Interview tip: First write both numbers in binary, align the bits, apply the operator bit by bit, then convert the result to decimal. That method works for most basic bitwise questions.
===========================================================================

