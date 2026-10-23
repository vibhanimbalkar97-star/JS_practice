Test your JavaScript interview knowledge from basic to tricky. Answers and explanations will remain hidden until you submit.

JavaScript Interview Quiz: Conditions and Truthy/Falsy

Nice work — you got 7 out of 10 correct.

1. What does an if statement use to decide whether to execute its block?

An if statement evaluates the condition and uses its Boolean result to decide whether to execute the block.

2. What is printed?

let value = ' ';\
&#x20;if (value) console.log('Run');\
&#x20;else console.log('Skip');

The string contains a space, making it non-empty and truthy.

You answered: Skip. A string containing a space is not an empty string, so it is truthy.

3. Select every expression that evaluates to false when converted to a Boolean.

Boolean(-0), Boolean(undefined), Boolean(0n)

4. In JavaScript, an empty array evaluates as falsy in an if condition.

Arrays are truthy, including empty arrays, so this statement is false.

5. What is printed?

let score = 70;\
&#x20;if (score >= 80) console.log('High');\
&#x20;else if (score >= 60) console.log('Medium');\
&#x20;else console.log('Low');

70 fails the first test but satisfies the second test, so this branch executes.

6. Which statement about switch is correct?

switch compares the expression against case values without ordinary loose-equality coercion.

You answered: Every case must contain a break statement. break is common, but fall-through can be intentional and a case need not always contain break.

7. What is printed?

let x = 0;\
&#x20;let result = x || 15;\
&#x20;console.log(result);

Zero is falsy, so the || expression evaluates to its right operand, 15.

8. What is printed?

let age = 17;\
&#x20;let message = age >= 18 ? 'Allowed' : 'Denied';\
&#x20;console.log(message);

The condition is false, so the ternary operator selects the expression after the colon.

9. In JavaScript, the expression null ?? 'default' evaluates to 'default'.

Nullish coalescing uses the right operand when the left operand is null or undefined.

10. What is printed?

let n = 0;\
&#x20;if (n === 0) {\
&#x20;console.log('Zero');\
&#x20;} else if (n) {\
&#x20;console.log('Truthy');\
&#x20;} else {\
&#x20;console.log('Falsy');\
&#x20;}

The strict comparison 0 === 0 is true, so the first block runs and the remaining branches are skipped.

Here’s a fresh 10-question JavaScript interview quiz on Conditions and Truthy/Falsy, from basic to tricky. All questions and code examples are new compared with your previous quiz.

Choose your answers carefully. Answers and explanations will stay hidden until you submit the quiz.

JavaScript Interview Quiz: Conditions & Truthy/Falsy — Fresh Set

Nice work — you got 6 out of 9 correct.

1. What is printed?

let temperature = 30;\
&#x20;if (temperature > 25) {\
&#x20;console.log('Warm');\
&#x20;} else {\
&#x20;console.log('Cool');\
&#x20;}

30 is greater than 25, so the first branch executes.

You answered: Cool. The else branch runs only when the comparison is false.

2. What is printed?

let items = [];\
&#x20;if (items.length) {\
&#x20;console.log('Has items');\
&#x20;} else {\
&#x20;console.log('Empty');\
&#x20;}

An empty array has length 0, which is falsy.

3. Select every expression that evaluates to true.

Boolean('hello'), Boolean({})

5. What is printed?

let points = 45;\
&#x20;if (points >= 50) {\
&#x20;console.log('Pass');\
&#x20;} else if (points >= 40) {\
&#x20;console.log('Retry');\
&#x20;} else {\
&#x20;console.log('Fail');\
&#x20;}

45 fails the first condition but satisfies the second.

6. What is printed?

let role = 'editor';\
&#x20;switch (role) {\
&#x20;case 'admin':\
&#x20;console.log('Full access');\
&#x20;break;\
&#x20;case 'editor':\
&#x20;console.log('Edit access');\
&#x20;case 'viewer':\
&#x20;console.log('Read access');\
&#x20;break;\
&#x20;default:\
&#x20;console.log('No access');\
&#x20;}

Execution starts at editor and falls through into viewer because there is no intervening break.

7. What is printed?

let username = '';\
&#x20;let displayName = username ?? 'Guest';\
&#x20;console.log(displayName);

An empty string is neither null nor undefined, so it is retained.

8. In JavaScript, `if (new Boolean(false))` enters the if block.

This statement is true. new Boolean(false) creates a Boolean object, and objects are truthy.

You answered: False. The object wraps false, but the object itself is truthy.

9. What is printed?

let count = 0;\
&#x20;let message = count > 0 && 'Available';\
&#x20;console.log(message);

The && operator can return the original falsy operand rather than a Boolean.

10. Which expressions evaluate to the number 0? Select every correct answer.

Number(false). Number(''). 5 && 0. Converting false to a number produces 0. Converting an empty string to a number produces 0. Since 5 is truthy, && evaluates and returns its right operand, the number 0.

You answered: Number(''), 5 && 0, and '0' || 9. ⁨Number('') and 5 && 0⁩ are correct. The string '0' is truthy, so the expression returns that string, not the number 0.


Here’s your Hard Level JavaScript Interview Quiz — 10 tricky questions. It focuses on empty strings, Boolean objects, `&&`, `??`, switch fall-through, and combinations that often confuse candidates.

Answers and explanations are hidden until you submit. Select carefully—some questions require multiple answers.

JavaScript Interview Quiz — Hard & Tricky

You got 4 out of 10 correct. Review your answers below.

1. What is printed?

const value = '';\
&#x20;console.log(value ?? 'A' || 'B');

JavaScript requires parentheses when combining ?? directly with || or &&.

You answered: B. The expression cannot evaluate to B because JavaScript syntax validation fails first.

2. What is printed?

const value = '';\
&#x20;console.log(value ?? ('A' || 'B'));

The empty string is preserved by ?? because it is neither null nor undefined.

You answered: B. The inner || expression would return A, but it is not evaluated when the left side of ?? is non-nullish.

3. What is printed?

const flag = new Boolean(false);\
&#x20;console.log(flag && 'YES');

The Boolean object is truthy, so && evaluates and returns its right operand.

You answered: true. The && operator returns an operand here, not a converted Boolean result.

4. Select every expression that evaluates to an empty string ('').

true && ''. '' ?? 'fallback'. The left operand is truthy, so && evaluates and returns the empty-string right operand. An empty string is not nullish, so ?? returns the original empty string.

You answered: '' ?? 'fallback'. ⁨'' ?? 'fallback'⁩ is correct.

5. What is printed?

let output = '';\
&#x20;output = output || 'X';\
&#x20;output = output && 'Y';\
&#x20;console.log(output);

After the first assignment, output is X, so the second assignment returns Y.

You answered: X. The first assignment changes output to X; the next && then returns Y because X is truthy.

6. What is printed?

const key = 2;\
&#x20;switch (key) {\
&#x20;case '2': console.log('A'); break;\
&#x20;case 2: console.log('B');\
&#x20;default: console.log('C');\
&#x20;case 3: console.log('D'); break;\
&#x20;}

The numeric case matches; without break, execution continues through default and case 3.

7. The expression `new Boolean(false) ?? true` evaluates to the Boolean primitive `true`.

This statement is false. The expression returns the Boolean object wrapping false; it does not return the primitive true.

You answered: True. The left operand is a non-nullish Boolean object, so ?? returns that object rather than the primitive true.

8. What is printed?

const result = null && 'A' ?? 'B';\
&#x20;console.log(result);

JavaScript requires parentheses when mixing ?? directly with &&.

9. Which expressions evaluate to the primitive Boolean `false`? Select every correct answer.

Boolean(0), Boolean('')

10. What is printed?

let result = '';\
&#x20;switch (result) {\
&#x20;case null: result += 'N';\
&#x20;case '': result += 'E';\
&#x20;case 0: result += 'Z'; break;\
&#x20;default: result += 'D';\
&#x20;}\
&#x20;console.log(result);

The empty-string case adds E, then execution falls through to the numeric-zero case and adds Z.

Try againNext quiz