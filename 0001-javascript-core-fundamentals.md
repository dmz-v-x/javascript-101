## JavaScript Core Fundamentals

## Introduction

To truly understand JavaScript at a deep and professional level, there are **two foundational concepts** that everything else builds upon:

1. **Everything in JavaScript happens inside an Execution Context**
2. **JavaScript is a synchronous, single-threaded language**

These are not opinions or abstractions — they describe **how the JavaScript engine actually works internally**.

As we go deeper, we refine these fundamentals using **precise ECMAScript terminology**, especially:

- Execution Context  
- Variable Environment  
- Lexical Environment  
- Outer Environment Reference (Scope Chain)

This blog explains these concepts **from absolute zero to advanced**, and includes a **spec-aligned runtime example** that shows how these ideas actually work inside the JavaScript engine.

---

## PART 1: Execution Context (The Core of JavaScript Execution)

### What Is an Execution Context?

An **Execution Context** is an **abstract runtime environment** created by the JavaScript engine to **evaluate and execute JavaScript code**.

Every execution context contains:

- A **Lexical Environment**
- A **Variable Environment**
- A **Thread of Execution**

Every piece of JavaScript code runs inside an Execution Context.  
Without an execution context, JavaScript code cannot execute.

---

### Execution Context Components (High-Level View)

- **Lexical Environment**  
  Manages block-scoped bindings and scope chaining  

- **Variable Environment**  
  Manages function-scoped bindings  

- **Thread of Execution**  
  Executes code line by line  

---

## PART 2: Variable Environment vs Lexical Environment (Precise & Spec-Aligned)

This distinction is critical and often misunderstood, so we will be very exact.

---

### Variable Environment

The **Variable Environment**:

- Exists per **Execution Context**
- Stores:
  - `var` declarations
  - Function declarations
- Is **function-scoped**
- Does **not change** when entering blocks like `if`, `while`, or `{}`

In simple terms, the Variable Environment represents **function-level memory**.

---

### Lexical Environment

The **Lexical Environment**:

- Exists per **Execution Context**
- Can also be created for **blocks**
- Stores:
  - `let` declarations
  - `const` declarations
- Maintains an **Outer Environment Reference**
- Enables **scope chaining**
- Is **block-scoped**

Lexical Environments are what make block scoping possible in JavaScript.

---

### Relationship Between Them

- Both store identifiers as **key–value mappings**
- Both participate in **identifier resolution**
- Both exist simultaneously inside an Execution Context
- Lexical Environments can be nested
- Variable Environment remains stable per function execution

Together, they define **where identifiers live in memory during execution**.

---

## PART 3: Execution Context + Environments (Real Runtime Example)

Let’s now connect theory to actual runtime behavior using a real example.

---

### The Code

	function do_something() {
	    var a = 1;
	    let b = 2;
	    while (true) {
	        var c = 3;
	        let d = 4;
	        console.log(b);
	        break;
	    }
	}

	do_something();

---

## Step 1: Global Execution Context

Before the function is called:

- The **Global Execution Context** is created
- `do_something` is stored in the global environment

	Global Execution Context
	  Variable Environment:
	    do_something → <function>

---

## Step 2: Function Execution Context Creation

Calling `do_something()` creates a **Function Execution Context**.

### Creation Phase

#### Variable Environment

- `a` → undefined  
- `c` → undefined  

(`var` declarations are hoisted and function-scoped)

#### Lexical Environment

- `b` → uninitialized (Temporal Dead Zone)
- Outer Reference → Global Environment

	Execution Context (do_something)
	  Lexical Environment:
	    b → <uninitialized>
	    outer → Global
	  Variable Environment:
	    a → undefined
	    c → undefined
	    outer → Global

---

## Step 3: Execution Phase (Line by Line)

### Line 1

	var a = 1;

- Updates `a` in Variable Environment

### Line 2

	let b = 2;

- Initializes `b` in Lexical Environment

	Lexical Environment:
	  b → 2
	Variable Environment:
	  a → 1
	  c → undefined

---

## Step 4: Entering the `while` Block

	while (true) {

- A **new block-level Lexical Environment** is created
- Variable Environment remains unchanged

	Block Lexical Environment
	  d → <uninitialized>
	  outer →
	    Lexical Environment (function)
	      b → 2
	      outer → Global

---

## Step 5: Inside the Block

### Line 4

	var c = 3;

- Updates `c` in Variable Environment

### Line 5

	let d = 4;

- Initializes `d` in block Lexical Environment

---

## Step 6: Identifier Resolution

	console.log(b);

Resolution steps:

1. Look in current block Lexical Environment → not found  
2. Follow outer reference → function Lexical Environment  
3. `b` found with value `2`

This is **scope chaining via outer environment references**.

---

## Step 7: Exiting the Block

	break;

- Block Lexical Environment is destroyed
- `d` is no longer accessible

	Execution Context (do_something)
	  Lexical Environment:
	    b → 2
	  Variable Environment:
	    a → 1
	    c → 3

---

## Step 8: Exiting the Function

When the function finishes:

- The **Function Execution Context is destroyed**
- All its environments are removed from memory

---

## PART 4: Key Insights (Why Things Behave This Way)

### Why `c` Exists Outside the Block

- `var` is stored in the **Variable Environment**
- Variable Environment is function-scoped

### Why `d` Does Not Exist Outside the Block

- `let` is stored in a **block Lexical Environment**
- That environment is destroyed when the block exits

### Why `b` Is Accessible Inside the Block

- Lexical Environments form a **scope chain**
- Identifier lookup follows `outer` references

---

## PART 5: How This Connects to Core Fundamentals

Earlier we said:

- Variable Environment → `var`, functions
- Lexical Environment → `let`, `const`, scope chain

This example is a **runtime proof** of that model and is fully aligned with the ECMAScript specification.

They are not different explanations — this is the **concrete engine-level behavior** behind the same concepts.

---

## Final Summary

### Execution Context Contains

- **Variable Environment**
  - Function-scoped
  - Stores `var` and function declarations

- **Lexical Environment**
  - Block-scoped
  - Stores `let` and `const`
  - Maintains outer references

- **Thread of Execution**
  - Executes code line by line

---


Everything else in JavaScript builds on **this exact model**.
