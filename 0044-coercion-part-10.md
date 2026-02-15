## ToPrimitive Abstract Operation

## 1. ToPrimitive Algorithm — The Core of JavaScript Coercion

ToPrimitive is the **most important coercion mechanism** in JavaScript.

Why?

Because every strange behavior involving:

- Arrays
- Objects
- Equality (==)
- Arithmetic
- + Operator

…eventually passes through **ToPrimitive**.

If you master this, coercion stops feeling magical.

---

## 2. Core Purpose of ToPrimitive

JavaScript sometimes needs a **primitive value**:

Primitive types:

- number
- string
- boolean
- null
- undefined
- symbol
- bigint

Objects are NOT primitives.

So JavaScript asks:

"How do I convert this object into a primitive?"

That process = **ToPrimitive**

---

## 3. When ToPrimitive Gets Triggered

Very important.

ToPrimitive runs when:

✔ Object compared with primitive  
✔ Object used in arithmetic  
✔ Object used with +  
✔ Object used in relational comparisons

---

### Example Triggers

    [] + ""
    [] == 0
    {} + ""
    [1] * 2
    obj == "value"

All invoke ToPrimitive.

---

## 4. High-Level Algorithm

Spec simplified into mental model:

---

### Step 1 — Does object have Symbol.toPrimitive?

If YES → Use it

If NO → Continue

---

### Step 2 — Use OrdinaryToPrimitive

This invokes:

1. valueOf()
2. toString()

Order depends on PreferredType.

---

## 5. PreferredType Concept (CRITICAL)

ToPrimitive may request:

- String conversion
- Number conversion

This affects method order.

---

### PreferredType = Number (Most Common)

Order:

1. valueOf()
2. toString()

---

### PreferredType = String

Order:

1. toString()
2. valueOf()

---

### Who Decides PreferredType?

Operator decides.

Examples:

Arithmetic → Number  
String concatenation → String  
== → Depends on comparison  
Date → Special case (String preferred)

---

## 6. OrdinaryToPrimitive — Detailed Mechanics

For most objects:

If PreferredType = Number:

    valueOf() → primitive? return  
    else → toString()

---

If PreferredType = String:

    toString() → primitive? return  
    else → valueOf()

---

## 7. Default Behaviors (Must Memorize)

---

### Arrays

    [].toString() → ""
    [1,2].toString() → "1,2"

---

### Objects

    {}.toString() → "[object Object]"

---

## 8. Example Walkthroughs (Step-by-Step)

---

## Example 1 — [] + ""

Expression:

    [] + ""

---

Step 1 → Object + String → String context  
Step 2 → ToPrimitive([] , String)

PreferredType = String

Order:

1. toString()

    [].toString() → ""

Result:

    "" + "" → ""

---

## Example 2 — [] == 0

Expression:

    [] == 0

---

Step 1 → Object vs Number  
Step 2 → ToPrimitive([] , Number)

PreferredType = Number

Order:

1. valueOf()

    [].valueOf() → [] (NOT primitive)

2. toString()

    [].toString() → ""

Step 3 → "" == 0  
Step 4 → Number("") → 0  
Step 5 → 0 == 0 → true

---

## Example 3 — [1] == 1

---

Step 1 → Object vs Number  
Step 2 → ToPrimitive([1], Number)

valueOf():

    [1] → NOT primitive

toString():

    "1"

Comparison:

    "1" == 1 → true

---

## Example 4 — [1,2] == "1,2"

---

ToPrimitive([1,2]):

    "1,2"

Comparison:

    "1,2" == "1,2" → true

---

## Example 5 — {} == "[object Object]"

---

ToPrimitive({}):

    "[object Object]"

Comparison:

    true

---

## 9. Critical valueOf vs toString Insight

Most built-in objects:

- valueOf() → returns object (useless)
- toString() → returns primitive (used)

---

### Example

    [].valueOf() → []
    [].toString() → ""

---

    {}.valueOf() → {}
    {}.toString() → "[object Object]"

---

## 10. Major Gotchas (Interview Gold)

---

### Gotcha 1

    [] + [] → ""

Because:

    "" + ""

---

### Gotcha 2

    [] + {} → "[object Object]"

Because:

    "" + "[object Object]"

---

### Gotcha 3

    {} + [] → 0

Parsing quirk:

Interpreted as block + expression.

---

### Gotcha 4

    [] == ![]

Step:

    ![] → false  
    [] == false

false → 0  
[] → "" → 0

Result → true

---

### Gotcha 5

    [null] == 0 → true

Because:

    [null] → ""  
    "" → 0

---

### Gotcha 6

    [undefined] == 0 → true

Same logic.

---

## 11. Date Object — Special Case

Date prefers String conversion.

---

### Example

    new Date() + ""

Uses:

    toString() FIRST

Not valueOf()

---

## 12. Symbol.toPrimitive (Advanced but Important)

Objects can override conversion.

---

### Example

    let obj = {
        [Symbol.toPrimitive]() {
            return 42;
        }
    };

    obj + 1 → 43

Overrides entire algorithm.

---

## 13. Tons of Practice Examples

Predict BEFORE checking answers.

---

### Arrays

    [] + 1
    [] - 1
    [2] * 3
    [1,2] + 3

---

### Objects

    {} + ""
    {} == "[object Object]"
    {} - 1

---

### Mixed

    [] == ""
    [] == false
    [0] == 0
    [0] == false

---

## 14. Answers

---

### Arrays

    [] + 1 → "1"
    [] - 1 → -1
    [2] * 3 → 6
    [1,2] + 3 → "1,23"

---

### Objects

    {} + "" → "[object Object]"
    {} == "[object Object]" → true
    {} - 1 → NaN

---

### Mixed

    [] == "" → true
    [] == false → true
    [0] == 0 → true
    [0] == false → true

---

## 15. Expert Mental Lock

Whenever you see object in coercion:

Step 1 → ToPrimitive  
Step 2 → valueOf / toString  
Step 3 → Continue coercion chain

Almost all weirdness = predictable conversion chains.

---

## 16. Final Master Insight

JavaScript is NEVER confused.

It always follows:

✔ ToPrimitive  
✔ Then ToNumber / ToString / ToBoolean

Weirdness = developer intuition mismatch.
