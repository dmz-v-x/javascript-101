## String Coercion

## 1. String Coercion

String coercion means:

JavaScript converts a value into a string.

This happens when JavaScript needs a textual representation.

Common triggers:

- Explicit String()
- Concatenation using +
- Template literals
- Implicit display/logging contexts

---

## 2. Core Mental Model

JavaScript asks:

"How do I represent this value as text?"

Every value has a string representation.

No failures.

Unlike number coercion → no NaN equivalent.

---

## 3. Explicit String Conversion

Most direct method:

    String(value)

Examples:

    String(42) → "42"
    String(true) → "true"
    String(false) → "false"
    String(null) → "null"
    String(undefined) → "undefined"
    String(NaN) → "NaN"

Important rule:

Everything converts successfully.

---

## 4. Implicit String Coercion

Most commonly triggered by the + operator.

---

## 4.1 Concatenation Rule

If either operand is a string → convert everything to string.

Examples:

    42 + "" → "42"
    "Value: " + 100 → "Value: 100"
    "Age: " + true → "Age: true"

Internal behavior:

    String(value)

---

## 5. Deep Conversion Examples

---

## 5.1 Numbers → Strings

    String(123) → "123"
    String(3.14) → "3.14"
    String(NaN) → "NaN"
    String(Infinity) → "Infinity"

Implicit:

    100 + "" → "100"

---

## 5.2 Booleans → Strings

    String(true) → "true"
    String(false) → "false"

Implicit:

    true + "" → "true"

---

## 5.3 null & undefined → Strings

Very important.

    String(null) → "null"
    String(undefined) → "undefined"

Implicit:

    null + "" → "null"
    undefined + "" → "undefined"

---

## 6. Arrays → Strings (Major Gotcha Area)

Arrays use `.toString()` internally.

Rule:

Array → comma-separated values.

Examples:

    String([1, 2, 3]) → "1,2,3"
    String([]) → ""
    String([42]) → "42"

Implicit:

    [1, 2] + "" → "1,2"
    [] + "" → ""

Critical Insight:

Empty array → empty string.

Huge source of confusion later.

---

## 7. Objects → Strings

Objects use default `.toString()`.

Examples:

    String({}) → "[object Object]"
    String({ a: 1 }) → "[object Object]"

Implicit:

    {} + "" → "[object Object]"

Unless custom toString exists.

---

## 8. The + Operator — Detailed Behavior

---

### Case 1 — String + Anything

    "Hello " + 42 → "Hello 42"
    "Result: " + true → "Result: true"

---

### Case 2 — Number + String

    42 + " apples" → "42 apples"

---

### Case 3 — Boolean + String

    true + " value" → "true value"

---

## 9. Classic Confusion Examples

---

### Example 1

    1 + 2 + "" → "3"

Why?

    1 + 2 → 3
    3 + "" → "3"

Left-to-right evaluation.

---

### Example 2

    "" + 1 + 2 → "12"

Why?

    "" + 1 → "1"
    "1" + 2 → "12"

---

### Example 3

    "5" + 2 → "52"
    "5" - 2 → 3

Different operators → different coercion rules.

---

## 10. Template Literals (Modern String Coercion)

Automatically converts values.

    `${42}` → "42"
    `${true}` → "true"
    `${null}` → "null"

Example:

    `Value is ${100}` → "Value is 100"

---

## 11. Strange but Important Cases

---

### Empty Array Behavior

    [] + "" → ""
    [] + 1 → "1"

Because:

    [] → ""
    "" + 1 → "1"

---

### Array with Values

    [1,2] + 3 → "1,23"

Because:

    String([1,2]) → "1,2"
    "1,2" + 3 → "1,23"

---

### Object + String

    {} + "" → "[object Object]"

---

## 12. Guaranteed Expert Rules

At mastery level:

1. String coercion never fails
2. Arrays → comma-separated strings
3. [] → ""
4. Objects → "[object Object]"
5. + operator with string → concatenation
6. Evaluation order matters

---

## 13. Tons of Practice Examples

Predict BEFORE checking answers.

---

### Basic

    String(10)
    String(false)
    String(null)

---

### Unary Patterns

    42 + ""
    true + ""
    null + ""

---

### Arrays

    [1,2,3] + ""
    [] + ""
    [42] + ""

---

### Mixed

    "Value: " + [1,2]
    [1,2] + [3,4]
    {} + ""

---

### Evaluation Order

    1 + 2 + "3"
    "1" + 2 + 3
    1 + "2" + 3

---

## 14. Answers

---

### Basic

    String(10) → "10"
    String(false) → "false"
    String(null) → "null"

---

### Unary Patterns

    42 + "" → "42"
    true + "" → "true"
    null + "" → "null"

---

### Arrays

    [1,2,3] + "" → "1,2,3"
    [] + "" → ""
    [42] + "" → "42"

---

### Mixed

    "Value: " + [1,2] → "Value: 1,2"
    [1,2] + [3,4] → "1,23,4"
    {} + "" → "[object Object]"

---

### Evaluation Order

    1 + 2 + "3" → "33"
    "1" + 2 + 3 → "123"
    1 + "2" + 3 → "123"

---

## 15. Final Mental Lock

String coercion is extremely aggressive.

Once a string appears → concatenation dominates.

Arrays → surprisingly convert cleanly.

Objects → produce "[object Object]".

Operator order changes everything.
