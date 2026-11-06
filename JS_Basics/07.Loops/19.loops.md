JavaScript me **important loops** interview + practical coding ke liye ye hain:

| Loop          | Kab use kare                               | Important syntax          |
| ------------- | ------------------------------------------ | ------------------------- |
| `for`         | Jab iterations/count pata ho               | `for(let i=0; i<5; i++)`  |
| `while`       | Jab condition ke basis par loop chalana ho | `while(condition)`        |
| `do...while`  | Code **at least once** execute karna ho    | `do {} while(condition)`  |
| `for...of` ⭐  | Array/String ki **values** ke liye         | `for(const value of arr)` |
| `for...in` ⭐  | Object ki **keys/properties** ke liye      | `for(const key in obj)`   |
| `forEach()` ⭐ | Array ke har element par operation         | `arr.forEach(item => {})` |

### 1. `for` loop ⭐⭐⭐

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

Output:

```text
0
1
2
3
4
```

**Most important for coding problems:**
arrays, patterns, nested loops, numbers, searching, etc.

---

### 2. `while` loop

```js
let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}
```

Condition pehle check hoti hai.

---

### 3. `do...while`

```js
let i = 0;

do {
  console.log(i);
  i++;
} while (i < 5);
```

**Difference:**

```text
while      → condition → code
do while   → code → condition
```

Isliye `do...while` **minimum 1 time** execute hota hai.

---

### 4. `for...of` ⭐⭐⭐

Array ki **values** directly milti hain.

```js
const nums = [10, 20, 30];

for (const num of nums) {
  console.log(num);
}
```

Output:

```text
10
20
30
```

String ke saath bhi:

```js
for (const char of "Hello") {
  console.log(char);
}
```

---

### 5. `for...in` ⭐⭐⭐

Mostly **object ki keys** ke liye:

```js
const user = {
  name: "Ram",
  age: 25
};

for (const key in user) {
  console.log(key, user[key]);
}
```

Output:

```text
name Ram
age 25
```

**Yaad rakho:**

```text
for...of  → values
for...in  → keys
```

---

### 6. `forEach()` ⭐⭐⭐

Array ke har element ke liye function execute karta hai.

```js
const nums = [10, 20, 30];

nums.forEach((num, index) => {
  console.log(index, num);
});
```

Output:

```text
0 10
1 20
2 30
```

---

## Nested Loop ⭐⭐⭐

Ek loop ke andar doosra loop.

```js
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(i, j);
  }
}
```

**Mostly used for:**

* Pattern problems
* Matrix
* 2D arrays
* Grid
* Pair/comparison problems

Example:

```js
for (let i = 1; i <= 5; i++) {
  let row = "";

  for (let j = 1; j <= i; j++) {
    row += "* ";
  }

  console.log(row);
}
```

Output:

```text
*
* *
* * *
* * * *
* * * * *
```

### Interview ke liye priority

```text
⭐⭐⭐  for
⭐⭐⭐  for...of
⭐⭐⭐  for...in
⭐⭐⭐  forEach
⭐⭐⭐  nested for
⭐⭐   while
⭐⭐   do...while
```

for`, nested `for`, `for...of`, `forEach`, aur `for...in`


Yes. This is the easiest way to remember **which JavaScript loop to use and why**:

| Loop / Method   | Use for                            | Gets                 | Why use it?                                           | Why not use others?                                         |
| --------------- | ---------------------------------- | -------------------- | ----------------------------------------------------- | ----------------------------------------------------------- |
| `for` ⭐⭐⭐       | Array / numbers / fixed iterations | Index + value        | Maximum control; `break`, `continue`, index available | `forEach` can't `break`; `for...of` less control            |
| `while` ⭐⭐      | Condition-based repetition         | Whatever you define  | When number of iterations isn't known                 | `for` is cleaner when counter is involved                   |
| `do...while` ⭐  | Condition + **at least once**      | Whatever you define  | Executes code at least once                           | `while` is better if execution may be zero times            |
| `for...of` ⭐⭐⭐  | Array / String / iterable          | **Values**           | Cleanest way to get values                            | `for...in` gives keys/indexes                               |
| `for...in` ⭐⭐⭐  | Object                             | **Keys**             | Easy object property iteration                        | `for...of` doesn't directly work on normal objects          |
| `forEach()` ⭐⭐⭐ | Array                              | Value + index        | Simple action on every element                        | Can't use `break`, `continue`, or `return` to stop the loop |
| `map()` ⭐⭐⭐     | Array                              | New array            | Transform every element                               | Don't use if you don't need a new transformed array         |
| `filter()` ⭐⭐⭐  | Array                              | New array            | Select elements based on condition                    | `map()` transforms; it doesn't select/remove                |
| `reduce()` ⭐⭐⭐  | Array                              | Single result        | Sum, count, group, calculate                          | Overkill for simple iteration                               |
| `find()` ⭐⭐⭐    | Array                              | First matching value | Need only the first match                             | `filter()` returns **all** matches                          |
| `some()` ⭐⭐     | Array                              | `true/false`         | Check if **at least one** matches                     | `filter()` creates an unnecessary array                     |
| `every()` ⭐⭐    | Array                              | `true/false`         | Check if **all** match                                | `filter()` is unnecessary                                   |

### 🧠 Super-short rule

```text
Need index/control?       → for
Need condition loop?      → while
Must run once?            → do...while

Need array values?        → for...of
Need object keys?         → for...in

Just do something?        → forEach()
Transform values?         → map()
Select values?            → filter()
One final result?         → reduce()
Find first match?         → find()
Any match?                → some()
All match?                → every()
```

### ⭐ One important interview point

Don't think:

> "`for...in` = only object"

Think:

> **`for...in` = keys/indexes**

So technically:

```js
// Object → keys
for (const key in obj) {}

// Array → indexes
for (const index in arr) {}
```

But for arrays, **prefer `for...of` when you need values**.
