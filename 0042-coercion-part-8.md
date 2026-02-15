## Abstract Equality vs Strict Equality

## 1. == vs === — Equality & Coercion Mastery

Equality comparison is one of the most misunderstood parts of JavaScript.

Two operators:

- Strict Equality (===)
- Abstract Equality (==)

They are NOT interchangeable.

They follow different algorithms.

---

## 2. The Core Difference (Spec-Accurate)

Both operators **inspect types first**.

The difference is what happens next.

---

### Strict Equality (===)

Rule:

If types differ → return false

No coercion. No conversion.

---

### Abstract Equality (==)

Rule:

If types differ → apply conversion rules

Coercion is allowed.

---

## 3. Strict Equality (===)

Strict equality means:

Types must already match.

---

### Examples

    5 === 5 → true
    5 === "5" → false
    true === 1 → false
    null === undefined → false

Why?

Type mismatch → immediate false.

---

## 4. Abstract Equality (==)

Abstract equality means:

Types are compared first.

If different → conversion algorithm runs.

---

### Examples

    5 == "5" → true
    true == 1 → true
    false == 0 → true
    null == undefined → true

Because coercion happens.

---

## 5. The Decision Flow of ==

Mental model:

Step 1 → Same types?  
Step 2 → YES → behave like ===  
Step 3 → NO → apply conversion rules

---

## 6. Critical Conversion Rules of ==

These rules explain almost all weirdness.

---

### 6.1 Number vs String

String → converted to Number

    5 == "5" → true
    10 == "10" → true
    0 == "" → true

Because:

    Number("") → 0

---

### 6.2 Boolean vs Anything

Boolean → converted to Number

    true == 1 → true
    false == 0 → true
    true == "1" → true

Because:

    Number(true) → 1

---

### 6.3 null & undefined Special Rule

Unique behavior.

    null == undefined → true

But:

    null == 0 → false
    undefined == 0 → false

Very important exception.

---

### 6.4 Object vs Primitive

Object → converted using ToPrimitive()

This is where major surprises occur.

---

## 7. Classic Gotchas (Must Master)

---

### Gotcha 1 — 0 vs false

    0 === false → false
    0 == false → true

Because:

    Number(false) → 0

---

### Gotcha 2 — Empty String vs 0

    "" === 0 → false
    "" == 0 → true

Because:

    Number("") → 0

---

### Gotcha 3 — null vs 0

    null == 0 → false

Because null only equals undefined.

---

### Gotcha 4 — NaN

    NaN === NaN → false
    NaN == NaN → false

NaN is never equal to anything.

---

## 8. Arrays & Equality (Major Confusion Zone)

Arrays are objects.

Objects trigger ToPrimitive().

---

### Example 1

    [] == 0 → true

Why?

    [] → "" → 0

---

### Example 2

    [] == "" → true

Because:

    [] → ""

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

## 9. Objects & Equality

---

### Example

    {} == "[object Object]" → true

Because:

    String({}) → "[object Object]"

---

### Important Note

Empty object is truthy but compares strangely.

Truthy/falsy ≠ equality logic.

---

## 10. Evaluation Surprises

---

### Example 1

    false == "0" → true

Because:

    "0" → 0  
    false → 0

---

### Example 2

    false == "" → true

Because:

    "" → 0

---

### Example 3

    "" == 0 → true
    "0" == 0 → true

But:

    "false" == 0 → false

Because:

    Number("false") → NaN

---

## 11. When == Behaves Exactly Like ===

Only when types already match.

    5 == 5 → true
    "JS" == "JS" → true

---

## 12. Safe vs Dangerous Usage

---

### === (Safe Default)

- Predictable
- No hidden conversions
- Preferred in production

---

### == (Requires Expertise)

Safe only when:

- Comparing null & undefined intentionally
- Fully understanding coercion

Example:

    value == null

Common pattern meaning:

    value is null OR undefined

---

## 13. Golden Best Practice Rule

Use:

    ===

Almost always.

Use == only when coercion is intentional.

---

## 14. Tons of Practice Examples

Predict BEFORE checking answers.

---

### Basic

    5 == "5"
    5 === "5"

---

### Boolean Cases

    true == 1
    true === 1

---

### null / undefined

    null == undefined
    null === undefined

---

### Strings & Numbers

    "" == 0
    "" === 0

---

### Arrays

    [] == 0
    [] === 0

---

### NaN

    NaN == NaN
    NaN === NaN

---

## 15. Answers

---

### Basic

    5 == "5" → true
    5 === "5" → false

---

### Boolean Cases

    true == 1 → true
    true === 1 → false

---

### null / undefined

    null == undefined → true
    null === undefined → false

---

### Strings & Numbers

    "" == 0 → true
    "" === 0 → false

---

### Arrays

    [] == 0 → true
    [] === 0 → false

---

### NaN

    NaN == NaN → false
    NaN === NaN → false

---

## 16. Final Mental Lock

Strict Equality (===):

- Type mismatch → false

Abstract Equality (==):

- Type mismatch → conversion rules

Both inspect types first.

Only == allows negotiation via coercion.

Mastery comes from understanding conversion paths.

