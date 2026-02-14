## Truthy and Falsy Values

## 1. Truthy vs Falsy

Truthy / Falsy is the first real encounter with coercion.

Core rule:

JavaScript converts values into boolean when required.

This happens in:

- if conditions
- while loops
- logical operators (&&, ||)
- ternary operator
- Boolean()
- !!

---

## 2. The Complete List of Falsy Values (Memorize)

Only these values are falsy:

- false
- 0
- -0
- 0n
- ""
- null
- undefined
- NaN

Everything else → truthy.

No exceptions.

---

## 3. Basic Intuition Examples

### Example 1 — Strings

    if ("hello") console.log("runs")
    if ("") console.log("runs")

Result:

"hello" → truthy  
"" → falsy

Rule:

Non-empty string → truthy  
Empty string → falsy

---

### Example 2 — Numbers

    if (42) console.log("runs")
    if (0) console.log("runs")
    if (-1) console.log("runs")

Result:

42 → truthy  
0 → falsy  
-1 → truthy

Rule:

Only 0 and -0 are falsy.

---

## 4. The Famous Confusing Ones

---

### Example — Arrays

    if ([]) console.log("runs")
    if ([1, 2, 3]) console.log("runs")

Both run.

Why?

Arrays are objects.

All objects → truthy.

Even empty ones.

---

### Example — Objects

    if ({}) console.log("runs")
    if ({ name: "JS" }) console.log("runs")

Both run.

Again:

Objects → ALWAYS truthy.

Empty object is still an object.

---

## 5. Extremely Important Mental Model

Falsy is NOT about "emptiness".

Falsy is about **specific predefined values**.

Empty containers are truthy:

- [] → truthy
- {} → truthy

Because:

They are objects.

---

## 6. Boolean Conversion Examples

Let’s force conversion explicitly.

---

### Using Boolean()

    Boolean("hello")     → true
    Boolean("")          → false

    Boolean(42)          → true
    Boolean(0)           → false

    Boolean([])          → true
    Boolean({})          → true

    Boolean(null)        → false
    Boolean(undefined)   → false
    Boolean(NaN)         → false

---

### Using !!

    !!"hello"     → true
    !!""          → false

    !!42          → true
    !!0           → false

    !![]          → true
    !!{}          → true

---

## 7. Tons of Practice Examples

Predict BEFORE reading answers.

---

### Strings

    if ("JS") console.log("A")
    if ("0") console.log("B")
    if ("false") console.log("C")
    if (" ") console.log("D")

All run.

Why?

Non-empty strings → truthy.

Even:

- "0"
- "false"
- " "

---

### Numbers

    if (1) console.log("A")
    if (-1) console.log("B")
    if (999) console.log("C")

All run.

Only 0 fails.

---

### Special Numbers

    if (NaN) console.log("runs")
    if (Infinity) console.log("runs")

NaN → falsy  
Infinity → truthy

---

### null & undefined

    if (null) console.log("runs")
    if (undefined) console.log("runs")

Neither runs.

Both falsy.

---

### Arrays

    if ([]) console.log("A")
    if ([0]) console.log("B")
    if ([false]) console.log("C")

All run.

Still objects.

---

### Objects

    if ({}) console.log("A")
    if ({ x: 0 }) console.log("B")

All run.

---

## 8. Logical Operator Coercion (Critical)

Truthy / falsy heavily affects && and ||.

---

### OR Operator (||)

Returns first truthy value.

    "" || "hello"      → "hello"
    0 || 42            → 42
    null || "JS"       → "JS"
    "Hi" || "JS"       → "Hi"

---

### AND Operator (&&)

Returns first falsy value.

    "hello" && 42      → 42
    "" && 42           → ""
    0 && 42            → 0
    null && 42         → null

---

## 9. Real-World Patterns

Truthy / falsy used constantly.

---

### Default Values

    let name = userInput || "Guest"

If userInput falsy → "Guest"

---

### Guard Clauses

    isLoggedIn && showDashboard()

If falsy → stops execution.

---

## 10. Trick Examples (Interview Favorites)

---

### Example 1

    if ("") console.log("A")
    else console.log("B")

Output → B

---

### Example 2

    if ("false") console.log("runs")

Runs.

Because string ≠ boolean.

---

### Example 3

    if ([] == false) console.log("runs")

This runs — but NOT due to truthy/falsy.

This is equality coercion (later topic).

Important separation.

---

## 11. Mastery-Level Mental Rules

At expert level:

1. Only 8 falsy values exist
2. Objects ALWAYS truthy
3. Empty string is falsy, empty array is truthy
4. Truthy/falsy ≠ equality rules

---

## 12. Exercises (Do Mentally)

Predict outputs.

---

### Exercise 1

    if ("0") console.log("A")

---

### Exercise 2

    if ([]) console.log("A")
    else console.log("B")

---

### Exercise 3

    console.log( Boolean({}) )

---

### Exercise 4

    console.log( "" || 100 )

---

### Exercise 5

    console.log( 0 && "hello" )

---

## 13. Answers

Exercise 1 → A  
Exercise 2 → A  
Exercise 3 → true  
Exercise 4 → 100  
Exercise 5 → 0

---

## 14. Final Mental Lock

Falsy values are rare.

Truthy is default state of JS.

If unsure, ask:

"Is this one of the 8 falsy values?"

If NO → truthy.
