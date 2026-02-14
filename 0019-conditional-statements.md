## Conditional Statements

## 1. What are Conditional Statements?

**Conditional statements** allow a program to **make decisions**.

They tell JavaScript:

> “If something is true, do this.  
> Otherwise, do something else.”

Without conditional statements:
- programs would always run line by line
- no decision making would be possible

---

## 2. Why Do We Need Conditional Statements?

In real life, decisions are everywhere:

- If it’s raining → take an umbrella
- If score ≥ 50 → pass
- If user is logged in → show dashboard

Conditional statements allow JavaScript to handle **different situations**.

---

## 3. What is a Condition?

A **condition** is an expression that evaluates to:
- `true`
- `false`

Conditions are usually created using:
- comparison operators
- logical operators

Examples of conditions:

    age >= 18
    score > 50
    isLoggedIn === true

Important:
- JavaScript converts the condition result to a boolean
- truthy → treated as `true`
- falsy → treated as `false`

---

## 4. What is a Block?

A **block** is a group of statements wrapped inside **curly braces `{}`**.

Example:

    {
      console.log("Hello");
      console.log("World");
    }

Why blocks exist:
- group multiple statements
- execute them together
- control scope (important later)

---

## 5. Basic `if` Statement

The `if` statement runs code **only if the condition is true**.

### Syntax

    if (condition) {
      // code block
    }

---

### Example

    let age = 20;

    if (age >= 18) {
      console.log("You are an adult");
    }

Explanation:
- condition → `age >= 18`
- if condition is `true`
- block runs
- if condition is `false`
- block is skipped

---

## 6. `if...else` Statement

Used when you want to handle **both true and false cases**.

### Syntax

    if (condition) {
      // runs if condition is true
    } else {
      // runs if condition is false
    }

---

### Example

    let age = 15;

    if (age >= 18) {
      console.log("Adult");
    } else {
      console.log("Minor");
    }

Exactly **one block** will run.

---

## 7. `if...else if...else` Ladder

Used when there are **multiple conditions**.

### Syntax

    if (condition1) {
      // code
    } else if (condition2) {
      // code
    } else if (condition3) {
      // code
    } else {
      // default code
    }

---

### Example

    let score = 75;

    if (score >= 90) {
      console.log("Grade A");
    } else if (score >= 75) {
      console.log("Grade B");
    } else if (score >= 50) {
      console.log("Grade C");
    } else {
      console.log("Fail");
    }

How it works:
- conditions checked **top to bottom**
- first true condition runs
- rest are skipped

---

## 8. Nested Conditional Statements

A conditional statement **inside another conditional statement**.

Example:

    let age = 20;
    let hasID = true;

    if (age >= 18) {
      if (hasID) {
        console.log("Entry allowed");
      } else {
        console.log("ID required");
      }
    } else {
      console.log("Too young");
    }

Nested conditions:
- are valid
- but can reduce readability if overused

---

## 9. How JavaScript Evaluates Conditions

JavaScript converts the condition to a boolean.

Examples:

    if (1) { }          // runs (truthy)
    if (0) { }          // does not run (falsy)
    if ("hello") { }    // runs
    if ("") { }         // does not run

Falsy values:
- false
- 0
- -0
- ""
- null
- undefined
- NaN

Everything else is truthy.

---

## 10. Common Beginner Mistakes

- Using `=` instead of `==` or `===`
- Forgetting curly braces
- Assuming non-boolean values won’t work
- Writing deeply nested `if` blocks
- Forgetting `else` handles only one path
- Expecting multiple blocks to run

---

## 11. Gotchas and Points to Remember

- Conditions must evaluate to true or false
- Blocks are defined using `{ }`
- Only one block runs in `if...else`
- Order matters in `else if` ladder
- Use strict comparison (`===`)
- Keep conditions readable
- Avoid deep nesting when possible
