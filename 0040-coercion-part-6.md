## `+` Operator & Coercion

## 1. Operators & Coercion — The + Operator

The `+` operator is the most important coercion topic in JavaScript.

Why?

Because it behaves differently depending on operand types.

It can perform:

- Numeric addition
- String concatenation

---

## 2. Core Rule of the + Operator

JavaScript follows this decision process:

If either operand is a string → String concatenation  
Otherwise → Numeric addition

This single rule explains most behavior.

---

## 3. Basic Examples

---

### 3.1 Number + Number → Addition

    1 + 2 → 3
    10 + 5 → 15

No coercion needed.

---

### 3.2 String + Number → Concatenation

    "1" + 2 → "12"
    1 + "2" → "12"

Why?

String detected → everything becomes string.

---

### 3.3 String + String → Concatenation

    "Hello" + " World" → "Hello World"

---

## 4. How JavaScript Decides

Very important mental model.

Before performing `+`, JS checks:

"Is any operand a string?"

If YES → Convert both to string  
If NO → Convert both to number

---

## 5. Numeric Conversion Cases

---

### 5.1 Boolean + Number

    1 + true → 2
    1 + false → 1

Why?

    Number(true) → 1
    Number(false) → 0

---

### 5.2 null + Number

    1 + null → 1

Because:

    Number(null) → 0

---

### 5.3 undefined + Number

    1 + undefined → NaN

Because:

    Number(undefined) → NaN

Any math with NaN → NaN

---

## 6. Critical Comparison

Same values. Different operators.

    "5" + 2 → "52"
    "5" - 2 → 3

Why?

+ → string preference  
- → numeric enforcement

---

## 7. Evaluation Order (Major Gotcha)

JavaScript evaluates left → right.

---

### Example 1

    1 + 2 + "3" → "33"

Step-by-step:

    1 + 2 → 3
    3 + "3" → "33"

---

### Example 2

    "1" + 2 + 3 → "123"

Step-by-step:

    "1" + 2 → "12"
    "12" + 3 → "123"

---

### Example 3

    1 + "2" + 3 → "123"

Step-by-step:

    1 + "2" → "12"
    "12" + 3 → "123"

---

## 8. Arrays & + Operator (Very Important)

Arrays convert to strings.

---

### Empty Array

    [] + [] → ""

Because:

    String([]) → ""
    "" + "" → ""

---

### Array with Values

    [1,2] + [3,4] → "1,23,4"

Because:

    String([1,2]) → "1,2"
    String([3,4]) → "3,4"

Concatenation:

    "1,2" + "3,4"

---

### Array + Number

    [] + 1 → "1"

Because:

    [] → ""
    "" + 1 → "1"

---

## 9. Objects & + Operator

Objects convert using toString().

---

### Example

    {} + "" → "[object Object]"

Because:

    String({}) → "[object Object]"

---

## 10. Strange But Predictable Cases

---

### Example 1

    true + true → 2

Because:

    1 + 1 → 2

---

### Example 2

    true + "true" → "truetrue"

String detected → concatenation.

---

### Example 3

    null + "value" → "nullvalue"

---

### Example 4

    undefined + "value" → "undefinedvalue"

---

## 11. When Numeric Addition Happens

Only when BOTH operands are non-strings.

Examples:

    1 + 2 → 3
    1 + true → 2
    1 + null → 1

---

## 12. When Concatenation Happens

Whenever ANY operand is string.

Examples:

    "1" + 2 → "12"
    1 + "2" → "12"
    true + "" → "true"
    null + "" → "null"

---

## 13. Tons of Practice Examples

Predict BEFORE checking answers.

---

### Basic

    10 + 20
    "10" + 20
    10 + "20"

---

### Booleans

    true + 1
    false + 1
    true + "1"

---

### null / undefined

    null + 1
    undefined + 1
    null + "1"

---

### Arrays

    [] + []
    [] + 10
    [1,2] + 3

---

### Evaluation Order

    1 + 2 + ""
    "" + 1 + 2
    1 + "" + 2

---

## 14. Answers

---

### Basic

    10 + 20 → 30
    "10" + 20 → "1020"
    10 + "20" → "1020"

---

### Booleans

    true + 1 → 2
    false + 1 → 1
    true + "1" → "true1"

---

### null / undefined

    null + 1 → 1
    undefined + 1 → NaN
    null + "1" → "null1"

---

### Arrays

    [] + [] → ""
    [] + 10 → "10"
    [1,2] + 3 → "1,23"

---

### Evaluation Order

    1 + 2 + "" → "3"
    "" + 1 + 2 → "12"
    1 + "" + 2 → "12"

---

## 15. Expert Mental Rules

At mastery level:

1. + is NOT always addition
2. String presence dominates
3. Otherwise → numeric conversion
4. Left-to-right evaluation is critical
5. Arrays → strings
6. undefined in math → NaN

---

## 16. Final Mental Lock

To predict any + expression:

Step 1 → Is any operand string?  
Step 2 → YES → Concatenation  
Step 3 → NO → Numeric addition

Never guess. Apply rules.



Say "next".
