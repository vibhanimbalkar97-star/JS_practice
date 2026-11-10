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