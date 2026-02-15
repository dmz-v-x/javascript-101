## Blocks in JavaScript

## 1. What is a Block?

A **block** in JavaScript is simply:

> A group of statements wrapped inside curly braces `{}`.

Basic structure:

    {
      // block
    }

A block allows us to treat multiple lines of code as **one logical unit**.

---

## 2. Basic Block Syntax

Example:

    {
      console.log("Hello");
      console.log("World");
    }

Here:

- Curly braces define the block
- Statements inside belong to that block

Important:

> Curly braces do not execute code by themselves.  
> They only group code.

---

## 3. Why Do Blocks Exist?

Blocks exist to:

- Group related statements
- Control variable scope
- Define execution boundaries
- Improve readability

Mental model:

> Block = Container for code

Without blocks, controlling logic becomes difficult.

---

## 4. Blocks Help Control Logic

Example with condition:

    if (true) {
      console.log("Condition met");
      console.log("More logic");
    }

Here:

- Block ensures both statements run together
- Without braces, only one statement would belong to `if`

Example without block:

    if (true)
      console.log("Runs");
      console.log("Always runs"); // Not controlled by if

Classic beginner mistake.

---

## 5. Blocks and Variables (Very Important)

Blocks affect variables declared using:

- `let`
- `const`

Example:

    {
      let x = 10;
      console.log(x); // Works
    }

    console.log(x); // Error

Why?

Because:

> `let` and `const` are block-scoped.

---

## 6. Block Scope Explained

Variables declared inside a block:

✔ Exist inside the block  
✔ Cannot be accessed outside  

Example:

    if (true) {
      const name = "Asha";
    }

    console.log(name); // Error

This prevents accidental variable leaks.

---

## 7. Blocks vs var (Critical Difference)

Example:

    {
      var x = 10;
    }

    console.log(x); // Works

Why?

Because:

> `var` is NOT block-scoped.

It is function-scoped.

This difference is a major source of confusion.

---

## 8. Blocks vs Functions

Blocks group statements.

Functions:

- Create blocks
- Create scopes
- Delay execution

Example:

    function test() {
      // function block
    }

Important distinction:

> Every function has a block,  
> but not every block is a function.

---

## 9. Blocks Improve Readability

Blocks help organize code.

Example:

    {
      // Validation logic
    }

    {
      // Calculation logic
    }

Even when not required, blocks can structure thinking.

---

## 10. Common Beginner Confusions

- Thinking blocks execute code automatically
- Confusing block scope with function scope
- Assuming `var` respects block boundaries
- Forgetting braces in conditionals
- Misunderstanding variable lifetime

---

## 11. Points to Remember

- Blocks are defined using `{ }`
- Blocks group statements
- Blocks do not execute code by themselves
- `let` and `const` are block-scoped
- `var` ignores block scope
- Blocks control logic execution
- Blocks improve readability
