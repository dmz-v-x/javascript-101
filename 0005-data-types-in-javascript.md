## Different Data Types in JavaScript

## 1. What is a value in JavaScript?

A **value** is any data that JavaScript can work with.

Examples of values:
- `10`
- `"hello"`
- `true`
- `{ name: "Asha" }`

You can:
- store values in variables
- pass values to functions
- return values from functions

Example:

    let age = 25;

Here:
- `25` is the value
- `age` is the variable holding the value

---

## 2. High-level classification of values in JavaScript

In JavaScript, values are mainly divided into **two categories**:

1. **Primitive types** → Atomic (cannot be broken further)
2. **Objects** → Non-atomic (can hold multiple values together)

This division is extremely important and affects:
- memory
- comparison
- copying behavior

---

## 3. Primitive Types (Atomic in Nature)

Primitive values are:
- simple
- immutable (cannot be changed)
- stored directly in memory

JavaScript has **7 primitive types**:

1. `null`
2. `undefined`
3. `boolean`
4. `string`
5. `number`
6. `symbol`
7. `bigint` (often forgotten but exists)

> Even though you didn’t list `bigint`, it is an important modern primitive, so included for completeness.

---

## 4. `null`

`null` means **intentional absence of a value**.

It is explicitly assigned by the developer.

Example:

    let data = null;

Meaning:
- “This variable exists”
- “But currently holds no value”

Important facts:
- `null` is a primitive
- `typeof null` returns `"object"` (this is a historical bug)

Example:

    typeof null;   // "object" ❌ (bug in JS)

Mental model:
- `null` = empty box on purpose

---

## 5. `undefined`

`undefined` means **a value has not been assigned yet**.

Example:

    let x;
    console.log(x);   // undefined

Also occurs when:
- a function does not return anything
- accessing a missing object property

Example:

    let user = {};
    console.log(user.age);  // undefined

Difference between `null` and `undefined`:
- `null` → assigned intentionally
- `undefined` → default missing value

---

## 6. `boolean`

Boolean values represent **true or false**.

Example:

    let isLoggedIn = true;
    let hasAccess = false;

Used in:
- conditions
- comparisons
- decision making

Example:

    if (isLoggedIn) {
      console.log("User is logged in");
    }

---

## 7. `string`

Strings represent **text data**.

JavaScript allows **three ways** to create strings:

### a) Double quotes

    let name = "Asha";

### b) Single quotes

    let city = 'Delhi';

### c) Backticks (template literals)

    let age = 25;
    let message = `Age is ${age}`;

Backticks allow:
- variable interpolation
- multi-line strings

Example:

    let text = `
    Line 1
    Line 2
    Line 3
    `;

Important fact:
- Strings are **immutable**

Example:

    let str = "hello";
    str[0] = "H";   // does nothing

---

## 8. `number`

JavaScript has **only one number type**.

It includes:
- integers → `10`, `-5`
- decimals → `3.14`
- special values → `Infinity`, `NaN`

Examples:

    let a = 10;
    let b = 3.14;
    let c = -20;

Special numbers:

    Infinity;
    -Infinity;
    NaN;

Example:

    10 / 0;      // Infinity
    "a" / 2;     // NaN

---

## 9. Why JavaScript has both `0` and `-0`

Yes — JavaScript has **both `0` and `-0`**.

Example:

    let a = 0;
    let b = -0;

    console.log(a === b);   // true

So why does `-0` exist?

Reason:
- JavaScript numbers follow the **IEEE-754 floating-point standard**
- This standard includes signed zero (`+0` and `-0`)
- It helps represent direction in calculations (like limits, math functions)

Example where it matters:

    1 / 0;    // Infinity
    1 / -0;   // -Infinity

Detecting `-0`:

    Object.is(0, -0);   // false

Mental model:
- `0` and `-0` behave the same in most cases
- Only matters in **very specific math scenarios**

---

## 10. `symbol`

`symbol` creates **unique identifiers**.

Even symbols with the same description are different.

Example:

    let id1 = Symbol("id");
    let id2 = Symbol("id");

    id1 === id2;   // false

Why symbols exist:
- avoid name collisions in objects
- create hidden or unique object keys

Example:

    let user = {};
    let uid = Symbol("uid");

    user[uid] = 123;

---

## 11. Objects (Non-Atomic Values)

Objects are **non-primitive** values.

They store **key–value pairs**.

Example:

    let user = {
      name: "Asha",
      age: 25
    };

Characteristics:
- mutable (can be changed)
- stored by reference
- can hold multiple values

Example:

    user.age = 26;

---

### Types of objects

Objects include:
- plain objects `{}`  
- arrays `[]`
- functions
- dates
- maps, sets, etc.

Example:

    let arr = [1, 2, 3];
    let fn = function () {};
    let date = new Date();

---

## 12. Values in Memory (Very Important)

### Primitive values

- Stored directly
- Copied by value

Example:

    let a = 10;
    let b = a;

    b = 20;

    console.log(a); // 10

---

### Objects

- Stored by reference
- Copied by reference

Example:

    let obj1 = { x: 10 };
    let obj2 = obj1;

    obj2.x = 20;

    console.log(obj1.x); // 20

---

## 13. Common Beginner Mistakes

- Thinking `null` and `undefined` are the same
- Forgetting that strings are immutable
- Expecting numbers to be perfectly accurate (floating point issues)
- Confusing value copy vs reference copy
- Assuming objects are atomic values
