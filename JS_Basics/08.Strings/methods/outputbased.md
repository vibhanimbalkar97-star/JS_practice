16. Common Interview Questions — Output-Based
Try solving these before checking the answers.
String output quiz
15/15 answered

1. What is the output?
let str = "JavaScript";
console.log(str.length);

9
Correct answer:

10

JavaScript contains 10 UTF-16 code units.



2. What is the output?
console.log("Hello".slice(1, 4));

ell
Correct answer:

ell

Start index 1 is included, end index 4 is excluded.



3. What is the output?
console.log("banana".indexOf("a"));
console.log("banana".lastIndexOf("a"));

1,5
Correct answer:

1
5

indexOf finds the first occurrence; lastIndexOf finds the last.



4. What is the output?
console.log("hello".replace("l", "x"));

hexlo
Correct answer:

hexlo

replace with a string search replaces only the first matching occurrence.



5. What is the output?
console.log("hello".replaceAll("l", "x"));

hexxo
Correct answer:

hexxo

replaceAll replaces all occurrences.



6. What is the output?
console.log("JavaScript".slice(-3));

ipt
Correct answer:

ipt

Negative indexes count from the end.



7. What is the output?
console.log("Hello".substring(4, 1));

ell
Correct answer:

ell

substring swaps the start and end when start is greater.



8. What is the output?
console.log("Hello".charAt(10));
console.log("Hello".at(10));

""", undefined
Correct answer:


undefined

charAt returns an empty string for an invalid position; at returns undefined.



9. What is the output?
console.log("Hello".split(" "));
console.log("Hello".split(""));

['Hello'], ['H','e','l','l','o']
Correct answer:

["Hello"]
["H", "e", "l", "l", "o"]

No matching space produces a one-element array. An empty separator splits by UTF-16 code units.



10. What is the output?
console.log("5" + 2);
console.log("5" - 2);

52, 
Correct answer:

52
3

Plus concatenates when a string is involved; minus converts to numbers.



11. What is the output?
console.log("Hello".includes("hello"));

fals
Correct answer:

false

String searches are case-sensitive.



12. What is the output?
let str = "hello";
str.toUpperCase();
console.log(str);

hello
Correct answer:

hello

Strings are immutable; the result was not assigned back.



13. What is the output?
console.log("abc123".match(/\\d/g));

["1","2","3"]
Correct answer:

["1", "2", "3"]

The digit pattern with the global flag returns all matches.



14. What is the output?
console.log("123".padStart(5, "0"));

00123
Correct answer:

00123

The string is padded at the beginning until the target length is reached.



15. What is the output?
console.log("Hi".repeat(3));

HiHiHi
Correct answer:

HiHiHi

repeat duplicates the string three times.


Check answersReset