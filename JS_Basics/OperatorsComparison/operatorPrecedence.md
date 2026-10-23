## 8. Explain operator precedence with an example

English: Operator precedence determines which operation is performed first when an expression contains multiple operators.

Hindi: एक expression में कई operators हों, तो कौन-सा पहले execute होगा, यह operator precedence तय करता है।

```
console.log(2 + 3 * 4);
```

Output:

```
14
```

Why? Multiplication (`*`) has higher precedence than addition (`+`).

```
console.log((2 + 3) * 4);
```

Output:

```
20
```

Parentheses `()` force the expression inside them to be evaluated first.

Another important example:

```
console.log(2 ** 3 ** 2);
```

Output:

```
512
```

Exponentiation `**` is right-associative, so it is evaluated as `2 ** (3 ** 2)` → `2 ** 9` → `512`.

## 3. Operator precedence

Some operators execute before others.

```
console.log(2 + 3 * 4); // 14
```

Multiplication happens first: `3 * 4 = 12`, then `2 + 12 = 14`.

Parentheses can change the order:

```
console.log((2 + 3) * 4); // 20