# JavaScript Interview Prep — Topic 2: Data Types and Type Conversion

We'll learn each concept in simple English + Hindi, with code, output, and the reason behind the output. These are important for JavaScript and React interviews.

## First: What is a data type?

Simple English: A data type tells JavaScript what kind of value a variable contains, such as a number, text, true/false, or an object.

Hindi: Data type batata hai ki variable mein kis tarah ki value hai — number, text, true/false, ya object.

```
let age = 25;           // Number
let name = "Vibha";     // String
let isLearning = true;  // Boolean
```

JavaScript is dynamically typed, which means a variable can hold values of different types at different times.

```
let value = 10;       // Number
value = "Hello";      // Now String
console.log(value);
```

Output:

```
Hello
```

Hindi: JavaScript mein variable ka type pehle se fix karna zaroori nahi hai. Usmein baad mein doosre type ki value bhi store kar sakte hain.

## Q1. What are JavaScript's primitive data types?

JavaScript has 7 primitive types.

| Data type   | Simple meaning                        | Example         |
| ----------- | ------------------------------------- | --------------- |
| `String`    | Text                                  | `"Hello"`       |
| `Number`    | Numbers, including decimals and `NaN` | `25`, `3.14`    |
| `BigInt`    | Very large integers                   | `123n`          |
| `Boolean`   | True or false                         | `true`          |
| `Undefined` | A value has not been assigned         | `let x;`        |
| `Null`      | Intentionally represents no value     | `let x = null;` |
| `Symbol`    | A unique identifier                   | `Symbol("id")`  |

Simple English: Primitive values are basic values, not objects.

Hindi: Primitive data types basic values hote hain, jaise number, text, aur true/false.

```
console.log(typeof "Hello");
console.log(typeof 25);
console.log(typeof 123n);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof Symbol("id"));
```

Output:

```
string
number
bigint
boolean
undefined
object
symbol
```

Important interview trap: `typeof null` returns `"object"`. This is a long-standing JavaScript quirk, not the actual primitive type of `null`.

## Q2. Primitive vs non-primitive data types

Simple English:

- Primitive: basic values such as strings, numbers, booleans, `null`, and `undefined`.
- Non-primitive: objects, including arrays and functions.

Hindi:

- Primitive: simple values hote hain.
- Non-primitive: complex structures hote hain, jinmein properties ya elements ho sakte hain.

```
// Primitive
let a = 10;
let b = a;
b = 20;

console.log(a, b);

// Non-primitive (object)
let user1 = { name: "Vibha" };
let user2 = user1;
user2.name = "Asha";

console.log(user1.name, user2.name);
```

Output:

```
10 20
Asha Asha
```

Why?

- Primitive: `b = a` copies the value. Changing `b` doesn't change `a`.
- Object: `user2 = user1` copies the object reference. Both variables refer to the same object, so changing it through either variable is visible through both.

Hindi: Primitive mein value copy hoti hai. Object ke case mein reference copy hota hai, isliye dono variables same object ko access kar sakte hain.

Note: Functions are objects in the broader JavaScript model, but `typeof function() {}` returns `"function"`.

## Q3. What is the difference between `null` and `undefined`?

| `undefined`                              | `null`                                   |
| ---------------------------------------- | ---------------------------------------- |
| A value hasn't been assigned.            | Intentionally represents no value.       |
| JavaScript often gives it automatically. | Developers usually assign it explicitly. |
| `typeof` returns `"undefined"`.          | `typeof` returns `"object"`.             |

Code:

```
let a;
let b = null;

console.log(a);
console.log(b);

console.log(typeof a);
console.log(typeof b);
```

Output:

```
undefined
null
undefined
object
```

Simple English: `a` has no assigned value, so it is `undefined`. `b` was deliberately assigned `null` to represent an empty value.

Hindi: `undefined` ka matlab hai value assign nahi hui. `null` ka matlab hai humne jaanbujhkar empty value rakhi hai.

Interview tip: `null` and `undefined` are different values, even though both can represent an absence of value.

## Q4. What is the output of `typeof null`?

```
console.log(typeof null);
```

Output:

```
object
```

Simple English: This is a historical JavaScript quirk. Although `null` is a primitive value, `typeof null` returns `"object"`.

Hindi: `null` primitive type hai, lekin JavaScript mein purane design ke kaaran `typeof null` ka output `"object"` aata hai.

Remember this exact interview answer: `typeof null === "object"`.

## Q5. What is the output of `typeof NaN`?

```
console.log(typeof NaN);
```

Output:

```
number
```

Simple English: `NaN` means Not a Number. It represents an invalid numeric result, but its type is still `number`.

```
console.log(10 / "hello");
console.log(typeof (10 / "hello"));
```

Output:

```
NaN
number
```

Hindi: `NaN` ka matlab hai calculation se valid number nahi mila. Lekin JavaScript mein iska data type phir bhi `number` hi hota hai.

## Q6. What is the difference between implicit and explicit type conversion?

### Implicit conversion (type coercion)

JavaScript converts a value's type automatically.

```
console.log("5" + 2);
console.log("5" - 2);
```

Output:

```
52
3
```

Why?

- `"5" + 2` → `+` with a string performs concatenation, so the result is `"52"`.
- `"5" - 2` → subtraction converts `"5"` to the number `5`, so the result is `3`.

Hindi: Implicit conversion mein JavaScript khud type convert karta hai. `+` string ke saath concatenate karta hai, jabki `-` yahan string ko number mein convert karta hai.

### Explicit conversion

The developer manually converts a value using functions such as `Number()`, `String()`, or `Boolean()`.

```
console.log(Number("25"));
console.log(String(100));
console.log(Boolean(1));
```

Output:

```
25
100
true
```

Hindi: Explicit conversion mein hum khud decide karte hain ki value ko kis type mein convert karna hai.

## Q7. What are the outputs of `Number('123')`, `Number('abc')` and `String(123)`?

```
console.log(Number("123"));
console.log(Number("abc"));
console.log(String(123));
```

Output:

```
123
NaN
123
```

| Expression      | Result  | Reason                                         |
| --------------- | ------- | ---------------------------------------------- |
| `Number("123")` | `123`   | Numeric text becomes a number.                 |
| `Number("abc")` | `NaN`   | `"abc"` cannot be converted to a valid number. |
| `String(123)`   | `"123"` | The number becomes text.                       |

Hindi:

- `"123"` number mein convert ho sakta hai.
- `"abc"` valid number nahi hai, isliye `NaN` milta hai.
- `String(123)` number ko string bana deta hai.

Important: `NaN` is a special numeric value, not a string.

## Q8. What is the output of `console.log('5' + 2, '5' - 2)`?

```
console.log("5" + 2, "5" - 2);
```

Output:

```
52 3
```

Simple English:

1. `"5" + 2` → `"52"` because the `+` operator joins the string and number.
2. `"5" - 2` → `3` because `-` converts the string to a number.

Hindi: `+` string ko concatenate karta hai, isliye `"52"` milta hai. `-` string `"5"` ko number `5` mein convert karta hai, isliye `3` milta hai. `console.log()` dono results ke beech space deta hai.

Interview trick: `+` and `-` do not always handle strings the same way.

## Q9. How do you check whether a value is an array?

Use `Array.isArray()`.

```
console.log(Array.isArray([1, 2, 3]));
console.log(Array.isArray({ name: "Vibha" }));
console.log(Array.isArray("hello"));
```

Output:

```
true
false
false
```

Simple English: `Array.isArray()` returns `true` if the value is an array and `false` otherwise.

Hindi: Array check karne ke liye `Array.isArray()` use karte hain. Array hone par `true`, warna `false` milta hai.

Why not use `typeof`?

```
console.log(typeof [1, 2, 3]);
```

Output:

```
object
```

Arrays are objects in JavaScript, so `typeof` cannot reliably distinguish an array from a regular object.

Interview answer: Use `Array.isArray(value)`, not `typeof value === "array"`.

## Q10. What is the difference between `isNaN()` and `Number.isNaN()`?

This is a common tricky interview question.

### Example

```
console.log(isNaN("hello"));
console.log(Number.isNaN("hello"));

console.log(isNaN(NaN));
console.log(Number.isNaN(NaN));
```

Output:

```
true
false
true
true
```

### Why are the results different?

| Function              | How it works                                                                                  |
| --------------------- | --------------------------------------------------------------------------------------------- |
| `isNaN(value)`        | Converts the value to a number first, then checks whether it is `NaN`.                        |
| `Number.isNaN(value)` | Checks whether the value is already the numeric value `NaN`; it does not convert other types. |

Simple English: `isNaN("hello")` returns `true` because `"hello"` converts to `NaN`. But `Number.isNaN("hello")` returns `false` because `"hello"` is a string, not the numeric value `NaN`.

Hindi: `isNaN()` pehle value ko number mein convert karne ki koshish karta hai. `Number.isNaN()` conversion nahi karta; woh check karta hai ki value actual `NaN` hai ya nahi.

Interview tip: Prefer `Number.isNaN()` when you want to check specifically for the numeric `NaN` value without implicit conversion.

## Final revision: remember these 10 points

JavaScript has 7 primitive data types.

Arrays and objects are non-primitive values.

undefined means no value assigned; null means intentionally empty.

typeof null → "object".

typeof NaN → "number".

Implicit conversion happens automatically.

Explicit conversion uses Number(), String(), Boolean(), etc.

String + number may concatenate; subtraction usually converts to numbers.

Use Array.isArray(value) to check arrays.

Number.isNaN() checks NaN without converting the input.

## Test yourself

Try these 5 questions without running the code.

1\. What is the output?

console.log(typeof undefined);

null

undefined

object

boolean

Correct!

2\. What is the output?

console.log(Number('10') + 5);

"105"

15

NaN

Error

Correct!

3\. What is the output?

console.log(typeof NaN);

NaN

undefined

number

object

Correct!

4\. What is the output?

console.log(Array.isArray({}));

true

false

object

undefined

Correct!

5\. What is the output?

console.log(Number.isNaN('hello'));

true

false

NaN

TypeError

Correct!

## Score: 5/5
=======================================================================================================================================

JavaScript Data Types & Type Conversion — Interview Quiz

1. Basic: Which option lists all seven JavaScript primitive types?
   A. String, Number, Boolean, Undefined, Null, BigInt, Symbol  === A
   B. String, Number, Array, Object, Boolean, Null, Symbol
   C. String, Number, Function, Array, Boolean, Undefined, Null
   D. String, Integer, Float, Boolean, Object, Null, Symbol

2. Basic: What is the output of this code? let value = '12'; value = value * 2; console.log(value, typeof value);
   A. 24 string
   B. 24 number                                                 ====B
   C. '122' string
   D. NaN number

3. Intermediate: What is the output? console.log(Boolean('false'), Boolean(''), Boolean(0));
   A. false false false
   B. true true false
   C. false true true
   D. true false false                                        ====D

4. Intermediate: Select every expression that evaluates to the number 0 (not the string '0').
   A. Number('')          empty string convert to 0
   B. Number('0')         string convert to 0
   C. Number(undefined)   undefined give NAN not 0
   D. Number(null)        null converts to 0

5. Intermediate: What is the output? console.log('10' - '3' + '2');
   A. 102
   B. 5
   C. 9
   D. 72                   = D

6. Tricky: What is the output? console.log(typeof (0 / 0), Number.isNaN(0 / 0));
   A. undefined true
   B. NaN true
   C. number false
   D. number true            = 0/0 = NAN, typeof(NAN) = number, Number.isNaN(NaN) = true

7. In JavaScript, assigning an object to another variable and then changing one of its properties can affect what is observed through both variables.
   True = both variables refer to same object, so property mutation is visible througn references.
   False

8. Tricky: What is the output? console.log(isNaN(''), Number.isNaN(''));
   A. true false
   B. false true
   C. false false  = global isNaN converts empty string to numeric 0, while number.nan is not convert it
   D. true true

   ```
console.log(isNaN(''), Number.isNaN(''));
```

Output:

```
false false
```

### Why?

- `isNaN('')` → `false` `isNaN()` converts the empty string `''` to the number `0`. Since `0` is not NaN, it returns `false`.
- `Number.isNaN('')` → `false` `Number.isNaN()` does not convert the value. It checks whether the value itself is the special number `NaN`. An empty string is not `NaN`.

Remember for interviews:

| Function         | Converts the value? |
| ---------------- | ------------------- |
| `isNaN()`        | Yes                 |
| `Number.isNaN()` | No                  |

Example: `Number.isNaN(NaN)` returns `true`.

9. The expression typeof [] returns the string 'array' in JavaScript.
   True
   False