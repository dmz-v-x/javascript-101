## Abstract Equality Deep Dive

## 1. Abstract Equality Algorithm (==) 

The `==` operator follows a strict internal algorithm.

It is NOT random.

Every comparison follows mechanical rules defined by ECMAScript.

Goal:

Understand the rules → Predict every comparison.

---

## 2. Core Mental Model

When evaluating:

    x == y

JavaScript performs:

Step 1 → Compare types  
Step 2 → Same type? → Use ===  
Step 3 → Different types? → Apply conversion rules

---

## 3. Rule 1 — Same Type → Compare Directly

If both operands share the same type:

JavaScript behaves exactly like strict equality.

---

### Examples

    42 == 42 → true
    "JS" == "JS" → true
    true == true → true

---

### Same Type Still Follows === Rules

    NaN == NaN → false

Because strict equality rules apply.

---

## 4. Rule 2 — null & undefined Special Case

Unique exception in JavaScript.

---

### Only These Are True

    null == undefined → true
    undefined == null → true

---

### Everything Else → False

    null == 0 → false
    undefined == 0 → false
    null == false → false

Critical rule:

null only equals undefined.

Nothing else.

---

## 5. Rule 3 — Number vs String

String → converted to Number.

---

### Examples

    "42" == 42 → true
    "10" == 10 → true
    "" == 0 → true

Because:

    Number("") → 0

---

### Conversion Failures

    "hello" == 0 → false

Because:

    Number("hello") → NaN

---

### Gotcha Cases

    "0" == 0 → true
    "   " == 0 → true

Whitespace string → 0

---

## 6. Rule 4 — Boolean vs Anything

Boolean → converted to Number.

---

### Examples

    true == 1 → true
    false == 0 → true
    true == "1" → true

Because:

    Number(true) → 1

---

### Gotcha Cases

    false == "" → true
    false == "0" → true

Because both become 0.

---

### Surprising But Logical

    true == 2 → false

Because:

    1 == 2 → false

---

## 7. Rule 5 — Object vs Primitive (Critical Rule)

This rule causes most confusion.

When comparing:

Object vs Primitive

JavaScript performs:

    ToPrimitive(object)

---

## 8. Object → Primitive Conversion (Preview)

Objects convert using:

1. valueOf()
2. toString()

---

## 9. Arrays Under == (Major Source of Weirdness)

Arrays convert via toString().

---

### Example 1

    [] == "" → true

Because:

    [] → ""

---

### Example 2

    [] == 0 → true

Because:

    [] → "" → 0

---

### Example 3

    [1] == 1 → true

Because:

    String([1]) → "1"

---

### Example 4

    [1,2] == "1,2" → true

Because:

    String([1,2]) → "1,2"

---

### Example 5

    [1,2] == 12 → false

Because:

    Number("1,2") → NaN

---

## 10. Objects Under ==

---

### Example

    {} == "[object Object]" → true

Because:

    String({}) → "[object Object]"

---

### But

    {} == 0 → false

Because:

    Number("[object Object]") → NaN

---

## 11. Famous Interview Puzzles

---

### Puzzle 1

    [] == false → true

Why?

    false → 0  
    [] → "" → 0

---

### Puzzle 2

    "" == false → true

Because both → 0

---

### Puzzle 3

    null == false → false

Because null only equals undefined.

---

### Puzzle 4

    undefined == false → false

---

### Puzzle 5

    "0" == false → true

Because:

    "0" → 0  
    false → 0

---

## 12. Conversion Chains (Expert Thinking)

Always think in steps.

Example:

    [] == true

Step 1 → true → 1  
Step 2 → [] → "" → 0  
Step 3 → 0 == 1 → false

---

## 13. Tons of Practice Examples

Predict BEFORE checking answers.

---

### Same Type

    10 == 10
    "JS" == "JS"

---

### null / undefined

    null == undefined
    null == 0

---

### String vs Number

    "5" == 5
    "" == 0
    "hello" == 0

---

### Boolean Cases

    true == 1
    false == "0"
    true == "2"

---

### Arrays

    [] == 0
    [1] == 1
    [1,2] == "1,2"

---

## 14. Answers

---

### Same Type

    10 == 10 → true
    "JS" == "JS" → true

---

### null / undefined

    null == undefined → true
    null == 0 → false

---

### String vs Number

    "5" == 5 → true
    "" == 0 → true
    "hello" == 0 → false

---

### Boolean Cases

    true == 1 → true
    false == "0" → true
    true == "2" → false

---

### Arrays

    [] == 0 → true
    [1] == 1 → true
    [1,2] == "1,2" → true

---

## 15. Expert Mental Lock

Abstract Equality Rules:

1. Same type → behave like ===
2. null ↔ undefined → true
3. String ↔ Number → String → Number
4. Boolean → Number
5. Object → Primitive

No guessing required.

Only algorithmic steps.

Say "next".
