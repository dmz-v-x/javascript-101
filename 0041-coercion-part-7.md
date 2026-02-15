## Arithmetic Operator & Coercion

## 1. Arithmetic Operators & Coercion

Arithmetic operators behave very differently from the `+` operator.

Operators covered:

- Subtraction (-)
- Multiplication (*)
- Division (/)
- Modulus (%)

Core rule:

These operators **always force numeric conversion**.

No string concatenation.

Ever.

---

## 2. Core Mental Model

When JavaScript sees:

    value1 - value2
    value1 * value2
    value1 / value2

JavaScript immediately performs:

    Number(value)

on BOTH operands.

---

## 3. Basic Examples

---

### 3.1 String → Number Conversion

    "5" - 2 → 3
    "5" * 2 → 10
    "10" / 2 → 5

Internally:

    Number("5") → 5

---

### 3.2 String vs String

    "6" - "2" → 4
    "6" * "2" → 12
    "8" / "2" → 4

Both strings → converted to numbers.

---

## 4. Why No Concatenation Happens

Unlike `+`, arithmetic operators have only ONE job:

Math.

So JavaScript enforces numeric interpretation.

---

## 5. Boolean Conversion Cases

Booleans become numbers.

---

### Examples

    true - 1 → 0
    true + 1 → 2   // addition (previous topic)
    true * 5 → 5
    false * 10 → 0

Because:

    Number(true) → 1
    Number(false) → 0

---

## 6. null & undefined Behavior

Very important section.

---

### 6.1 null → Number

    null - 1 → -1
    null * 5 → 0
    null / 10 → 0

Because:

    Number(null) → 0

---

### 6.2 undefined → Number

    undefined - 1 → NaN
    undefined * 5 → NaN
    undefined / 10 → NaN

Because:

    Number(undefined) → NaN

Any math with NaN → NaN

---

## 7. NaN Behavior (Critical Concept)

NaN contaminates calculations.

---

### Examples

    "hello" - 2 → NaN
    NaN * 5 → NaN
    NaN / 10 → NaN

Once NaN appears → result stays NaN.

---

## 8. Empty String Behavior (Major Gotcha)

Empty string converts to 0.

---

### Examples

    "" - 1 → -1
    "" * 5 → 0
    "" / 10 → 0

Because:

    Number("") → 0

---

### Whitespace String

    "   " - 1 → -1

Because:

    Number("   ") → 0

---

## 9. Arrays & Arithmetic Operators

Arrays convert to numbers.

Yes, numbers.

---

### Empty Array

    [] - 1 → -1
    [] * 5 → 0

Because:

    [] → "" → 0

---

### Array with Single Value

    [5] - 1 → 4
    [10] * 2 → 20

Because:

    String([5]) → "5"
    Number("5") → 5

---

### Array with Multiple Values

    [1,2] - 1 → NaN

Because:

    String([1,2]) → "1,2"
    Number("1,2") → NaN

---

## 10. Objects & Arithmetic Operators

Objects attempt numeric conversion.

---

### Example

    {} - 1 → NaN

Because:

    "[object Object]" → NaN

---

## 11. Classic Comparisons (Very Important)

Same input → different operators.

---

### Example

    "5" + 2 → "52"
    "5" - 2 → 3
    "5" * 2 → 10

Why?

+ → string logic  
- * / → numeric enforcement

---

## 12. Tons of Practice Examples

Predict BEFORE checking answers.

---

### Strings

    "10" - 5
    "10" * 2
    "10" / 2
    "abc" - 1

---

### Booleans

    true * 10
    false - 1
    true / false

---

### null / undefined

    null * 10
    undefined * 10
    null - null

---

### Empty Values

    "" * 5
    "" - ""
    "   " * 2

---

### Arrays

    [] * 10
    [5] * 2
    [1,2] * 2

---

## 13. Answers

---

### Strings

    "10" - 5 → 5
    "10" * 2 → 20
    "10" / 2 → 5
    "abc" - 1 → NaN

---

### Booleans

    true * 10 → 10
    false - 1 → -1
    true / false → Infinity

Explanation:

    1 / 0 → Infinity

---

### null / undefined

    null * 10 → 0
    undefined * 10 → NaN
    null - null → 0

---

### Empty Values

    "" * 5 → 0
    "" - "" → 0
    "   " * 2 → 0

---

### Arrays

    [] * 10 → 0
    [5] * 2 → 10
    [1,2] * 2 → NaN

---

## 14. Expert Mental Rules

At mastery level:

1. Arithmetic operators ALWAYS force numbers
2. Strings → Number()
3. "" → 0
4. true → 1
5. false → 0
6. null → 0
7. undefined → NaN
8. NaN contaminates math
9. [] → 0
10. [single value] → valid number
11. [multiple values] → NaN

---

## 15. Final Mental Lock

To analyze any arithmetic expression:

Step 1 → Convert both operands → Number()  
Step 2 → Perform math  
Step 3 → Watch for NaN

No exceptions.
