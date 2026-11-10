Let's practice JavaScript Strings like a real coding interview. I'll divide this into two rounds:

1. Beginner Quiz: Basic string logic and methods.
2. Tricky Output Quiz: Interview-style questions that test your understanding of string methods, indexing, immutability and type conversion.



Round 1 — Beginner



# Round 1: Beginner String Coding Quiz

10 questions | Easy level

Try writing the output or code yourself. Don't use Google or check answers.

Beginner questions

1/10 answered

Q1. Reverse a string

let str = "hello";

Write code to get the reversed string.

console.log(str.split("").reverse().join(""))

Q2. Count vowels

let str = "JavaScript";

Count a, e, i, o, u.

Q3. Check palindrome

let str = "madam";

Return true if the string reads the same forward and backward.

Q4. Count a particular character

let str = "banana";\
let char = "a";

Count how many times a appears.

Q5. Remove duplicate characters

let str = "programming";

Return each character only once, preserving its first occurrence.

Q6. Find the first non-repeating character

let str = "aabbcdde";

Return the first character that appears only once.

Q7. Count words

let str = "I love JavaScript";

Count the number of words.

Q8. Capitalize first letter

let str = "javascript";

Return the string with only its first letter uppercase.

Q9. Check anagram

let a = "listen";\
let b = "silent";

Return true if both strings contain the same characters with the same frequencies.

Q10. Find the longest word

let str = "I love JavaScript programming";

Return the longest word.

Submit beginner quiz & reveal answersReset quiz

Round 2 — Tricky

# Round 2: Tricky String Output Questions

15 questions | Medium to Hard

These questions are especially useful for JavaScript interviews. Pay attention to:

- Negative indexes
- `slice()` vs `substring()`
- `replace()` vs `replaceAll()`
- String immutability
- String + number
- Empty strings
- `split()` and `join()`
- `indexOf()` and `lastIndexOf()`

Tricky output questions

0/15 answered

Q1. Predict the output

let str = "JavaScript";\
console.log(str.slice(2, 6));

Q2. Predict the output

let str = "JavaScript";\
console.log(str.slice(-4));

Q3. Predict the output

let str = "Hello";\
console.log(str.substring(4, 1));

Q4. Predict the output

let str = "Hello";\
console.log(str.slice(4, 1));

Q5. Predict the output

let str = "banana";\
console.log(str.replace("a", "o"));

Q6. Predict the output

let str = "banana";\
console.log(str.replaceAll("a", "o"));

Q7. Predict the output

let str = "hello";\
str.toUpperCase();\
console.log(str);

Q8. Predict the output

console.log("Hello".at(-1));\
console.log("Hello"[-1]);

Q9. Predict the output

console.log("JavaScript".indexOf("a"));\
console.log("JavaScript".lastIndexOf("a"));

Q10. Predict the output

console.log("Hello".split(""));\
console.log("Hello".split());

Q11. Predict the output

console.log("JS" + 10 + 5);\
console.log(10 + 5 + "JS");

Q12. Predict the output

console.log("20" - 5);\
console.log("20" + 5);

Q13. Predict the output

console.log("".length);\
console.log(" ".length);\
console.log(Boolean(""));\
console.log(Boolean(" "));

Q14. Predict the output

console.log("Hello".includes("hello"));\
console.log("Hello".toLowerCase().includes("hello"));

Q15. Predict the output

console.log("abc".padStart(6, "0"));\
console.log("abc".padEnd(6, "\*"));\
console.log("abc".repeat(2));

Submit tricky quiz & reveal answersReset quiz

## Important rules to remember before interviews

| Rule                   | Remember                                   |
| ---------------------- | ------------------------------------------ |
| Index starts           | 0                                          |
| Last index             | `length - 1`                               |
| Negative indexing      | Use `at(-1)`                               |
| String modification    | Not allowed directly                       |
| `slice(start,end)`     | End excluded                               |
| `substring(start,end)` | Negative values become 0; indexes may swap |
| `replace()`            | First matching occurrence                  |
| `replaceAll()`         | All matching occurrences                   |
| `split("")`            | Converts to array of UTF-16 code units     |
| `indexOf()`            | Returns -1 if not found                    |
| `includes()`           | Returns true or false                      |
| Empty string           | Falsy                                      |
| Space string `" "`     | Truthy                                     |
| `length`               | Property, not method                       |

My suggestion: Attempt Round 1 first and send me your answers. I'll check each question, explain incorrect logic in simple English and Hindi, and show you how to approach it in an interview.
