## Printing in JavaScript vs Nodejs

## 1. Printing using `console.log()`

`console.log()` is the **most common way** to print output in JavaScript.

Example:

    console.log("Hello");
    console.log("World");

Output:

    Hello
    World

Important observation:
- Every time you call `console.log()`
- The output is printed on a **new line**

---

## 2. Why does `console.log()` print on a new line?

`console.log()` is designed for:
- debugging
- readability
- logging information

Behind the scenes:
- Each `console.log()` call ends with a **line break**
- This makes logs easier to read

Mental model:
- One `console.log()` → one line

---

## 3. Printing multiple values using `console.log()`

Even when printing multiple values, everything appears on **one line** per call.

Example:

    console.log("Hello", "World");

Output:

    Hello World

But if you use `console.log()` again:

    console.log("Hello");
    console.log("World");

Output:

    Hello
    World

So:
- Same call → same line
- Multiple calls → multiple lines

---

## 4. Printing in the same line (Node.js way)

If you want to print **without moving to a new line**, `console.log()` is not enough.

In **Node.js**, we can use:

    process.stdout.write()

---

## 5. What is `process.stdout.write()`?

- `process` is a **global object** in Node.js
- `stdout` means **standard output**
- `write()` writes directly to the output stream

Unlike `console.log()`:
- It does **NOT** automatically add a new line

Example:

    process.stdout.write("Hello");
    process.stdout.write("World");

Output:

    HelloWorld

This is printed on the **same line**.

---

## 6. Printing with spaces and new lines manually

Since `process.stdout.write()` does not add a new line automatically, **you must handle it yourself**.

### Adding a space

    process.stdout.write("Hello ");
    process.stdout.write("World");

Output:

    Hello World

---

### Adding a new line manually

    process.stdout.write("Hello\n");
    process.stdout.write("World");

Output:

    Hello
    World

Here:
- `\n` means **new line character**

---

## 7. `console.log()` vs `process.stdout.write()`

### `console.log()`

- Automatically adds a new line
- Used mainly for debugging
- Works in both browser and Node.js

Example:

    console.log("Hello");

---

### `process.stdout.write()`

- Does NOT add a new line
- Used for precise output control
- Works **only in Node.js**

Example:

    process.stdout.write("Hello");

---

## 8. Browser vs Node.js (Very Important)

### In Browser JavaScript

- JavaScript runs inside the browser
- There is **no `process` object**
- Only browser APIs exist

If you try this in the browser:

    process.stdout.write("Hello");

You will get an error like:

    ReferenceError: process is not defined

---

### In Node.js

- JavaScript runs outside the browser
- Node.js provides extra APIs
- `process` is one of them

So this works perfectly in Node.js:

    process.stdout.write("Hello");

---

## 9. When should you use `process.stdout.write()`?

Use cases:
- Competitive programming
- CLI tools
- Printing progress indicators
- Printing without line breaks
- Low-level output control

Example (progress indicator):

    process.stdout.write("Loading...");
    // later
    process.stdout.write("Done");

---

## 10. Common Beginner Mistakes

- Trying to use `process.stdout.write()` in browser JavaScript
- Expecting `console.log()` to print on the same line
- Forgetting to add `\n` when using `process.stdout.write()`
- Confusing browser JS with Node.js JS
- Thinking `console.log()` and `process.stdout.write()` are the same

---

## 11. Points to Remember

- `console.log()` always prints a new line
- Multiple `console.log()` calls → multiple lines
- `process.stdout.write()` does NOT add a new line
- `process.stdout.write()` is **Node.js only**
- Browsers do NOT have `process`
- Use `\n` manually when needed
