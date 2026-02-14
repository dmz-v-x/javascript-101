## Parameters vs Arguments

## 1. Why Do Functions Need Inputs?

So far, we’ve written functions that do the **same thing every time**.

Example:

    function greet() {
      console.log("Hello");
    }

This is fine, but what if we want:
- different names?
- different values?
- different behavior based on input?

That’s where **parameters and arguments** come in.

---

## 2. What Are Parameters?

**Parameters** are variables listed in the **function definition**.

Simple definition:

> Parameters are placeholders that receive values when a function is called.

Example:

    function greet(name) {
      console.log("Hello", name);
    }

Here:
- `name` is a **parameter**
- It is a variable
- It exists only inside the function

Think of parameters as:
- empty boxes
- waiting to receive values

---

## 3. What Are Arguments?

**Arguments** are the **actual values** passed to a function when it is called.

Example:

    greet("Asha");

Here:
- `"Asha"` is an **argument**
- It gets assigned to the parameter `name`

Simple definition:

> Arguments are real values passed into a function.

---

## 4. Parameters vs Arguments (Core Difference)

| Parameters | Arguments |
|---------|-----------|
| Defined in function | Passed during function call |
| Act as placeholders | Actual values |
| Used in function body | Used to fill parameters |
| Created at definition time | Provided at call time |

Mental model:

> Parameters = empty boxes  
> Arguments = values put into boxes  

---

## 5. How Data Flows into a Function

Example:

    function add(a, b) {
      console.log(a + b);
    }

    add(10, 20);

What happens step by step:
1. Function is defined with parameters `a` and `b`
2. Function is called with arguments `10` and `20`
3. `a` gets value `10`
4. `b` gets value `20`
5. Function body runs using those values

---

## 6. Multiple Parameters and Arguments

Functions can have **multiple parameters**.

Example:

    function introduce(name, age, city) {
      console.log(name, age, city);
    }

Calling the function:

    introduce("Asha", 25, "Delhi");

Important:
- Arguments are assigned **by position**
- Order matters

---

## 7. What If Arguments Are Missing?

If fewer arguments are passed:
- missing parameters get value `undefined`

Example:

    function greet(name) {
      console.log(name);
    }

    greet();

Output:
- `undefined`

Because:
- no argument was passed
- parameter `name` never received a value

This is **not an error**, but often a bug.

---

## 8. What If Extra Arguments Are Passed?

JavaScript allows **extra arguments**.

Example:

    function show(a, b) {
      console.log(a, b);
    }

    show(1, 2, 3, 4);

Output:
- `1 2`

Extra arguments:
- are ignored by parameters
- still exist internally (advanced topic later)

---

## 9. Parameters Are Local Variables

Parameters behave like:
- variables
- inside the function only

Example:

    function demo(x) {
      console.log(x);
    }

    demo(10);
    console.log(x); // ❌ Error

Why?
- `x` exists only inside the function
- parameters are **function-scoped**

---

## 10. Common Beginner Mistakes

- Confusing parameters with arguments
- Thinking parameters hold values automatically
- Passing arguments in wrong order
- Forgetting arguments completely
- Expecting errors for missing arguments
- Using parameters outside the function

---

## 11. Points to Remember

- Parameters are placeholders
- Arguments are actual values
- Parameters are defined in function
- Arguments are passed during function call
- Order of arguments matters
- Missing arguments become `undefined`
- Extra arguments are ignored (for now)
- Parameters are local to the function

---
