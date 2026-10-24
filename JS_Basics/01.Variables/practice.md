# JavaScript Interview Preparation — Topic 1: Variables

हम Variables को basic से interview level तक सीखेंगे। हर question के लिए आपको simple English explanation, Hindi explanation, code, output और output का reason मिलेगा।

## Q1. What is a variable? Explain declaration, initialization and assignment.

### Simple English

A variable is a named container used to store a value that a program can use.

Hindi: Variable एक नाम है जिसके माध्यम से हम program में कोई value store करके उसे बाद में use कर सकते हैं।

```
// 1. Declaration: create a variable
let age;

// 2. Initialization: give it its first value
age = 25;

// 3. Access: read the value
console.log(age);

// 4. Assignment / reassignment: give it another value
age = 26;
console.log(age);
```

Output:

```
25
26
```

| Term           | Simple meaning          | Example             |
| -------------- | ----------------------- | ------------------- |
| Declaration    | Variable declare करना   | `let age;`          |
| Initialization | पहली value देना         | `age = 25;`         |
| Assignment     | Variable को value देना  | `age = 25;`         |
| Reassignment   | बाद में value बदलना     | `age = 26;`         |
| Access         | Value पढ़ना या use करना | `console.log(age);` |

Interview tip: Declaration और initialization अलग-अलग statements में हो सकते हैं, या एक ही statement में।

```
let score = 100;
```

यहाँ `score` declare भी हुआ और initialize भी।

## Q2. What is the difference between `var`, `let` and `const`?

### Simple English

These are three ways to declare variables in JavaScript. They differ in scope, redeclaration and reassignment.

### Hindi explanation

तीनों का use variable बनाने के लिए होता है, लेकिन इनके rules अलग हैं।

| Feature                           | `var`                      | `let`           | `const`         |
| --------------------------------- | -------------------------- | --------------- | --------------- |
| Scope                             | Function scope             | Block scope     | Block scope     |
| Redeclaration in same scope       | Allowed                    | Not allowed     | Not allowed     |
| Reassignment                      | Allowed                    | Allowed         | Not allowed     |
| Initialization during declaration | Optional                   | Optional        | Required        |
| Hoisting behavior                 | Initialized as `undefined` | TDZ में रहता है | TDZ में रहता है |

### Example

```
var name = "A";
name = "B";
console.log(name); // B

let age = 25;
age = 26;
console.log(age); // 26

const country = "India";
console.log(country); // India
```

Output:

```
B
26
India
```

अगर आप `const country = "India";` के बाद `country = "USA";` लिखेंगी, तो `TypeError` आएगा।

Interview tip: Modern JavaScript में default रूप से `const` इस्तेमाल करें जब reassignment की जरूरत न हो। जब value बदलनी हो, तब `let` इस्तेमाल करें। `var` को समझना जरूरी है क्योंकि पुराने code में यह मिलता है।

## Q3. Can you redeclare and reassign `var`, `let` and `const`?

### Simple English

- Redeclaration: Declaring the same variable name again in the same scope.
- Reassignment: Giving an already declared variable a new value.

### Example 1: `var`

```
var x = 10;
var x = 20; // Redeclaration allowed
x = 30;     // Reassignment allowed

console.log(x);
```

Output:

```
30
```

### Example 2: `let`

```
let y = 10;
// let y = 20; // SyntaxError: duplicate declaration

y = 30; // Reassignment allowed
console.log(y);
```

Output:

```
30
```

### Example 3: `const`

```
const z = 10;
// const z = 20; // SyntaxError
// z = 30;       // TypeError

console.log(z);
```

Output:

```
10
```

यहाँ commented lines execute नहीं होतीं। अगर उन्हें uncomment करके चलाएँ, तो error आएगा।

Hindi में याद रखें: `var` में redeclaration और reassignment दोनों allowed हैं। `let` में केवल reassignment allowed है। `const` में न redeclaration और न reassignment allowed है, उसी scope में।

## Q4. What happens when you access a `let` variable before declaration?

### Simple English

A `let` variable is in the Temporal Dead Zone (TDZ) from the beginning of its scope until its declaration is executed. Accessing it during this period throws a `ReferenceError`.

### Hindi explanation

`let` variable scope में मौजूद होता है, लेकिन declaration वाली line execute होने से पहले उसे access नहीं कर सकते।

```
console.log(age);
let age = 25;
```

Output:

```
ReferenceError: Cannot access 'age' before initialization
```

यहाँ program error पर रुक जाता है; `25` print नहीं होता।

Correct code:

```
let age = 25;
console.log(age);
```

Output:

```
25
```

Interview tip: `let` और `const` hoisted होते हैं, लेकिन declaration से पहले access नहीं किए जा सकते। इस अवधि को TDZ कहते हैं।

## Q5. What is the output?

```
console.log(a);
var a = 10;
```

### Answer

```
undefined
```

### Why?

JavaScript में `var` declaration hoist होती है। इसे समझने के लिए code को ऐसे सोचें:

```
var a;             // Declaration
console.log(a);    // undefined
a = 10;            // Assignment
```

Hindi: Variable की declaration ऊपर उपलब्ध हो जाती है, लेकिन उसकी value `10` वाली assignment अभी execute नहीं हुई है। इसलिए `undefined` मिलता है।

Important: JavaScript source code literally इसी तरह rewrite नहीं करता; यह hoisting समझने का simplified model है।

## Q6. What is the output?

```
console.log(a);
let a = 10;
```

### Answer

```
ReferenceError: Cannot access 'a' before initialization
```

### Why?

`let` declaration से पहले `a` को access करना allowed नहीं है, क्योंकि वह TDZ में है।

```
let a = 10;
console.log(a);
```

Output:

```
10
```

Q5 और Q6 का मुख्य अंतर: `var` को declaration से पहले access करने पर `undefined` मिलता है; `let` को declaration से पहले access करने पर `ReferenceError` मिलता है।

## Q7. What is the output?

```
const x = 10;
x = 20;
console.log(x);
```

### Answer

```
TypeError: Assignment to constant variable.
```

### Why?

`const` variable को दोबारा assign नहीं कर सकते। इसलिए error दूसरी line पर आता है और `console.log(x)` execute नहीं होता।

Hindi: `const` से declare किए गए variable को दूसरी value नहीं दे सकते।

अगर value बदलनी है, तो `let` इस्तेमाल करें:

```
let x = 10;
x = 20;
console.log(x);
```

Output:

```
20
```

## Q8. What is the output?

```
var a = 1;
var a = 2;
console.log(a);
```

### Answer

```
2
```

### Why?

`var` को same scope में redeclare कर सकते हैं। दूसरी declaration में `a` की value `2` assign होती है।

Hindi: पहली value `1` थी, लेकिन दूसरी assignment ने उसे `2` कर दिया।

```
var a = 1;
var a = 2;
var a = 3;

console.log(a);
```

Output:

```
3
```

हर बार नई value assign होने से variable की current value बदलती है।

## Q9. What is the output?

```
let a = 1;
let a = 2;
```

### Answer

```
SyntaxError: Identifier 'a' has already been declared
```

### Why?

एक ही scope में `let` variable को दोबारा declare नहीं कर सकते।

Correct version:

```
let a = 1;
a = 2;
console.log(a);
```

Output:

```
2
```

याद रखें: Redeclaration और reassignment अलग हैं। `let a = 2` दूसरी declaration है, जबकि `a = 2` केवल reassignment है।

## Q10. Why is `const` used if objects declared with `const` can still change?

### Simple English

`const` prevents reassignment of the variable binding. It does not make an object or array immutable.

### Hindi explanation

जब आप किसी object को `const` से declare करती हैं, तो उस variable को किसी दूसरे object से replace नहीं कर सकतीं। लेकिन existing object की properties बदल सकती हैं।

### Example 1: Object property can change

```
const user = {
  name: "Vibha",
  age: 25
};

user.age = 26;

console.log(user);
```

Output:

```
{ name: "Vibha", age: 26 }
```

यह काम करता है क्योंकि हमने `user` variable को reassign नहीं किया, केवल object की property बदली है।

### Example 2: Reassigning the object causes an error

```
const user = {
  name: "Vibha"
};

user = { name: "Priya" };

console.log(user);
```

Output:

```
TypeError: Assignment to constant variable.
```

### Example 3: Arrays can also change

```
const numbers = [10, 20];

numbers.push(30);

console.log(numbers);
```

Output:

```
[10, 20, 30]
```

`push()` existing array को modify करता है; वह `numbers` variable को किसी नए array से reassign नहीं करता।

Interview answer: "`const` prevents reassignment of the binding, but objects and arrays stored in that binding can still be mutated. If I need an immutable object, I need additional techniques such as `Object.freeze()` or immutable update patterns."

ध्यान दें: `Object.freeze()` shallow होता है—यह nested objects को अपने-आप freeze नहीं करता।

## Quick revision: Variables के सबसे महत्वपूर्ण rules

| Code                          | Result           |
| ----------------------------- | ---------------- |
| `var a = 10; a = 20;`         | Allowed          |
| `let a = 10; a = 20;`         | Allowed          |
| `const a = 10; a = 20;`       | Error            |
| `var a = 1; var a = 2;`       | Allowed          |
| `let a = 1; let a = 2;`       | Error            |
| `console.log(a); var a = 10;` | `undefined`      |
| `console.log(a); let a = 10;` | `ReferenceError` |
| `const obj = {}; obj.x = 1;`  | Allowed          |

## अब खुद को test करें

इन 5 interview questions के answers बिना code run किए predict करें।

1\. What is the output?

var x = 5; var x = 8; console.log(x);

5

8

undefined

SyntaxError

2\. What happens here?

let score = 10; let score = 20;

10 prints

20 prints

SyntaxError

ReferenceError

3\. What is the output?

const user = { age: 20 }; user.age = 21; console.log(user.age);

20

21

TypeError

undefined

4\. What is the output?

console.log(a); var a = 7;

7

null

undefined

ReferenceError

5\. What happens here?

console.log(x); let x = 5;

5

undefined

ReferenceError

SyntaxError

Check my answers with explanations

जब Variables का यह topic clear हो जाए, अगला topic Data Types and Type Conversion रखें। उसके बाद Operators, Conditions, Loops और Functions इसी तरीके से practice करें।

=========================================================================

You got 3 out of 5 correct! 🎯 Great work. Let's understand each answer in simple English and Hindi.

Your quiz score

# 3/5

Q1, Q2 and Q3 are correct. Q4 and Q5 need correction.

## Q1. `var` hoisting and redeclaration

```
console.log(a);
var a = 10;
var a = 20;
console.log(a);
```

Your answer: `undefined, 20` — Correct!

Output:

```
undefined
20
```

Simple English: JavaScript hoists the `var a` declaration to the top, but the value assignment stays where it is. So the first log sees `undefined`. Later, `a` becomes `10` and then `20`.

Hindi: `var` ka declaration pehle process hota hai, lekin value assignment apni jagah par hoti hai. Isliye pehle `undefined` aur last mein `20` print hota hai.

Remember:

- `var` can be redeclared.
- `var a = 10; var a = 20;` is allowed.

## Q2. `let` and block scope

```
let x = 10;

{
  let x = 20;
  console.log(x);
}

console.log(x);
```

Your answer: `20, 10` — Correct!

Output:

```
20
10
```

Simple English: The inner `let x = 20` belongs only to the `{ }` block. It does not change the outer `x`.

Hindi: `{ }` ke andar wala `x` alag variable hai. Woh sirf block ke andar available hai. Bahar wala `x` ab bhi `10` hai.

Remember: `let` is block-scoped.

## Q3. Local `var` and hoisting

```
var a = 10;

function test() {
  console.log(a);
  var a = 20;
}

test();
```

Your answer: `undefined` — Correct!

Output:

```
undefined
```

Simple English: Inside the function, `var a` is hoisted to the top of the function. This local `a` shadows the outer `a`. When `console.log(a)` runs, the local variable exists but has not yet received the value `20`.

You can think of it like this:

```
var a = 10;

function test() {
  var a;             // local declaration is hoisted
  console.log(a);    // undefined
  a = 20;
}

test();
```

Hindi: Function ke andar `var a` ka apna local variable banta hai. Woh outer `a = 10` ko shadow karta hai. Log hone ke time local `a` mein value assign nahi hui, isliye `undefined` aata hai.

Interview tip: Scope determines which variable is accessed; hoisting explains why the local `var` is already declared.

## Q4. `var` inside a `for` loop

```
for (var i = 0; i < 3; i++) {}

console.log(i);
```

Your answer: `2` — Incorrect

Correct output: `3`

Simple English: The loop runs with `i = 0`, `i = 1`, and `i = 2`. After the last iteration, `i++` makes `i` equal to `3`. The condition `3 < 3` is false, so the loop stops. Because `var` is not block-scoped, `i` is still accessible outside the loop.

Hindi: Loop `i = 0, 1, 2` par chalta hai. Last iteration ke baad `i++` se value `3` ho jaati hai. Phir `3 < 3` false hota hai aur loop ruk jaata hai. `var` block-scoped nahi hai, isliye bahar `i` ki value `3` milti hai.

Remember: The last value printed is not necessarily the last value used inside the loop.

## Q5. `let` inside a `for` loop

```
for (let i = 0; i < 3; i++) {}

console.log(i);
```

Your answer: `3` — Incorrect

Correct output: `ReferenceError`

```
ReferenceError: i is not defined
```

Simple English: The variable `i` declared with `let` is scoped to the `for` loop. Outside that loop, `i` cannot be accessed, so JavaScript throws a `ReferenceError`.

Hindi: `let i` sirf `for` loop ke scope mein available hai. Loop ke bahar `i` access nahi kar sakte. Isliye `ReferenceError` aata hai.

Remember: `let` is block-scoped; `var` is function-scoped (or global-scoped when declared at the top level of a classic script).

## Quick revision table

| Concept                   | Key rule                                             |
| ------------------------- | ---------------------------------------------------- |
| `var` hoisting            | Declaration is hoisted; initial value is `undefined` |
| `var` redeclaration       | Allowed                                              |
| `let` block scope         | Separate variable inside `{ }`                       |
| Local `var` in a function | Can shadow an outer variable                         |
| `var` in a loop           | Accessible outside the loop                          |
| `let` in a loop           | Not accessible outside the loop                      |

Interview memory trick: `var` can escape a block; `let` stays inside its block.

Next, practise the difference between `var`, `let`, and `const` with tricky hoisting and scope questions.

==================================================================================================================================================================
Let's practise 5 more tricky JavaScript Variables questions. Try to answer without running the code. 😊

## Variables quiz — Level 2

5 questions

Select one answer for each question, then submit.

Q1. What is the output?

console.log(x); let x = 5;

undefined

5

ReferenceError

SyntaxError

Correct!

let is in the Temporal Dead Zone before its declaration. Hindi: Declaration se pehle \`let\` ko access karne par ReferenceError aata hai.

Q2. What is the output?

var a = 1; {   var a = 2; } console.log(a);

1

2

undefined

ReferenceError

Correct answer: 2

var is not block-scoped, so the inner assignment changes the same variable. Hindi: \`var\` block-scoped nahi hai, isliye value 2 ho jaati hai.

Q3. What happens here?

const n = 10; n = 20; console.log(n);

10

20

undefined

TypeError

Correct!

A const variable cannot be reassigned. Hindi: \`const\` ko dobara value assign nahi kar sakte.

Q4. What is the output?

let x = 1; {   let x = 2;   {     let x = 3;     console.log(x);   } }

1

2

3

ReferenceError

Correct!

The innermost block has its own x with value 3. Hindi: Sabse inner block ka apna variable use hota hai.

Q5. What is the output?

var x = 10; function show() {   console.log(x);   let x = 20; } show();

10

20

undefined

ReferenceError

Correct!

The local let x shadows the outer x and is in the Temporal Dead Zone when logged. Hindi: Declaration se pehle \`let\` ko access karne par ReferenceError aata hai.

### Your score: 4/5

Quick rule:
- NaN means Not-a-Number.
- NaN === NaN is false.
- Number.isNaN(value) returns true only when the value is actually NaN. It does not convert strings to numbers.

Interview trick to remember:
Expression	Output
NaN === NaN	false
NaN == NaN	false
Number.isNaN(NaN)	true
Number.isNaN("hello")	false

Why is this useful? It helps identify invalid numeric results without mistakenly treating ordinary strings as NaN.

In JavaScript, NaN === NaN is false because NaN represents an invalid or unrepresentable numeric result, and JavaScript defines it as unequal to every value, including itself.

```
console.log(Number.isNaN(true)); // false
console.log(isNaN(true));        // false
```

Why?

1. `Number.isNaN(true)` → `false`\
   It checks whether the value is actually `NaN`. `true` is a Boolean, not `NaN`.
2. `isNaN(true)` → `false`\
   The global `isNaN()` converts `true` to the number `1`. Since `1` is a valid number, the result is `false`.

Remember this trick:

```
console.log(Number.isNaN("hello")); // false
console.log(isNaN("hello"));        // true
```

Hindi: `Number.isNaN()` type conversion nahi karta, lekin global `isNaN()` conversion karta hai. `"hello"` number mein convert karne par `NaN` banta hai.

Important revision
- Number.isNaN("hello") → false because it doesn't convert strings to numbers.
- isNaN("hello") → true because the global isNaN() converts the string to a number first, producing NaN.
- Number.isNaN(10 / "hello") → true because the calculation produces NaN.
Interview trick: Number.isNaN() checks whether the value is actually NaN; global isNaN() checks whether the value becomes NaN after numeric conversion.

Remember these rules
- String + Number → usually string concatenation.
- String - Number → numeric subtraction (string converts to number).
- * and / → usually convert numeric strings to numbers.
- + with a string → concatenation.
- Number("abc") → NaN.