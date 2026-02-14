## Statements and Expressions

## 1. What are Statements and Expressions?

When you write JavaScript code, everything you write is made up of:
- **expressions**
- **statements**

Understanding the difference between them is **very important**, because:
- JavaScript behaves differently for each
- Some places allow only expressions
- Some places allow statements

---

## 2. What is an Expression?

An **expression** is anything that **produces a value**.

Simple definition:

> If something can be evaluated to a value, it is an expression.

Examples:

    10
    "hello"
    true

All of the above are expressions because they represent values.

---

### Expressions can be complex

    10 + 5
    age > 18
    x * y

Each of these:
- gets evaluated
- produces a value

Example:

    10 + 5   // evaluates to 15

---

## 3. Expressions can be stored or passed

Because expressions produce values, they can be:
- stored in variables
- passed to functions
- returned from functions

Example:

    let sum = 10 + 20;

Here:
- `10 + 20` is an expression
- it evaluates to `30`
- `30` is stored in `sum`

---

## 4. What is a Statement?

A **statement** is an instruction that **performs an action**.

Simple definition:

> A statement tells JavaScript to do something.

Examples of actions:
- declare a variable
- run a loop
- make a decision
- define a function

---

### Examples of statements

    let x = 10;

    if (x > 5) {
      console.log("x is big");
    }

    for (let i = 0; i < 3; i++) {
      console.log(i);
    }

These lines:
- control the flow of the program
- do not directly produce a value

---

## 5. Core Difference: Expression vs Statement

| Expression | Statement |
|----------|-----------|
| Produces a value | Performs an action |
| Can be used inside other expressions | Cannot always be used inside expressions |
| Evaluates to something | Executes something |
| Example: `10 + 5` | Example: `if`, `for`, `let` |

Mental shortcut:
- Expression → value
- Statement → action

---

## 6. Examples of Expressions (Very Important)

Some common expressions:

    5
    "JS"
    true
    10 + 20
    x > y
    myFunction()
    arr[0]
    obj.name

Even function calls are expressions **if they return a value**.

Example:

    function add(a, b) {
      return a + b;
    }

    add(2, 3);  // expression → 5

---

## 7. Examples of Statements

Common statements:

    let age = 25;

    if (age > 18) {
      console.log("Adult");
    }

    while (age < 30) {
      age++;
    }

    function greet() {
      console.log("Hello");
    }

Statements:
- control flow
- structure your program

---

## 8. Expression Statements (Important Concept)

Sometimes, an **expression can be used as a statement**.

These are called **expression statements**.

Example:

    x = 10;

Here:
- `x = 10` is an expression (it evaluates to `10`)
- but when used alone, it becomes a statement

Another example:

    myFunction();

This is:
- a function call expression
- used as a statement

---

## 9. Statements Contain Expressions

Most statements **contain expressions inside them**.

Example:

    if (x > 10) {
      console.log(x + 1);
    }

Inside this:
- `x > 10` → expression
- `x + 1` → expression
- `if` → statement

So:
- statements are built using expressions

---

## 10. Where expressions are REQUIRED

Some places allow **only expressions**, not statements.

Example:

    let result = x > 10 ? "big" : "small";

Here:
- ternary operator requires expressions
- you cannot put `if` directly here

This will ❌ NOT work:

    let result = if (x > 10) { "big" } else { "small" };

---

## 11. Common Beginner Confusions

- Thinking everything is a statement
- Trying to use `if` where a value is expected
- Not realizing function calls are expressions
- Confusing assignment with declaration
- Assuming expressions must be simple

---

## 12. Gotchas and Points to Remember

- Expressions produce values
- Statements perform actions
- Some expressions can be used as statements
- Statements often contain expressions
- Not all statements return values
- JavaScript syntax depends on where expressions are allowed
