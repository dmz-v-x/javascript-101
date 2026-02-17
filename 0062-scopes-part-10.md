## Scopes

## 1. What Do We Mean by Scope?

In simple words:

> Scope = Where to look for things.

More precisely:

> Scope = Visibility / Accessibility of variables & functions.

Whenever JavaScript sees:

    console.log(x);

The engine asks:

Where should I look for `x`?

That search mechanism is scope.

---

## 2. What Are We Looking For?

In JavaScript, scope mainly controls:

- Variables
- Functions

Example:

    let x = 10;

    function greet() { }

Both live inside some scope.

---

## 3. Types of Scopes in JavaScript

In JavaScript we have:

1. Global Scope  
2. Function Scope  
3. Block Scope  

These three explain most variable behavior.

---

# 1. Global Scope

## 4. What is Global Scope?

If a variable or function exists in global scope:

> It is accessible almost everywhere in the file.

Example:

    let x = 10;

    function test() {
      console.log(x);
    }

Global scope = outermost scope.

---

## 5. How Do Variables Enter Global Scope?

One common way:

✔ Declare outside any function  
✔ Declare outside any block  

Example:

    const teacher = "Himanshu";

---

## 6. Global Scope Mental Model

Think of global scope like:

> The outer universe of your program.

Everything inside functions can see globals.

Globals cannot see inside functions.

---

## 7. Example of Global Accessibility

    let count = 100;

    function demo() {
      console.log(count);
    }

    demo(); // Works

---

## 8. Why Global Variables Are Dangerous

Problems:

- Global pollution
- Name conflicts
- Hard debugging
- Unexpected overwrites

Example:

    let data = 10;

Later:

    let data = {}; // Error or conflict

---

# 2. Function Scope

## 9. What is Function Scope?

Function scope means:

> Variables declared inside functions are visible ONLY inside that function.

Example:

    function fun() {
      var x = 10;
    }

    console.log(x); // Error

---

## 10. Local Variables

Variables inside functions are called:

> Local variables.

Example:

    function greet() {
      let message = "Hello";
    }

message is local.

---

## 11. Why Outside Access Fails

Example:

    function test() {
      let x = 10;
    }

    console.log(x);

Engine searches:

✔ Current scope → Not found  
✔ Global scope → Not found  

ReferenceError.

---

## 12. Functions Create Scope Boundaries

Each function creates:

✔ New scope  
✔ New variable space  

Example:

    function one() {
      let x = 10;
    }

    function two() {
      let x = 50;
    }

No conflict.

---

## 13. Function Parameters Also Have Scope

Example:

    function add(a, b) {
      console.log(a, b);
    }

Parameters behave like local variables.

---

# 3. Block Scope

## 14. What is Block Scope?

A block is:

> A collection of statements wrapped in `{}`.

Example:

    {
      // block
    }

Block scope means:

> Variables declared with let/const stay inside block.

---

## 15. Example of Block Scope

    if (true) {
      let x = 10;
    }

    console.log(x); // Error

---

## 16. Types of Blocks

Blocks exist in:

- if / else
- while
- for
- standalone braces (raw block)

Example:

    {
      let x = 100;
    }

---

## 17. Important NOTE About Functions

Functions are also blocks.

But functions additionally create scope.

---

## 18. Function Declaration Inside Block (Advanced Gotcha)

Example:

    if (true) {
      function greet() { }
    }

Behavior may vary historically.

Modern JS treats functions block-scoped in strict mode.

---

# var vs let vs const

---

## 19. var Scope Behavior

Key rule:

✔ var is function-scoped  
✔ NOT block-scoped  

Example:

    if (true) {
      var x = 10;
    }

    console.log(x); // Works ❗

Leak occurs because var ignores block.

---

## 20. var Inside Function

    function demo() {
      if (true) {
        var x = 10;
      }

      console.log(x); // Works
    }

var belongs to function.

---

## 21. var Redeclaration

    var x = 10;
    var x = 9; // Allowed

Can cause bugs.

---

## 22. var Hoisting

    console.log(x); // undefined
    var x = 10;

var is hoisted and initialized.

---

## 23. let Scope Behavior

Key rule:

✔ let is block-scoped

Example:

    if (true) {
      let y = 10;
    }

    console.log(y); // Error

---

## 24. let and Temporal Dead Zone (TDZ)

    console.log(a); // Error ❗
    let a = 5;

let is hoisted but inaccessible.

---

## 25. let Redeclaration Not Allowed

    let y = 10;
    let y = 9; // Error

---

## 26. let in Global Scope Clarification

let declared globally:

✔ Still block-scoped  
✔ Not attached to global object  

---

## 27. const Scope Behavior

✔ Block-scoped like let  
✔ No reassignment  

Example:

    const y = 10;
    y = 22; // Error

---

## 28. const with Objects (Critical Gotcha)

    const user = {};

    user.name = "Asha"; // Allowed ✅

Binding constant, value mutable.

---

# Parsing vs Execution

---

## 29. How JavaScript Parses Code

JavaScript is hybrid:

✔ Parsing Phase  
✔ Execution Phase  

---

## 30. Phase 1: Parsing

During parsing:

✔ Scope resolution happens  
✔ Memory allocated  
✔ No values assigned  

JS looks only for:

✔ Formal declarations

---

## 31. Formal Declarations

Formal declarations include:

- var / let / const
- function declarations

Example:

    var teacher;
    function fun() { }

---

## 32. Phase 2: Execution

During execution:

✔ Values assigned  
✔ Code runs  

---

## 33. Example Walkthrough

    var teacher = "Himanshu";

    function fun() {
      var teacher = "Gaurav";
      console.log(teacher);
    }

Parsing:

✔ teacher in global scope  
✔ teacher in function scope  

Execution:

✔ Assign values  

---

# Scope Resolution Mechanism

---

## 34. Source vs Target References

Variables used as:

1. Target → Getting value  
2. Source → Retrieving value  

Example:

    x = 10;        // Target
    console.log(x); // Source

---

## 35. Scope Lookup Rule

Lookup order:

✔ Current scope  
✔ Outer scope  
✔ Global scope  

Never downward.

---

# Auto-Globals

---

## 36. What are Auto-Globals?

Auto-globals occur when:

✔ Variable assigned without declaration

Example:

    function fun() {
      x = 10;
    }

x becomes global.

---

## 37. Auto-Globals Work Only for Target References

Example:

    function fun() {
      teacher = "gaurav"; // target → auto-global
    }

But:

    console.log(teacher); // source → error

---

## 38. Why Auto-Globals Are Dangerous

- Silent bugs
- Global pollution
- Hard debugging

---

# undefined vs undeclared

---

## 39. undefined

undefined means:

> Variable declared but value not assigned.

Example:

    var x;
    console.log(x); // undefined

---

## 40. undeclared

undeclared means:

> Variable never formally declared.

Example:

    console.log(y); // ReferenceError

---

## 41. Critical Difference

| State | Meaning |
|--------|------------|
| undefined | Known to scope, no value |
| undeclared | Unknown to scope |

---

# Complex Example Analysis

---

## 42. Example 1

    var name = "Gaurav";

    function fun() {
      var name = "Amit";
      console.log(name, teacher);
      teacher = "vibhav";
    }

    console.log(teacher);
    fun();

Key observations:

✔ teachingAssistant → undeclared → source error  

---

## 43. Example 2

    var name = "Gaurav";

    function fun() {
      var name = "Amit";
      teacher = "manjul";
      console.log(name, teacher);
    }

Works because:

✔ teachingAssistant used as target first  

---

# Final Mental Models

---

## 44. Scope = Search Strategy

Whenever variable used:

✔ JS searches scopes  

---

## 45. var = Function Scope

Ignores blocks.

---

## 46. let / const = Block Scope

Respect boundaries + TDZ.

---

## 47. TDZ = Safety Zone

Prevents early access.

---

## 48. Auto-Globals = Dangerous Feature

Avoid completely.

---

# Points to Remember (Very Important)

- Scope = Visibility rules
- Global scope = Outermost scope
- Function scope = Local visibility
- Block scope = let/const safety
- var ignores blocks
- let/const respect blocks
- TDZ prevents undefined bugs
- Scope lookup moves upward
- undefined ≠ undeclared
- Auto-globals cause bugs
