# JavaScript Interview Topic 3: Operators and Comparisons

Operators are symbols used to perform operations on values and variables.

Hindi: Operators ऐसे symbols होते हैं जिनसे हम values पर calculation, comparison और logical checks करते हैं।

Example: `+`, `-`, `===`, `&&`, `||`

## 1. Difference between `==` and `===`

- `==` (loose equality): Compares values after possible type conversion.
- `===` (strict equality): Compares both value and data type without converting types.

Hindi: `==` type convert कर सकता है, जबकि `===` value और type दोनों check करता है।

```
console.log(5 == "5");
console.log(5 === "5");
```

Output:

```
true
false
```

Why? `"5"` is a string, while `5` is a number.

Interview tip: Prefer `===` in most cases because it avoids unexpected type conversions.

## 2. Difference between `!=` and `!==`

- `!=`: Checks inequality after possible type conversion.
- `!==`: Checks whether the value or type differs, without type conversion.

Hindi: `!=` type conversion कर सकता है, जबकि `!==` strict comparison करता है।

```
console.log(5 != "5");
console.log(5 !== "5");
```

Output:

```
false
true
```

Why? With `!=`, both values become comparable as numbers. With `!==`, their types differ.

## 3. Difference between `&&`, `||` and `!`

\| Operator | Meaning | Hindi | |---|---|---| | `&&` | AND — both conditions must be truthy | दोनों conditions सही होनी चाहिए | | `||` | OR — at least one condition must be truthy | कम से कम एक condition सही होनी चाहिए | | `!` | NOT — reverses truthiness | True को false और false को true करता है |

Example:

```
console.log(true && false);
console.log(true || false);
console.log(!true);
```

Output:

```
false
true
false
```

Important: In JavaScript, `&&` and `||` can return the actual operand value, not just `true` or `false`.

```
console.log("Hello" && 10); // 10
console.log(0 || 10);       // 10
```

## 4. What is short-circuit evaluation?

English: JavaScript stops evaluating an expression as soon as the result is already determined.

Hindi: जब result पहले ही तय हो जाता है, JavaScript आगे की expression को execute नहीं करता।

With `&&`, a falsy left value stops evaluation. With `||`, a truthy left value stops evaluation.

```
console.log(0 && "Hello");
console.log("Hi" || "Hello");
```

Output:

```
0
Hi
```

Why?

- `0 && "Hello"` — `0` is falsy, so JavaScript returns `0` without evaluating the right side.
- `"Hi" || "Hello"` — `"Hi"` is truthy, so JavaScript returns `"Hi"`.

A common practical use:

```
let username = "";
let displayName = username || "Guest";

console.log(displayName);
```

Output: `Guest`

## 5. What is the output?

```
console.log(0 || 10, 0 ?? 10);
```

Output:

```
10 0
```

Explanation:

- `0 || 10` returns `10` because `0` is falsy.
- `0 ?? 10` returns `0` because `??` only uses the right value when the left value is `null` or `undefined`.

Hindi: `||` सभी falsy values को fallback मानता है, लेकिन `??` सिर्फ `null` और `undefined` पर fallback करता है।

## 6. Difference between `||` and `??`

\| Value on left | `value || "Default"` | `value ?? "Default"` | |---|---|---| | `0` | `"Default"` | `0` | | `""` | `"Default"` | `""` | | `false` | `"Default"` | `false` | | `null` | `"Default"` | `"Default"` | | `undefined` | `"Default"` | `"Default"` |

Example:

```
let age = 0;

console.log(age || 18);
console.log(age ?? 18);
```

Output:

```
18
0
```

When to use which?

- Use `||` when any falsy value should trigger a fallback.
- Use `??` when only missing values (`null` or `undefined`) should trigger a fallback.

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

## 9. Difference between spread (`...`) and rest (`...`) syntax

Both use three dots, but their purpose depends on where they are used.

- Spread: Expands an iterable or object's properties.
- Rest: Collects remaining values into an array or object.

Hindi: Spread values को फैलाता है; Rest बची हुई values को इकट्ठा करता है।

### Spread example

```
const first = [1, 2];
const second = [...first, 3, 4];

console.log(second);
```

Output:

```
[1, 2, 3, 4]
```

### Rest example

```
function add(first, ...others) {
  console.log(first);
  console.log(others);
}

add(10, 20, 30, 40);
```

Output:

```
10
[20, 30, 40]
```

Here, `...others` collects all remaining arguments into an array.

Interview tip: Same `...` syntax, different purpose based on context.

## 10. What is the output?

```
console.log(2 ** 3 + 1);
```

Output:

```
9
```

Explanation:

1. `2 ** 3` means \\(2^3 = 8\\).
2. Then `8 + 1 = 9`.

Exponentiation has higher precedence than addition.

## Quick revision for interviews

\| Operator | Remember | |---|---| | `==` | Equality with possible type conversion | | `===` | Strict equality: value and type | | `!=` | Inequality with possible type conversion | | `!==` | Strict inequality | | `&&` | Returns first falsy value, or the last operand if all are truthy | | `||` | Returns first truthy value, or the last operand if all are falsy | | `!` | Reverses truthiness | | `??` | Fallback only for `null` or `undefined` | | `++x` | Increment, then return new value | | `x++` | Return old value, then increment | | Spread `...` | Expands | | Rest `...` | Collects |

## Test yourself

Try these five questions without looking back at the explanations.

Choose one answer for each question, then check your score.

1\. What is the output?

console.log("0" == 0, "0" === 0);

true true

true false

false false

2\. What is the output?

console.log(null ?? "Hi");

null

Hi

undefined

3\. What is the output?

let a = 4; console.log(a++);

4

5

undefined

4\. What is the output?

console.log(false || 0 || "JS");

false

0

JS

5\. What is the output?

const nums = [1, 2]; console.log([...nums, 3]);

[1, 2]

[1, 2, 3]

[[1, 2], 3]

Submit answers for review