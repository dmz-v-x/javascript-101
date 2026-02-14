## Arrow Functions

## 1. What is an Arrow Function?

An **arrow function** is a **shorter and modern way** to write a function.

Simple definition:

> An arrow function is a compact syntax for writing function expressions.

It is **not a new type of behavior**, just a new syntax (with some differences we’ll see later).

---

## 2. Why Were Arrow Functions Introduced?

Arrow functions were introduced to:
- reduce boilerplate code
- make functions shorter
- improve readability
- handle `this` more predictably (advanced topic)

Example motivation:

    function add(a, b) {
      return a + b;
    }

Arrow version:

    const add = (a, b) => {
      return a + b;
    };

---

## 3. Basic Syntax of Arrow Functions

General syntax:

    const functionName = () => {
      // function body
    };

Parts explained:
- `const functionName` → variable
- `=` → assignment
- `()` → parameters
- `=>` → arrow
- `{}` → function body

Arrow functions are **always expressions**.

---

## 4. Simple Example

Arrow function:

    const greet = () => {
      console.log("Hello from arrow function");
    };

Calling it:

    greet();

Important:
- arrow functions are stored in variables
- you call them using the variable name

---

## 5. Arrow Functions with Parameters

### One parameter

Parentheses can be skipped:

    const square = x => {
      return x * x;
    };

---

### Multiple parameters

Parentheses are required:

    const add = (a, b) => {
      return a + b;
    };

---

### No parameters

Parentheses are required:

    const sayHi = () => {
      console.log("Hi");
    };

---

## 6. Implicit Return (VERY IMPORTANT)

Arrow functions can **automatically return a value**.

Example:

    const add = (a, b) => a + b;

This means:
- no `{}` needed
- no `return` keyword
- expression result is returned automatically

Equivalent to:

    const add = (a, b) => {
      return a + b;
    };

---

### Implicit return with single expression

    const double = x => x * 2;

---

### ⚠️ Object return gotcha

To return an object, use parentheses:

    const getUser = () => ({ name: "Asha", age: 25 });

Without parentheses, `{}` is treated as a block.

---

## 7. Arrow Functions vs Function Expressions

| Feature | Function Expression | Arrow Function |
|------|-------------------|---------------|
| Syntax | Longer | Shorter |
| Hoisting | No | No |
| `this` binding | Own `this` | No own `this` |
| `arguments` object | Available | Not available |
| Can be constructor | Yes | No |

(Advanced topics like `this` will be covered later.)

---

## 8. Limitations of Arrow Functions

Arrow functions:
- cannot be used as constructors
- do not have their own `this`
- do not have `arguments`
- are not hoisted

So they are **not replacements for all functions**.

---

## 9. Common Beginner Mistakes

- Forgetting parentheses for multiple parameters
- Confusing implicit return behavior
- Returning objects incorrectly
- Trying to use arrow function as constructor
- Assuming arrow functions are hoisted
- Overusing arrow functions everywhere

---

## 10. Points to Remember

- Arrow functions are function expressions
- They use `=>` syntax
- Shorter and cleaner syntax
- Implicit return is possible
- Parentheses matter
- Not hoisted
- Have some limitations
