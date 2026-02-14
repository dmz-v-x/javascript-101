## Switch Case

## 1. What is the `switch` Statement?

The `switch` statement is a **conditional statement** used to run **different blocks of code** based on the value of an expression.

Simple definition:

> `switch` checks one value against multiple possible values and runs the matching block.

It is an alternative to writing **long `if...else if...else` chains**.

---

## 2. Why Do We Need `switch`?

`switch` is useful when:
- you are comparing the **same variable**
- against many fixed values
- and want cleaner, more readable code

Example situation:
- days of the week
- menu options
- user roles
- status codes

---

## 3. Basic Syntax of `switch`

General syntax:

    switch (expression) {
      case value1:
        // code
        break;
      case value2:
        // code
        break;
      default:
        // code
    }

Key parts:
- `switch` → keyword
- `expression` → value to compare
- `case` → possible match
- `break` → stops execution
- `default` → runs if no case matches

---

## 4. Simple `switch` Example

Example:

    let day = 3;

    switch (day) {
      case 1:
        console.log("Monday");
        break;
      case 2:
        console.log("Tuesday");
        break;
      case 3:
        console.log("Wednesday");
        break;
      default:
        console.log("Invalid day");
    }

Explanation:
- `day` is compared with each `case`
- matching case runs
- `break` stops further execution

---

## 5. What is a `case`?

A `case` represents a **possible value** of the expression.

Example:

    case 3:

Means:
- “If the switch expression equals `3`, run this block”

Important:
- comparison is done using **strict equality (`===`)**
- no type coercion happens

Example:

    switch (5) {
      case "5":
        console.log("Matched");
        break;
      default:
        console.log("No match");
    }

Output:
- No match

Because:
- `5 !== "5"`

---

## 6. What is `break` and Why It Is Important?

`break` stops the execution of the `switch` block.

Without `break`, JavaScript continues executing the next cases.

Example:

    let x = 1;

    switch (x) {
      case 1:
        console.log("One");
      case 2:
        console.log("Two");
      case 3:
        console.log("Three");
    }

Output:

    One
    Two
    Three

This happens because there is **no `break`**.

---

## 7. Fallthrough Behavior (VERY IMPORTANT)

This behavior is called **fallthrough**.

Fallthrough means:
- once a case matches
- all following cases run
- until a `break` is found

Sometimes fallthrough is **intentional**.

Example:

    let grade = "B";

    switch (grade) {
      case "A":
      case "B":
      case "C":
        console.log("Pass");
        break;
      case "D":
        console.log("Fail");
        break;
    }

Here:
- `"A"`, `"B"`, and `"C"` all mean pass

---

## 8. What is `default`?

`default` runs when **no case matches**.

Example:

    let fruit = "apple";

    switch (fruit) {
      case "banana":
        console.log("Yellow");
        break;
      case "orange":
        console.log("Orange");
        break;
      default:
        console.log("Unknown fruit");
    }

`default` is:
- optional
- similar to `else` in `if...else`

---

## 9. How `switch` Executes (Flow)

Execution steps:
1. Evaluate the expression once
2. Compare with each `case` using `===`
3. When match is found:
   - execute code
   - continue until `break` or end
4. If no match:
   - execute `default` (if present)

---

## 10. `switch` vs `if...else`

### Use `switch` when:
- comparing one variable
- against many fixed values
- readability improves

### Use `if...else` when:
- conditions are complex
- ranges are involved
- logical expressions are needed

Example better for `if...else`:

    if (score > 90) { }
    else if (score > 75) { }

---

## 11. Common Beginner Mistakes

- Forgetting `break`
- Expecting type coercion
- Using `switch` for ranges
- Writing complex logic inside cases
- Forgetting `default`
- Confusing fallthrough behavior

---

## 12. Gotchas and Points to Remember

- `switch` uses strict equality (`===`)
- No automatic type conversion
- `break` is crucial
- Fallthrough is real and dangerous if accidental
- `default` handles unmatched cases
- Use `switch` for clarity, not complexity
