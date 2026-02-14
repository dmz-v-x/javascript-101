## Anonymous Function

## 1. What is an Anonymous Function?

An **anonymous function** is a function **without a name**.

Simple definition:

> An anonymous function is a function that does not have its own name.

Example:

    function () {
      console.log("Hello");
    }

Notice:
- There is no function name
- This function by itself is **invalid** unless used somewhere

---

## 2. Why Do Anonymous Functions Exist?

Anonymous functions exist because:
- functions are values in JavaScript
- sometimes we don’t need to name them
- they are used only once

They help:
- reduce unnecessary names
- write short, inline logic
- improve readability in some cases

---

## 3. Syntax of Anonymous Functions

Anonymous functions are usually written as **function expressions**.

Basic syntax:

    const greet = function () {
      console.log("Hello");
    };

Here:
- function has no name
- variable `greet` refers to it

Important:
- the variable name is NOT the function’s name
- the function itself is still anonymous

---

## 4. Anonymous Functions Stored in Variables

Example:

    const add = function (a, b) {
      return a + b;
    };

Calling it:

    add(10, 20);

Key idea:
- function has no name
- variable is used to call it

---

## 5. Anonymous Functions as Arguments (Very Common)

Anonymous functions are often passed **directly as arguments**.

Example:

    setTimeout(function () {
      console.log("Runs after 1 second");
    }, 1000);

Here:
- function is written inline
- no name is needed
- function is used only once

(This pattern will be explained deeply in callbacks later.)

---

## 6. Anonymous Functions in Array Methods

Example:

    let numbers = [1, 2, 3];

    numbers.forEach(function (num) {
      console.log(num);
    });

Why anonymous here?
- logic is short
- function is not reused
- naming would add noise

---

## 7. Anonymous vs Named Functions

### Anonymous Function

    const greet = function () {
      console.log("Hello");
    };

---

### Named Function Expression

    const greet = function sayHello() {
      console.log("Hello");
    };

Difference:
- anonymous → no internal name
- named → has internal name (useful for debugging)

Beginner rule:
> Use anonymous functions when reuse is not needed.

---

## 8. Limitations of Anonymous Functions

Anonymous functions:
- cannot refer to themselves by name
- are harder to debug (stack traces)
- are not hoisted

So they should be used:
- for small logic
- in one-time use cases

---

## 9. Common Beginner Mistakes

- Trying to define anonymous function alone
- Forgetting to assign or pass it
- Expecting hoisting
- Overusing anonymous functions everywhere
- Writing large logic inside anonymous functions
- Confusing variable name with function name

---

## 10. Points to Remember

- Anonymous functions have no name
- They are usually function expressions
- Must be stored or passed to be useful
- Common in callbacks and array methods
- Not hoisted
- Best for short, one-time logic
- Avoid for large or reusable logic
