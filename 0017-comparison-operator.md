## Comparison Operator

## 1. What are Comparison Operators?

**Comparison operators** are used to **compare two values**.

They always return a **boolean value**:
- `true`
- `false`

Example:

    10 > 5;   // true

---

## 2. Why are Comparison Operators Important?

Comparison operators are used in:
- `if` conditions
- loops
- validations
- decision making

Without comparison operators:
- programs cannot make decisions

---

## 3. Equality Operator (`==`) – Loose Equality

`==` compares values **after type conversion**.

Example:

    5 == 5;        // true
    5 == "5";      // true
    true == 1;     // true
    false == 0;    // true

Why?
- JavaScript converts values to a common type before comparing

⚠️ This automatic conversion is called **type coercion**.

---

## 4. Strict Equality Operator (`===`) – Recommended

`===` compares:
- value
- type

No type conversion happens.

Example:

    5 === 5;        // true
    5 === "5";      // false
    true === 1;     // false

👉 **Always prefer `===` over `==`**.

---

## 5. Inequality Operator (`!=`) – Loose Inequality

`!=` checks if values are **not equal** after type conversion.

Example:

    5 != "5";      // false
    10 != "20";    // true

Because:
- `"5"` is converted to `5`

---

## 6. Strict Inequality Operator (`!==`)

`!==` checks:
- value
- type

Example:

    5 !== "5";     // true
    5 !== 5;       // false

👉 Prefer `!==` over `!=`.

---

## 7. Relational Operators (`>`, `<`, `>=`, `<=`)

These operators compare **magnitude**.

Examples:

    10 > 5;        // true
    10 < 5;        // false
    10 >= 10;      // true
    5 <= 10;       // true

Used heavily in:
- loops
- conditions
- range checks

---

## 8. Comparing Strings

Strings are compared **lexicographically** (dictionary order).

Example:

    "apple" < "banana";   // true
    "cat" > "ball";       // true

How it works:
- compared character by character
- based on Unicode values

Case sensitivity matters:

    "A" < "a";   // true

---

## 9. Comparing Different Data Types

When types differ:
- `==` converts types
- `===` does not

Example:

    "10" > 5;   // true
    "10" < 5;   // false

Why?
- `"10"` is converted to number `10`

But:

    "abc" > 5;  // false
    "abc" < 5;  // false

Because:
- conversion results in `NaN`
- comparisons with `NaN` are always false

---

## 10. Special Case: `null` and `undefined`

Loose equality:

    null == undefined;   // true

But strict equality:

    null === undefined;  // false

Relational comparisons:

    null > 0;     // false
    null == 0;    // false
    null >= 0;    // true  ❗

Why?
- different rules apply internally
- this is confusing and error-prone

👉 Avoid comparing `null` using relational operators.

---

## 11. Special Case: `NaN`

`NaN` is **not equal to anything**, even itself.

Example:

    NaN === NaN;   // false
    NaN == NaN;    // false

Correct way to check `NaN`:

    Number.isNaN(NaN);   // true

---

## 12. `Object.is()` – Modern Comparison

`Object.is()` is a modern comparison method.

Example:

    Object.is(5, 5);        // true
    Object.is(5, "5");      // false

Special cases:

    Object.is(NaN, NaN);    // true
    Object.is(0, -0);       // false

Differences from `===`:
- handles `NaN` correctly
- distinguishes `0` and `-0`

---

## 13. Common Beginner Mistakes

- Using `==` instead of `===`
- Comparing different data types unintentionally
- Expecting `NaN === NaN` to be true
- Confusing string comparison with numeric comparison
- Writing complex comparisons without testing

---

## 14. Gotchas and Points to Remember

- Comparison operators return boolean values
- Prefer `===` and `!==`
- `==` performs type coercion
- Strings are compared lexicographically
- `NaN` breaks normal comparison rules
- `null` comparisons are tricky
- Use `Object.is()` for special cases
