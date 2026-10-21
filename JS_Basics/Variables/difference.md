JavaScript में Declaration, Initialization और Access को simple English और Hindi में समझते हैं।

## 1. Declaration (Variable बनाना)

Meaning: Creating a variable by giving it a name.

जब आप JavaScript में variable declare करते हैं, तो आप उसे एक नाम देते हैं।

```
let age;
```

यहाँ `age` variable declare हुआ है, लेकिन अभी इसमें कोई value assign नहीं की गई है।

## 2. Initialization (पहली value देना)

Meaning: Assigning a value to a variable for the first time.

```
let age = 25;
```

यहाँ:

- `let age` → Declaration
- `= 25` → Initialization

Variable को declare और initialize एक ही statement में भी कर सकते हैं।

```
let name = "Vibha";
```

## 3. Access (Variable की value इस्तेमाल करना)

Meaning: Reading or using the value stored in a variable.

```
let age = 25;

console.log(age);
```

Output:

```
25
```

यहाँ `console.log(age)` variable की value को access करता है।

## 4. तीनों का difference

| Term           | Meaning             | Example             |
| -------------- | ------------------- | ------------------- |
| Declaration    | Variable बनाना      | `let age;`          |
| Initialization | पहली value देना     | `age = 25;`         |
| Access         | Value इस्तेमाल करना | `console.log(age);` |

## 5. Complete example

```
// 1. Declaration
let age;

// 2. Initialization
age = 25;

// 3. Access
console.log(age); // 25

// 4. Reassignment (नई value देना)
age = 26;

console.log(age); // 26
```

Interview tip: Declaration पहली बार variable बनाने को कहते हैं, initialization पहली value देने को, access उसकी value पढ़ने या इस्तेमाल करने को, और reassignment बाद में उसकी value बदलने को कहते हैं।

ध्यान दें: `let age;` में `age` की value `undefined` होती है। `const` को declare करते समय ही initialize करना जरूरी है।