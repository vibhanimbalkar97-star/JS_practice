# JavaScript Strings & String Methods — Complete Beginner to Interview Notes

This guide covers JavaScript strings from beginner level to tricky interview questions, with simple explanations, examples, rules, and tricks to solve output-based questions.

We will cover:

- String basics and syntax
- Creating strings
- String indexing and accessing characters
- String immutability
- String length
- All important string methods
- Searching and checking strings
- Extracting and replacing characters
- Splitting and joining strings
- Template literals
- Type conversion and string concatenation
- Escape characters
- Unicode and special characters
- Regular expressions with strings
- Common interview tricks
- Practice questions
- Quick revision checklist
























## 9.9 Repeating Strings — `repeat()`

Repeats a string a specified number of times.

```
let text = "Hi";

console.log(text.repeat(3));
// HiHiHi
```

### Example

```
console.log("*".repeat(5));
// *****
```

### Rules

```
console.log("Hi".repeat(0)); // ""
console.log("Hi".repeat(1)); // Hi
```

Negative values cause a `RangeError`.

```
// "Hi".repeat(-1); // RangeError
```

## 9.10 Character Methods

### `charAt()`

Returns the character at a given index.

```
let text = "Hello";

console.log(text.charAt(0)); // H
console.log(text.charAt(1)); // e
console.log(text.charAt(10)); // ""
```

### `charCodeAt()`

Returns the UTF-16 code unit of a character.

```
let text = "A";

console.log(text.charCodeAt(0));
// 65
```

```
console.log("a".charCodeAt(0));
// 97
```

### `codePointAt()`

Returns the Unicode code point at a position.

```
console.log("😀".codePointAt(0));
// 128512
```

### Difference

| Method          | Result             |
| --------------- | ------------------ |
| `charAt()`      | Character          |
| `charCodeAt()`  | UTF-16 code unit   |
| `codePointAt()` | Unicode code point |

### Trick

```
console.log("A".charCodeAt(0)); // 65
console.log("a".charCodeAt(0)); // 97
```

Capital letters and lowercase letters have different character codes.

# 10. Other String Methods and Properties

## 10.1 `String()` — Convert to String

```
console.log(String(123));       // "123"
console.log(String(true));      // "true"
console.log(String(null));     // "null"
console.log(String(undefined)); // "undefined"
```

This converts a value to a string.

### `toString()`

```
let num = 123;

console.log(num.toString()); // "123"
```

Difference:

```
console.log(String(null)); // "null"

// null.toString(); // TypeError
```

`String()` can convert `null` and `undefined`, but those values do not have a `toString()` method.

## 10.2 `String.fromCharCode()`

Converts UTF-16 code units into a string.

```
console.log(String.fromCharCode(65));
// A
```

```
console.log(String.fromCharCode(72, 73));
// HI
```

## 10.3 `String.fromCodePoint()`

Converts Unicode code points into a string.

```
console.log(String.fromCodePoint(128512));
// 😀
```

Use `fromCodePoint()` for code points beyond the basic multilingual plane.

## 10.4 `String.raw()`

Returns a string with escape sequences preserved in tagged template literals.

```
console.log(String.raw`Hello\nWorld`);
// Hello\nWorld
```

Compare:

```
console.log(`Hello\nWorld`);
```

Output:

```
Hello
World
```

### Important

```
console.log(String.raw`C:\Users\Vibha`);
// C:\Users\Vibha
```

Useful for writing paths and strings containing backslashes.

# 11. String Comparison

JavaScript compares strings based on their UTF-16 code units.

```
console.log("apple" === "apple"); // true
console.log("apple" === "Apple"); // false
```

## 11.1 Comparison operators

```
console.log("a" < "b"); // true
console.log("b" > "a"); // true
console.log("A" < "a"); // true
```

### Trick: Lexicographical comparison

JavaScript compares characters from left to right.

```
console.log("apple" < "banana"); // true
console.log("abc" < "abd"); // true
console.log("abc" < "ab"); // false
```

Why?

In the last example, `"ab"` is a prefix of `"abc"`. The shorter string comes first.

### Important: Not numeric comparison

```
console.log("20" < "3"); // true
```

Why?

As strings, the first characters are compared:

- `"2"` has a lower code value than `"3"`.
- Therefore, `"20"` comes before `"3"`.

Numeric comparison:

```
console.log(Number("20") < Number("3"));
// false
```

## 11.2 `localeCompare()`

Used for language-sensitive string comparison.

```
console.log("apple".localeCompare("banana"));
// Negative number
```

```
console.log("banana".localeCompare("apple"));
// Positive number
```

```
console.log("apple".localeCompare("apple"));
// 0
```

Do not depend on the exact negative or positive value. The important rule is:

| Result   | Meaning                          |
| -------- | -------------------------------- |
| Negative | First string comes before second |
| Zero     | Strings compare as equivalent    |
| Positive | First string comes after second  |

# 12. Regular Expressions (Regex) With Strings

Regex is a pattern used to search, match, or replace text.

Regex is one of the most important topics for string interview questions.

## 12.1 Basic regex syntax

```
let text = "Hello123";
```

| Pattern      | Meaning            | Example         |
| ------------ | ------------------ | --------------- |
| `/a/`        | Find `a`           | `"cat"`         |
| `/[abc]/`    | a, b, or c         | `"apple"`       |
| `/[0-9]/`    | Any digit          | `"123"`         |
| `/[a-z]/`    | Lowercase letter   | `"hello"`       |
| `/[A-Z]/`    | Uppercase letter   | `"HELLO"`       |
| `/[a-zA-Z]/` | Any English letter | `"Hello"`       |
| `/[^0-9]/`   | Not a digit        | `"abc"`         |
| `/\d/`       | Digit              | `"123"`         |
| `/\D/`       | Non-digit          | `"abc"`         |
| `/\w/`       | Word character     | `"abc_123"`     |
| `/\W/`       | Non-word character | `"@#$"`         |
| `/\s/`       | Whitespace         | `"Hello World"` |
| `/\S/`       | Non-whitespace     | `"Hello"`       |

## 12.2 Regex flags

| Flag | Meaning                      |
| ---- | ---------------------------- |
| `g`  | Global — all matches         |
| `i`  | Case-insensitive             |
| `m`  | Multiline                    |
| `s`  | Dot matches line terminators |
| `u`  | Unicode-aware                |
| `y`  | Sticky matching              |

### Example: `g`

```
let text = "banana";

console.log(text.match(/a/g));
// ["a", "a", "a"]
```

### Example: `i`

```
let text = "JavaScript";

console.log(text.match(/javascript/i));
// ["JavaScript"]
```

### Example: `g` and `i`

```
let text = "Hello hello HELLO";

console.log(text.match(/hello/gi));
// ["Hello", "hello", "HELLO"]
```

## 12.3 `match()`

Returns matches of a pattern.

```
let text = "abc123";

console.log(text.match(/\d/g));
// ["1", "2", "3"]
```

Without `g`:

```
console.log("abc123".match(/\d/));
// ["1"]
```

### Important: No match

```
console.log("Hello".match(/\d/g));
// null
```

`match()` can return `null`, so be careful when accessing `.length`.

## 12.4 `matchAll()`

Returns an iterator containing all matches and their details.

```
let text = "cat cat cat";

let matches = [...text.matchAll(/cat/g)];

console.log(matches.length);
// 3
```

### Rule

`matchAll()` requires a global regex.

```
// [..."cat".matchAll(/cat/)]; // TypeError
```

## 12.5 `test()`

Checks whether a regex pattern exists.

```
let text = "Hello123";

console.log(/\d/.test(text));
// true
```

```
console.log(/xyz/.test(text));
// false
```

Returns a Boolean.

### Interview trick

```
console.log(/[0-9]/.test("abc123")); // true
console.log(/^[0-9]+$/.test("abc123")); // false
```

Why?

- `[0-9]` checks if at least one digit exists.
- `^[0-9]+$` checks if the entire string contains only digits.

## 12.6 Regex Anchors

| Symbol  | Meaning                                           |
| ------- | ------------------------------------------------- |
| `^`     | Beginning of string                               |
| `$`     | End of string                                     |
| `.`     | Any character except line terminators, by default |
| `*`     | Zero or more                                      |
| `+`     | One or more                                       |
| `?`     | Zero or one                                       |
| `{n}`   | Exactly n times                                   |
| `{n,m}` | Between n and m times                             |

### Example: Only digits

```
let text = "12345";

console.log(/^\d+$/.test(text));
// true
```

```
console.log(/^\d+$/.test("123abc"));
// false
```

### Example: Exactly 5 digits

```
console.log(/^\d{5}$/.test("12345"));
// true
```

```
console.log(/^\d{5}$/.test("1234"));
// false
```

### Example: Email pattern (basic validation)

```
let email = "user@example.com";

console.log(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
// true
```

This is a basic format check, not complete email validation.

# 13. String Methods With Arrays

Many interview questions require converting strings into arrays.

## 13.1 Reverse a String

There is no built-in `reverse()` method for strings.

Use:

```
let text = "Hello";

let result = text.split("").reverse().join("");

console.log(result);
// olleH
```

Steps:

1. `split("")` → `["H", "e", "l", "l", "o"]`
2. `reverse()` → `["o", "l", "l", "e", "H"]`
3. `join("")` → `"olleH"`

### Important Unicode limitation

```
console.log("😀".split("").reverse().join(""));
// may produce a broken character
```

Because `split("")` separates UTF-16 code units.

For Unicode code points:

```
console.log([... "😀abc"].reverse().join(""));
// cba😀
```

For grapheme clusters (visible characters), `Intl.Segmenter` is safer.

## 13.2 Convert String to Array

```
let text = "JavaScript";

let arr = [...text];

console.log(arr);
// ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]
```

Or:

```
let arr = Array.from("Hello");

console.log(arr);
// ["H", "e", "l", "l", "o"]
```

## 13.3 Convert Array to String

```
let arr = ["H", "e", "l", "l", "o"];

console.log(arr.join(""));
// Hello
```

# 14. Important String Algorithms for Interviews

These are common coding questions.

## 14.1 Check Palindrome

A palindrome reads the same forward and backward.

Examples:

- `"madam"`
- `"level"`
- `"121"`

```
function isPalindrome(str) {
    return str === str.split("").reverse().join("");
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false
```

### Interview trick

If the question ignores uppercase and spaces:

```
function isPalindrome(str) {
    str = str.toLowerCase().replace(/\s/g, "");

    return str === str.split("").reverse().join("");
}

console.log(isPalindrome("Madam")); // true
console.log(isPalindrome("nurses run")); // true
```

## 14.2 Count Characters

```
let text = "banana";

let count = {};

for (let char of text) {
    count[char] = (count[char] || 0) + 1;
}

console.log(count);
// { b: 1, a: 3, n: 2 }
```

### Understand this trick

```
count[char] = (count[char] || 0) + 1;
```

Meaning:

- If the character already exists, use its count.
- If it does not exist, start from `0`.
- Add `1`.

## 14.3 Count Vowels

```
function countVowels(str) {
    let count = 0;

    for (let char of str.toLowerCase()) {
        if ("aeiou".includes(char)) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("JavaScript")); // 3
```

### Trick

```
"aeiou".includes(char)
```

This checks whether the current character is a vowel.

## 14.4 Remove Duplicate Characters

```
let text = "banana";

let result = [...new Set(text)].join("");

console.log(result);
// ban
```

Why?

`Set` stores unique values.

Another method:

```
function removeDuplicates(str) {
    let result = "";

    for (let char of str) {
        if (!result.includes(char)) {
            result += char;
        }
    }

    return result;
}

console.log(removeDuplicates("banana"));
// ban
```

## 14.5 Find the First Non-Repeating Character

```
function firstUnique(str) {
    for (let char of str) {
        if (str.indexOf(char) === str.lastIndexOf(char)) {
            return char;
        }
    }

    return null;
}

console.log(firstUnique("aabbcdd"));
// c
```

### Why does this work?

For a character that occurs only once:

```
str.indexOf(char) === str.lastIndexOf(char)
```

The first and last positions are equal.

## 14.6 Count Words

```
function countWords(str) {
    str = str.trim();

    if (str === "") {
        return 0;
    }

    return str.split(/\s+/).length;
}

console.log(countWords("Hello World JavaScript"));
// 3
```

### Why `/\s+/`?

It handles one or more spaces, tabs, or other whitespace characters.

```
console.log(countWords("Hello    World"));
// 2
```

## 14.7 Capitalize the First Letter

```
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capitalize("javascript"));
// Javascript
```

### Tricky case: Empty string

```
console.log(capitalize(""));
// ""
```

The function above returns an empty string for empty input.

## 14.8 Capitalize Every Word

```
function capitalizeWords(str) {
    return str
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

console.log(capitalizeWords("hello world"));
// Hello World
```

# 15. Tricky JavaScript String Interview Rules

These are very important for output-based questions.

## Rule 1: `length` is a property, not a method

```
let text = "Hello";

console.log(text.length);   // 5
console.log(text.length()); // TypeError
```

## Rule 2: Strings are immutable

```
let text = "hello";

text.toUpperCase();

console.log(text); // hello
```

You must assign the returned string:

```
text = text.toUpperCase();

console.log(text); // HELLO
```

## Rule 3: `slice()` excludes the end index

```
console.log("JavaScript".slice(0, 4));
// Java
```

## Rule 4: `split("")` creates an array

```
console.log("Hello".split(""));
// ["H", "e", "l", "l", "o"]
```

## Rule 5: `replace()` replaces only the first match for a string search

```
console.log("aaa".replace("a", "b"));
// baa
```

## Rule 6: `replaceAll()` replaces all matches

```
console.log("aaa".replaceAll("a", "b"));
// bbb
```

## Rule 7: Strings are case-sensitive

```
console.log("JavaScript".includes("java"));
// false
```

## Rule 8: `indexOf()` returns `-1` when not found

```
console.log("Hello".indexOf("x"));
// -1
```

## Rule 9: `charAt()` and `at()` are different

```
console.log("Hello".charAt(-1)); // ""
console.log("Hello".at(-1));     // o
```

## Rule 10: `+` can concatenate or add

```
console.log(10 + 20);     // 30
console.log("10" + 20);   // "1020"
console.log("10" - 2);    // 8
```

Why does `"10" - 2` return `8`?

The `-` operator performs numeric subtraction, so the string is converted to a number.

## Rule 11: Empty string is falsy

```
console.log(Boolean("")); // false
console.log(Boolean(" ")); // true
console.log(Boolean("0")); // true
console.log(Boolean("false")); // true
```

An empty string is falsy. A non-empty string is truthy.

## Rule 12: String and number equality

```
console.log("5" == 5);  // true
console.log("5" === 5); // false
```

- `==` allows type conversion.
- `===` checks both type and value.

Prefer `===` in normal code.

## Rule 13: String objects are different from primitive strings

```
let a = "Hello";
let b = new String("Hello");

console.log(typeof a); // string
console.log(typeof b); // object
```

```
console.log(a === b); // false
```

Avoid `new String()` in normal development.

## Rule 14: String comparison is not the same as locale sorting

```
console.log("Z" < "a"); // true
```

For user-facing alphabetical sorting, use `localeCompare()`.

## Rule 15: Strings can be iterated

```
let text = "Hi";

for (let char of text) {
    console.log(char);
}
```

Output:

```
H
i
```

# 16. Common Interview Questions — Output-Based

Try solving these before checking the answers.

## String output quiz

0/15 answered

1\. What is the output?

let str = "JavaScript";\
console.log(str.length);

2\. What is the output?

console.log("Hello".slice(1, 4));

3\. What is the output?

console.log("banana".indexOf("a"));\
console.log("banana".lastIndexOf("a"));

4\. What is the output?

console.log("hello".replace("l", "x"));

5\. What is the output?

console.log("hello".replaceAll("l", "x"));

6\. What is the output?

console.log("JavaScript".slice(-3));

7\. What is the output?

console.log("Hello".substring(4, 1));

8\. What is the output?

console.log("Hello".charAt(10));\
console.log("Hello".at(10));

9\. What is the output?

console.log("Hello".split(" "));\
console.log("Hello".split(""));

10\. What is the output?

console.log("5" + 2);\
console.log("5" - 2);

11\. What is the output?

console.log("Hello".includes("hello"));

12\. What is the output?

let str = "hello";\
str.toUpperCase();\
console.log(str);

13\. What is the output?

console.log("abc123".match(/\\\d/g));

14\. What is the output?

console.log("123".padStart(5, "0"));

15\. What is the output?

console.log("Hi".repeat(3));

Check answersReset

# 17. Complete String Methods Quick Revision Table

Use this table while revising interview questions.

| Method / Property | Purpose                    | Example                           | Output           |
| ----------------- | -------------------------- | --------------------------------- | ---------------- |
| `length`          | Count UTF-16 code units    | `"Hello".length`                  | `5`              |
| `at()`            | Access character           | `"Hello".at(-1)`                  | `"o"`            |
| `charAt()`        | Access character           | `"Hello".charAt(1)`               | `"e"`            |
| `toUpperCase()`   | Uppercase                  | `"hi".toUpperCase()`              | `"HI"`           |
| `toLowerCase()`   | Lowercase                  | `"HI".toLowerCase()`              | `"hi"`           |
| `trim()`          | Remove outer whitespace    | `" hi ".trim()`                   | `"hi"`           |
| `trimStart()`     | Remove leading whitespace  | `" hi".trimStart()`               | `"hi"`           |
| `trimEnd()`       | Remove trailing whitespace | `"hi ".trimEnd()`                 | `"hi"`           |
| `indexOf()`       | First position             | `"banana".indexOf("a")`           | `1`              |
| `lastIndexOf()`   | Last position              | `"banana".lastIndexOf("a")`       | `5`              |
| `includes()`      | Check presence             | `"hello".includes("e")`           | `true`           |
| `startsWith()`    | Check beginning            | `"hello".startsWith("h")`         | `true`           |
| `endsWith()`      | Check ending               | `"hello".endsWith("o")`           | `true`           |
| `slice()`         | Extract portion            | `"hello".slice(1,4)`              | `"ell"`          |
| `substring()`     | Extract portion            | `"hello".substring(1,4)`          | `"ell"`          |
| `replace()`       | Replace first match        | `"aaa".replace("a","b")`          | `"baa"`          |
| `replaceAll()`    | Replace all matches        | `"aaa".replaceAll("a","b")`       | `"bbb"`          |
| `split()`         | Convert string to array    | `"a-b".split("-")`                | `["a","b"]`      |
| `concat()`        | Join strings               | `"a".concat("b")`                 | `"ab"`           |
| `padStart()`      | Add characters at start    | `"5".padStart(2,"0")`             | `"05"`           |
| `padEnd()`        | Add characters at end      | `"5".padEnd(2,"0")`               | `"50"`           |
| `repeat()`        | Repeat string              | `"a".repeat(3)`                   | `"aaa"`          |
| `match()`         | Find regex matches         | `"abc123".match(/\d/g)`           | `["1","2","3"]`  |
| `matchAll()`      | Get all match details      | `[..."cat cat".matchAll(/cat/g)]` | Array of matches |
| `search()`        | Find regex position        | `"abc123".search(/\d/)`           | `3`              |
| `toString()`      | Convert to string          | `(123).toString()`                | `"123"`          |
| `String()`        | Convert to string          | `String(true)`                    | `"true"`         |
| `localeCompare()` | Compare strings            | `"a".localeCompare("b")`          | Negative number  |

# 18. Tricks to Solve String Coding Questions

When you see a string problem, first identify what the question is asking.

## String problem-solving flow

1\. Understand the input

Is it a string? Does it contain spaces, numbers, or special characters?

2\. Identify the operation

Search / Extract / Replace / Reverse / Count / Compare

3\. Select the right method

slice / includes / split / replace / indexOf / loop

4\. Check edge cases

Empty string, uppercase, spaces, repeated characters, negative indexes

### Common question → method selection

| Question             | Best starting point            |
| -------------------- | ------------------------------ |
| Find a character     | `indexOf()`                    |
| Check if text exists | `includes()`                   |
| Extract a portion    | `slice()`                      |
| Remove spaces        | `trim()`                       |
| Replace text         | `replace()` / `replaceAll()`   |
| Reverse a string     | `split("").reverse().join("")` |
| Count characters     | Loop + object or `Map`         |
| Remove duplicates    | `Set`                          |
| Check palindrome     | Reverse + compare              |
| Count words          | `trim()` + `split(/\s+/)`      |
| Check only digits    | `/^\d+$/.test(str)`            |
| Convert to uppercase | `toUpperCase()`                |
| Get last character   | `at(-1)`                       |

# 19. Final Interview Checklist

Use this checklist to make sure you have covered the topic.

## Revision progress

0/29

String definition and creation

Single, double, and backtick quotes

Indexing and accessing characters

length property

String immutability

String concatenation

Template literals

Escape characters

toUpperCase() / toLowerCase()

trim(), trimStart(), trimEnd()

indexOf() / lastIndexOf()

includes() / startsWith() / endsWith()

slice() / substring() / substr()

replace() / replaceAll()

split() / join()

padStart() / padEnd()

repeat()

charAt() / at()

charCodeAt() / codePointAt()

String() / toString()

String comparison and localeCompare()

Regex patterns and flags

match() / matchAll() / search() / test()

String and array conversion

Palindrome / reverse / character count

Unicode and UTF-16

Truthy and falsy strings

String vs number conversion

Output-based interview questions

My recommendation for your interview preparation: First revise sections 1–11 and learn the method differences. Then solve the quiz without checking the answers. Finally, practice the string algorithms in section 14 using your own code.

The next step is to solve string questions topic-wise, from easy to tricky interview level.

Beginner string quizTricky output questionsString coding problems