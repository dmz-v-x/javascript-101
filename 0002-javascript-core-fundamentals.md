## Execution Context, Function Execution & Call Stack

## When a JavaScript Program Runs

When a JavaScript program starts executing:

- The JavaScript engine creates an **Execution Context**
- All JavaScript code runs **inside** an Execution Context
- Execution Context is the **environment** in which code is evaluated and executed

---

## Example Program

		var n = 2;

		function square(num) {
		    var ans = num * num;
		    return ans;
		}

		var square2 = square(n);
		var square4 = square(4);

We will analyze this program **step by step**, exactly the way the JavaScript engine does.

---

## Step 1: Global Execution Context (GEC)

When the program starts:

- A **Global Execution Context (GEC)** is created
- It is pushed onto the **Call Stack**
- It stays on the stack until the program finishes

---

## Global Execution Context Components

The Global Execution Context contains:

1. **Memory Component**
   - Internally consists of:
     - Variable Environment
     - Lexical Environment
2. **Code Component**
   - Also called the **Thread of Execution**
   - Executes code line by line

---

## Step 2: Execution Context Is Created in Two Phases

Every execution context (global or function) is created in **two distinct phases**:

1. **Creation Phase (Memory Creation / Hoisting Phase)**
2. **Execution Phase (Code Execution Phase)**

---

## Phase 1: Creation Phase (Global Execution Context)

In the creation phase:

- JavaScript scans the **entire global scope**
- Memory is allocated for:
  - All `var` declarations
  - All function declarations
- **No code is executed yet**

---

### Memory Allocation in Global Context

From the program:

		var n = 2;
		function square(num) { ... }
		var square2 = square(n);
		var square4 = square(4);

JavaScript allocates memory like this:

- `n` → undefined
- `square` → full function definition
- `square2` → undefined
- `square4` → undefined

---

### Global Memory After Creation Phase

		Global Memory
		  n        → undefined
		  square   → <function>
		  square2  → undefined
		  square4  → undefined

Important rules applied here:

- `var` variables are initialized with **undefined**
- Function declarations store the **entire function**
- Assignment does **not** happen yet

---

## Phase 2: Execution Phase (Global Execution Context)

Now the **Thread of Execution** starts running code **line by line**.

---

### Line 1 Execution

		var n = 2;

- `n` already exists in memory
- `undefined` is replaced with `2`

		n → 2

---

### Line 2 Execution

		function square(num) { ... }

- Nothing happens during execution
- Function was already stored during creation phase

---

## Line 6: Function Invocation

		var square2 = square(n);

This is a **function call**.

Key rule:

> Whenever a function is invoked, a **new Function Execution Context** is created.

---

## Step 3: Function Execution Context (for `square(n)`)

- A **Function Execution Context (FEC)** is created
- It is pushed onto the **Call Stack**
- It has its **own memory and code components**

---

## Function Execution Context — Phase 1 (Creation Phase)

Inside the function:

		function square(num) {
		    var ans = num * num;
		    return ans;
		}

### Memory Allocation

- `num` → undefined
- `ans` → undefined

---

### Function Memory After Creation Phase

		Function Memory (square)
		  num → undefined
		  ans → undefined

---

## Function Execution Context — Phase 2 (Execution Phase)

Now the function body executes line by line.

---

### Parameter Initialization

- Function was called as `square(n)`
- `n` has value `2`
- So:

		num → 2

---

### Executing Function Body

		var ans = num * num;

- `num * num` → `2 * 2`
- Result → `4`
- `ans` is updated

		ans → 4

---

### Return Statement

		return ans;

The `return` keyword:

1. Returns the value (`4`) to the caller
2. Ends function execution
3. Transfers control back to the calling execution context

---

## Function Execution Context Is Removed

After `return`:

- The Function Execution Context is **popped from the Call Stack**
- Control returns to the Global Execution Context

Now:

		square2 → 4

---

## Step 4: Second Function Invocation

		var square4 = square(4);

- A **new Function Execution Context** is created again
- Same two phases occur
- Final value returned:

		square4 → 16

---

## Step 5: Program Completion

After all lines execute:

- Global Execution Context finishes execution
- Call Stack becomes empty
- Program execution ends

---

## Call Stack (Execution Context Stack)

The **Call Stack** is a stack data structure used to manage execution contexts.

---

## How the Call Stack Works

- Program start → Global Execution Context is pushed
- Function call → Function Execution Context is pushed
- Function return → Function Execution Context is popped
- Execution always happens at the **top of the stack**

---

## Call Stack Visualization

		| square(4) EC |
		| square(n) EC |
		| Global EC   |

After function returns:

		| Global EC   |

After program ends:

		(empty)

---

## Purpose of the Call Stack

- Maintains **order of execution**
- Tracks **currently executing context**
- Enforces **synchronous, single-threaded execution**

---

## Alternate Names for Call Stack

The Call Stack is also called:

1. Execution Context Stack
2. Program Stack
3. Control Stack
4. Runtime Stack
5. Machine Stack

All names refer to the **same concept**.

---

## Final Correct Mental Model

- JavaScript runs inside **Execution Contexts**
- Execution Contexts are created in **two phases**
- Function calls create **new execution contexts**
- Call Stack manages execution contexts
- JavaScript executes **one thing at a time**

---

## Core Takeaway

If you understand this flow completely, you now understand:

- Execution Context lifecycle
- Function execution in JavaScript
- Call Stack behavior
- Why JavaScript is synchronous and single-threaded

This is **accurate, spec-aligned JavaScript internals knowledge** — the foundation for hoisting, closures, async JavaScript, and the event loop.
