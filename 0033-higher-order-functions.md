## Higher Order Functions

## 1. What is a Higher-Order Function?

A **higher-order function** is a function that does **at least one** of the following:

1. Takes another function as an argument  
2. Returns a function as its result  

Simple definition:

> A higher-order function is a function that works with other functions.

If a function **uses another function**, it is a higher-order function.

---

## 2. Why Do Higher-Order Functions Exist?

Higher-order functions exist because:
- functions are values in JavaScript
- values can be passed and returned
- code can be made reusable and flexible

They help:
- avoid repetition
- separate logic
- write cleaner code

---

## 3. The Two Rules of Higher-Order Functions

A function is higher-order if **any one** rule is true:

### Rule 1: Takes a function as input  
### Rule 2: Returns a function as output  

If either happens → higher-order function ✅

---

## 4. Functions as Values (Quick Recap)

This idea makes higher-order functions possible.

Example:

    const x = 10;

    const greet = function () {
      console.log("Hello");
    };

Here:
- `10` is a value
- `"Hello"` is a value
- `greet` (a function) is also a value

---

## 5. Higher-Order Function That Takes a Function

Example:

    function operate(a, b, action) {
      return action(a, b);
    }

    function add(x, y) {
      return x + y;
    }

    function multiply(x, y) {
      return x * y;
    }

    operate(2, 3, add);       // 5
    operate(2, 3, multiply);  // 6

Explanation:
- `operate` takes a function (`action`)
- `operate` calls that function
- behavior changes based on function passed

This makes code **flexible**.

---

## 6. Using Anonymous Functions as Input

Example:

    operate(5, 2, function (a, b) {
      return a - b;
    });

Why this is powerful:
- no need to define separate functions
- logic can be inline
- very common pattern

---

## 7. Higher-Order Function That Returns a Function

Example:

    function multiplier(factor) {
      return function (number) {
        return number * factor;
      };
    }

    const double = multiplier(2);
    const triple = multiplier(3);

    double(5);  // 10
    triple(5);  // 15

Explanation:
- `multiplier` returns a function
- returned function remembers `factor`
- this is called **closure** (later topic)

---

## 8. Built-In Higher-Order Functions (Intro)

JavaScript provides many built-in higher-order functions.

Examples:
- `forEach`
- `map`
- `filter`
- `reduce`

Example:

    [1, 2, 3].forEach(function (num) {
      console.log(num);
    });

Here:
- `forEach` is a higher-order function
- callback is passed to it

These will be covered **deeply later**.

---

## 9. Real-Life Analogy

Think of a **manager**:

- Manager does not do work directly
- Manager decides *how* work is done
- Workers (functions) do the actual work

Mental model:

> Higher-order function = manager  
> Callback functions = workers  

---

## 10. Common Beginner Mistakes

- Calling function instead of passing it
- Forgetting that functions are values
- Getting confused with nested functions
- Writing overly complex logic
- Not understanding returned functions
- Fear of functions inside functions
