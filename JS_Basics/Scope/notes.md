# 1. Scope

**Scope = where a variable can be accessed in your code.**

### Main types of scope

| Scope          | Meaning                              |
| -------------- | ------------------------------------ |
| Global scope   | Accessible throughout the program    |
| Function scope | Accessible inside the function       |
| Block scope    | Accessible inside `{ }`              |
| Module scope   | Available within a JavaScript module |

### `var` vs `let/const`

```javascript
if (true) {
    var a = 10;
    let b = 20;
}

console.log(a); // ✅ 10
console.log(b); // ❌ Error
```

Why?

* `var` → **function-scoped**
* `let` / `const` → **block-scoped**

### Interview answer

> "Scope determines where a variable can be accessed. `var` is function-scoped, while `let` and `const` are block-scoped."

---

## Lexical Scope

JavaScript uses **lexical scoping**, meaning an inner function can access variables from its outer scope.

```javascript
function outer() {
    let name = "Vibha";

    function inner() {
        console.log(name);
    }

    inner();
}
```

`inner()` can access `name` because it is defined inside the scope of `outer()`.

### ⭐ Remember

> **Inner scope can access outer scope, but outer scope cannot access variables created inside the inner scope.**

---