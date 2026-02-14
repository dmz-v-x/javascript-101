## Unary Operator

## 1. What is a Unary Operator?

A **unary operator** is an operator that works on **only one operand (value)**.

Simple definition:

> Unary operators perform operations on a single value.

Example:

    let x = 5;
    -x;

Here:
- `-` is a unary operator
- `x` is the single operand

---

## 2. Why are they called Unary Operators?

The word **unary** means:
- one
- single

Comparison:
- Unary operator → works on 1 value
- Binary operator → works on 2 values (`+`, `-`, `*`)
- Ternary operator → works on 3 values (`?:`)

---

## 3. List of Unary Operators in JavaScript

| Operator | Name |
|--------|------|
| `+` | Unary plus |
| `-` | Unary minus |
| `++` | Increment |
| `--` | Decrement |
| `!` | Logical NOT |
| `typeof` | Type operator |
| `delete` | Delete operator |
| `void` | Void operator |

---

## 4. Unary Plus (`+`)

Unary plus tries to **convert a value to a number**.

Example:

    +"10";   // 10
    +true;   // 1
    +false;  // 0

If conversion fails:

    +"abc";  // NaN

Common use case:
- converting strings to numbers

Example:

    let age = +"25";

---

## 5. Unary Minus (`-`)

Unary minus converts a value to a number and **negates it**.

Example:

    -"10";   // -10
    -true;   // -1
    -false;  // -0

Example:

    let x = 5;
    -x;      // -5

---

## 6. Increment Operator (`++`)

Increment increases a numeric value by `1`.

Example:

    let count = 0;
    count++;

Now:
- `count` → 1

---

### Pre-increment vs Post-increment

Post-increment:

    let x = 5;
    let y = x++;

Result:
- x → 6
- y → 5

Pre-increment:

    let x = 5;
    let y = ++x;

Result:
- x → 6
- y → 6

---

## 7. Decrement Operator (`--`)

Decrement decreases a numeric value by `1`.

Example:

    let count = 5;
    count--;

Now:
- `count` → 4

Same pre/post rules apply.

---

## 8. Logical NOT (`!`)

Logical NOT converts a value to boolean and **reverses it**.

Example:

    !true;    // false
    !false;   // true

With non-boolean values:

    !"hello";  // false
    !0;        // true

---

### Double NOT (`!!`)

Used to convert any value into a boolean.

Example:

    !!"hello";   // true
    !!0;         // false

---

## 9. `typeof` Operator

`typeof` returns the **type of a value** as a string.

Example:

    typeof 10;        // "number"
    typeof "hi";      // "string"
    typeof true;      // "boolean"

Important gotcha:

    typeof null;      // "object" ❌ (bug)

---

## 10. `delete` Operator

`delete` removes a property from an object.

Example:

    let user = { name: "Asha", age: 25 };
    delete user.age;

Now:
- `user` → `{ name: "Asha" }`

Important:
- `delete` works only on object properties
- It does NOT delete variables declared with `let` or `const`

---

## 11. `void` Operator

`void` evaluates an expression and returns `undefined`.

Example:

    void 0;   // undefined
    void (10 + 20); // undefined

Common use case:
- preventing return values
- rarely used in modern JavaScript

---

## 12. Common Beginner Mistakes

- Confusing unary `+` with addition
- Misusing `++` inside complex expressions
- Forgetting pre vs post increment behavior
- Using `delete` on variables
- Ignoring type conversion side effects
- Overusing `!!` unnecessarily

---

## 13. Gotchas and Points to Remember

- Unary operators work on **one value**
- Unary `+` converts to number
- Unary `-` negates the value
- `++` and `--` modify the variable directly
- `!` converts to boolean first
- `typeof` always returns a string
- `delete` works only on object properties
- `void` always returns `undefined`
