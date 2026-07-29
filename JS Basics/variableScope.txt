Scope in JavaScript defines where a variable can be accessed or used within a program.

Determines the accessibility of variables in different parts of the program.
Helps prevent conflicts by restricting variable usage to specific areas.
Improves code organization and readability.
Defines the lifetime of variables during program execution.
Main types include global scope, local (function) scope, and block scope.

// Declaring a global variable
let x = 10;

function func() {
    
    // Declaring a local variable
    let y = 20;

    // Accessing Local and Global
    // variables
    console.log(x,",", y);
}

func();

1. Global Scope ========>A global variable refers to a variable that is declared outside any function or block, so it can be used anywhere in the program, both inside functions and in the main code.

// Global Variable accessed from within a function 
const x = 10;

function fun1() {
    console.log(x);
}

fun1();

2.Local or function scope=======>A local variable is a variable declared inside a function, making it accessible only within that function. It cannot be used outside the function.

Functions are objects and can be assigned to variables.

function fun2(){
    
    // This variable is local to fun2() and 
    // cannot be accessed outside this function
    let x = 10;
    console.log(x);
}

fun2();

3. block scope =====>Block scope in JavaScript means variables declared with let or const inside { } are accessible only within that block, and accessing them before declaration (TDZ) causes a ReferenceError.
Variables declared with var do not have block scope. A var variable declared inside a function is accessible throughout that entire function, regardless of any blocks (like if statements or for loops) within the function.  If var is declared used outside of any function, it creates a global variable.

{
    
    // Var can Accessible inside & outside the block scope 
    var x = 10;
    
    // let , const Accessible only inside the block scope
    const y = 20;
    let z = 30;
    
    console.log(x);
    console.log(y);
    console.log(z);
}

console.log(x);

4. Lexical scope ============>The variable is declared inside the function and can only be accessed inside that block or nested block is called lexical scope.

function func1() {
    const x = 10;

    function func2() {
        const y = 20;
        console.log(`${x} ${y}`);
    }

    func2();
}

func1();
This code demonstrates lexical scope, where func2 accesses the variable x from func1 and prints “10 20”.

5. Modular scope =======>Module scope refers to variables and functions that are accessible only within a specific JavaScript module. It helps keep code organized and prevents variables from affecting the global scope.

// math.js (module file)
export const number = 10;

export function add(a, b) {
  return a + b;
}

// main.js (another file)
import { number, add } from "./math.js";

console.log(number);      // 10
console.log(add(5, 3));   // 8

math.js has variables and functions inside its module scope.
They are only accessible in other files when we use export and import.