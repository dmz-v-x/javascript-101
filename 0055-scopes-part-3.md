## Global Scopes

## 1. What is Global Scope?

Global Scope is the **outermost scope** in JavaScript.

Simple definition:

> Variables defined outside everything belong to the global scope.

Example:

    let x = 10;

Here:

✔ `x` lives in global scope  
✔ Accessible from almost anywhere  

---

## 2. Mental Model of Global Scope

Think of global scope like:

> The outer universe of your program.

Everything inside your program:

- functions
- blocks
- loops

can potentially access global variables.

---

## 3. Example: Basic Global Variable

    let x = 10;

    function test() {
      console.log(x);
    }

    test(); // 10

Why this works:

✔ Function searches scope chain  
✔ Finds `x` in global scope  

---

## 4. Variables Enter Global Scope When…

Variables become global when declared:

✔ Outside any function  
✔ Outside any block (depending on keyword)  

Example:

    const name = "Asha";

---

## 5. Global Scope is Shared

Example:

    let counter = 0;

    function increment() {
      counter++;
    }

    function show() {
      console.log(counter);
    }

    increment();
    increment();
    show(); // 2

Both functions access the same global variable.

---

## 6. Browser Global Scope (Very Important)

In browsers:

> Global scope is tied to the **window object**.

Example:

    var x = 10;

    console.log(window.x); // 10

Because:

✔ `var` attaches to window  

---

### But let / const behave differently

    let y = 20;

    console.log(window.y); // undefined ❗

Why?

✔ let/const DO NOT attach to window  

Critical distinction.

---

## 7. Node.js Global Scope (Major Difference)

Node.js does NOT use window.

Node uses:

> global object → `global`

Example:

    var x = 10;

    console.log(global.x);

But here's the twist:

✔ Node wraps modules internally  
✔ Variables are NOT truly global by default  

---

## 8. Browser vs Node Global Scope

| Environment | Global Object |
|-------------|--------------|
| Browser | window |
| Node.js | global |

Modern universal standard:

    globalThis

Works everywhere.

---

## 9. Example: globalThis (Modern Safe Way)

    var x = 10;

    console.log(globalThis.x);

Environment-independent.

---

## 10. Global Variables Are Accessible Everywhere

Example:

    let theme = "dark";

    if (true) {
      console.log(theme); // Works
    }

    function demo() {
      console.log(theme); // Works
    }

Global scope → top-level visibility.

---

## 11. Global Scope and Lifetime

Global variables:

✔ Created when program starts  
✔ Live until program ends  

Unlike function variables:

✔ Which die after execution

---

## 12. The BIG PROBLEM → Global Pollution

Global pollution means:

> Too many variables living in global scope.

Example:

    let data = 10;
    let user = {};
    let config = {};
    let temp = 50;
    let result = 100;

Now imagine thousands…

Problems begin.

---

## 13. Why Global Pollution is Dangerous

### 1. Name Conflicts

Example:

    let user = "Asha";

Later:

    let user = { name: "Rahul" }; // Error ❗

Global collisions.

---

### 2. Accidental Overwrites

Example:

    let count = 10;

    function reset() {
      count = 0;
    }

Hard to track bugs.

---

### 3. Debugging Nightmares

Globals can be modified from anywhere.

Very difficult to trace.

---

### 4. Memory Waste

Global variables live long.

Even when no longer needed.

---

### 5. Third-Party Library Conflicts

Example:

Library A:

    let config = {};

Library B:

    let config = [];

Disaster.

---

## 14. Accidental Global Variables (Classic Beginner Bug)

Example:

    function test() {
      x = 10; // ❗ No let/var/const
    }

Now:

✔ x becomes global 🤯

This is extremely dangerous.

---

## 15. Strict Mode Prevents This

    "use strict";

    function test() {
      x = 10; // Error 
    }

Always safer.

---

## 16. var vs let/const in Global Scope

| Keyword | Global Behavior |
|---------|----------------|
| var | Attaches to global object |
| let | Global scope but not global object |
| const | Same as let |

This difference causes many confusions.

---

## 17. Example Showing the Difference

    var a = 10;
    let b = 20;

    console.log(window.a); // 10
    console.log(window.b); // undefined

---

## 18. Best Practices to Avoid Global Pollution

✔ Minimize globals  
✔ Use functions/modules  
✔ Use block scope  
✔ Prefer const  
✔ Enable strict mode  
✔ Namespace objects  

Example:

    const App = {
      config: {},
      user: {}
    };

---

## 19. Modern Solution → Modules

Modules isolate scope.

Each file gets its own scope.

Prevents global pollution.

---

## 20. Common Beginner Mistakes

- Overusing global variables
- Accidentally creating globals
- Confusing window vs global
- Expecting let to attach to window
- Ignoring strict mode
- Using globals for temporary data

---

## 21. Points to Remember (Very Important)

- Global scope = outermost scope
- Variables defined outside everything are global
- Browser global object = window
- Node global object = global
- globalThis works everywhere
- var attaches to global object
- let/const do not attach
- Global pollution is dangerous
- Accidental globals are major bugs
- Prefer modular design

---

## Final Thoughts

Global scope is powerful but dangerous.

It provides:

✔ Universal accessibility  
✔ Long-lived variables  

But introduces:

❌ Bugs  
❌ Conflicts  
❌ Maintenance problems  

As a beginner:

Use global scope carefully.

Avoid unnecessary globals.

Structure code using functions and modules.

Understanding global scope is critical for mastering:

- Scope chain
- Closures
- Hoisting
- Modules
- Execution context
