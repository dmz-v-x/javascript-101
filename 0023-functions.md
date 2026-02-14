## Functions in JavaScript

## 1. What is a Function?

A **function** is a **block of code** that is:
- written once
- named
- and can be used (run) multiple times

Simple definition:

> A function is a reusable piece of code that performs a specific task.

---

## 2. Why Do We Need Functions?

Without functions:
- code gets repeated
- programs become long
- changes become hard

Example without function:

    console.log("Hello");
    console.log("Hello");
    console.log("Hello");

With function:

    function sayHello() {
      console.log("Hello");
    }

    sayHello();
    sayHello();
    sayHello();

Same result, cleaner code.

---

## 3. Real-Life Analogy (Very Important)

Think of a **function like a machine**.

- Input → machine → output  
- Press button → machine runs  
- Machine can be reused

Example:
- Washing machine
- Calculator
- Coffee machine

Mental model:

> Function = machine  
> Calling function = pressing the button  

---

## 4. Function Declaration (Creating a Function)

To create a function, we use the **`function` keyword**.

### Basic Syntax

    function functionName() {
      // code to run
    }

Parts:
- `function` → keyword
- `functionName` → name of the function
- `()` → parentheses (empty for now)
- `{}` → function body (block)

---

### Example

    function greet() {
      console.log("Hello from function");
    }

This code:
- **defines** a function
- does NOT run it yet

Important:
- Writing a function does NOT execute it

---

## 5. Calling (Invoking) a Function

To run a function, we **call** it using its name followed by `()`.

Example:

    greet();

What happens:
- JavaScript jumps into the function body
- executes the code inside
- then comes back

You can call a function **multiple times**:

    greet();
    greet();
    greet();

---

## 6. Function Body and Execution Flow

Example:

    function demo() {
      console.log("Step 1");
      console.log("Step 2");
      console.log("Step 3");
    }

    console.log("Before");
    demo();
    console.log("After");

Execution order:
1. "Before"
2. "Step 1"
3. "Step 2"
4. "Step 3"
5. "After"

Important:
- Function code runs **only when called**
- Execution moves **into** and then **out of** the function

---

## 7. Functions vs Normal Code

Normal code:

    console.log("A");
    console.log("B");

Function-based code:

    function show() {
      console.log("A");
      console.log("B");
    }

Difference:
- Normal code runs immediately
- Function code waits until called

Functions give us:
- control
- reusability
- structure

---

## 8. Naming Functions (Best Practices)

Good function names:
- describe what the function does
- start with a verb

Examples:
- `greetUser`
- `calculateTotal`
- `printMessage`

Bad names:
- `a`
- `test`
- `x1`

Rule of thumb:
> Function name should read like an action.

---

## 9. Common Beginner Mistakes

- Forgetting to call the function
- Thinking function runs when defined
- Missing parentheses `()`
- Writing logic outside functions
- Giving unclear function names
- Calling function before understanding flow

---

## 10. Points to Remember

- A function is reusable code
- Functions are defined using `function`
- Functions do NOT run automatically
- Functions run only when called
- You can call a function multiple times
- Functions help avoid repetition
- Functions make code clean and readable
