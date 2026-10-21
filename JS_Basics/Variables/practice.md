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