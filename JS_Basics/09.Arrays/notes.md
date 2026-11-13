# JavaScript Arrays and Array Methods – Complete Beginner to Advanced Guide

JavaScript Arrays are one of the most important topics for frontend, React, MERN stack and JavaScript interviews.

We will learn from basic to advanced, including:

- Array creation and accessing elements.
- Indexing, updating, adding and deleting elements.
- All important array methods.
- `for`, `for...of`, `forEach`, `map`, `filter`, `reduce`.
- Searching and sorting arrays.
- Destructuring, spread and rest operators.
- Shallow copy vs deep copy.
- Nested arrays and multidimensional arrays.
- Callback functions and higher-order methods.
- Tricky interview output questions.
- Common mistakes and revision checklist.

I'll explain what, how, why and what happens if we don't follow the rule, with short examples.

















































# 33. Array Destructuring

Destructuring means extracting array values into separate variables.

Without destructuring:

```
let fruits = ["Apple", "Banana", "Mango"];

let first = fruits[0];
let second = fruits[1];
```

With destructuring:

```
let fruits = ["Apple", "Banana", "Mango"];

let [first, second, third] = fruits;

console.log(first);  // Apple
console.log(second); // Banana
console.log(third);  // Mango
```

### Skip elements

```
let arr = [10, 20, 30, 40];

let [first, , third] = arr;

console.log(first); // 10
console.log(third); // 30
```

The empty position skips the second element.

### Default values

```
let arr = [10];

let [a, b = 50] = arr;

console.log(a); // 10
console.log(b); // 50
```

Why?

When the second element is `undefined`, the default value `50` is used.

### Rest operator with destructuring

```
let arr = [10, 20, 30, 40, 50];

let [first, second, ...remaining] = arr;

console.log(first);     // 10
console.log(second);    // 20
console.log(remaining); // [30, 40, 50]
```

The rest variable collects all remaining elements into a new array.

### Swapping variables

A very popular interview question:

```
let a = 10;
let b = 20;

[a, b] = [b, a];

console.log(a); // 20
console.log(b); // 10
```

No temporary variable is required.

# 34. Spread Operator (...) with Arrays

Spread means expanding elements of an array.

### Copy array

```
let a = [10, 20, 30];

let b = [...a];

console.log(b); // [10, 20, 30]
```

### Combine arrays

```
let a = [1, 2];
let b = [3, 4];

let result = [...a, ...b];

console.log(result); // [1, 2, 3, 4]
```

### Add elements while copying

```
let arr = [20, 30];

let result = [10, ...arr, 40];

console.log(result); // [10, 20, 30, 40]
```

### Spread vs Rest

Both use `...`, but their purpose is different.

| Spread                                | Rest                                         |
| ------------------------------------- | -------------------------------------------- |
| Expands elements                      | Collects elements                            |
| Used when passing or combining values | Used in function parameters or destructuring |
| `[...arr]`                            | `[first, ...remaining]`                      |

Example of rest in a function:

```
function add(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(add(10, 20, 30)); // 60
```

Here, rest collects all arguments into an array called `numbers`.

# 35. Shallow Copy vs Deep Copy

This is an important advanced interview concept.

### First understand reference

```
let a = [10, 20, 30];

let b = a;

b[0] = 100;

console.log(a); // [100, 20, 30]
console.log(b); // [100, 20, 30]
```

Why did `a` also change?

Because `b = a` does not create a separate array. Both variables refer to the same array object.

Reference example

a and b

Both point to the same array

[100, 20, 30]

One shared array in memory

### Shallow copy

Using spread:

```
let a = [10, 20, 30];

let b = [...a];

b[0] = 100;

console.log(a); // [10, 20, 30]
console.log(b); // [100, 20, 30]
```

Now the arrays are separate.

But there is a problem with nested objects.

```
let a = [
  { name: "Raj" },
  { name: "Priya" }
];

let b = [...a];

b[0].name = "Amit";

console.log(a[0].name); // Amit
console.log(b[0].name); // Amit
```

Why?

Spread makes a shallow copy:

- Outer array is copied.
- Nested objects are still shared references.

### Deep copy

Deep copy creates independent copies of nested objects too.

For suitable data containing only structured-clone-supported values:

```
let a = [
  { name: "Raj" },
  { name: "Priya" }
];

let b = structuredClone(a);

b[0].name = "Amit";

console.log(a[0].name); // Raj
console.log(b[0].name); // Amit
```

`structuredClone()` supports many built-in types, including arrays, objects, Maps and Sets, but not every JavaScript value (for example, functions).

### Quick comparison

| Concept              | Meaning                         |
| -------------------- | ------------------------------- |
| `b = a`              | Same reference                  |
| `b = [...a]`         | Shallow copy                    |
| `b = a.slice()`      | Shallow copy                    |
| `structuredClone(a)` | Deep clone for supported values |

Interview trick: Spread does not automatically mean deep copy.

# 36. Nested Arrays – Accessing Elements

An array can contain other arrays.

```
let arr = [
  [10, 20],
  [30, 40],
  [50, 60]
];
```

Access elements:

```
console.log(arr[0]);    // [10, 20]
console.log(arr[0][0]); // 10
console.log(arr[0][1]); // 20
console.log(arr[1][0]); // 30
```

Why `arr[1][0]`?

- `arr[1]` gets the second inner array: `[30, 40]`.
- `[0]` gets its first element: `30`.

### Nested loops

```
let arr = [
  [10, 20],
  [30, 40]
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}
```

Output:

```
10
20
30
40
```

Why two loops?

- Outer loop accesses each inner array.
- Inner loop accesses each value inside that inner array.

# 37. Array Chaining

Chaining means using multiple array methods one after another.

Example:

```
let numbers = [1, 2, 3, 4, 5, 6];

let result = numbers
  .filter(num => num % 2 === 0)
  .map(num => num * 10);

console.log(result);
// [20, 40, 60]
```

Understand the execution:

Original array\
[1, 2, 3, 4, 5, 6]

filter() – Keep even numbers

[2, 4, 6]

map() – Multiply by 10

[20, 40, 60]

### Practical interview example

Find the total salary of employees whose salary is greater than 30,000.

```
let employees = [
  { name: "Raj", salary: 25000 },
  { name: "Priya", salary: 50000 },
  { name: "Amit", salary: 40000 }
];

let total = employees
  .filter(emp => emp.salary > 30000)
  .map(emp => emp.salary)
  .reduce((acc, salary) => acc + salary, 0);

console.log(total); // 90000
```

Logic:

1. `filter()` selects employees earning more than 30,000.
2. `map()` extracts their salaries.
3. `reduce()` calculates the total.

# 38. Sparse Arrays and Empty Slots

A sparse array contains empty slots between its indexes.

```
let arr = [10, , 30];

console.log(arr.length); // 3
console.log(arr[1]);     // undefined
```

But an empty slot is not exactly the same as an element containing `undefined`.

```
let a = [10, , 30];
let b = [10, undefined, 30];

console.log(1 in a); // false
console.log(1 in b); // true
```

Why?

- `a` has an empty slot at index 1.
- `b` has an actual element with value `undefined`.

### How array methods handle empty slots

```
let arr = [10, , 30];

arr.forEach(x => console.log(x));
```

Output:

```
10
30
```

`forEach()` skips empty slots.

But:

```
let result = arr.map(x => x * 2);

console.log(result);
// [20, empty, 60]
```

`map()` preserves the empty slot.

Important: `for...of` reads an empty slot as `undefined`.

```
for (let value of arr) {
  console.log(value);
}
```

Output:

```
10
undefined
30
```

Interview rule: Empty slots, `undefined` elements and `null` are not interchangeable.

# 39. Array Mutation vs Non-Mutation

Mutation means changing the original array.

This is particularly important in React.

### Mutating methods

| Method         | What it does           |
| -------------- | ---------------------- |
| `push()`       | Adds at end            |
| `pop()`        | Removes from end       |
| `shift()`      | Removes from start     |
| `unshift()`    | Adds at start          |
| `splice()`     | Adds/removes/replaces  |
| `sort()`       | Sorts original         |
| `reverse()`    | Reverses original      |
| `fill()`       | Fills original         |
| `copyWithin()` | Copies within original |

### Non-mutating methods

| Method         | What it does                       |
| -------------- | ---------------------------------- |
| `map()`        | Creates transformed array          |
| `filter()`     | Creates filtered array             |
| `slice()`      | Creates extracted array            |
| `concat()`     | Creates combined array             |
| `flat()`       | Creates flattened array            |
| `flatMap()`    | Creates mapped and flattened array |
| `toSorted()`   | Creates sorted array               |
| `toReversed()` | Creates reversed array             |
| `toSpliced()`  | Creates modified copy              |
| `with()`       | Creates copy with replaced element |

Note: Methods like `find()`, `includes()`, `some()` and `reduce()` also don't mutate the original array by themselves.

# 40. Array Methods in React

In React, we generally avoid directly modifying state arrays.

Incorrect:

```
const [numbers, setNumbers] = useState([10, 20, 30]);

function addNumber() {
  numbers.push(40);
  setNumbers(numbers);
}
```

Why is this problematic?

You modified the same array reference. React may not detect a new state value.

Correct:

```
const [numbers, setNumbers] = useState([10, 20, 30]);

function addNumber() {
  setNumbers([...numbers, 40]);
}
```

### Remove an element

```
function removeNumber() {
  setNumbers(numbers.filter(num => num !== 20));
}
```

### Update an element

```
function updateNumber() {
  setNumbers(
    numbers.map(num => num === 20 ? 200 : num)
  );
}
```

### Add at the beginning

```
setNumbers(prev => [5, ...prev]);
```

Interview point: React state updates should use new array references instead of directly mutating existing state.

# 41. Array.isArray() – Check Array Type

```
console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray("hello"));   // false
console.log(Array.isArray({}));        // false
console.log(Array.isArray(null));      // false
```

Why not use `typeof`?

```
console.log(typeof []); // "object"
```

Because `typeof` cannot distinguish arrays from ordinary objects.

Use `Array.isArray()`.

# 42. Array Iterators – keys(), values(), entries()

These methods return iterators.

### keys()

Returns indexes.

```
let arr = ["A", "B", "C"];

console.log([...arr.keys()]);
// [0, 1, 2]
```

### values()

Returns values.

```
console.log([...arr.values()]);
// ["A", "B", "C"]
```

### entries()

Returns index-value pairs.

```
console.log([...arr.entries()]);
// [[0, "A"], [1, "B"], [2, "C"]]
```

Using `entries()`:

```
let fruits = ["Apple", "Banana"];

for (let [index, fruit] of fruits.entries()) {
  console.log(index, fruit);
}
```

Output:

```
0 Apple
1 Banana
```

# 43. Array-like Objects vs Arrays

An array-like object looks similar to an array but is not necessarily an actual array.

```
let obj = {
  0: "Apple",
  1: "Banana",
  length: 2
};

console.log(Array.isArray(obj)); // false
```

It has indexes and a `length` property, but it does not have normal array methods.

Convert it into an array:

```
let arr = Array.from(obj);

console.log(arr);
// ["Apple", "Banana"]
```

Example with function arguments:

```
function show() {
  let arr = Array.from(arguments);
  console.log(arr);
}

show(10, 20, 30);
// [10, 20, 30]
```

In modern JavaScript, rest parameters are often preferred:

```
function show(...args) {
  console.log(args);
}

show(10, 20, 30);
```

# 44. Important Advanced Sorting Examples

### Sort strings alphabetically

```
let names = ["Vibha", "Amit", "Priya"];

names.sort();

console.log(names);
// ["Amit", "Priya", "Vibha"]
```

### Sort objects by salary

```
let employees = [
  { name: "Raj", salary: 30000 },
  { name: "Priya", salary: 50000 },
  { name: "Amit", salary: 25000 }
];

employees.sort((a, b) => a.salary - b.salary);

console.log(employees);
```

### Sort strings without case sensitivity

```
let names = ["banana", "Apple", "cherry"];

names.sort((a, b) => a.localeCompare(b, undefined, {
  sensitivity: "base"
}));

console.log(names);
```

`localeCompare()` compares strings according to language-sensitive sorting rules.

# 45. Important Array Methods – Complete Quick Reference

This is your interview revision table.

| Method            | Purpose                               | Changes original? |
| ----------------- | ------------------------------------- | ----------------- |
| `push()`          | Add at end                            | Yes               |
| `pop()`           | Remove from end                       | Yes               |
| `shift()`         | Remove from start                     | Yes               |
| `unshift()`       | Add at start                          | Yes               |
| `splice()`        | Add/remove/replace                    | Yes               |
| `slice()`         | Extract/copy                          | No                |
| `concat()`        | Combine arrays                        | No                |
| `includes()`      | Check value                           | No                |
| `indexOf()`       | Find first index                      | No                |
| `lastIndexOf()`   | Find last index                       | No                |
| `join()`          | Array to string                       | No                |
| `reverse()`       | Reverse                               | Yes               |
| `toReversed()`    | Reverse copy                          | No                |
| `sort()`          | Sort                                  | Yes               |
| `toSorted()`      | Sort copy                             | No                |
| `at()`            | Access element                        | No                |
| `map()`           | Transform                             | No                |
| `filter()`        | Select elements                       | No                |
| `reduce()`        | Accumulate                            | No                |
| `find()`          | First matching element                | No                |
| `findIndex()`     | First matching index                  | No                |
| `findLast()`      | Last matching element                 | No                |
| `findLastIndex()` | Last matching index                   | No                |
| `some()`          | At least one matches                  | No                |
| `every()`         | All match                             | No                |
| `flat()`          | Flatten nested arrays                 | No                |
| `flatMap()`       | Map and flatten one level             | No                |
| `fill()`          | Fill values                           | Yes               |
| `copyWithin()`    | Copy within array                     | Yes               |
| `Array.from()`    | Create array from iterable/array-like | Creates new       |
| `Array.of()`      | Create array from arguments           | Creates new       |
| `Array.isArray()` | Check array type                      | No                |
| `toSpliced()`     | Modified copy                         | No                |
| `with()`          | Replace element in copy               | No                |
| `keys()`          | Get index iterator                    | No                |
| `values()`        | Get value iterator                    | No                |
| `entries()`       | Get index-value iterator              | No                |

# 46. Most Important Interview Tricky Rules

Remember these output questions.

1\. Array reference

```
let a = [1, 2, 3];
let b = a;

b.push(4);

console.log(a);
```

Answer: `[1, 2, 3, 4]`

Why? Both variables refer to the same array.

2\. Slice

```
let a = [10, 20, 30, 40];

console.log(a.slice(1, 3));
```

Answer: `[20, 30]`

Why? End index is excluded.

3\. Splice

```
let a = [10, 20, 30, 40];

console.log(a.splice(1, 2));
console.log(a);
```

Answer:

```
[20, 30]
[10, 40]
```

Why? First output contains removed elements.

4\. Map without return

```
let arr = [1, 2, 3];

console.log(arr.map(x => {
  x * 2;
}));
```

Answer: `[undefined, undefined, undefined]`

Why? No explicit return.

5\. Filter

```
let arr = [1, 2, 3, 4];

console.log(arr.filter(x => x > 2));
```

Answer: `[3, 4]`

6\. Reduce

```
let arr = [1, 2, 3];

console.log(arr.reduce((a, b) => a + b));
```

Answer: `6`

Why? First element becomes the initial accumulator when no initial value is supplied.

7\. Sort

```
let arr = [100, 5, 20];

console.log(arr.sort());
```

Answer: `[100, 20, 5]`

Why? Default sorting is string-based.

8\. Empty array

```
console.log([].every(x => x > 0));
console.log([].some(x => x > 0));
```

Answer:

```
true
false
```

9\. Includes and indexOf

```
let arr = [NaN];

console.log(arr.includes(NaN));
console.log(arr.indexOf(NaN));
```

Answer:

```
true
-1
```

10\. Length

```
let arr = [10, 20, 30];

arr.length = 1;

console.log(arr);
```

Answer: `[10]`

# 47. How to Think While Solving Array Coding Questions

When you see an array problem, first identify what the question is asking.

| Question requirement       | Think about                    |
| -------------------------- | ------------------------------ |
| Add an element             | `push()`, `unshift()`          |
| Remove an element          | `pop()`, `shift()`, `splice()` |
| Copy some elements         | `slice()`                      |
| Search an element          | `includes()`, `indexOf()`      |
| Find one matching element  | `find()`                       |
| Find all matching elements | `filter()`                     |
| Transform every element    | `map()`                        |
| Calculate total            | `reduce()`                     |
| Find maximum/minimum       | `reduce()` or `Math.max()`     |
| Check at least one         | `some()`                       |
| Check all                  | `every()`                      |
| Remove duplicates          | `Set`                          |
| Reverse an array           | `reverse()`                    |
| Sort numbers               | `sort((a,b) => a-b)`           |
| Flatten nested arrays      | `flat()`                       |
| Count occurrences          | `reduce()`                     |
| Combine arrays             | `concat()` or spread           |
| Extract values             | Destructuring                  |

### Example: Remove duplicates

```
let arr = [1, 2, 2, 3, 3, 4];

let result = [...new Set(arr)];

console.log(result);
// [1, 2, 3, 4]
```

Why?

`Set` stores unique values. Spread converts the Set back into an array.

### Example: Find second largest number

```
let arr = [10, 20, 50, 30, 50];

let unique = [...new Set(arr)];

unique.sort((a, b) => b - a);

console.log(unique[1]); // 30
```

Why use `Set` first?

Because the largest number `50` occurs twice. We need the second-largest distinct number, which is `30`.

# 48. Final JavaScript Array Interview Checklist

Use this checklist to track your preparation.

Your learning progress

# 0/41

0% completed

1\. Array fundamentals

What is an array?

Array creation: [], new Array(), Array.of(), Array.from()

Zero-based indexing

Accessing and updating elements

length property

Array.isArray()

Mixed data types and duplicate values

2\. Adding, removing and copying

push(), pop(), shift(), unshift()

splice() and slice()

concat() and join()

reverse() and sort()

includes(), indexOf(), lastIndexOf()

at() and negative indexes

3\. Array iteration

for loop

for...of and for...in

forEach()

keys(), values(), entries()

Callback function and callback parameters

4\. Higher-order methods

map()

filter()

reduce()

find() and findIndex()

findLast() and findLastIndex()

some() and every()

Method chaining

5\. Advanced concepts

flat() and flatMap()

fill() and copyWithin()

toSorted(), toReversed(), toSpliced(), with()

Array destructuring

Spread and rest operators

Shallow copy and deep copy

Reference vs value

Sparse arrays and empty slots

Nested and multidimensional arrays

Array-like objects and iterators

6\. Interview and React

Sorting numbers and objects

Frequency counting using reduce()

Remove duplicates using Set

Find maximum and second largest

Array immutability in React

Updating, adding and removing React state arrays

Reset checklist

## My recommendation for your interview preparation

Don't try to memorize all methods in one day. Follow this order:

1. Day 1: Array basics, indexing, push/pop, shift/unshift, slice/splice.
2. Day 2: Loops, forEach, map and filter.
3. Day 3: find, some, every and reduce.
4. Day 4: Sorting, searching, flat, flatMap and chaining.
5. Day 5: Destructuring, spread, references, shallow/deep copy.
6. Day 6: Solve array coding problems from easy to advanced.
7. Day 7: Interview output questions and revision.

The most important methods to master for React/MERN interviews are `map()`, `filter()`, `reduce()`, `find()`, `some()`, `every()`, `sort()`, `slice()` and `splice()`.

Next, I can give you a JavaScript Array interview practice quiz, starting with beginner output questions and gradually increasing to tricky and advanced questions.