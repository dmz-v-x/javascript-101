## Function Declarations

## 1. What is a Function Declaration?

A **function declaration** is the **standard and traditional way** of defining a function in JavaScript.

Simple definition:

> A function declaration defines a named function using the `function` keyword.

It is the **first type of function** every beginner should learn.

---

## 2. Syntax of Function Declaration

Basic syntax:

    function functionName() {
      // function body
    }

Parts explained:
- `function` → keyword (tells JS we are creating a function)
- `functionName` → name of the function
- `()` → parentheses (parameters go here later)
- `{}` → function body (code to execute)

---

## 3. Simple Example

Example function declaration:

    function greet() {
      console.log("Hello from JavaScript");
    }

Important:
- This code **does not run immediately**
- It only **defines** the function

---

## 4. Calling a Function Declaration

To run the function, we **call** it.

Example:

    greet();

What happens:
1. JavaScript finds the function named `greet`
2. Enters the function body
3. Executes the code inside
4. Comes back after execution

You can call it multiple times:

    greet();
    greet();
    greet();

---

## 5. Hoisting Behavior (VERY IMPORTANT)

Function declarations are **hoisted**.

This means:
- JavaScript moves the function to the top of the file internally
- You can call it **before it is written**

Example:

    sayHi();

    function sayHi() {
      console.log("Hi");
    }

This works ✅  
Because function declarations are fully hoisted.

---

## 6. Where Function Declarations Are Used

Function declarations are commonly used for:
- main business logic
- reusable utility functions
- clearly defined actions

Examples:
- `calculateTotal()`
- `validateUser()`
- `printInvoice()`

They make code:
- readable
- structured
- easy to debug

---

## 7. Scope of Function Declarations

Function declarations:
- create a function in the current scope
- can be global or local (inside another block)

Example:

    function outer() {
      function inner() {
        console.log("Inside inner");
      }
      inner();
    }

Here:
- `inner` exists only inside `outer`

---

## 8. Common Beginner Mistakes

- Forgetting to call the function
- Confusing function definition with execution
- Using unclear function names
- Writing too much logic inside one function
- Assuming functions run automatically
- Not understanding hoisting

---

## 9. Points to Remember

- Function declarations use the `function` keyword
- They define named functions
- They do NOT run automatically
- They are hoisted
- They can be called before definition
- Best for clear and reusable logic
- Ideal for beginners
