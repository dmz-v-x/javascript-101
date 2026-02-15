## ToString Abstract Operation

## 1. ToString

ToString is the abstract operation behind:

- String concatenation (+ with string)
- Template literals
- Explicit String()
- Many implicit conversions

Whenever JavaScript needs text, it invokes:

    ToString(value)

Unlike ToNumber:

✔ Conversion NEVER fails (except Symbol edge cases)  
✔ Every value has a string representation

---

## 2. Core Mental Model

JavaScript asks:

"How should this value be represented as text?"

Result → Always a string

---

## 3. Full ToString Conversion Rules

We analyze by type.

---

## 3.1 undefined → String

    ToString(undefined) → "undefined"

---

## 3.2 null → String

    ToString(null) → "null"

---

## 3.3 Boolean → String

    true → "true"
    false → "false"

Examples:

    ToString(true) → "true"
    ToString(false) → "false"

---

## 3.4 Number → String

Numbers convert naturally.

    ToString(42) → "42"
    ToString(3.14) → "3.14"

---

### Special Numbers

    ToString(NaN) → "NaN"
    ToString(Infinity) → "Infinity"
    ToString(-Infinity) → "-Infinity"

---

### Negative Zero (Important)

    ToString(-0) → "0"

Yes.

Sign is lost.

Major gotcha.

---

## 3.5 String → String

Identity conversion.

    ToString("hello") → "hello"

---

## 3.6 Symbol → String (Critical Edge Case)

Symbols resist implicit string conversion.

---

### Explicit Conversion Works

    String(Symbol("id")) → "Symbol(id)"

---

### Implicit Conversion Fails

    Symbol("id") + "" → TypeError

Very important distinction.

---

## 3.7 BigInt → String

    ToString(10n) → "10"

Works cleanly.

---

## 4. Objects → String (Two-Step Process)

Objects first undergo:

    ToPrimitive(object, String)

Then:

    ToString(primitive)

---

## Example 1 — []

    ToString([])

Step 1 → ToPrimitive([]) → ""  
Step 2 → ""

---

## Example 2 — [1,2,3]

    ToPrimitive → "1,2,3"

Final → "1,2,3"

---

## Example 3 — {}

    ToPrimitive → "[object Object]"

Final → "[object Object]"

---

## 5. Arrays & ToString (Major Insight)

Arrays use:

    Array.prototype.toString()

Rule:

Comma-separated values.

---

### Examples

    String([1,2,3]) → "1,2,3"
    String([42]) → "42"
    String([]) → ""

Critical rule:

Empty array → empty string.

---

## 6. Objects & Default ToString

Most objects produce:

    "[object Object]"

Unless overridden.

---

## Example

    String({}) → "[object Object]"

---

## 7. + Operator & ToString

When string detected → concatenation.

---

### Examples

    42 + "" → "42"
    true + "" → "true"
    null + "" → "null"
    undefined + "" → "undefined"

---

### Arrays

    [] + "" → ""
    [1,2] + "" → "1,2"

---

### Objects

    {} + "" → "[object Object]"

---

## 8. Evaluation Order Gotchas

---

### Example 1

    1 + 2 + "" → "3"

---

### Example 2

    "" + 1 + 2 → "12"

---

### Example 3

    [] + {} → "[object Object]"

Because:

    [] → ""
    {} → "[object Object]"

---

## 9. Negative Zero Gotcha

One of the most subtle quirks.

---

### Example

    String(-0) → "0"
    -0 === 0 → true
    Object.is(-0, 0) → false

ToString hides negative zero.

---

## 10. Tons of Practice Examples

Predict BEFORE checking answers.

---

### Primitives

    String(42)
    String(true)
    String(null)
    String(undefined)
    String(NaN)
    String(-0)

---

### Arrays

    String([])
    String([1])
    String([1,2])

---

### Objects

    String({})
    {} + ""

---

### Symbols

    String(Symbol("id"))
    Symbol("id") + ""

---

### BigInt

    String(10n)
    10n + ""

---

## 11. Answers

---

### Primitives

    String(42) → "42"
    String(true) → "true"
    String(null) → "null"
    String(undefined) → "undefined"
    String(NaN) → "NaN"
    String(-0) → "0"

---

### Arrays

    String([]) → ""
    String([1]) → "1"
    String([1,2]) → "1,2"

---

### Objects

    String({}) → "[object Object]"
    {} + "" → "[object Object]"

---

### Symbols

    String(Symbol("id")) → "Symbol(id)"
    Symbol("id") + "" → TypeError

---

### BigInt

    String(10n) → "10"
    10n + "" → "10"

---

## 12. Expert Mental Lock

ToString Rules:

1. undefined → "undefined"
2. null → "null"
3. Boolean → "true"/"false"
4. Number → natural string
5. NaN → "NaN"
6. Infinity → "Infinity"
7. -0 → "0"
8. BigInt → numeric string
9. Symbol → explicit only
10. Object → ToPrimitive → ToString
11. Arrays → comma-separated string
12. [] → ""

---

## 13. Final Master Insight

Most string coercion weirdness:

✔ ToPrimitive  
✔ Then ToString

Chains explain everything:

    [] → ""
    {} → "[object Object]"
    -0 → "0"
