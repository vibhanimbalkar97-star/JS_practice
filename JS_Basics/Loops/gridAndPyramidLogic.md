The easiest way to understand nested loops is to think of **rows and columns**.

* **Outer loop** → Rows
* **Inner loop** → Columns

Think of a chessboard:

```text
Row 1 → □ □ □ □
Row 2 → □ □ □ □
Row 3 → □ □ □ □
```

The outer loop moves to the next row, and the inner loop fills each column in that row.

---

## Example 1: 3 × 3 Grid

```js
for (let row = 1; row <= 3; row++) {
  let output = "";

  for (let col = 1; col <= 3; col++) {
    output += "* ";
  }

  console.log(output);
}
```

### Output

```text
* * *
* * *
* * *
```

### Flow

```text
row = 1
   col = 1 → *
   col = 2 → *
   col = 3 → *

row = 2
   col = 1 → *
   col = 2 → *
   col = 3 → *

row = 3
   col = 1 → *
   col = 2 → *
   col = 3 → *
```

---

## Example 2: Print Row and Column Numbers

```js
for (let row = 1; row <= 3; row++) {
  for (let col = 1; col <= 3; col++) {
    console.log(`Row: ${row}, Column: ${col}`);
  }
}
```

### Output

```text
Row: 1, Column: 1
Row: 1, Column: 2
Row: 1, Column: 3
Row: 2, Column: 1
Row: 2, Column: 2
Row: 2, Column: 3
Row: 3, Column: 1
Row: 3, Column: 2
Row: 3, Column: 3
```

---

## Example 3: Number Grid

```js
for (let row = 1; row <= 3; row++) {
  let output = "";

  for (let col = 1; col <= 3; col++) {
    output += col + " ";
  }

  console.log(output);
}
```

### Output

```text
1 2 3
1 2 3
1 2 3
```

---

## Example 4: Multiplication Table Grid

```js
for (let row = 1; row <= 3; row++) {
  let output = "";

  for (let col = 1; col <= 3; col++) {
    output += row * col + " ";
  }

  console.log(output);
}
```

### Output

```text
1 2 3
2 4 6
3 6 9
```

---

## Easy Logic

```text
Outer Loop (Rows)

1
2
3

↓

For each row

↓

Run Inner Loop (Columns)

1 2 3
```

So:

```text
Row 1
   ↓
Column 1
Column 2
Column 3

↓

Row 2
   ↓
Column 1
Column 2
Column 3

↓

Row 3
   ↓
Column 1
Column 2
Column 3
```

---

## Interview Rule

Whenever you hear:

* Grid
* Matrix
* Pattern
* Chess Board
* Sudoku
* Calendar

👉 **Think Nested Loops**

```text
Outer Loop  = Rows
Inner Loop  = Columns
```

This is the core logic behind almost every pattern-printing question asked in JavaScript interviews.


The pyramid pattern becomes easy if you remember **3 things**:

1. **Spaces**
2. **Stars**
3. **Rows**

---

# Example

Print:

```text
    *
   ***
  *****
 *******
*********
```

Suppose `n = 5`.

---

## Step 1: Count the Rows

Outer loop = Rows

```js
for (let row = 1; row <= 5; row++) {

}
```

---

## Step 2: Print Spaces

Formula:

```text
Spaces = n - row
```

| Row | Spaces |
| --- | ------ |
| 1   | 4      |
| 2   | 3      |
| 3   | 2      |
| 4   | 1      |
| 5   | 0      |

Code

```js
for (let space = 1; space <= n - row; space++) {
    output += " ";
}
```

---

## Step 3: Print Stars

Formula:

```text
Stars = 2 × row - 1
```

| Row | Stars |
| --- | ----- |
| 1   | 1     |
| 2   | 3     |
| 3   | 5     |
| 4   | 7     |
| 5   | 9     |

Code

```js
for (let star = 1; star <= 2 * row - 1; star++) {
    output += "*";
}
```

---

## Complete Code

```js
let n = 5;

for (let row = 1; row <= n; row++) {
  let output = "";

  // Spaces
  for (let space = 1; space <= n - row; space++) {
    output += " ";
  }

  // Stars
  for (let star = 1; star <= 2 * row - 1; star++) {
    output += "*";
  }

  console.log(output);
}
```

### Output

```text
    *
   ***
  *****
 *******
*********
```

---

# Visual Logic

### Row 1

```text
Spaces = 4
Stars  = 1

    *
```

---

### Row 2

```text
Spaces = 3
Stars  = 3

   ***
```

---

### Row 3

```text
Spaces = 2
Stars  = 5

  *****
```

---

### Row 4

```text
Spaces = 1
Stars  = 7

 *******
```

---

### Row 5

```text
Spaces = 0
Stars  = 9

*********
```

---

# Formula to Remember

```text
Rows    = n

Spaces  = n - row

Stars   = 2 × row - 1
```

---

# Easy Memory Trick

Think of building a pyramid:

```text
Row 1 → More spaces, fewer stars

    *

Row 2 → One less space, two more stars

   ***

Row 3

  *****

Row 4

 *******

Row 5

*********
```

Notice the pattern:

* ⭐ **Spaces decrease by 1**
* ⭐ **Stars increase by 2**

---

## Interview Tip

For most star pattern questions, first identify:

1. **How many rows?**
2. **How many spaces in each row?**
3. **How many stars in each row?**

If you can answer these three questions, you can solve almost every pyramid or triangle pattern.


Yes. Once you understand the **normal pyramid**, most pyramid questions are just changing the **space and star formulas**.

## 1. Normal Pyramid

```text
    *
   ***
  *****
 *******
*********
```

For `n = 5`:

```js
let n = 5;

for (let row = 1; row <= n; row++) {
  let output = "";

  // spaces
  for (let space = 1; space <= n - row; space++) {
    output += " ";
  }

  // stars
  for (let star = 1; star <= 2 * row - 1; star++) {
    output += "*";
  }

  console.log(output);
}
```

### Formula

```text
spaces = n - row
stars  = 2 * row - 1
```

---

# 2. Reverse Pyramid ⭐

### Output

```text
*********
 *******
  *****
   ***
    *
```

Here the **stars decrease** and **spaces increase**.

```js
let n = 5;

for (let row = 1; row <= n; row++) {
  let output = "";

  // spaces increase
  for (let space = 1; space < row; space++) {
    output += " ";
  }

  // stars decrease
  for (let star = 1; star <= 2 * (n - row) + 1; star++) {
    output += "*";
  }

  console.log(output);
}
```

### Formula

```text
spaces = row - 1
stars  = 2 * (n - row) + 1
```

---

# 3. Half Pyramid

```text
*
**
***
****
*****
```

Very simple:

```js
for (let row = 1; row <= 5; row++) {
  let output = "";

  for (let star = 1; star <= row; star++) {
    output += "*";
  }

  console.log(output);
}
```

### Formula

```text
stars = row
```

---

# 4. Reverse Half Pyramid

```text
*****
****
***
**
*
```

```js
for (let row = 5; row >= 1; row--) {
  let output = "";

  for (let star = 1; star <= row; star++) {
    output += "*";
  }

  console.log(output);
}
```

### Formula

```text
stars = row
```

But outer loop goes **5 → 1**.

---

# 5. Right-Aligned Half Pyramid

```text
    *
   **
  ***
 ****
*****
```

```js
let n = 5;

for (let row = 1; row <= n; row++) {
  let output = "";

  for (let space = 1; space <= n - row; space++) {
    output += " ";
  }

  for (let star = 1; star <= row; star++) {
    output += "*";
  }

  console.log(output);
}
```

Formula:

```text
spaces = n - row
stars  = row
```

---

# 6. Reverse Right-Aligned Pyramid

```text
*****
 ****
  ***
   **
    *
```

```js
let n = 5;

for (let row = 1; row <= n; row++) {
  let output = "";

  for (let space = 1; space < row; space++) {
    output += " ";
  }

  for (let star = 1; star <= n - row + 1; star++) {
    output += "*";
  }

  console.log(output);
}
```

Formula:

```text
spaces = row - 1
stars  = n - row + 1
```

---

# 7. Diamond ⭐⭐⭐

This is basically:

**Normal Pyramid + Reverse Pyramid**

```text
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
```

```js
let n = 5;

// Top pyramid
for (let row = 1; row <= n; row++) {
  let output = "";

  for (let space = 1; space <= n - row; space++) {
    output += " ";
  }

  for (let star = 1; star <= 2 * row - 1; star++) {
    output += "*";
  }

  console.log(output);
}

// Bottom reverse pyramid
for (let row = n - 1; row >= 1; row--) {
  let output = "";

  for (let space = 1; space <= n - row; space++) {
    output += " ";
  }

  for (let star = 1; star <= 2 * row - 1; star++) {
    output += "*";
  }

  console.log(output);
}
```

Notice we use:

```js
n - 1
```

for the second part so the middle row isn't printed twice.

---

# 8. Hollow Pyramid ⭐⭐

Instead of filling all stars:

```text
    *
   * *
  *   *
 *     *
*********
```

Logic:

* First star
* Last star
* Last row → all stars

```js
let n = 5;

for (let row = 1; row <= n; row++) {
  let output = "";

  for (let col = 1; col <= 2 * n - 1; col++) {

    if (
      col === n - row + 1 ||
      col === n + row - 1 ||
      row === n
    ) {
      output += "*";
    } else {
      output += " ";
    }
  }

  console.log(output);
}
```

This one is a little more advanced.

---

# 9. Number Pyramid

```text
    1
   123
  12345
 1234567
123456789
```

```js
let n = 5;

for (let row = 1; row <= n; row++) {
  let output = "";

  for (let space = 1; space <= n - row; space++) {
    output += " ";
  }

  for (let num = 1; num <= 2 * row - 1; num++) {
    output += num;
  }

  console.log(output);
}
```

---

# 10. Same Number Pyramid

```text
    1
   222
  33333
 4444444
555555555
```

```js
let n = 5;

for (let row = 1; row <= n; row++) {
  let output = "";

  for (let space = 1; space <= n - row; space++) {
    output += " ";
  }

  for (let num = 1; num <= 2 * row - 1; num++) {
    output += row;
  }

  console.log(output);
}
```

---

# The Important Formulas 🧠

Don't memorize every program. Learn these patterns:

| Pattern       |  Spaces |         Stars |
| ------------- | ------: | ------------: |
| Half Pyramid  |     `0` |         `row` |
| Reverse Half  |     `0` |     `n-row+1` |
| Right Half    | `n-row` |         `row` |
| Reverse Right | `row-1` |     `n-row+1` |
| Full Pyramid  | `n-row` |     `2*row-1` |
| Reverse Full  | `row-1` | `2*(n-row)+1` |

---

# How to Solve Any Pyramid Question

When you see a pattern, **don't immediately write code**.

First make a table.

For normal pyramid:

```text
n = 5

Row     Spaces     Stars
1          4         1
2          3         3
3          2         5
4          1         7
5          0         9
```

Then ask:

### 1. What happens to spaces?

```text
4 → 3 → 2 → 1 → 0
```

So:

```js
n - row
```

### 2. What happens to stars?

```text
1 → 3 → 5 → 7 → 9
```

So:

```js
2 * row - 1
```

**That's the main skill in pattern questions.** Don't memorize the complete code; identify the relationship between `row`, `spaces`, and `stars`.

### Practice order

I'd recommend solving them in this order:

```text
1. Half Pyramid
2. Reverse Half Pyramid
3. Right-Aligned Half Pyramid
4. Reverse Right-Aligned Pyramid
5. Full Pyramid
6. Reverse Full Pyramid
7. Diamond
8. Hollow Pyramid
9. Number Pyramid
10. Hollow Diamond
```

Once you can derive the **row → spaces → stars** relationship, most pyramid questions become straightforward nested-loop problems.
