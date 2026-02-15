## Function Scope

## 1. What is Function Scope?

Function scope means:

> Variables defined inside a function are accessible ONLY inside that function.

Example:

    function test() {
      let x = 10;
    }

Here:

✔ `x` lives inside the function  
✔ Outside world cannot see it  

---

## 2. Mental Model of Function Scope

Think of a function like:

> A private room.

Variables inside the room:

✔ Can be used inside  
❌ Cannot be accessed outside  

---

## 3. Example: Local Variable

    function demo() {
      let message = "Hello";
      console.log(message); // Works
    }

    console.log(message); // Error

Why?

✔ message is local  
✔ Exists only inside demo  

---

## 4. Why Outside Access Fails

Example:

    function test() {
      let x = 10;
    }

    console.log(x);

JavaScript engine searches:

✔ Current scope → Not found  
✔ Global scope → Not found  

Result:

ReferenceError

---

## 5. Local Variables Explained

Variables declared inside functions are called:

> Local Variables

Characteristics:

✔ Limited visibility  
✔ Safe from outside modification  
✔ Temporary lifetime  

---

## 6. Function Scope vs Global Scope

Example:

    let globalVar = 100;

    function test() {
      let localVar = 10;

      console.log(globalVar); // Works
      console.log(localVar);  // Works
    }

    console.log(globalVar); // Works
    console.log(localVar);  // Error

Rules:

✔ Functions can access globals  
✔ Globals cannot access locals  

---

## 7. Function Creates Scope Boundary

Example:

    function one() {
      let x = 10;
    }

    function two() {
      let x = 50;
    }

No conflict.

Why?

✔ Separate scopes  
✔ Separate variables  

---

## 8. Lifetime of Function Variables

Function variables:

✔ Created when function runs  
✔ Destroyed when function finishes  

Example:

    function temp() {
      let x = 10;
    }

After execution:

✔ x is gone  

---

## 9. Each Function Call Gets Fresh Variables

Example:

    function counter() {
      let count = 0;
      count++;
      console.log(count);
    }

    counter(); // 1
    counter(); // 1
    counter(); // 1

Why?

✔ New scope every call  

---

## 10. var Inside Function Scope

Important rule:

> var is function-scoped.

Example:

    function test() {
      var x = 10;
    }

✔ Accessible anywhere inside function  
❌ Not accessible outside  

---

## 11. var Ignores Block Scope But Respects Function Scope

Example:

    function demo() {
      if (true) {
        var x = 10;
      }

      console.log(x); // Works
    }

Because:

✔ var ignores block  
✔ But stays inside function  

---

## 12. let / const Inside Function

Example:

    function demo() {
      if (true) {
        let x = 10;
      }

      console.log(x); // Error
    }

Because:

✔ let is block-scoped  

---

## 13. Nested Functions & Scope Chain

Example:

    function outer() {
      let x = 10;

      function inner() {
        console.log(x);
      }

      inner();
    }

Works because:

✔ inner accesses parent scope  

---

## 14. Scope Chain Lookup

Example:

    let a = 1;

    function outer() {
      let b = 2;

      function inner() {
        let c = 3;

        console.log(a, b, c);
      }

      inner();
    }

    outer();

Lookup order:

✔ inner → outer → global  

---

## 15. Function Scope Enables Isolation

Example:

    function calculate() {
      let result = 100;
    }

No accidental interference.

Safer code.

---

## 16. Shadowing Inside Function

Example:

    let x = 10;

    function test() {
      let x = 50;
      console.log(x);
    }

    test();      // 50
    console.log(x); // 10

Local variable shadows global.

---

## 17. Modifying Global Variable from Function

Example:

    let count = 10;

    function update() {
      count = 0;
    }

    update();
    console.log(count); // 0

Because function accesses global scope.

---

## 18. Accidental Globals Inside Functions (Dangerous)

Example:

    function test() {
      x = 10; // Missing let/var/const
    }

✔ x becomes global  

Classic bug source.

---

## 19. Strict Mode Prevents This

    "use strict";

    function test() {
      x = 10; // Error
    }

---

## 20. Common Beginner Mistakes

- Expecting local variables outside function
- Confusing block scope with function scope
- Overusing var
- Accidentally creating globals
- Misunderstanding shadowing
- Forgetting variable lifetime

---

## 21. Points to Remember (Very Important)

- Functions create scope boundaries
- Variables inside functions are local
- Local variables are invisible outside
- Functions can access global scope
- Global scope cannot access function scope
- var is function-scoped
- let/const respect block scope
- Function variables have temporary lifetime
- Each function call creates new scope
- Strict mode prevents accidental globals

---

## Final Thoughts

Function scope is one of the **core pillars of JavaScript**.

It explains:

- Variable visibility
- Variable lifetime
- Isolation
- Shadowing
- Scope chain behavior

Once function scope clicks:

✔ Bugs become easier to understand  
✔ Closures become logical  
✔ Scope chain becomes predictable  

This concept is foundational for mastering:

- Closures
- Hoisting
- Lexical scope
- Execution context
- Async JavaScript
