## Ternary Operator

## 1. What is the Ternary Operator?

The **ternary operator** is a **conditional operator**.

It is a **shorter way** to write simple `if...else` statements.

It works with **three parts**, that’s why it’s called *ternary*.

Simple definition:

> The ternary operator chooses one value based on a condition.

---

## 2. Why Do We Need the Ternary Operator?

Ternary operator helps:
- write concise code
- return values conditionally
- assign values based on conditions

It is especially useful when:
- a value depends on a condition
- you want to avoid long `if...else` blocks

---

## 3. Basic Syntax of Ternary Operator

General syntax:

    condition ? valueIfTrue : valueIfFalse;

Think of it like:

    if (condition) {
      return valueIfTrue;
    } else {
      return valueIfFalse;
    }

---

## 4. Simple Example

Using `if...else`:

    let age = 20;
    let result;

    if (age >= 18) {
      result = "Adult";
    } else {
      result = "Minor";
    }

Same using ternary:

    let age = 20;
    let result = age >= 18 ? "Adult" : "Minor";

Much shorter and cleaner.

---

## 5. Ternary is an Expression (Important)

The ternary operator is an **expression**, not a statement.

This means:
- it produces a value
- it can be stored in a variable
- it can be returned from a function

Example:

    let status = isLoggedIn ? "Welcome" : "Please login";

---

## 6. Ternary vs `if...else`

### Use `if...else` when:
- logic is complex
- multiple conditions exist
- readability matters more

### Use ternary when:
- logic is simple
- you’re choosing between two values
- code fits in one line

Bad ternary usage:

    isAdmin ? doA() : isEditor ? doB() : isUser ? doC() : doD();

This becomes hard to read.

---

## 7. Using Ternary with Variables

Example:

    let score = 75;

    let grade = score >= 50 ? "Pass" : "Fail";

---

### Using ternary with function return

    function getFee(isMember) {
      return isMember ? 100 : 200;
    }

---

## 8. Nested Ternary Operators

Ternary operators **can be nested**, but be careful.

Example:

    let score = 85;

    let grade =
      score >= 90 ? "A" :
      score >= 75 ? "B" :
      score >= 60 ? "C" :
      "D";

This works, but readability suffers.

Better alternative for complex logic:
- `if...else`
- `switch`

---

## 9. Ternary with Truthy and Falsy Values

Ternary uses **truthy/falsy evaluation**.

Example:

    let username = inputName ? inputName : "Guest";

If `inputName` is falsy:
- `"Guest"` is assigned

This is similar to logical OR, but more explicit.

---

## 10. Common Beginner Mistakes

- Forgetting `:` in ternary
- Confusing ternary with `if`
- Over-nesting ternary operators
- Using ternary for side effects
- Writing unreadable one-liners

---

## 11. Gotchas and Points to Remember

- Ternary has three parts: `condition ? trueValue : falseValue`
- It is an expression, not a statement
- Returns a value
- Can be nested, but avoid deep nesting
- Improves readability only when simple
- Use parentheses for clarity when needed

Example with parentheses:

    let result = (x > 10) ? "Big" : "Small";

---

## 12. When Should You Use the Ternary Operator?

Use ternary when:
- assigning a value conditionally
- returning a value conditionally
- logic is short and simple

Avoid ternary when:
- logic is complex
- many conditions exist
- readability suffers
