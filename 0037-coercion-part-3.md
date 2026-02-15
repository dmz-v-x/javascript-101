## Number Coercion

## 1. Number Coercion

Number coercion means:

JavaScript converts a value into a number.

This conversion happens when JavaScript encounters:

- Mathematical operations
- Numeric comparisons
- Explicit Number()
- Unary plus (+)

---

## 2. The Core Mental Model

JavaScript asks one question:

"Can this value be interpreted as a number?"

If YES → Convert to number  
If NO → Result becomes NaN

---

## 3. Explicit Number Conversion

The most direct way:

    Number(value)

Examples:

    Number("42") → 42
    Number("") → 0
    Number(null) → 0
    Number(undefined) → NaN
    Number(true) → 1
    Number(false) → 0

---

## 4. Understanding Each Conversion Deeply

---

### 4.1 String → Number

JavaScript tries to parse numeric meaning.

    Number("123") → 123
    Number("3.14") → 3.14
    Number("") → 0
    Number("   ") → 0
    Number("abc") → NaN

Mental Rule:

Empty or whitespace string → 0  
Invalid numeric string → NaN

---

### 4.2 Boolean → Number

Very simple rule.

    true → 1
    false → 0

Examples:

    Number(true) → 1
    Number(false) → 0

---

### 4.3 null → Number

Special rule.

    Number(null) → 0

Why?

null represents "intentional absence of value".

Numeric absence → 0

---

### 4.4 undefined → Number

Another special rule.

    Number(undefined) → NaN

Why?

undefined = value not assigned.

Cannot interpret numerically.

---

## 5. NaN — Critical Concept

NaN means:

Not a Number.

Important properties:

    Number("hello") → NaN
    Number(undefined) → NaN

NaN behaves uniquely:

    NaN === NaN → false

NaN is never equal to anything.

---

## 6. Implicit Number Coercion

Occurs automatically.

---

## 6.1 Mathematical Operators Force Numbers

Operators:

- 
- *
- /
- %

Examples:

    "5" - 2 → 3
    "10" * "2" → 20
    "8" / 2 → 4

What happens internally:

    Number("5") - 2 → 5 - 2 → 3

---

## 6.2 Unary Plus (Very Important)

Unary plus is the cleanest implicit conversion.

    +value

Examples:

    +"123" → 123
    +"" → 0
    +true → 1
    +false → 0
    +null → 0
    +undefined → NaN

Unary plus = shorthand Number()

---

## 7. Practice Block (Essential)

Evaluate mentally.

---

### Strings

    +"42" → 42
    +"3.14" → 3.14
    +"abc" → NaN
    +"" → 0
    +"   " → 0

---

### Booleans

    +true → 1
    +false → 0

---

### Special Values

    +null → 0
    +undefined → NaN
    +NaN → NaN

---

## 8. Classic Confusion Examples

---

### Example 1

    "5" + 2 → "52"

Why NOT 7?

Because + operator prefers string concatenation.

---

### Example 2

    "5" - 2 → 3

Why works?

Because - forces numeric conversion.

---

### Example 3

    true + 1 → 2

Because:

    Number(true) + 1 → 1 + 1 → 2

---

## 9. Conversion Failures

Whenever conversion fails → NaN.

Examples:

    Number("hello") → NaN
    +"abc" → NaN
    "hello" - 2 → NaN

---

## 10. Reliable Expert Rules

At mastery level:

1. Strings → parsed numerically
2. "" → 0
3. true → 1
4. false → 0
5. null → 0
6. undefined → NaN
7. Failed conversion → NaN

---

## 11. Exercises

Predict outputs.

---

### Exercise 1

    console.log( +"100" )

---

### Exercise 2

    console.log( +"" )

---

### Exercise 3

    console.log( +false )

---

### Exercise 4

    console.log( +"abc" )

---

### Exercise 5

    console.log( null + 1 )

---

## 12. Answers

Exercise 1 → 100  
Exercise 2 → 0  
Exercise 3 → 0  
Exercise 4 → NaN  
Exercise 5 → 1

Explanation for Exercise 5:

    Number(null) + 1 → 0 + 1 → 1

---

## 13. Final Mental Lock

Number coercion is predictable.

JavaScript tries numeric interpretation.

Success → number  
Failure → NaN

Unary plus = fastest mental shortcut.

