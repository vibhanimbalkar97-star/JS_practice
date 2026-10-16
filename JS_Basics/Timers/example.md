Let's learn `setTimeout()` and `setInterval()` first, then practise 10 tricky JavaScript interview questions about timers, scope, `var`, and `let`.

## 1. `setTimeout()` vs `setInterval()`

`setTimeout()`

Runs a function once after a specified delay.

```
setTimeout(() => {
  console.log("Hello");
}, 2000);
```

Runs once after about 2 seconds.

`setInterval()`

Runs a function repeatedly at a specified interval.

```
setInterval(() => {
  console.log("Hello");
}, 2000);
```

Runs repeatedly, about every 2 seconds.

### Important terms

| Term                | Simple meaning                                                                 |
| ------------------- | ------------------------------------------------------------------------------ |
| Callback            | The function passed to a timer to run later.                                   |
| Delay               | Time in milliseconds. `1000` ms = 1 second.                                    |
| Asynchronous        | The timer schedules work for later; JavaScript continues executing other code. |
| `clearTimeout(id)`  | Cancels a pending timeout.                                                     |
| `clearInterval(id)` | Stops a repeating interval.                                                    |
| Timer ID            | The value returned by the timer, used to cancel it.                            |
| Call stack          | Where JavaScript executes the currently running functions.                     |
| Event loop          | Helps schedule callbacks when JavaScript can execute them.                     |
| `var`               | Function-scoped; loop callbacks may share the same variable.                   |
| `let`               | Block-scoped; each `for` loop iteration gets its own binding in this pattern.  |

### Example 1: Synchronous code vs timer

```
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

console.log("C");
```

Output:

```
A
C
B
```

Why? Even with a delay of `0`, the callback is scheduled for later. The synchronous code runs first.

### Example 2: Cancelling a timer

```
const timer = setTimeout(() => {
  console.log("Hello");
}, 2000);

clearTimeout(timer);
```

Output: nothing from the callback, because the timeout is cancelled before it runs.

### Example 3: Stopping an interval

```
let count = 0;

const timer = setInterval(() => {
  count++;
  console.log(count);

  if (count === 3) {
    clearInterval(timer);
  }
}, 1000);
```

Output:

```
1
2
3
```

The interval stops when `count` reaches `3`.

Important: Timer delays are not exact guarantees. The callback can run later if JavaScript is busy.

## 2. Ten tricky interview questions

Choose one answer for each. Don't run the code yet—predict the output.

### 1. What is the output?

console.log("A"); setTimeout(() => console.log("B"), 0); console.log("C");

A, B, C

A, C, B

B, A, C

C, A, B

Correct!

Synchronous logs run first. The timer callback runs later, even with a 0 ms delay.

### 2. What is the output?

setTimeout(() => console.log("A"), 1000); console.log("B");

A, B

B, then A after about 1 second

B only

A only

Correct!

The timer callback is scheduled for later; synchronous console.log prints B first.

### 3. What does this print?

for (var i = 0; i < 3; i++) {   setTimeout(() => console.log(i), 100); }

0, 1, 2

3, 3, 3

0, 0, 0

ReferenceError

Correct!

All callbacks refer to the same var i. The loop finishes with i = 3 before the callbacks run.

### 4. What does this print?

for (let i = 0; i < 3; i++) {   setTimeout(() => console.log(i), 100); }

3, 3, 3

0, 1, 2

1, 2, 3

ReferenceError

Correct!

With let in this for-loop pattern, each iteration has its own i binding.

### 5. How many times does Hello print?

let id = setInterval(() => {   console.log("Hello");   clearInterval(id); }, 500);

Zero times

Once

Twice

Forever

Correct!

The interval callback runs once, prints Hello, then cancels the interval.

### 6. What is the output?

let id = setTimeout(() => console.log("A"), 100); clearTimeout(id); console.log("B");

A, then B

B only

A only

B, then A

Correct!

The timeout is cancelled before its callback runs. Only B prints.

### 7. What is the output?

setTimeout(() => console.log(1), 0); setTimeout(() => console.log(2), 0); console.log(3);

1, 2, 3

3, 1, 2

1, 3, 2

2, 1, 3

Correct!

The synchronous 3 prints first. The two timer callbacks then run in scheduling order.

### 8. What is the output?

let count = 0; const id = setInterval(() => {   count++;   console.log(count);   if (count === 2) clearInterval(id); }, 100);

1 only

1, 2

0, 1, 2

1, 2, 3

Correct!

count increments before printing. The interval is cleared after printing 2.

### 9. What is the output?

function test() {   for (var i = 0; i < 2; i++) {}   console.log(i); } test();

1

2

undefined

ReferenceError

Correct!

var is function-scoped. The loop stops when i becomes 2, and i remains accessible inside test.

### 10. What is the output?

console.log("Start"); setTimeout(() => console.log("Timer"), 0); Promise.resolve().then(() => console.log("Promise")); console.log("End");

Start, Timer, Promise, End

Start, End, Promise, Timer

Start, End, Timer, Promise

Promise, Start, End, Timer

Correct!

Synchronous code runs first, then Promise microtasks, then timer callbacks.

## Your score: 10/10

Try again

Take your time. The most important tricky concepts here are timer callbacks, the event loop, and the difference between `var` and `let`.


Here are 10 new tricky JavaScript interview questions covering timer callbacks, the event loop, `var` vs `let`, closures, Promises, and timer cancellation. These combine the concepts we've practised so far.

Try predicting each output before checking your answers.

## JavaScript tricky quiz — Level 2

### 1. What is the output?

for (var i = 1; i <= 3; i++) {   setTimeout(() => console.log(i), i \* 100); }

A. 1, 2, 3

B. 4, 4, 4

C. 0, 1, 2

D. 3, 3, 3

Correct!

var creates one shared i. The loop finishes with i = 4 before any timer callback runs, so each callback prints 4.

### 2. What is the output?

for (let i = 1; i <= 3; i++) {   setTimeout(() => console.log(i), 0); } console.log("Done");

A. 1, 2, 3, Done

B. Done, then 1, 2, 3

C. Done, then 3, 3, 3

D. 3, 2, 1, Done

Correct!

The synchronous log Done runs first. Each timer callback retains its own let binding and then prints 1, 2, 3.

### 3. What is the output?

console.log("A"); Promise.resolve().then(() => console.log("B")); setTimeout(() => console.log("C"), 0); console.log("D");

A. A, B, C, D

B. A, D, B, C

C. A, D, C, B

D. B, A, D, C

Correct!

Synchronous logs A and D run first, then the Promise microtask B, then the timer callback C.

### 4. What is the output?

setTimeout(() => console.log("Timer 1"), 0); setTimeout(() => console.log("Timer 2"), 0); Promise.resolve().then(() => console.log("Promise"));

A. Timer 1, Timer 2, Promise

B. Promise, Timer 1, Timer 2

C. Timer 2, Timer 1, Promise

D. Promise, Timer 2, Timer 1

Correct answer: B

Promise callbacks (microtasks) run before queued timer callbacks. The timers then run in scheduling order.

### 5. What is the output?

let x = 10; setTimeout(() => console.log(x), 0); x = 20;

A. 10

B. 20

C. undefined

D. ReferenceError

Correct answer: B

The callback reads x when it executes, not when it is scheduled. x has become 20 by then.

### 6. What is the output?

for (var i = 0; i < 3; i++) {   setTimeout(() => console.log(i), 10);   console.log("Loop", i); }

A. Loop 0, Loop 1, Loop 2, then 3, 3, 3

B. 0, 1, 2, then Loop 0, Loop 1, Loop 2

C. Loop 0, 0, Loop 1, 1, Loop 2, 2

D. 3, 3, 3, then Loop 0, Loop 1, Loop 2

Correct!

All synchronous Loop logs execute during the loop. Timer callbacks run later and all read the shared var i, which is 3.

### 7. What is the output?

let id = setInterval(() => console.log("Tick"), 100); setTimeout(() => clearInterval(id), 350);

A. Tick prints exactly 3 times in every environment

B. Tick prints repeatedly until the interval is cleared; the exact count can vary

C. Tick never prints

D. Tick prints forever

Correct answer: B

The interval is cleared after a separate timeout. Timer scheduling is not exact, so do not assume a guaranteed number of ticks.

### 8. What is the output?

function test() {   console.log(a);   var a = 5;   setTimeout(() => console.log(a), 0); } test();

A. 5, then 5

B. undefined, then 5

C. ReferenceError, then 5

D. undefined, then undefined

Correct!

The local var declaration is hoisted and initialized to undefined. The timer callback runs later, after a has been assigned 5.

### 9. What is the output?

setTimeout(() => {   console.log("A");   Promise.resolve().then(() => console.log("B")); }, 0); setTimeout(() => console.log("C"), 0);

A. A, C, B

B. A, B, C

C. C, A, B

D. B, A, C

Correct!

The first timer prints A and schedules Promise microtask B. Microtasks run before the next timer callback C.

### 10. What is the output?

for (let i = 0; i < 3; i++) {   setTimeout(() => {     console.log(i);     if (i === 1) return;   }, 0); }

A. 0, 1

B. 0, 1, 2

C. 3, 3, 3

D. 1, 2

Correct answer: B

Each callback has its own i binding. return exits only that callback; it does not cancel other scheduled timers.

## Score: 6/10

Try again

### Quick revision before answering

- Synchronous code runs first.
- Promise callbacks run as microtasks before timer callbacks.
- `setTimeout(fn, 0)` still schedules `fn` for later.
- `var` shares one function-scoped variable across loop iterations.
- `let` creates a separate loop binding for each iteration in these examples.
- Closures retain access to variables; a callback may read a variable's updated value when it runs.
- `return` inside a callback doesn't cancel other timers.
- `clearInterval()` stops future interval callbacks, but timer timing is not exact.