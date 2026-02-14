## Assignment Operator

## 1. What is an Assignment Operator?

An **assignment operator** is used to **assign a value to a variable**.

In simple words:

> Assignment operators put values **inside variable buckets**.

Example:

    let x = 10;

Here:
- `=` is the assignment operator
- `10` is assigned to variable `x`

---

## 2. Why do we need Assignment Operators?

Assignment operators allow us to:
- store values
- update existing values
- shorten repetitive code

Without assignment operators, variables would be useless.

---

## 3. Simple Assignment (`=`)

The simplest and most common assignment operator is `=`.

Example:

    let a = 5;
    let b = a;

Explanation:
- value of `a` is copied into `b`
- `b` now stores `5`

Important:
- Assignment happens **from right to left**

Example:

    let x = 10 + 5;

`10 + 5` is evaluated first → `15` is assigned to `x`.

---

## 4. Assignment is an Expression (Important)

In JavaScript, assignment itself is an **expression**.

Example:

    let x;
    let y = (x = 10);

Now:
- `x` → 10
- `y` → 10

Because:
- `x = 10` evaluates to `10`

---

## 5. Compound Assignment Operators

Compound assignment operators combine:
- arithmetic operation
- assignment

They make code **shorter and cleaner**.

General form:

    variable operator= value;

---

## 6. Addition Assignment (`+=`)

Adds a value and assigns the result.

Example:

    let x = 10;
    x += 5;

Same as:

    x = x + 5;

Result:
- `x` → 15

---

### `+=` with strings

`+=` also works with strings.

Example:

    let msg = "Hello";
    msg += " World";

Result:
- `"Hello World"`

---

## 7. Subtraction Assignment (`-=`)

Subtracts a value and assigns the result.

Example:

    let x = 20;
    x -= 5;

Same as:

    x = x - 5;

Result:
- `x` → 15

---

## 8. Multiplication Assignment (`*=`)

Multiplies and assigns.

Example:

    let x = 5;
    x *= 4;

Same as:

    x = x * 4;

Result:
- `x` → 20

---

## 9. Division Assignment (`/=`)

Divides and assigns.

Example:

    let x = 20;
    x /= 4;

Same as:

    x = x / 4;

Result:
- `x` → 5

---

### Division edge cases

    let x = 10;
    x /= 0;

Result:
- `Infinity`

---

## 10. Remainder Assignment (`%=`)

Finds remainder and assigns.

Example:

    let x = 10;
    x %= 3;

Same as:

    x = x % 3;

Result:
- `x` → 1

---

## 11. Exponentiation Assignment (`**=`)

Raises to power and assigns.

Example:

    let x = 2;
    x **= 3;

Same as:

    x = x ** 3;

Result:
- `x` → 8

---

## 12. Assignment with Objects and Arrays

Assignment with objects copies the **reference**, not the value.

Example:

    let obj1 = { a: 1 };
    let obj2 = obj1;

    obj2.a = 5;

Result:
- `obj1.a` → 5

Important:
- Both variables point to the same object in memory

---

## 13. Common Beginner Mistakes

- Confusing `=` with `==` or `===`
- Forgetting assignment is right-to-left
- Expecting objects to be copied by value
- Using compound operators without understanding them
- Accidentally modifying values using `+=`

---

## 14. Gotchas and Points to Remember

- `=` assigns, it does NOT compare
- Assignment is an expression
- Compound operators are shortcuts
- `+=` works with strings and numbers
- Assignment copies values for primitives
- Assignment copies references for objects
- Watch out for division by zero
