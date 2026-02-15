## Coercion Revision

## 1. Coercion — The Big Picture

Every programming language provides some mechanism for **type interconversion**.

Example from Java:

    System.out.println("Hello" + 22) → Hello22

What happened?

22 (number) → converted to string → concatenation

JavaScript behaves similarly.

Core idea:

**Coercion = Type Conversion**

JavaScript automatically converts values when needed.

---

## 2. Two Types of Coercion

---

### 2.1 Implicit Coercion

When JavaScript automatically converts types.

Examples:

    "5" * 2 → 10
    1 + "2" → "12"

You did NOT ask for conversion.

JavaScript decided.

---

### 2.2 Explicit Coercion

When YOU command conversion.

Examples:

    Number("5") → 5
    String(42) → "42"
    Boolean(0) → false

You are in control.

---

## 3. Why JavaScript Coercion Feels Tricky

Because JavaScript handles:

- Many types
- Many operators
- Many conversion paths

But…

**Nothing is random.**

Everything follows **Abstract Operations**.

---

## 4. Abstract Operations — The Real Engine

Abstract operations are **internal spec functions**.

They are NOT directly accessible.

But JavaScript uses them everywhere.

Key abstract operations:

- ToNumber
- ToString
- ToBoolean
- ToPrimitive

Operators simply invoke these.

---

## 5. ToNumber

---

## 6. What is ToNumber?

ToNumber converts a value into a number.

Triggered by:

- Arithmetic (- * / %)
- Unary plus (+value)
- Numeric comparisons

---

## 7. Core Algorithm (Simplified)

For expression:

    x - y

Steps:

1. Evaluate operands
2. Apply ToNumber(x)
3. Apply ToNumber(y)
4. Perform subtraction

Important Rule:

**Subtraction ALWAYS forces numbers**

---

## 8. ToNumber Conversion Rules

| Type | Result |
|------|--------|
| undefined | NaN |
| null | +0 |
| true | 1 |
| false | 0 |
| number | unchanged |
| string | parsed numerically |
| symbol | TypeError |
| object | ToPrimitive → ToNumber |

---

## 9. String Grammar (Critical)

Valid numeric strings:

    "" → 0
    "0" → 0
    "-0" → -0
    "009" → 9
    "3.143" → 3.143
    "0." → 0
    ".0" → 0

Invalid:

    "." → NaN
    "&" → NaN
    "ab32" → NaN

---

## 10. Special Numeric Strings

    "0xaf" → 175
    "0b11" → 3
    "0o10" → 8

---

## 11. Primitive Examples

    +"42" → 42
    +"" → 0
    +true → 1
    +false → 0
    +null → 0
    +undefined → NaN

---

## 12. Array Conversions (Major Gotcha Zone)

    +[] → 0
    +[""] → 0
    +["0"] → 0
    +["-0"] → -0
    +[null] → 0
    +[undefined] → 0
    +[1,2,3] → NaN
    +[[[]]] → 0

---

## 13. Critical Insight

Arrays often become:

    [] → ""

---

## 14. ToString

---

## 15. What is ToString?

ToString converts values into text.

Triggered by:

- String concatenation
- Template literals
- Explicit String()

---

## 16. Core Algorithm Behind + Operator

For:

    x + y

Steps:

1. ToPrimitive(x)
2. ToPrimitive(y)

If either primitive is string:

→ Convert BOTH via ToString  
→ Concatenate

Else:

→ Convert BOTH via ToNumber  
→ Add

---

## 17. ToString Conversion Rules

| Type | Result |
|------|--------|
| undefined | "undefined" |
| null | "null" |
| true | "true" |
| false | "false" |
| number | numeric string |
| string | unchanged |
| symbol | TypeError (implicit) |
| object | ToPrimitive → ToString |

---

## 18. Primitive Examples

    String(null) → "null"
    String(undefined) → "undefined"
    String(true) → "true"
    String(3.14) → "3.14"
    String(-0) → "0"

---

## 19. Arrays → Strings

    String([]) → ""
    String([1,2,3]) → "1,2,3"
    String([null, undefined]) → ","
    String([[],[],[]]) → ",,"

---

## 20. Objects → Strings

    String({}) → "[object Object]"

---

## 21. Classic + Operator Examples

    1 + "2" → "12"
    true + "" → "true"
    [] + "" → ""
    [] + {} → "[object Object]"

---

## 22. ToPrimitive

---

## 23. What is ToPrimitive?

ToPrimitive converts **objects → primitives**.

Triggered by:

- Arithmetic
- +
- ==
- Comparisons

---

## 24. PreferredType Concept

ToPrimitive may request:

- Number hint
- String hint

This decides method order.

---

## 25. ToPrimitive Algorithm (Simplified)

If input is object:

1. Determine hint
2. Call OrdinaryToPrimitive(obj, hint)

---

## 26. OrdinaryToPrimitive Algorithm

---

### Hint = String

Order:

1. toString()
2. valueOf()

---

### Hint = Number

Order:

1. valueOf()
2. toString()

---

## 27. Default Behaviors

---

### Objects

    {}.toString() → "[object Object]"
    {}.valueOf() → {}

---

### Arrays

    [].toString() → ""
    [].valueOf() → []

---

## 28. Step-by-Step Examples

---

### Example 1

    [] + ""

Hint → String

    [].toString() → ""

---

### Example 2

    [] - 1

Hint → Number

    [].valueOf() → [] (ignored)
    [].toString() → ""

    Number("") → 0

Final → -1

---

### Example 3

    {} - 1 → NaN

---

### Example 4

    [1] == 1 → true

---

## 29. Massive Gotchas

    [] == 0 → true
    [] == "" → true
    [] == false → true

Because all → 0

---

## 30. ToBoolean

---

## 31. What is ToBoolean?

Converts values into true/false.

Used in:

- if conditions
- logical operators

---

## 32. Only Falsy Values

    undefined
    null
    false
    0
    -0
    NaN
    ""
    0n

Everything else → true

---

## 33. Critical Object Rule

ALL objects → true

    Boolean([]) → true
    Boolean({}) → true

---

## 34. Final Mental Model — Master Lock

JavaScript coercion is algorithmic.

Operators invoke:

- ToPrimitive
- ToNumber
- ToString
- ToBoolean

---

## 35. Predicting Any Expression (Expert Formula)

Step 1 → Identify operator  
Step 2 → Identify abstract operations triggered  
Step 3 → Apply conversion chain  
Step 4 → Compute result

---

## 36. Example of Expert Thinking

    [] == 0

1. Object vs Number → ToPrimitive([])
2. [] → ""
3. "" → 0
4. 0 == 0 → true

---

## 37. Final Truth

JavaScript is NEVER confused.

Weirdness = incomplete mental model.

Once abstract operations are understood:

Everything becomes deterministic.
