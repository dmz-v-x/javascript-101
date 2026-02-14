## `typeOf` Operator

## 1. What is the `typeof` operator?

`typeof` is a **JavaScript operator** used to find the **type of a value**.

Important:
- `typeof` does **NOT** return the value’s type itself
- It returns a **string** describing the type

Example:

    typeof 12;

Output:

    "number"

So:

> `typeof` → always returns a **string**

---

## 2. What does `typeof` actually return?

`typeof` returns a **string** that describes the data type of the value.

Examples:

    typeof 10;          // "number"
    typeof true;        // "boolean"
    typeof "hello";     // "string"

Even though these look like types, they are actually **strings**.

Example:

    let result = typeof 10;
    console.log(result);
    console.log(typeof result);

Output:
- number
- string

---

## 3. `typeof` with Numbers

JavaScript has **only one number type**.

Examples:

    typeof 12;          // "number"
    typeof 3.14;        // "number"
    typeof -10;         // "number"

Special number values:

    typeof Infinity;    // "number"
    typeof -Infinity;   // "number"

---

## 4. `typeof NaN`

`NaN` means **Not a Number**, but this is confusing.

Example:

    typeof NaN;         // "number"

Why?
- `NaN` represents an **invalid numeric result**
- It still belongs to the number type

Example:

    0 / 0;              // NaN
    typeof (0 / 0);     // "number"

Important gotcha:
- `NaN` is **not equal to itself**

    NaN === NaN;        // false

Correct way to check NaN:

    Number.isNaN(NaN);  // true

---

## 5. `typeof` with Booleans

Boolean values:

    typeof true;        // "boolean"
    typeof false;       // "boolean"

Used mainly in conditions and logic.

---

## 6. `typeof` with Strings

Strings created using:
- double quotes
- single quotes
- backticks

Examples:

    typeof "hello";     // "string"
    typeof 'hi';        // "string"
    typeof `hey`;       // "string"

Even template literals still produce strings.

---

## 7. `typeof undefined`

Example:

    let x;
    typeof x;           // "undefined"

Also:

    typeof undefined;   // "undefined"

Meaning:
- variable exists
- no value assigned

This is **normal and expected behavior**.

---

## 8. `typeof null` (Very Important)

Example:

    typeof null;        // "object"

This is **wrong**, but intentional.

Why does this happen?
- This is a **historical bug** in JavaScript
- It exists for backward compatibility
- It will never be fixed

Important facts:
- `null` is a **primitive**
- `typeof null` returning `"object"` is incorrect

Correct way to check for null:

    value === null;

Never rely on `typeof` to detect `null`.

---

## 9. `typeof` with Objects

Examples:

    typeof {};          // "object"
    typeof [];          // "object"
    typeof new Date();  // "object"

Arrays are objects:

    Array.isArray([]);  // true

---

## 10. `typeof` with Functions

Functions are special objects.

Example:

    typeof function () {};   // "function"

This is the **only case** where `typeof` returns `"function"`.

Very useful for checking callbacks.

---

## 11. `typeof` with Symbols and BigInt

Symbols:

    typeof Symbol("id");     // "symbol"

BigInt:

    typeof 10n;              // "bigint"

---

## 12. Summary Table (Very Important)

Value → `typeof` result

    10              → "number"
    NaN             → "number"
    true            → "boolean"
    "hello"         → "string"
    undefined       → "undefined"
    null            → "object" ❌ (bug)
    {}              → "object"
    []              → "object"
    function() {}   → "function"
    Symbol()        → "symbol"
    10n             → "bigint"

---

## 13. Common Beginner Mistakes

- Thinking `typeof` returns a type instead of a string
- Using `typeof null` to detect null
- Assuming arrays are not objects
- Assuming `NaN` is not a number
- Using `typeof` to detect arrays

---

## 14. When to Use `typeof`

Good use cases:
- Checking primitives
- Checking if something is a function
- Debugging unknown values

Bad use cases:
- Checking for `null`
- Checking for arrays
- Deep type checking

---

## 15. Points to Remember

- `typeof` always returns a **string**
- `typeof null === "object"` is a bug
- `NaN` is still a number
- Arrays are objects
- Functions are callable objects
- Use strict comparisons where possible
