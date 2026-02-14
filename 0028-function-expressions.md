## Function Expressions

## 1. What is a Function Expression?

A **function expression** is a function that is **stored inside a variable**.

Simple definition:

> A function expression treats a function like a value and assigns it to a variable.

Example:

    const greet = function () {
      console.log("Hello");
    };

Here:
- a function is created
- it is stored in variable `greet`

---

## 2. Why Do Function Expressions Exist?

Function expressions exist because in JavaScript:
- functions are values
- values can be stored in variables
- values can be passed around

This allows:
- flexible code
- dynamic behavior
- callbacks (later topic)

Function declarations alone are not enough for this flexibility.

---

## 3. Syntax of Function Expression

Basic syntax:

    const functionName = function () {
      // function body
    };

Parts explained:
- `const functionName` → variable
- `=` → assignment
- `function ()` → function value
- `{}` → function body

Important:
- semicolon `;` is required (expression)

---

## 4. Simple Example

Example:

    const sayHi = function () {
      console.log("Hi from function expression");
    };

Calling the function:

    sayHi();

Important:
- you call the variable name
- not the `function` keyword

---

## 5. Functions Are Values (VERY IMPORTANT)

In JavaScript:
- numbers are values
- strings are values
- functions are also values

Example:

    const x = 10;
    const message = "Hello";

    const fn = function () {
      console.log("I am a value");
    };

All three variables store values.

This idea is the **foundation** for:
- callbacks
- higher-order functions
- async programming

---

## 6. Hoisting Behavior (BIG DIFFERENCE)

Function expressions are **NOT hoisted like function declarations**.

Example:

    sayHello();

    const sayHello = function () {
      console.log("Hello");
    };

This causes an error ❌

Why?
- variable `sayHello` exists
- but function is not assigned yet
- so JavaScript cannot call it

Rule:

> Function expressions must be defined before they are used.

---

## 7. `const` vs `let` vs `var` (Important)

### Using `const` (recommended)

    const greet = function () {
      console.log("Hello");
    };

Why `const`?
- function reference should not change
- prevents accidental reassignment

---

### Using `let`

    let greet = function () {
      console.log("Hello");
    };

Allowed, but:
- reassignment possible
- usually unnecessary

---

### Using `var` (avoid)

    var greet = function () {
      console.log("Hello");
    };

Problems:
- hoisting confusion
- scope issues

👉 Best practice: **always use `const`**.

---

## 8. Named vs Anonymous Function Expressions

### Anonymous function expression

    const greet = function () {
      console.log("Hello");
    };

Most common.

---

### Named function expression

    const greet = function greetInternal() {
      console.log("Hello");
    };

Important:
- `greetInternal` is only visible inside the function
- useful for debugging and recursion

---

## 9. Where Function Expressions Are Used

Function expressions are commonly used in:
- callbacks
- event handlers
- conditional logic
- passing functions as arguments

Example:

    setTimeout(function () {
      console.log("Hello after 1 second");
    }, 1000);

(Don’t worry about this now — just see the pattern.)

---

## 10. Common Beginner Mistakes

- Calling function before defining it
- Forgetting semicolon
- Confusing declaration with expression
- Using `var` instead of `const`
- Thinking function expressions are hoisted
- Not realizing functions are values

---

## 11. Points to Remember

- Function expressions store functions in variables
- They are expressions, not statements
- Functions are values in JavaScript
- Function expressions are NOT hoisted
- Must be defined before use
- Prefer `const` for safety
- Widely used in modern JavaScript
