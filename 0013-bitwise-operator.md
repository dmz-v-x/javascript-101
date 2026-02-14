## Bitwise Operator

## 1. What are Bitwise Operators?

**Bitwise operators** work on the **binary representation** of numbers.

Instead of working with:
- whole numbers like `5`, `10`, `20`

They work with:
- **bits** (`0` and `1`) inside those numbers

So:

> Bitwise operators operate at the **bit level**, not the value level.

---

## 2. What is a Bit?

A **bit** is the smallest unit of data in a computer.

It can be:
- `0`
- `1`

Computers store numbers in **binary (base-2)**.

Example:

    Decimal: 5
    Binary:  101

Example:

    Decimal: 10
    Binary:  1010

---

## 3. How JavaScript Handles Bitwise Operations

Important rule:

> JavaScript converts numbers to **32-bit signed integers** before applying bitwise operators.

This means:
- decimals are removed
- numbers are converted to binary
- operation is performed
- result is converted back to decimal

This explains many weird behaviors later.

---

## 4. List of Bitwise Operators in JavaScript

| Operator | Name |
|--------|------|
| `&` | Bitwise AND |
| `|` | Bitwise OR |
| `^` | Bitwise XOR |
| `~` | Bitwise NOT |
| `<<` | Left shift |
| `>>` | Right shift |
| `>>>` | Zero-fill right shift |

---

## 5. Bitwise AND (`&`)

AND returns `1` **only if both bits are 1**.

Truth table:

    1 & 1 → 1
    1 & 0 → 0
    0 & 1 → 0
    0 & 0 → 0

Example:

    5 & 3

Binary:
- 5 → 101
- 3 → 011

Result:
- 001 → 1

So:

    5 & 3;   // 1

---

## 6. Bitwise OR (`|`)

OR returns `1` if **any one bit is 1**.

Truth table:

    1 | 1 → 1
    1 | 0 → 1
    0 | 1 → 1
    0 | 0 → 0

Example:

    5 | 3

Binary:
- 101
- 011

Result:
- 111 → 7

So:

    5 | 3;   // 7

---

## 7. Bitwise XOR (`^`)

XOR returns `1` **only if bits are different**.

Truth table:

    1 ^ 1 → 0
    1 ^ 0 → 1
    0 ^ 1 → 1
    0 ^ 0 → 0

Example:

    5 ^ 3

Binary:
- 101
- 011

Result:
- 110 → 6

So:

    5 ^ 3;   // 6

---

## 8. Bitwise NOT (`~`)

NOT flips every bit.

Rule:
- `1` becomes `0`
- `0` becomes `1`

Example:

    ~5

Binary (32-bit):
- 00000000 00000000 00000000 00000101

After NOT:
- 11111111 11111111 11111111 11111010

Result:
- `-6`

So:

    ~5;   // -6

Why negative?
- JavaScript uses **two’s complement** for signed integers

Shortcut rule:

    ~n === -(n + 1)

---

## 9. Left Shift (`<<`)

Left shift moves bits to the **left**.

Rule:
- shifting left by 1 → multiply by 2

Example:

    5 << 1

Binary:
- 101 → 1010

Result:
- 10

So:

    5 << 1;   // 10

---

### Multiple shifts

    5 << 2;   // 20

---

## 10. Right Shift (`>>`)

Right shift moves bits to the **right**, keeping the sign.

Rule:
- shifting right by 1 → divide by 2 (floor)

Example:

    10 >> 1

Binary:
- 1010 → 0101

Result:
- 5

So:

    10 >> 1;   // 5

---

## 11. Zero-fill Right Shift (`>>>`)

This is different from `>>`.

- Always fills left bits with `0`
- Treats number as **unsigned**

Example:

    -5 >>> 1;

Result:
- Large positive number

Why?
- Sign bit is ignored
- Zeros are filled on the left

This operator is **rarely used** by beginners.

---

## 12. Common Beginner Mistakes

- Confusing logical operators (`&&`, `||`) with bitwise (`&`, `|`)
- Expecting bitwise operators to work with booleans
- Forgetting JavaScript converts to 32-bit integers
- Using bitwise operators for normal math
- Getting confused by negative results

---

## 13. Gotchas and Points to Remember

- Bitwise operators work on **binary**
- JavaScript converts numbers to **32-bit signed integers**
- Decimals are truncated
- `~` produces negative numbers often
- `&` and `|` are NOT logical operators
- Bitwise ops are rarely needed in daily JS

---

## 14. When Should You Use Bitwise Operators?

Good use cases:
- Low-level optimizations
- Flags and masks
- Performance-critical code
- Certain algorithms

Avoid if:
- You’re writing normal business logic
- Code readability matters more
- You don’t fully understand the bit behavior
