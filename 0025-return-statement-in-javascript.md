## Return Statement in JavaScript

## 1. Why Do We Need `return`?

So far, our functions:
- only printed values
- did not give results back

Example:

    function add(a, b) {
      console.log(a + b);
    }

    add(10, 20);

Problem:
- result is printed
- but we **cannot reuse it**

To **send a value back** from a function, we need `return`.

---

## 2. What Does the `return` Statement Do?

The `return` statement does **two things**:

1. Sends a value back to the place where the function was called
2. Stops the execution of the function

Simple definition:

> `return` sends output from a function and ends the function.

---

## 3. Returning a Value from a Function

Example:

    function add(a, b) {
      return a + b;
    }

    let result = add(10, 20);
    console.log(result);

What happens step by step:
1. Function is called
2. `a + b` is calculated → `30`
3. `return 30` sends value back
4. `result` receives `30`

Now the value is **usable**.

---

## 4. `return` vs `console.log` (VERY IMPORTANT)

This is one of the **biggest beginner confusions**.

### `console.log`

    console.log(10);

- Prints value
- For debugging
- Does NOT return anything

---

### `return`

    return 10;

- Sends value back
- Can be stored
- Can be reused

---

### Example Comparison

    function demo() {
      console.log(10);
    }

    let x = demo();
    console.log(x);

Output:
- 10
- undefined

Why?
- function didn’t return anything

---

## 5. How `return` Stops Function Execution

Once `return` is executed:
- function immediately stops
- remaining code is ignored

Example:

    function test() {
      console.log("A");
      return;
      console.log("B");
    }

    test();

Output:
- A

`"B"` never runs.

---

## 6. Returning Different Data Types

A function can return **any type**.

### Returning number

    function square(x) {
      return x * x;
    }

---

### Returning string

    function greet(name) {
      return "Hello " + name;
    }

---

### Returning boolean

    function isAdult(age) {
      return age >= 18;
    }

---

### Returning object

    function getUser() {
      return { name: "Asha", age: 25 };
    }

---

### Returning array

    function getNumbers() {
      return [1, 2, 3];
    }

---

## 7. Multiple `return` Statements

A function can have **multiple return statements**, but only one runs.

Example:

    function checkNumber(num) {
      if (num > 0) {
        return "Positive";
      }
      return "Not Positive";
    }

Execution:
- if condition true → first return runs
- otherwise → second return runs

---

## 8. What If We Don’t Return Anything?

If a function has no `return`:

    function demo() {
      console.log("Hello");
    }

It **automatically returns `undefined`**.

Example:

    let result = demo();
    console.log(result); // undefined

Important:
- This is default behavior
- Not an error

---

## 9. Returning Early (Pattern)

`return` is often used to **exit early**.

Example:

    function divide(a, b) {
      if (b === 0) {
        return "Invalid";
      }
      return a / b;
    }

This prevents:
- unnecessary execution
- runtime errors

---

## 10. Common Beginner Mistakes

- Using `console.log` instead of `return`
- Expecting printed values to be reusable
- Writing code after `return`
- Forgetting to return a value
- Assuming functions return automatically
- Confusing `undefined` results

---

## 11. Points to Remember

- `return` sends value back from function
- It stops function execution
- A function can return any data type
- Only one `return` runs per call
- Functions without return give `undefined`
- `console.log` is NOT a return
- `return` makes functions reusable
