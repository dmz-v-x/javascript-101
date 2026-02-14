## Arithmetic Operators

## 1. What are Arithmetic Operators?

**Arithmetic operators** are operators used to perform **mathematical calculations**.

They allow JavaScript to:
- add values
- subtract values
- multiply values
- divide values
- work with numbers

Without arithmetic operators, JavaScript would not be able to do basic math.

---

## 2. Why are Arithmetic Operators Important?

Arithmetic operators are used everywhere:
- calculating totals
- counting items
- updating scores
- looping logic
- building real-world applications

Example:

    let totalPrice = price * quantity;

---

## 3. List of Arithmetic Operators in JavaScript

| Operator | Meaning |
|--------|--------|
| `+` | Addition |
| `-` | Subtraction |
| `*` | Multiplication |
| `/` | Division |
| `%` | Modulus (remainder) |
| `**` | Exponentiation |
| `++` | Increment |
| `--` | Decrement |

---

## 4. Addition Operator (`+`)

Used to add numbers.

Example:

    let a = 10;
    let b = 20;
    let sum = a + b;

Result:
- `sum` → 30

---

### Addition with variables

    let x = 5;
    let y = 3;
    console.log(x + y);  // 8

---

### ⚠️ Important: `+` with strings

If **any operand is a string**, `+` becomes a **concatenation operator**.

Example:

    10 + "5";     // "105"
    "10" + 5;     // "105"
    "10" + "5";   // "105"

This is one of the **biggest beginner traps**.

---

## 5. Subtraction Operator (`-`)

Used to subtract numbers.

Example:

    let result = 10 - 5;
    console.log(result);  // 5

---

### Subtraction with strings

Unlike `+`, subtraction **forces numeric conversion**.

Example:

    "10" - 5;   // 5
    10 - "5";   // 5

If conversion fails:

    "a" - 5;    // NaN

---

## 6. Multiplication Operator (`*`)

Used to multiply numbers.

Example:

    let area = 5 * 4;
    console.log(area);  // 20

---

### Multiplication with strings

    "10" * 2;   // 20
    "a" * 2;    // NaN

JavaScript tries to convert strings into numbers.

---

## 7. Division Operator (`/`)

Used to divide numbers.

Example:

    let result = 10 / 2;
    console.log(result);  // 5

---

### Division edge cases

    10 / 0;    // Infinity
    -10 / 0;   // -Infinity
    0 / 0;     // NaN

These values exist because JavaScript follows IEEE-754 rules.

---

## 8. Modulus Operator (`%`)

Returns the **remainder** after division.

Example:

    10 % 3;   // 1
    8 % 2;    // 0

Common use cases:
- checking even/odd
- repeating cycles

Example:

    10 % 2 === 0;  // even

---

### Modulus with negative numbers

    -10 % 3;   // -1

Gotcha:
- Result keeps the **sign of the first number**

---

## 9. Exponentiation Operator (`**`)

Used for power calculations.

Example:

    2 ** 3;   // 8
    5 ** 2;   // 25

Equivalent to:

    Math.pow(2, 3);

---

## 10. Increment Operator (`++`)

Used to increase a value by 1.

Example:

    let count = 0;
    count++;

Now:
- `count` → 1

---

### Pre-increment vs Post-increment

Post-increment:

    let x = 5;
    let y = x++;

Result:
- x → 6
- y → 5

Pre-increment:

    let x = 5;
    let y = ++x;

Result:
- x → 6
- y → 6

---

## 11. Decrement Operator (`--`)

Used to decrease a value by 1.

Example:

    let count = 5;
    count--;

Now:
- `count` → 4

Same pre/post rules apply.

---

## 12. Operator Precedence (Quick Intro)

Some operators run **before others**.

Example:

    10 + 5 * 2;   // 20

Why?
- `*` has higher precedence than `+`

Use parentheses to control order:

    (10 + 5) * 2; // 30

---

## 13. Common Beginner Mistakes

- Using `+` expecting numeric addition with strings
- Forgetting division by zero edge cases
- Confusing `%` with percentage
- Misunderstanding pre vs post increment
- Ignoring operator precedence
- Assuming `"10" + 1` equals `11`

---

## 14. Points to Remember

- Arithmetic operators work mainly with numbers
- `+` is both addition and concatenation
- Other operators force numeric conversion
- `%` gives remainder, not percentage
- `++` and `--` modify the variable directly
- Use parentheses for clarity
- Watch out for implicit type coercion
