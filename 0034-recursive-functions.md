## Recursive Functions

## 1. What is a Recursive Function?

A **recursive function** is a function that **calls itself**.

Simple definition:

> A recursive function solves a problem by calling itself with a smaller version of the same problem.

At first this sounds scary, but it follows very strict rules.

---

## 2. Why Does Recursion Exist?

Recursion exists because:
- some problems are naturally repetitive
- problems can be broken into smaller sub-problems
- code can be cleaner than loops in some cases

Common use cases:
- tree structures
- nested data
- mathematical problems
- divide-and-conquer algorithms

---

## 3. The Two Rules of Recursion (VERY IMPORTANT)

Every recursive function **must** have:

### Rule 1: Base Case  
A condition that stops recursion.

### Rule 2: Recursive Case  
A step where the function calls itself with a smaller input.

Without these two:
- recursion breaks
- infinite calls happen

---

## 4. Base Case (MOST IMPORTANT PART)

The **base case** tells the function:

> “Stop calling yourself.”

Example:

    function countdown(n) {
      if (n === 0) {
        return;
      }
      console.log(n);
      countdown(n - 1);
    }

Here:
- `n === 0` is the base case
- recursion stops when it reaches 0

Without base case → infinite recursion ❌

---

## 5. Recursive Case

The **recursive case** is where the function calls itself.

Example:

    countdown(n - 1);

Important:
- input gets smaller
- function moves closer to base case

Rule of thumb:
> Every recursive call must reduce the problem.

---

## 6. How Recursion Works Internally (Mental Model)

Recursion uses the **call stack**.

Example:

    countdown(3);

Call stack flow:
- countdown(3)
- countdown(2)
- countdown(1)
- countdown(0)

Then it unwinds back.

Mental model:
- function calls stack up
- base case stops calls
- stack clears backward

---

## 7. Simple Recursion Example (Factorial)

Factorial of `n`:

    n! = n * (n - 1)!

Code:

    function factorial(n) {
      if (n === 1) {
        return 1;
      }
      return n * factorial(n - 1);
    }

    factorial(4);

Execution:
- factorial(4)
- factorial(3)
- factorial(2)
- factorial(1)

Then returns:
- 1 → 2 → 6 → 24

---

## 8. Another Beginner Example (Sum of Numbers)

    function sum(n) {
      if (n === 0) {
        return 0;
      }
      return n + sum(n - 1);
    }

    sum(3);

Flow:
- 3 + sum(2)
- 2 + sum(1)
- 1 + sum(0)
- stop

Result: 6

---

## 9. Recursion vs Loop (Beginner View)

| Recursion | Loop |
|--------|------|
| Function calls itself | Repeats block |
| Uses call stack | Uses loop counter |
| Cleaner for nested logic | Better for simple repetition |
| Risk of stack overflow | Safer for large iterations |

Rule:
> If loop feels complicated, recursion may be simpler.

---

## 10. Common Beginner Mistakes

- Forgetting base case
- Base case never reached
- Not reducing the problem
- Confusing recursion with loop
- Expecting recursion to be faster
- Fear of recursion

---

## 11. Points to Remember

- Recursion is a function calling itself
- Base case is mandatory
- Recursive case must move toward base
- Call stack is involved
- Infinite recursion crashes program
- Practice with small examples first
- Think in terms of smaller problems
