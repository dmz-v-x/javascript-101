## OrdinaryToPrimitive

## 1. OrdinaryToPrimitive

OrdinaryToPrimitive is the **default conversion mechanism** used by ToPrimitive.

When an object does NOT define:

    Symbol.toPrimitive

JavaScript falls back to:

    OrdinaryToPrimitive

This is the real engine behind most coercion behavior.

---

## 2. Why OrdinaryToPrimitive Exists

Objects must eventually become primitives during:

- Arithmetic
- String concatenation
- Equality
- Comparisons

If no custom conversion → JS uses OrdinaryToPrimitive.

---

## 3. Core Mental Model

OrdinaryToPrimitive tries two methods:

- valueOf()
- toString()

The **order depends on PreferredType**.

This is the most important rule.

---

## 4. PreferredType — The Deciding Factor

OrdinaryToPrimitive receives:

    OrdinaryToPrimitive(obj, PreferredType)

PreferredType is either:

- Number
- String

---

### PreferredType = Number

Order:

1. valueOf()
2. toString()

---

### PreferredType = String

Order:

1. toString()
2. valueOf()

---

## 5. Full Algorithm (Simplified)

---

### Case 1 — PreferredType = Number

Step 1 → Call valueOf()

✔ If primitive → return  
✔ Else → Continue

Step 2 → Call toString()

✔ If primitive → return  
✔ Else → Error

---

### Case 2 — PreferredType = String

Step 1 → Call toString()

✔ If primitive → return  
✔ Else → Continue

Step 2 → Call valueOf()

✔ If primitive → return  
✔ Else → Error

---

## 6. Extremely Important Insight

Most built-in objects behave like this:

valueOf() → returns object (ignored)  
toString() → returns primitive (used)

---

## 7. Example Walkthroughs (Step-by-Step)

---

## Example 1 — [] - 1

Expression:

    [] - 1

---

Step 1 → Arithmetic → PreferredType = Number  
Step 2 → OrdinaryToPrimitive([], Number)

valueOf():

    [].valueOf() → [] (NOT primitive)

toString():

    [].toString() → ""

Step 3 → Number("") → 0  
Step 4 → 0 - 1 → -1

---

## Example 2 — [] + ""

Expression:

    [] + ""

---

Step 1 → String context → PreferredType = String  
Step 2 → OrdinaryToPrimitive([], String)

toString():

    ""

Result:

    ""

---

## Example 3 — {} - 1

---

Step 1 → PreferredType = Number  
Step 2 → valueOf():

    {} → NOT primitive

Step 3 → toString():

    "[object Object]"

Step 4 → Number("[object Object]") → NaN

Final → NaN

---

## Example 4 — {} + ""

---

PreferredType = String

toString():

    "[object Object]"

Result → "[object Object]"

---

## 8. Objects with Custom valueOf()

Now things get interesting.

---

### Example

    let obj = {
        valueOf() {
            return 10;
        }
    };

    obj - 1 → 9

Why?

valueOf() returned primitive → algorithm stops early.

---

### Another Example

    obj + 5 → 15

PreferredType = Number → valueOf() wins.

---

## 9. Objects with Custom toString()

---

### Example

    let obj = {
        toString() {
            return "hello";
        }
    };

    obj + "" → "hello"

PreferredType = String → toString() wins.

---

## 10. Both Methods Defined

Priority determined by PreferredType.

---

### Example

    let obj = {
        valueOf() { return 100; },
        toString() { return "hello"; }
    };

---

Arithmetic:

    obj - 1 → 99

valueOf() first.

---

String context:

    obj + "" → "hello"

toString() first.

---

## 11. When Both Fail (Rare but Important)

---

### Example

    let obj = {
        valueOf() { return {}; },
        toString() { return {}; }
    };

    obj + "" → TypeError

Because neither returned primitive.

---

## 12. Arrays Under OrdinaryToPrimitive

Arrays usually rely on:

✔ valueOf() → ignored  
✔ toString() → used

---

### Examples

    [1].valueOf() → [1]
    [1].toString() → "1"

---

## 13. Date Objects — Special Behavior

Dates prefer String conversion.

Even when PreferredType = Number-ish contexts.

---

### Example

    new Date() + ""

Uses:

    toString() FIRST

---

### Example

    new Date() - 0

Uses:

    valueOf() → timestamp number

Dates are exotic objects.

---

## 14. Tons of Practice Examples

Predict BEFORE checking answers.

---

### Basic Objects

    {} + ""
    {} - 1

---

### Arrays

    [] + ""
    [] - 1
    [5] - 1
    [1,2] - 1

---

### Custom valueOf

    let obj = { valueOf() { return 50; } };

    obj + 10
    obj * 2

---

### Custom toString

    let obj = { toString() { return "JS"; } };

    obj + ""
    obj - 1

---

## 15. Answers

---

### Basic Objects

    {} + "" → "[object Object]"
    {} - 1 → NaN

---

### Arrays

    [] + "" → ""
    [] - 1 → -1
    [5] - 1 → 4
    [1,2] - 1 → NaN

---

### Custom valueOf

    obj + 10 → 60
    obj * 2 → 100

---

### Custom toString

    obj + "" → "JS"
    obj - 1 → NaN

Because Number("JS") → NaN

---

## 16. Expert Mental Lock

OrdinaryToPrimitive is:

"valueOf vs toString decision engine"

Rules:

1. PreferredType decides priority
2. First primitive wins
3. Most objects → toString wins
4. Custom methods can override behavior
5. Dates are special

---

## 17. Final Master Insight

ALL object coercion reduces to:

✔ PreferredType  
✔ Method order  
✔ First primitive returned

No mystery remains once this is internalized.
