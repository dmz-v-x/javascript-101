## Logical Operator

## 1. What are Logical Operators?

**Logical operators** are used to:
- combine conditions
- make decisions
- control program flow

They work mainly with **boolean logic** (`true` and `false`).

Example:

    age > 18 && isLoggedIn

---

## 2. Why are Logical Operators Important?

Logical operators are used everywhere:
- `if` conditions
- authentication checks
- form validations
- feature toggles
- decision making

Without logical operators, programs could not make choices.

---

## 3. Logical AND (`&&`)

The AND operator returns `true` **only if all conditions are true**.

Truth table:

    true  && true  → true
    true  && false → false
    false && true  → false
    false && false → false

---

### Basic example

    let age = 20;
    let hasID = true;

    age >= 18 && hasID;   // true

---

### AND with multiple conditions

    let score = 85;

    score > 80 && score < 90;   // true

---

## 4. Logical OR (`||`)

The OR operator returns `true` **if at least one condition is true**.

Truth table:

    true  || true  → true
    true  || false → true
    false || true  → true
    false || false → false

---

### Basic example

    let isAdmin = false;
    let isEditor = true;

    isAdmin || isEditor;   // true

---

### OR for default values (very common)

    let name = inputName || "Guest";

If `inputName` is falsy:
- `"Guest"` is used

---

## 5. Logical NOT (`!`)

The NOT operator **reverses** the boolean value.

Truth table:

    !true  → false
    !false → true

---

### Basic example

    let isLoggedIn = false;

    !isLoggedIn;   // true

---

### Double NOT (`!!`) – common trick

Used to convert any value to a boolean.

    !!"hello";   // true
    !!0;         // false
    !!null;      // false

---

## 6. Truthy and Falsy Values (Quick Intro)

JavaScript treats some values as `false` in conditions.

Falsy values:
- `false`
- `0`
- `-0`
- `""` (empty string)
- `null`
- `undefined`
- `NaN`

Everything else is **truthy**.

Example:

    if ("hello") {
      console.log("This runs");
    }

---

## 7. Short-Circuit Behavior (VERY IMPORTANT)

Logical operators **do not always evaluate both sides**.

---

### Short-circuit with AND (`&&`)

If the **first value is falsy**, JavaScript stops.

Example:

    false && console.log("This will NOT run");

Why?
- AND needs both sides to be true
- First is already false → no need to check further

---

### Short-circuit with OR (`||`)

If the **first value is truthy**, JavaScript stops.

Example:

    true || console.log("This will NOT run");

Why?
- OR needs only one true
- First is already true → stop

---

## 8. Logical Operators Return Values (Big Gotcha)

Logical operators do **NOT always return `true` or `false`**.

They return:
- the **actual operand value**

---

### AND (`&&`) return rule

- Returns the **first falsy value**
- Or the **last value** if all are truthy

Example:

    "hello" && 10 && true;   // true
    "hello" && 0 && true;    // 0

---

### OR (`||`) return rule

- Returns the **first truthy value**
- Or the **last value** if all are falsy

Example:

    "" || null || "JS";   // "JS"

---

## 9. Common Beginner Mistakes

- Confusing `&&` with `&`
- Confusing `||` with `|`
- Expecting logical operators to always return booleans
- Forgetting about short-circuiting
- Using `||` for defaults without understanding falsy values
- Overusing `!!` without knowing why

---

## 10. Gotchas and Points to Remember

- Logical operators work with truthy/falsy values
- They short-circuit
- They return operand values, not always booleans
- `&&` stops on first falsy value
- `||` stops on first truthy value
- `!` flips the boolean value
- Logical operators are different from bitwise operators
