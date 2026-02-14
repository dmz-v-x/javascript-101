## Variables in JavaScript

## 1. Why do we need variables?

In programming, we constantly work with **values**:
- numbers
- strings
- booleans
- objects

If we don’t store values:
- we lose them
- we can’t reuse them
- we can’t change them

So we need a **mechanism to store values in memory**.

That mechanism is called a **variable**.

---

## 2. What is a variable? (Memory mental model)

A **variable** is a way to store a value in memory.

Beginner mental model:

- Memory = big storage area
- Variable = bucket in memory
- Value = content inside the bucket
- Variable name = label on the bucket

So:

> Variables are buckets in memory that store values,  
> and variable names are labels we use to refer to those buckets.

---

## 3. Variables as buckets with labels

Example:

    let age = 25;

What happens conceptually:
- A bucket is created in memory
- The bucket stores the value `25`
- The label on that bucket is `age`

Later, when we write:

    console.log(age);

JavaScript:
- looks for the bucket labeled `age`
- reads the value inside it

---

## 4. Keywords in JavaScript

JavaScript has **keywords**.

Keywords are:
- special words
- reserved by the language
- have predefined meaning
- cannot be used as variable names

Examples of keywords:
- `let`
- `var`
- `const`
- `if`
- `else`
- `return`
- `function`

In this blog, we focus on:
- `let`
- `var`
- `const`

---

## 5. Ways to declare (initialize) variables in JavaScript

There are **three ways** to declare variables in JavaScript:

1. `var`
2. `let`
3. `const`

Syntax:

    let variableName = value;
    var variableName = value;
    const variableName = value;

All three:
- create variables
- store values
- differ in **scope, reassignment rules, and behavior**

---

## 6. `var` – The old way (important to understand)

`var` was the **original** way to declare variables in JavaScript.

Example:

    var x = 10;

### Characteristics of `var`

- Function scoped (not block scoped)
- Hoisted (moved to top internally)
- Can be redeclared
- Can be reassigned

Example:

    var a = 10;
    var a = 20;   // allowed ❌ (problematic)

    a = 30;       // allowed

---

### Problem with `var`

Example:

    if (true) {
      var x = 10;
    }

    console.log(x);  // 10

Even though `x` was declared inside `if`, it leaks outside.

This behavior causes:
- bugs
- unexpected overwrites
- hard-to-debug issues

That’s why `var` is **not recommended** in modern JavaScript.

---

## 7. `let` – The modern, safe choice

`let` was introduced to fix the problems of `var`.

Example:

    let y = 10;

### Characteristics of `let`

- Block scoped
- Cannot be redeclared in the same scope
- Can be reassigned
- Hoisted but in **temporal dead zone**

Example:

    let a = 10;
    a = 20;   // allowed

But:

    let a = 10;
    let a = 20;  // ❌ Error (cannot redeclare)

---

### Block scope example

    if (true) {
      let z = 100;
    }

    console.log(z);  // ❌ Error

This is **good behavior**.

---

## 8. `const` – Constant variables

`const` is used when the value **should not be reassigned**.

Example:

    const pi = 3.14;

If you try to change it:

    pi = 3.15;

Error:

    Assignment to constant variable.

---

### Important: `const` does NOT mean immutable

For primitive values:

    const x = 10;
    x = 20;   // ❌ Error

For objects and arrays:

    const user = { name: "Asha" };
    user.name = "Ravi";   // ✅ Allowed

Why?
- `const` prevents **reassignment**
- It does NOT prevent **mutation**

Example with arrays:

    const arr = [1, 2, 3];
    arr.push(4);   // ✅ Allowed

But:

    arr = [5, 6];  // ❌ Error

---

## 9. Reassignment vs Mutation (Very Important)

### Reassignment

Changing the variable to point to a new value:

    let x = 10;
    x = 20;

---

### Mutation

Changing the content of an object:

    const obj = { a: 1 };
    obj.a = 2;

Key rule:
- `const` blocks reassignment
- `const` allows mutation

---

## 10. Scope (Basic understanding)

Scope means:
- where a variable is accessible

Types (intro-level):
- Global scope
- Block scope
- Function scope

`var` → function scoped  
`let` & `const` → block scoped

---

## 11. Hoisting (Beginner intro)

JavaScript **hoists declarations**, not initializations.

With `var`:

    console.log(a); // undefined
    var a = 10;

With `let` and `const`:

    console.log(b); // ❌ Error
    let b = 10;

This period is called the **Temporal Dead Zone (TDZ)**.

---

## 12. Common Beginner Mistakes

- Using `var` everywhere
- Thinking `const` makes objects immutable
- Forgetting block scope of `let`
- Reassigning `const` variables
- Confusing hoisting behavior
- Using keywords as variable names

---

## 13. Points to Remember

- Variables store values in memory
- Variable names are labels for memory buckets
- `var` is old and risky
- Prefer `let` when value changes
- Prefer `const` when value should not be reassigned
- `const` allows object mutation
- Scope matters
- Reassignment ≠ mutation
