## ToBoolean Abstract Operation

## 1. ToBoolean 

ToBoolean is the abstract operation behind:

- if conditions
- while loops
- logical operators (&&, ||)
- ternary expressions
- Boolean()
- !!

Whenever JavaScript needs true/false, it invokes:

    ToBoolean(value)

This is the simplest coercion operation.

Yet extremely important.

---

## 2. Core Mental Model

JavaScript asks:

"Should this value behave as true or false?"

Unlike ToNumber / ToString:

✔ No complex parsing  
✔ No multi-step conversions  
✔ Direct mapping

---

## 3. The Only Falsy Values (Memorize Permanently)

These values convert to false:

- undefined
- null
- false
- +0
- -0
- NaN
- ""
- 0n

Everything else → true

No exceptions.

---

## 4. Type-by-Type Conversion Rules

---

## 4.1 undefined → Boolean

    ToBoolean(undefined) → false

---

## 4.2 null → Boolean

    ToBoolean(null) → false

---

## 4.3 Boolean → Boolean

Identity conversion.

    ToBoolean(true) → true
    ToBoolean(false) → false

---

## 4.4 Number → Boolean

Rule:

Only zero & NaN → false

---

### Examples

    ToBoolean(1) → true
    ToBoolean(-1) → true
    ToBoolean(0) → false
    ToBoolean(-0) → false
    ToBoolean(NaN) → false
    ToBoolean(Infinity) → true

---

## 4.5 String → Boolean

Rule:

Only empty string → false

---

### Examples

    ToBoolean("") → false
    ToBoolean("hello") → true
    ToBoolean("0") → true
    ToBoolean("false") → true
    ToBoolean(" ") → true

Critical insight:

Non-empty string → ALWAYS true

Regardless of content.

---

## 4.6 Symbol → Boolean

    ToBoolean(Symbol()) → true

Symbols are always truthy.

---

## 4.7 BigInt → Boolean

    ToBoolean(0n) → false
    ToBoolean(10n) → true

---

## 4.8 Object → Boolean (CRITICAL RULE)

Most important rule:

ALL objects → true

---

### Examples

    ToBoolean({}) → true
    ToBoolean([]) → true
    ToBoolean(new Boolean(false)) → true

Even objects wrapping falsy values remain truthy.

---

## 5. Massive Gotcha Zone — Objects

---

### Gotcha 1 — Empty Array

    Boolean([]) → true

Because array = object.

NOT empty = false.

---

### Gotcha 2 — Empty Object

    Boolean({}) → true

---

### Gotcha 3 — Wrapper Objects

    Boolean(new Boolean(false)) → true

Why?

Because object ≠ primitive false.

---

## 6. Boolean Coercion in if Statements

Whenever:

    if (value)

JavaScript performs:

    ToBoolean(value)

---

### Examples

---

### Numbers

    if (0) → false
    if (100) → true

---

### Strings

    if ("") → false
    if ("false") → true

---

### Objects

    if ([]) → true
    if ({}) → true

---

## 7. Logical Operators & ToBoolean

Logical operators depend on truthiness.

But return original values.

---

## 7.1 OR (||)

Returns first truthy operand.

---

### Examples

    "" || "hello" → "hello"
    0 || 42 → 42
    null || "JS" → "JS"
    "Hi" || "JS" → "Hi"

---

## 7.2 AND (&&)

Returns first falsy operand.

---

### Examples

    "hello" && 42 → 42
    "" && 42 → ""
    0 && 42 → 0
    null && 42 → null

---

## 8. Double Negation (!!)

Most common boolean normalization trick.

---

### Why it Works

    !!value

Step 1 → !value → boolean & invert  
Step 2 → !again → invert back

---

### Examples

    !!1 → true
    !!0 → false
    !!"hello" → true
    !!"" → false
    !![] → true
    !!{} → true

---

## 9. Tons of Practice Examples

Predict BEFORE checking answers.

---

### Primitives

    Boolean(0)
    Boolean(1)
    Boolean("")
    Boolean("0")
    Boolean(null)
    Boolean(undefined)

---

### Numbers

    Boolean(NaN)
    Boolean(Infinity)
    Boolean(-0)

---

### Objects

    Boolean([])
    Boolean({})
    Boolean(new Number(0))
    Boolean(new Boolean(false))

---

### Double Negation

    !!""
    !![]
    !!0
    !!"false"

---

## 10. Answers

---

### Primitives

    Boolean(0) → false
    Boolean(1) → true
    Boolean("") → false
    Boolean("0") → true
    Boolean(null) → false
    Boolean(undefined) → false

---

### Numbers

    Boolean(NaN) → false
    Boolean(Infinity) → true
    Boolean(-0) → false

---

### Objects

    Boolean([]) → true
    Boolean({}) → true
    Boolean(new Number(0)) → true
    Boolean(new Boolean(false)) → true

---

### Double Negation

    !!"" → false
    !![] → true
    !!0 → false
    !!"false" → true

---

## 11. Expert Mental Lock

ToBoolean Rules:

1. Only 8 falsy values exist
2. Everything else → true
3. Objects ALWAYS true
4. Empty containers ≠ falsy
5. Non-empty string ALWAYS true
6. Wrapper objects ALWAYS true

---

## 12. Final Master Insight

Boolean coercion is the most predictable coercion.

Simply ask:

"Is this value one of the 8 falsy values?"

If YES → false  
If NO → true

No multi-step chains needed.
