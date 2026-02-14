## Loops

## 1. What are Loops?

**Loops** are used to **repeat a block of code multiple times**.

Simple definition:

> A loop allows us to run the same code again and again until a condition is met.

Without loops:
- we would repeat code manually
- programs would be longer and harder to maintain

---

## 2. Why Do We Need Loops?

Loops are used when:
- you want to repeat an action
- the number of repetitions is known or unknown
- working with arrays or data collections

Real-life example:
- Print numbers from 1 to 10
- Process each item in a list
- Keep asking user input until valid

---

## 3. What is Iteration?

**Iteration** means:
- one cycle of a loop
- one execution of the loop body

Example:
- Loop runs 5 times
- That means 5 iterations

Mental model:
- Loop = wheel
- Iteration = one full turn of the wheel

---

## 4. Parts of a Loop (Very Important)

Most loops have these parts:

1. **Initialization** – starting point
2. **Condition** – decides whether loop continues
3. **Update** – changes loop state
4. **Body** – code that runs each iteration

Understanding these parts helps avoid infinite loops.

---

## 5. `for` Loop

The `for` loop is used when:
- number of iterations is known

### Syntax

    for (initialization; condition; update) {
      // loop body
    }

---

### Example

    for (let i = 1; i <= 5; i++) {
      console.log(i);
    }

Explanation:
- `let i = 1` → initialization
- `i <= 5` → condition
- `i++` → update
- loop runs while condition is true

---

### Flow of `for` loop

1. Initialization (once)
2. Condition check
3. Body executes
4. Update
5. Repeat from step 2

---

## 6. `while` Loop

The `while` loop runs **as long as the condition is true**.

### Syntax

    while (condition) {
      // loop body
    }

---

### Example

    let i = 1;

    while (i <= 5) {
      console.log(i);
      i++;
    }

Important:
- Initialization happens **before** the loop
- Update happens **inside** the loop

---

### When to use `while`

- When number of iterations is unknown
- When loop depends on a condition

---

## 7. `do...while` Loop

The `do...while` loop runs the block **at least once**, even if condition is false.

### Syntax

    do {
      // loop body
    } while (condition);

---

### Example

    let i = 10;

    do {
      console.log(i);
      i++;
    } while (i < 5);

Output:
- 10

Why?
- Condition is checked **after** the loop body

---

## 8. `break` Statement

`break` is used to **stop the loop completely**.

Example:

    for (let i = 1; i <= 10; i++) {
      if (i === 5) {
        break;
      }
      console.log(i);
    }

Output:
- 1 2 3 4

---

## 9. `continue` Statement

`continue` skips the **current iteration** and moves to the next one.

Example:

    for (let i = 1; i <= 5; i++) {
      if (i === 3) {
        continue;
      }
      console.log(i);
    }

Output:
- 1 2 4 5

---

## 10. Infinite Loops (Be Careful)

An **infinite loop** runs forever.

Example:

    while (true) {
      console.log("Hello");
    }

Causes:
- condition never becomes false
- missing update step

Infinite loops:
- freeze programs
- crash browsers
- consume CPU

---

## 11. Common Beginner Mistakes

- Forgetting update step
- Writing wrong condition
- Using `=` instead of comparison
- Creating infinite loops accidentally
- Misplacing `break` and `continue`
- Modifying loop variable incorrectly

---

## 12. Gotchas and Points to Remember

- Always ensure loop condition can become false
- Understand loop flow clearly
- Prefer `for` when count is known
- Prefer `while` when count is unknown
- `do...while` runs at least once
- Use `break` carefully
- Use `continue` sparingly
