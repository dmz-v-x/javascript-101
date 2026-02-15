## ToNumber Abstract Operation

## 1. ToNumber

ToNumber is the **core abstract operation** behind:

- Arithmetic operators (- * / %)
- Unary plus (+value)
- Numeric comparisons
- Many == coercion cases

Whenever JavaScript needs a number, it invokes:

    ToNumber(value)

This is the real engine behind number coercion.

---

## 2. Core Mental Model

JavaScript asks:

"How can this value be interpreted numerically?"

Possible outcomes:

✔ Valid number  
✔ NaN  
✔ TypeError (important cases)

---

## 3. Full ToNumber Conversion Rules

We analyze by type.

---

## 3.1 undefined → Number

    ToNumber(undefined) → NaN

Reason:

undefined = no assigned value → cannot interpret.

---

## 3.2 null → Number

    ToNumber(null) → +0

Reason:

null = intentional absence → numeric absence → 0.

---

## 3.3 Boolean → Number

Very simple mapping.

    true → 1
    false → 0

Examples:

    ToNumber(true) → 1
    ToNumber(false) → 0

---

## 3.4 Number → Number

Identity conversion.

    ToNumber(42) → 42
    ToNumber(NaN) → NaN

No change.

---

## 3.5 String → Number (Very Important)

Strings follow parsing rules.

---

### Empty String

    ToNumber("") → 0

---

### Whitespace String

    ToNumber("   ") → 0

Whitespace ignored.

---

### Valid Numeric String

    ToNumber("42") → 42
    ToNumber("3.14") → 3.14
    ToNumber("-10") → -10

---

### Invalid Numeric String

    ToNumber("hello") → NaN
    ToNumber("123abc") → NaN

Strict parsing.

---

## 4. Special String Cases (Critical)

---

### Infinity

    ToNumber("Infinity") → Infinity
    ToNumber("-Infinity") → -Infinity

---

### Hexadecimal

    ToNumber("0x11") → 17

---

### Binary

    ToNumber("0b11") → 3

---

### Octal

    ToNumber("0o10") → 8

---

### Negative Zero

    ToNumber("-0") → -0

Yes, -0 exists.

---

## 5. Symbol → Number (Important Error Case)

    ToNumber(Symbol()) → TypeError

Symbols resist numeric conversion.

---

## 6. BigInt → Number (Critical Modern Rule)

ToNumber(BigInt) → TypeError

---

### Example

    +1n → TypeError

Unary plus triggers ToNumber.

---

### But Explicit Conversion Works

    Number(1n) → 1

Different algorithm (BigIntToNumber).

Important nuance.

---

## 7. Objects → Number (Two-Step Process)

Objects first undergo:

    ToPrimitive(object, Number)

Then:

    ToNumber(primitive)

---

## Example 1 — []

    ToNumber([])

Step 1 → ToPrimitive([]) → ""  
Step 2 → ToNumber("") → 0

Final → 0

---

## Example 2 — [5]

    ToNumber([5])

Step 1 → "5"  
Step 2 → 5

---

## Example 3 — [1,2]

    ToNumber([1,2])

Step 1 → "1,2"  
Step 2 → NaN

---

## Example 4 — {}

    ToNumber({})

Step 1 → "[object Object]"  
Step 2 → NaN

---

## 8. Arithmetic Operators & ToNumber

Arithmetic operators ALWAYS invoke ToNumber.

---

### Examples

    "5" - 1 → 4
    true * 10 → 10
    null + 1 → 1   // addition rules apply earlier

---

### NaN Propagation

    "hello" - 1 → NaN
    NaN * 5 → NaN

NaN contaminates math.

---

## 9. Classic Confusion Cases

---

### Case 1

    "" - 1 → -1

Because:

    "" → 0

---

### Case 2

    [] - 1 → -1

Because:

    [] → "" → 0

---

### Case 3

    [null] - 1 → -1

Because:

    [null] → "" → 0

---

### Case 4

    [undefined] - 1 → -1

Same logic.

---

### Case 5

    {} - 1 → NaN

---

## 10. Numeric Edge Cases

---

### Division by Zero

    1 / 0 → Infinity
    0 / 0 → NaN

---

### Negative Zero

    1 / -Infinity → -0

---

## 11. Tons of Practice Examples

Predict BEFORE checking answers.

---

### Strings

    +"42"
    +""
    +"   "
    +"hello"
    +"0x10"

---

### Booleans

    +true
    +false

---

### null / undefined

    +null
    +undefined

---

### Arrays

    +[]
    +[10]
    +[1,2]

---

### Objects

    +{}
    +{ valueOf() { return 5 } }

---

### BigInt

    +1n
    Number(1n)

---

## 12. Answers

---

### Strings

    +"42" → 42
    +"" → 0
    +"   " → 0
    +"hello" → NaN
    +"0x10" → 16

---

### Booleans

    +true → 1
    +false → 0

---

### null / undefined

    +null → 0
    +undefined → NaN

---

### Arrays

    +[] → 0
    +[10] → 10
    +[1,2] → NaN

---

### Objects

    +{} → NaN
    +customObject → 5

---

### BigInt

    +1n → TypeError
    Number(1n) → 1

---

## 13. Expert Mental Lock

ToNumber Rules:

1. undefined → NaN
2. null → 0
3. true → 1
4. false → 0
5. Number → unchanged
6. String → parsed numerically
7. Symbol → TypeError
8. BigInt → TypeError
9. Object → ToPrimitive → ToNumber

---

## 14. Final Master Insight

Most coercion weirdness is simply:

✔ ToPrimitive  
✔ Then ToNumber

Chains explain everything:

    [] → "" → 0
    {} → "[object Object]" → NaN

No magic. Only algorithms.
