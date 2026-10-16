## What is `return` in JavaScript?

The `return` keyword sends a value back from a function and stops the function's execution.

### Example 1: Using `return`

```
function add(a, b) {
  return a + b;
}

let result = add(2, 3);
console.log(result);
```

Output: `5`

How it works:

1. `add(2, 3)` receives `2` and `3`.
2. `return a + b` sends back `5`.
3. The returned value is stored in `result`.

### Example 2: Without `return`

```
function add(a, b) {
  console.log(a + b);
}

let result = add(2, 3);
console.log(result);
```

Output:

```
5
undefined
```

Why? The function prints `5`, but it doesn't return a value. JavaScript returns `undefined` by default.

### Example 3: `return` stops execution

```
function test() {
  console.log("Hello");
  return 10;
  console.log("World");
}

console.log(test());
```

Output:

```
Hello
10
```

`"World"` doesn't print because execution stops at `return`.

### Example 4: Returning a value for later use

```
function square(n) {
  return n * n;
}

console.log(square(4) + 5);
```

Output: `21`

The function returns `16`, and then JavaScript adds `5`.

Remember for interviews:

- `console.log()` → displays a value.
- `return` → gives a value back to the code that called the function.
- No `return` value → the function returns `undefined` by default.