## `var` Scope

## 1. The Most Important Rule About var

Variables declared using `var` are:

✔ Function-scoped  
✔ NOT Block-scoped  

This single rule explains most var weirdness.

---

## 2. What Does Function-Scoped Mean?

Function-scoped means:

> A var variable is accessible anywhere inside the function where it is declared.

Example:

    function test() {
      var x = 10;

      console.log(x); // Works
    }

Outside function:

    console.log(x); // Error

---

## 3. var is NOT Block-Scoped (Critical Concept)

Example:

    if (true) {
      var x = 10;
    }

    console.log(x); // Works ❗

Why?

Because:

✔ var ignores block boundaries

---

## 4. Mental Model of var Scope

Think of var like:

> Variables belong to the nearest function, NOT nearest block.

Blocks do not contain var.

Functions contain var.

---

## 5. Classic Example Showing Leak

    if (true) {
      var x = 10;
    }

    console.log(x); // 10

Even though x is inside `{}`.

---

## 6. Why Does var Leak?

Because:

✔ Blocks do NOT create scope for var  
✔ Only functions create scope  

So var escapes block.

---

## 7. var Inside Function + Block

    function demo() {
      if (true) {
        var x = 10;
      }

      console.log(x); // Works
    }

Because:

✔ var belongs to demo()

---

## 8. let / const Behave Differently

    if (true) {
      let y = 20;
    }

    console.log(y); // Error

Because:

✔ let respects block scope

---

## 9. var vs let Side-by-Side

    if (true) {
      var a = 10;
      let b = 20;
    }

    console.log(a); // Works
    console.log(b); // Error

---

## 10. Blocks That DO NOT Contain var

Blocks include:

- if blocks
- loop blocks
- standalone blocks

Example:

    {
      var x = 10;
    }

    console.log(x); // Works ❗

---

## 11. Loop Example (Classic var Problem)

    for (var i = 0; i < 3; i++) {
      console.log(i);
    }

    console.log(i); // 3 ❗

Because:

✔ var ignores loop block

---

## 12. Same Loop with let

    for (let i = 0; i < 3; i++) {
      console.log(i);
    }

    console.log(i); // Error

Block scope prevents leak.

---

## 13. Famous Closure Bug with var

    for (var i = 0; i < 3; i++) {
      setTimeout(function () {
        console.log(i);
      }, 100);
    }

Output:

    3
    3
    3

Why?

✔ Single shared i  
✔ var not block-scoped  

---

## 14. Fix Using let

    for (let i = 0; i < 3; i++) {
      setTimeout(function () {
        console.log(i);
      }, 100);
    }

Output:

    0
    1
    2

Because:

✔ New block-scoped i per iteration

---

## 15. var Hoisting Behavior (Very Important)

Example:

    function test() {
      console.log(x); // undefined ✅
      var x = 10;
    }

Why undefined?

Because:

✔ var is hoisted  
✔ Initialized as undefined

---

## 16. var Hoisting Mental Model

Conceptually:

    var x;

    console.log(x);

    x = 10;

---

## 17. var and Block Hoisting Confusion

    if (true) {
      var x = 10;
    }

Equivalent to:

    var x;

    if (true) {
      x = 10;
    }

---

## 18. Redeclaration Allowed with var

    var x = 10;
    var x = 20;

No error.

Dangerous in large programs.

---

## 19. var in Global Scope (Extra Danger)

Browser example:

    var x = 10;

    console.log(window.x); // 10

Because:

✔ var attaches to global object

---

## 20. Why var is Considered Problematic

var causes:

❌ Block leaks  
❌ Hoisting confusion  
❌ Redeclaration bugs  
❌ Closure bugs  
❌ Global pollution  

---

## 21. Why Modern JS Prefers let / const

let/const provide:

✔ True block scope  
✔ TDZ safety  
✔ No silent hoisting bugs  
✔ Safer redeclaration rules  

---

## 22. Common Beginner Mistakes

- Expecting var to respect blocks
- Confusing block vs function scope
- Ignoring hoisting effects
- Using var inside loops
- Redeclaring variables accidentally
- Creating globals unintentionally

---

## 23. Golden Mental Model

var variables belong to:

✔ Nearest function  
❌ NOT nearest block  

---

## 24. Points to Remember (Very Important)

- var is function-scoped
- var ignores block scope
- var leaks outside blocks
- var is hoisted
- var initializes as undefined
- var allows redeclaration
- var causes closure bugs
- var attaches to global object
- let/const are safer alternatives

---

## Final Thoughts

Understanding var scope behavior explains many classic JavaScript bugs.

It clarifies:

✔ Why variables leak  
✔ Why loops behave strangely  
✔ Why closures break  
✔ Why hoisting confuses beginners  

Modern JavaScript largely replaces var with:

✔ let  
✔ const  

But understanding var is critical for:

- Reading older code
- Debugging legacy applications
- Interviews
- Deep JavaScript mastery

Once var scope clicks:

JavaScript’s behavior becomes much more predictable.
