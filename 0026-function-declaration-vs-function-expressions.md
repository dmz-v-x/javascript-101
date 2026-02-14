## Function Declarations vs Function Expressions

## 1. What is a Function Declaration?

A **function declaration** is the **normal way** of creating a function using the `function` keyword.

Example:

    function greet() {
      console.log("Hello");
    }

Here:
- `greet` is the function name
- Function is declared directly
- No variable is involved

Simple definition:

> A function declaration defines a function as a standalone statement.

---

## 2. What is a Function Expression?

A **function expression** is when a function is **assigned to a variable**.

Example:

    const greet = function () {
      console.log("Hello");
    };

Here:
- A function is created
- It is stored inside a variable `greet`
- The function itself has no name

Simple definition:

> A function expression treats a function like a value and stores it in a variable.

---

## 3. Syntax Comparison

### Function Declaration

    function add(a, b) {
      return a + b;
    }

---

### Function Expression

    const add = function (a, b) {
      return a + b;
    };

Important difference:
- Declaration starts with `function`
- Expression starts with a variable (`const`, `let`, or `var`)

---

## 4. Functions Are Values (Important Idea)

In JavaScript:
- functions are **values**
- they can be stored in variables
- passed as arguments
- returned from other functions

Function expressions make this idea clear.

Example:

    const sayHi = function () {
      console.log("Hi");
    };

    sayHi();

Here:
- `sayHi` holds a function value

---

## 5. Hoisting Difference (VERY IMPORTANT)

This is the **biggest difference** between declarations and expressions.

---

### Function Declarations are Hoisted

You can call a function **before it is defined**.

Example:

    greet();

    function greet() {
      console.log("Hello");
    }

This works because:
- function declarations are fully hoisted
- JavaScript moves them to the top internally

---

### Function Expressions are NOT Hoisted (the same way)

Example:

    greet();

    const greet = function () {
      console.log("Hello");
    };

This gives an error.

Why?
- `greet` exists in memory
- but it is `undefined` at call time
- function is not assigned yet

So:

> Function expressions cannot be used before they are defined.

---

## 6. Named vs Anonymous Function Expressions

Most function expressions are **anonymous**.

Example:

    const sayHello = function () {
      console.log("Hello");
    };

But they can also be **named**.

Example:

    const sayHello = function greetInternal() {
      console.log("Hello");
    };

Important:
- `greetInternal` is NOT accessible outside
- It is useful for debugging and recursion

---

## 7. Function Declaration vs Expression (Side-by-Side)

| Feature | Function Declaration | Function Expression |
|------|----------------------|--------------------|
| Syntax | `function name()` | `const name = function()` |
| Hoisting | Fully hoisted | Not hoisted |
| Can be called before definition | Yes | No |
| Stored in variable | No | Yes |
| Treated as value | Indirectly | Directly |

Mental model:
- Declaration → statement
- Expression → value

---

## 8. When Should You Use Which?

### Use Function Declarations when:
- defining main logic
- readability matters
- function should be available everywhere
- beginner-friendly code

---

### Use Function Expressions when:
- functions are assigned to variables
- passing functions as arguments
- callbacks
- conditional function creation

Example:

    const handler = function () {
      console.log("Clicked");
    };

---

## 9. Common Beginner Mistakes

- Thinking both behave exactly the same
- Calling function expressions before definition
- Confusing hoisting behavior
- Forgetting semicolon after function expression
- Using `var` instead of `const` for function expressions
- Not understanding functions are values

---

## 10. Points to Remember

- Function declarations are hoisted
- Function expressions are not hoisted
- Declarations define functions directly
- Expressions store functions in variables
- Functions are values in JavaScript
- Prefer `const` for function expressions
- Hoisting difference is critical
