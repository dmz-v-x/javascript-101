## Generator Functions

## 1. What is a Generator Function?

A **generator function** is a special kind of function that:
- can pause its execution
- can resume later
- produces values one at a time

Simple definition:

> A generator function is a function that can stop and continue its execution using `yield`.

This is **very different** from normal functions.

---

## 2. Why Do Generator Functions Exist?

Normal functions:
- start execution
- run completely
- return once
- then finish forever

Generator functions exist to:
- produce values lazily (one by one)
- pause execution in between
- handle large or infinite sequences
- control execution flow manually

---

## 3. Generator Function Syntax

A generator function is defined using `function*`.

Basic syntax:

    function* generatorName() {
      // code
    }

Notice:
- the `*` (asterisk) makes it a generator
- without `*`, it is a normal function

---

## 4. Simple Generator Example

Example:

    function* numbers() {
      yield 1;
      yield 2;
      yield 3;
    }

Calling the generator:

    const gen = numbers();

Important:
- calling a generator function does NOT run it
- it returns a **generator object**

---

## 5. The `yield` Keyword (MOST IMPORTANT)

`yield`:
- pauses the function
- returns a value
- remembers the state

Example:

    function* demo() {
      console.log("Start");
      yield 1;
      console.log("Middle");
      yield 2;
      console.log("End");
    }

Generator execution:
- runs until first `yield`
- pauses
- resumes from where it stopped

---

## 6. Using `.next()` to Control Execution

Generator objects have a `.next()` method.

Example:

    const gen = demo();

    gen.next(); // Start, returns { value: 1, done: false }
    gen.next(); // Middle, returns { value: 2, done: false }
    gen.next(); // End, returns { value: undefined, done: true }

Each `.next()`:
- resumes execution
- runs until next `yield`
- returns an object

---

## 7. What Does `.next()` Return?

`.next()` always returns an object:

    {
      value: <yielded value>,
      done: <boolean>
    }

- `value` → data from `yield`
- `done` → true when generator is finished

---

## 8. Generator vs Normal Function

| Feature | Normal Function | Generator Function |
|------|----------------|-------------------|
| Runs immediately | Yes | No |
| Pausable | No | Yes |
| Returns | One value | Multiple values |
| Uses `return` | Yes | Yes (ends generator) |
| Uses `yield` | No | Yes |

Mental model:
- normal function → movie (plays fully)
- generator → remote-controlled video (pause/play)

---

## 9. Iterating Over Generators

Generators are **iterable**.

Example:

    function* count() {
      yield 1;
      yield 2;
      yield 3;
    }

    for (let num of count()) {
      console.log(num);
    }

Output:
- 1
- 2
- 3

This works because generators follow the iterable protocol.

---

## 10. Generator with Loop (Practical Example)

Example:

    function* infiniteCounter() {
      let i = 1;
      while (true) {
        yield i;
        i++;
      }
    }

    const counter = infiniteCounter();

    counter.next().value; // 1
    counter.next().value; // 2
    counter.next().value; // 3

This creates:
- an infinite sequence
- without freezing memory

---

## 11. Common Beginner Mistakes

- Forgetting `*` in `function*`
- Expecting generator to run immediately
- Using `return` instead of `yield`
- Forgetting to call `.next()`
- Confusing generators with async functions
- Overusing generators for simple problems

---

## 12. Points to Remember

- Generator functions use `function*`
- They return generator objects
- `yield` pauses execution
- `.next()` resumes execution
- Generators can produce multiple values
- Generators are iterable
- Useful for lazy evaluation
