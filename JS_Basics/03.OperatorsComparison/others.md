## 1. `typeof` — Checks the data type

It tells you what type of value a variable contains.

```
console.log(typeof "Hello"); // "string"
console.log(typeof 25);      // "number"
console.log(typeof true);    // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null);    // "object" (historical JavaScript quirk)
```

Remember: `typeof` returns the type as a string.

## 2. `in` — Checks whether a property exists in an object

```
let user = { name: "Vibha", age: 28 };

console.log("name" in user); // true
console.log("email" in user); // false
```

Remember: The property must be written as a string here. `in` also checks properties inherited through the object's prototype chain.

Tricky example:

```
let arr = ["A", "B"];

console.log(0 in arr); // true
console.log("A" in arr); // false
```

Why? `in` checks the index/property, not the value. The array has index `0`, but it doesn't have a property named `"A"`.

## 3. `instanceof` — Checks an object's constructor relationship

It is commonly used to check whether an object was created from a particular constructor or class.

```
let arr = [];

console.log(arr instanceof Array);  // true
console.log(arr instanceof Object); // true
console.log(arr instanceof Date);   // false
```

Remember: Arrays are also objects, so `arr instanceof Object` is `true`.

## Quick revision

| Operator     | Purpose                                  | Example                        |
| ------------ | ---------------------------------------- | ------------------------------ |
| `typeof`     | Check data type                          | `typeof "Hi"` → `"string"`     |
| `in`         | Check property existence                 | `"name" in user` → `true`      |
| `instanceof` | Check constructor/prototype relationship | `[] instanceof Array` → `true` |

Interview tip: `typeof` checks the type of a value, `in` checks a property name, and `instanceof` checks an object's relationship to a constructor or class.

## JavaScript Rules: `typeof`, `in`, `instanceof`

### 1. `typeof` — Checks the data type

Rules to remember:

- Returns the type as a string.
- `typeof null` → `"object"` (historical quirk).
- `typeof NaN` → `"number"`.
- `typeof []` → `"object"`.
- `typeof function() {}` → `"function"`.
- `typeof undeclaredVariable` → `"undefined"` (doesn't throw an error).

```
typeof "Hi"       // "string"
typeof 10         // "number"
typeof undefined // "undefined"
```

### 2. `in` — Checks whether a property exists

Rules to remember:

- Checks property names, not property values.
- Checks inherited properties too.
- The property can exist even if its value is `undefined`.
- The right side must be an object or a compatible object, not a primitive.

```
let user = { name: undefined };

"name" in user      // true
"age" in user       // false
"toString" in user  // true (inherited)
```

### 3. `instanceof` — Checks an object's prototype relationship

Rules to remember:

- Commonly checks whether an object is an instance of a constructor or class.
- Arrays are also objects.
- Primitive values usually return `false` with built-in constructors.
- Results can differ across JavaScript realms, such as separate browser frames.

```
[] instanceof Array       // true
[] instanceof Object      // true
"hello" instanceof String // false
new String("hello") instanceof String // true
```

## Quick memory trick

| Operator     | Ask yourself                                                             |
| ------------ | ------------------------------------------------------------------------ |
| `typeof`     | What type is this value?                                                 |
| `in`         | Does this property exist on this object or its prototype chain?          |
| `instanceof` | Does this object's prototype chain include this constructor's prototype? |


## 1. Constructor (कन्स्ट्रक्टर)

English: A constructor is a function used to create objects.

Hindi: Constructor ek function hota hai jo objects banane ke liye use hota hai.

Example:

```
function Person(name) {
  this.name = name;
}

const p1 = new Person("Vibha");

console.log(p1.name); // Vibha
```

Here, `Person` is the constructor function. `new Person("Vibha")` creates a new object.

## 2. Prototype (प्रोटोटाइप)

English: A prototype is an object from which another object can access shared properties and methods.

Hindi: Prototype ek aisa object hai jiske properties aur methods ko doosra object use kar sakta hai.

Example:

```
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  return "Hello!";
};

const p1 = new Person("Vibha");

console.log(p1.greet()); // Hello!
```

Here, `greet()` is stored on `Person.prototype`. The object `p1` can access it.

## 3. How `instanceof` uses the prototype

```
function Person(name) {
  this.name = name;
}

const p1 = new Person("Vibha");

console.log(p1 instanceof Person); // true
```

English: JavaScript checks whether `Person.prototype` exists in the prototype chain of `p1`.

Hindi: JavaScript check karta hai ki `p1` ke prototype chain mein `Person.prototype` hai ya nahi. Agar hai, toh `true` return hota hai.

### Remember this

| Term         | Simple meaning                                                           |
| ------------ | ------------------------------------------------------------------------ |
| Constructor  | Object banane wala function                                              |
| Prototype    | Shared properties/methods wala object                                    |
| `instanceof` | Check karta hai object ka prototype chain kis constructor se related hai |

Interview tip: `constructor` creates objects, `prototype` helps share methods, and `instanceof` checks the prototype-chain relationship.

