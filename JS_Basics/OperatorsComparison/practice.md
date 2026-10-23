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

Correct! \`==\` converts the string to a number; \`===\` compares types too.

2\. What is the output?

console.log(null ?? "Hi");

null

Hi

undefined

Correct! \`??\` uses the fallback when the left value is null or undefined.

3\. What is the output?

let a = 4; console.log(a++);

4

5

undefined

Correct! Post-increment returns the old value first. Afterward, \`a\` becomes 5.

4\. What is the output?

console.log(false || 0 || "JS");

false

0

JS

Correct! \`||\` returns the first truthy operand. Both false and 0 are falsy.

5\. What is the output?

const nums = [1, 2]; console.log([...nums, 3]);

[1, 2]

[1, 2, 3]

[[1, 2], 3]

Correct! Spread expands the array elements into the new array.

Submit answers for review

Current score: 5/5

==============================================================================================================================

JavaScript: Operators and Comparisons

1. Basic: What is the output? console.log(7 == "7", 7 === "7");
   A. true true
   B. false false
   C. false true
   D. true false

2. Basic: What is the output? console.log(8 !== "8", 8 != "8");
   A. true false
   B. true true
   C. false false
   D. false true

3. Basic: What is the output? console.log(!0, !"hello", !!42);
   A. false true false
   B. true false true
   C. true true true
   D. false false true

4. Intermediate: What is the output? console.log("" || "fallback", "" ?? "fallback");
   A. an empty string, then fallback
   B. fallback fallback
   C. fallback, then an empty string
   D. an empty string, then an empty string

5. Intermediate: What is the output? let count = 3; let result = count++ + 2; console.log(result, count);
   A. 6 3
   B. 6 4
   C. 5 4
   D. 5 3

6. Intermediate: Select every expression that evaluates to the number 0.
   A. Number("3")
   B. Number(" ")
   C. Number(undefined)
   D. Number(false)

7. Tricky: What is the output? console.log(1 + 2 + "3");
   A. 123
   B. "33"
   C. 6
   D. 33

8. In JavaScript, the expression 2 ** 3 ** 2 is evaluated as (2 ** 3) ** 2.
   True
   False

9. In JavaScript, the rest parameter in a function declaration collects the remaining arguments into an array.
   True
   False

10. Tricky: What is the output? console.log(null == undefined, null === undefined);
   A. true true
   B. true false
   C. false false
   D. false true

   `&` and `|` are bitwise operators. They work on the binary (0s and 1s) form of numbers.

```
console.log(5 & 3, 5 | 3);
```

Convert numbers to binary:

- `5` = `101`
- `3` = `011`

1\. Bitwise AND (`&`) — result is `1` only when both bits are `1`.

```
  101
& 011
-----
  001  → 1
```

2\. Bitwise OR (`|`) — result is `1` when at least one bit is `1`.

```
  101
| 011
-----
  111  → 7
```

Output:

```
1 7
```

Easy trick to remember:

- `&` = Both must be `1`.
- `|` = At least one must be `1`.
===================================================================================================================================


## 1. Topics you should know

\| Topic | What to learn | Priority | |---|---|---| | Pre/post increment | `++x` vs `x++` | Must know | | Pre/post decrement | `--x` vs `x--` | Must know | | Compound assignment | `+=`, `-=`, `*=`, `/=` | Must know | | Operator precedence | Which operator executes first | Must know | | Short-circuit evaluation | `&&`, `||`, `??` | Must know | | Bitwise operators | `&`, `|`, `^`, `~`, `<<`, `>>` | Important | | Comparison and coercion | `==`, `===`, type conversion | Must know | | Ternary operator | `condition ? a : b` | Must know | | `typeof`, `in`, `instanceof` | Other useful operators | Important |



```

