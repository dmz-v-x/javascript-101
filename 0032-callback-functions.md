## Callback Functions

## 1. What is a Callback Function?

A **callback function** is a function that is:
- passed as an argument to another function
- and called later inside that function

Simple definition:

> A callback is a function that is called by another function.

---

## 2. Why Do Callback Functions Exist?

Callbacks exist because:
- JavaScript treats functions as values
- functions can be passed around
- some logic depends on other logic finishing first

Callbacks allow:
- flexible behavior
- reusable functions
- control over execution order

---

## 3. Functions as Values (Quick Recap)

Example:

    function greet() {
      console.log("Hello");
    }

    function run(fn) {
      fn();
    }

    run(greet);

Here:
- `greet` is passed as a value
- `run` executes it later

This is the core idea of callbacks.

---

## 4. Basic Callback Syntax

General pattern:

    function main(callback) {
      // do something
      callback();
    }

Calling it:

    function task() {
      console.log("Task done");
    }

    main(task);

Important:
- callback is just a parameter
- function is called using `()`

---

## 5. Simple Example (Beginner Friendly)

Example:

    function greetUser(callback) {
      console.log("Hello User");
      callback();
    }

    function sayBye() {
      console.log("Goodbye");
    }

    greetUser(sayBye);

Execution order:
1. greetUser runs
2. "Hello User" prints
3. callback (`sayBye`) runs
4. "Goodbye" prints

---

## 6. Anonymous Callback Functions

Callbacks are often anonymous.

Example:

    greetUser(function () {
      console.log("Goodbye");
    });

Why anonymous?
- function is used once
- no need to name it

---

## 7. Synchronous Callbacks

A **synchronous callback** runs immediately.

Example:

    function process(data, callback) {
      console.log(data);
      callback();
    }

    process("Processing", function () {
      console.log("Done");
    });

Execution is:
- top to bottom
- no waiting

---

## 8. Asynchronous Callbacks (Intro Only)

Some callbacks run **later**, not immediately.

Example:

    setTimeout(function () {
      console.log("Runs after delay");
    }, 1000);

Here:
- callback waits
- main program continues
- callback runs after delay

(Async behavior will be covered deeply later.)

---

## 9. Real-World Uses of Callbacks

Callbacks are used in:
- event handling (clicks)
- timers
- array methods (`forEach`)
- async operations
- APIs

Example:

    [1, 2, 3].forEach(function (num) {
      console.log(num);
    });

---

## 10. Common Beginner Mistakes

- Calling callback instead of passing it
- Forgetting parentheses difference
- Passing result instead of function
- Confusing sync vs async callbacks
- Writing large logic inside callbacks
- Callback hell (later topic)

---

### ⚠️ Important Mistake Example

Wrong:

    greetUser(sayBye());

Correct:

    greetUser(sayBye);

---

## 11. Points to Remember

- Callbacks are functions passed as arguments
- They are called by another function
- Functions are values in JavaScript
- Callbacks can be anonymous
- Callbacks can be sync or async
- Parentheses matter
- Foundation of async JS
