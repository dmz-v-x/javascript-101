## Program vs Process

## 1. What is a Program?

A **program** is simply a **set of instructions written in a file**.

If you write code and save it in a file, that file is a **program**.

Examples:
- A JavaScript file: `app.js`
- A Python file: `main.py`
- A C file: `hello.c`

Example program (JavaScript file):

    console.log("Hello World");

Important:
- A program is **not doing anything by itself**
- It just sits on your disk (hard drive / SSD)

Mental model:
- Program = recipe written on paper
- No cooking yet

---

## 2. What is a Process?

A **process** is a **program in a running state**.

When you execute a program:
- The operating system starts running it
- The program becomes a **process**

So:

> Program + execution = Process

Mental model:
- Program = recipe
- Process = cooking happening in the kitchen

---

## 3. Program vs Process (Core Difference)

| Program | Process |
|------|--------|
| Passive | Active |
| Stored on disk | Lives in RAM |
| Just instructions | Instructions + execution |
| One program file | Can create many processes |

Key takeaway:
- Program is static
- Process is dynamic

---

## 4. What happens when a Program becomes a Process?

When you run a program, **many things happen automatically** behind the scenes.

High-level steps:

1. You start the program (double-click / command)
2. Operating system loads the program into **RAM**
3. A **process** is created
4. Memory is allocated for the process
5. CPU starts executing instructions

This entire lifecycle is managed by the **operating system**.

---

## 5. Why is RAM important here?

RAM (Random Access Memory) is where **running programs live**.

Important facts:
- Disk is slow → used for storage
- RAM is fast → used for execution

When a program runs:
- Its code is copied from disk into RAM
- CPU reads instructions from RAM
- Process exists **only while it’s in RAM**

If RAM is cleared:
- Process dies
- Program stops running

---

## 6. Memory allocated to a Process

Each process gets its **own memory space**.

This memory usually contains:
- Program code
- Variables and data
- Stack (function calls)
- Heap (dynamic memory)

Example mental model:

    Process Memory
    ├── Code
    ├── Variables
    ├── Stack
    └── Heap

Important:
- One process cannot directly access another process’s memory
- This provides **isolation and safety**

---

## 7. Multiple Processes from the Same Program

A **single program** can create **multiple processes**.

Example:
- Opening Chrome twice
- Running the same Node.js script in two terminals

Even though:
- Program file is the same

Each run creates:
- A new process
- A new memory allocation

Mental model:
- One recipe
- Multiple people cooking it at the same time

---

## 8. Program and Process in JavaScript Context

### Browser JavaScript

- Browser itself is a process
- Each tab may have its own process
- JavaScript runs inside browser-managed processes

---

### Node.js JavaScript

- Running `node app.js` creates a process
- `process` object gives information about the current process

Example:

    console.log(process.pid);

This prints:
- The process ID assigned by the OS

---

## 9. Common Beginner Confusions

- Thinking program and process are the same
- Believing code runs directly from disk
- Forgetting that RAM is required to run anything
- Assuming only one process can exist per program
- Confusing browser tabs with JavaScript files

---

## 10. Points to Remember

- Program = code written in a file
- Process = program in running state
- Program lives on disk
- Process lives in RAM
- OS manages processes
- Each process gets its own memory
- Same program can create multiple processes
- When process ends, memory is freed
