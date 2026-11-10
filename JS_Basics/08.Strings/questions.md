# JavaScript String Coding Interview Questions — Easy to Hard

Here is a topic-wise JavaScript string coding practice sheet, focused on problems commonly used in fresher and experienced developer interviews.

No Regex questions included. We will solve everything using:

- String methods
- Loops (`for`, `for...of`)
- Conditions (`if/else`)
- Arrays
- Objects and `Map`
- `Set`
- Basic logic and problem-solving

I'll arrange the questions in increasing difficulty. Try writing the code yourself before looking for a solution.

## Level 1 — Beginner (Basic string operations)



Easy

&#x20;Questions 1–10



| No. | Coding problem                  | Example input      | Expected output |
| --- | ------------------------------- | ------------------ | --------------- |
| 1   | Reverse a string                | `"hello"`          | `"olleh"`       |
| 2   | Count characters in a string    | `"JavaScript"`     | `10`            |
| 3   | Find the first character        | `"Hello"`          | `"H"`           |
| 4   | Find the last character         | `"Hello"`          | `"o"`           |
| 5   | Convert string to uppercase     | `"hello"`          | `"HELLO"`       |
| 6   | Convert string to lowercase     | `"HELLO"`          | `"hello"`       |
| 7   | Count vowels in a string        | `"javascript"`     | `3`             |
| 8   | Count consonants in a string    | `"hello"`          | `3`             |
| 9   | Count spaces in a string        | `"Hello World JS"` | `2`             |
| 10  | Check whether a string is empty | `""`               | `true`          |

Concepts to practice: `length`, `at()`, `toUpperCase()`, `toLowerCase()`, loops, conditions.

## Level 2 — Easy to Intermediate (String logic)



Easy–Medium

&#x20;Questions 11–20



| No. | Coding problem                                         | Example input         | Expected output  |
| --- | ------------------------------------------------------ | --------------------- | ---------------- |
| 11  | Check palindrome                                       | `"madam"`             | `true`           |
| 12  | Remove all spaces                                      | `"Hello World JS"`    | `"HelloWorldJS"` |
| 13  | Remove spaces from beginning and end                   | `"  Hello  "`         | `"Hello"`        |
| 14  | Count occurrences of a character                       | `"banana", "a"`       | `3`              |
| 15  | Find the first occurrence of a character               | `"banana", "a"`       | `1`              |
| 16  | Find the last occurrence of a character                | `"banana", "a"`       | `5`              |
| 17  | Replace a character without using `replace()`          | `"banana", "a", "o"`  | `"bonono"`       |
| 18  | Remove a particular character                          | `"banana", "a"`       | `"bnn"`          |
| 19  | Check whether two strings are equal (case-insensitive) | `"Hello", "HELLO"`    | `true`           |
| 20  | Find the number of words                               | `"I love JavaScript"` | `3`              |

Concepts to practice: `split()`, `join()`, `indexOf()`, `lastIndexOf()`, `includes()`, loops and character comparisons.

## Level 3 — Intermediate (Frequently asked interview questions)



Medium

&#x20;Questions 21–30



| No. | Coding problem                                | Example input                     | Expected output |
| --- | --------------------------------------------- | --------------------------------- | --------------- |
| 21  | Find duplicate characters                     | `"programming"`                   | `r, g, m`       |
| 22  | Remove duplicate characters                   | `"programming"`                   | `"progamin"`    |
| 23  | Find the first non-repeating character        | `"aabbcdde"`                      | `"c"`           |
| 24  | Find the first repeating character            | `"programming"`                   | `"r"`           |
| 25  | Count the frequency of each character         | `"banana"`                        | `b:1, a:3, n:2` |
| 26  | Find the most frequently occurring character  | `"success"`                       | `"s"`           |
| 27  | Find the least frequently occurring character | `"aabbc"`                         | `"c"`           |
| 28  | Check whether two strings are anagrams        | `"listen", "silent"`              | `true`          |
| 29  | Find the longest word in a sentence           | `"I love JavaScript programming"` | `"programming"` |
| 30  | Capitalize the first letter of every word     | `"hello world"`                   | `"Hello World"` |

Concepts to practice: Objects, `Map`, `Set`, nested loops, arrays, sorting and frequency counting.

## Level 4 — Medium to Hard (Logic-building problems)



Medium–Hard

&#x20;Questions 31–40



| No. | Coding problem                                          | Example input                | Expected output    |
| --- | ------------------------------------------------------- | ---------------------------- | ------------------ |
| 31  | Reverse each word in a sentence                         | `"Hello World"`              | `"olleH dlroW"`    |
| 32  | Reverse the order of words                              | `"I love JS"`                | `"JS love I"`      |
| 33  | Find the longest substring without repeating characters | `"abcabcbb"`                 | `"abc"` (length 3) |
| 34  | Check whether one string is a rotation of another       | `"abcd", "cdab"`             | `true`             |
| 35  | Find the common characters between two strings          | `"hello", "world"`           | `"l, o"`           |
| 36  | Find the difference between two strings                 | `"abcd", "abed"`             | `"c, e"`           |
| 37  | Remove consecutive duplicate characters                 | `"aaabbccdaa"`               | `"abcda"`          |
| 38  | Compress a string using character counts                | `"aaabbc"`                   | `"a3b2c1"`         |
| 39  | Expand a compressed string                              | `"a3b2c1"`                   | `"aaabbc"`         |
| 40  | Find the longest common prefix in an array of strings   | `["flower","flow","flight"]` | `"fl"`             |

Concepts to practice: Sliding window, two pointers, sorting, nested loops, arrays and string reconstruction.

## Level 5 — Hard (Advanced interview problems)



Hard

&#x20;Questions 41–50



| No. | Coding problem                                                       | Example input                           | Expected output                               |
| --- | -------------------------------------------------------------------- | --------------------------------------- | --------------------------------------------- |
| 41  | Find the longest palindromic substring                               | `"babad"`                               | `"bab"` or `"aba"`                            |
| 42  | Count all palindromic substrings                                     | `"aaa"`                                 | `6`                                           |
| 43  | Group anagrams                                                       | `["eat","tea","tan","ate","nat","bat"]` | `[["eat","tea","ate"],["tan","nat"],["bat"]]` |
| 44  | Find all permutations of a string                                    | `"abc"`                                 | `abc, acb, bac, bca, cab, cba`                |
| 45  | Find the smallest window containing all characters of another string | `"ADOBECODEBANC", "ABC"`                | `"BANC"`                                      |
| 46  | Find the minimum number of deletions to make two strings equal       | `"sea", "eat"`                          | `2`                                           |
| 47  | Find the longest common subsequence                                  | `"abcde", "ace"`                        | `3`                                           |
| 48  | Find the edit distance between two strings                           | `"horse", "ros"`                        | `3`                                           |
| 49  | Check whether two strings are isomorphic                             | `"egg", "add"`                          | `true`                                        |
| 50  | Implement string matching without `includes()` or `indexOf()`        | `"hello world", "world"`                | `6`                                           |

Concepts to practice: Dynamic programming, sliding window, backtracking, hashing, two pointers and character mapping.

# 20. Which questions should you prioritize for interviews?

If your time is limited, solve these first.

## Top 15 priority questions

A practical preparation shortlist, not a statistical ranking.

Your progress

0/15 completed

1\. Reverse a string

2\. Palindrome check

3\. Count vowels and consonants

4\. Character frequency

5\. Find duplicate characters

6\. Remove duplicate characters

7\. First non-repeating character

8\. First repeating character

9\. Anagram check

10\. Reverse words in a sentence

11\. Longest word in a sentence

12\. String rotation check

13\. Longest substring without repeating characters

14\. String compression

15\. Longest palindromic substring

# 21. Rules to follow while solving

For every problem, follow these steps:

1. Understand the input and expected output.
2. Check whether uppercase/lowercase matters.
3. Check whether spaces should be included or ignored.
4. Decide whether you need a loop, array, object, or `Map`.
5. Remember strings are immutable.
6. Test with empty strings and repeated characters.
7. Check whether the question expects a character, index, count, Boolean, or complete string.

My suggested practice order: Finish Levels 1 and 2 first, then move to Levels 3–5. Don't jump directly into advanced problems. Try solving each without using built-in shortcuts initially, then solve it again using string methods.

You can also work through five fresh interview problems each day.

💻Daily JavaScript string challengeTap to set up