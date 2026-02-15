## Boolean Coercion

## 1. Boolean Coercion

Boolean coercion means:

JavaScript converts a value into either:

- true
- false

This conversion happens whenever JavaScript needs a boolean.

Common triggers:

- if conditions
- while loops
- logical operators (&&, ||)
- ternary operator
- Boolean()
- !!

---

## 2. Core Mental Model

JavaScript asks:

"Should this value behave like true or false?"

Rule:

Only a small set of values become false.

Everything else becomes true.

---

## 3. The Only Falsy Values (Memorize)

These values convert to false:

- false
- 0
- -0
- 0n
- ""
- null
- undefined
- NaN

Everything else → true

No exceptions.

---

## 4. Explicit Boolean Conversion

Two main ways.

---

### 4.1 Boolean()

    Boolean(value)

Examples:

    Boolean(true) → true
    Boolean(false) → false

    Boolean(1) → true
    Boolean(0) → false

    Boolean("hello") → true
    Boolean("") → false

---

### 4.2 Double Negation (!!)

Most common shorthand.

    !!value

Why it works:

Step 1 → !value → converts to boolean & flips  
Step 2 → !again → flips back

Examples:

    !!1 → true
    !!0 → false
    !!"hello" → true
    !!"" → false

---

## 5. Deep Conversion Examples

---

## 5.1 Numbers → Boolean

    Boolean(100) → true
    Boolean(-1) → true
    Boolean(0) → false
    Boolean(NaN) → false
    Boolean(Infinity) → true

Mental Rule:

Only 0, -0, NaN → false

---

## 5.2 Strings → Boolean

    Boolean("hello") → true
    Boolean("0") → true
    Boolean("false") → true
    Boolean("") → false
    Boolean(" ") → true

Critical Insight:

Empty string only falsy string.

Even misleading values are truthy:

- "0"
- "false"

Because they are non-empty strings.

---

## 5.3 null & undefined → Boolean

    Boolean(null) → false
    Boolean(undefined) → false

---

## 5.4 Arrays → Boolean (Major Gotcha)

    Boolean([]) → true
    Boolean([1,2]) → true

Why?

Arrays are objects.

All objects → true

Even empty ones.

---

## 5.5 Objects → Boolean

    Boolean({}) → true
    Boolean({ a: 1 }) → true

Again:

Objects → ALWAYS truthy.

---

## 6. Extremely Important Confusions

---

### Confusion 1 — Empty Array vs Empty String

    Boolean("") → false
    Boolean([]) → true

Empty ≠ falsy.

Falsy is a predefined list.

---

### Confusion 2 — String "false"

    Boolean("false") → true

Because:

Non-empty string.

---

### Confusion 3 — String "0"

    Boolean("0") → true

---

## 7. Boolean Coercion in if Conditions

Whenever you write:

    if (value)

JavaScript performs:

    Boolean(value)

Examples:

---

### Numbers

    if (10) console.log("runs")
    if (0) console.log("runs")

Only first runs.

---

### Strings

    if ("hello") console.log("runs")
    if ("") console.log("runs")

Only first runs.

---

### Arrays & Objects

    if ([]) console.log("runs")
    if ({}) console.log("runs")

Both run.

---

## 8. Logical Operators & Boolean Coercion

Important:

&& and || use truthy/falsy evaluation.

They DO NOT return booleans necessarily.

---

### OR (||) → First Truthy

    "" || "hello" → "hello"
    0 || 42 → 42
    null || "JS" → "JS"
    "Hi" || "JS" → "Hi"

---

### AND (&&) → First Falsy

    "hello" && 42 → 42
    "" && 42 → ""
    0 && 42 → 0
    null && 42 → null

---

## 9. Real-World Boolean Patterns

---

### Default Values

    let name = input || "Guest"

If input falsy → fallback triggers.

---

### Conditional Execution

    isLoggedIn && showDashboard()

---

### Boolean Normalization

    let isValid = !!value

Very common pattern.

---

## 10. Tons of Practice Examples

Predict BEFORE checking answers.

---

### Numbers

    Boolean(1)
    Boolean(0)
    Boolean(-1)
    Boolean(NaN)

---

### Strings

    Boolean("hello")
    Boolean("")
    Boolean(" ")
    Boolean("false")

---

### Arrays

    Boolean([])
    Boolean([0])
    Boolean([""])

---

### Objects

    Boolean({})
    Boolean({ key: false })

---

### Double Negation

    !!0
    !!""
    !![]
    !!{}

---

## 11. Answers

---

### Numbers

    Boolean(1) → true
    Boolean(0) → false
    Boolean(-1) → true
    Boolean(NaN) → false

---

### Strings

    Boolean("hello") → true
    Boolean("") → false
    Boolean(" ") → true
    Boolean("false") → true

---

### Arrays

    Boolean([]) → true
    Boolean([0]) → true
    Boolean([""]) → true

---

### Objects

    Boolean({}) → true
    Boolean({ key: false }) → true

---

### Double Negation

    !!0 → false
    !!"" → false
    !![] → true
    !!{} → true

---

## 12. Expert Mental Rules

At mastery level:

1. Only 8 falsy values exist
2. Objects ALWAYS truthy
3. [] → truthy
4. "" → falsy
5. Non-empty string → truthy
6. Boolean coercion never surprises once falsy list is memorized

---

## 13. Final Mental Lock

Boolean coercion is the simplest coercion.

Just ask:

"Is this one of the 8 falsy values?"

If YES → false  
If NO → true
