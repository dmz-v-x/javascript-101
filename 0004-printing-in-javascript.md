## Printing in JavaScript

## 1. What does “printing” mean in JavaScript?

In JavaScript, **printing does NOT mean printing on paper**.

Printing means:
- showing output
- displaying values
- checking what your code is doing

As a beginner, printing is mainly used for:
- learning
- debugging
- understanding variables and logic

---

## 2. Printing in the Browser Console (`console.log`)

This is the **most important and most used** way of printing in JavaScript.

It prints output to the **browser’s developer console**.

Example:

    console.log("Hello World");

Where do you see this?
- Open browser
- Press `F12`
- Go to the **Console** tab

---

### Printing numbers and variables

    let age = 25;
    console.log(age);

    let name = "Asha";
    console.log(name);

---

### Printing multiple values (same line)

    let city = "Delhi";
    let year = 2026;

    console.log(city, year);

Output:
- Delhi 2026

👉 `console.log` automatically prints **space-separated values on the same line**.

---

## 3. Printing in the Same Line (Console)

JavaScript prints everything inside **one `console.log()` call on the same line**.

Examples:

    console.log("Hello", "World");

    console.log("My age is", 25);

    console.log(10, 20, 30);

Output:
- Hello World
- My age is 25
- 10 20 30

---

### Using string concatenation

    console.log("Hello " + "World");

    console.log("Age: " + 25);

---

### Using template literals (recommended)

    let name = "Ravi";
    let age = 22;

    console.log(`My name is ${name} and I am ${age} years old`);

---

## 4. Printing in Different Lines (Console)

There are multiple ways to print in **different lines**.

---

### a) Multiple `console.log` statements

    console.log("Line 1");
    console.log("Line 2");
    console.log("Line 3");

Each `console.log` creates a **new line**.

---

### b) New line using `\n`

    console.log("Line 1\nLine 2\nLine 3");

`\n` means **new line character**.

---

### c) Template literals with line breaks

    console.log(`
    Line 1
    Line 2
    Line 3
    `);

This is very readable and beginner-friendly.

---

## 5. Printing on the Web Page (DOM)

Sometimes you want to **show output on the page**, not just in the console.

Example HTML:

    <p id="output"></p>

JavaScript:

    document.getElementById("output").textContent = "Hello from JavaScript";

---

### Printing multiple values on page

    let a = 10;
    let b = 20;

    document.getElementById("output").textContent = a + " " + b;

---

### Printing on different lines (HTML)

    document.getElementById("output").innerHTML = "Line 1<br>Line 2<br>Line 3";

⚠️ `innerHTML` understands HTML tags like `<br>`.

---

## 6. Printing Using `alert()`

`alert()` shows a **popup message**.

Example:

    alert("Hello!");

---

### Printing values in alert

    let score = 90;
    alert("Your score is " + score);

---

### New lines in alert

    alert("Line 1\nLine 2\nLine 3");

⚠️ Alerts are **blocking** and annoying if overused.  
Use them sparingly.

---

## 7. Printing Arrays and Objects

Printing arrays:

    let numbers = [1, 2, 3, 4];
    console.log(numbers);

Printing objects:

    let user = {
      name: "Asha",
      age: 25
    };

    console.log(user);

---

### Pretty printing objects (advanced but useful)

    console.log(JSON.stringify(user, null, 2));

This prints objects in a readable format.

---

## 8. Common Beginner Mistakes

- Expecting `console.log` to show output on the page
- Forgetting to open the browser console
- Using `alert()` for everything
- Confusing `textContent` and `innerHTML`
- Thinking `print` exists like in Python (it doesn’t)

---

## 9. When to Use Which Printing Method?

- **Learning & debugging** → `console.log`
- **User-visible output** → DOM (`textContent`, `innerHTML`)
- **Quick attention message** → `alert()`
- **Checking objects & arrays** → `console.log`
