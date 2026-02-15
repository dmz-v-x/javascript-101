## Boxing in JavaScript

## 1. What is Boxing?

Boxing means:

> JavaScript temporarily wraps a primitive value inside an object so we can use object features like methods and properties.

Simple mental model:

Primitive → Wrapped → Operation Runs → Wrapper Removed

---

## 2. Why Boxing Exists

JavaScript has primitive values:

- string
- number
- boolean
- null
- undefined
- symbol
- bigint

Important fact:

> Primitives are NOT objects.

Yet this works:

    "hello".length
    "hello".toUpperCase()

Question:

How can a non-object use methods?

Answer:

Boxing.

---

## 3. Mental Model of Boxing

Think of boxing like this:

A primitive temporarily wears an object costume.

Steps:

1. JavaScript sees method/property access
2. JavaScript creates temporary wrapper object
3. Operation executes
4. Wrapper object disappears

---

## 4. Example: String Boxing

Code:

    let name = "asha";

    name.length;
    name.toUpperCase();

Conceptually, JavaScript behaves like:

    new String("asha").toUpperCase()

What happens:

Wrap → Use → Destroy

---

## 5. Example: Number Boxing

Code:

    let num = 10;

    num.toFixed(2);

Conceptually:

    new Number(10).toFixed(2)

---

## 6. Example: Boolean Boxing

Code:

    let flag = true;

    flag.toString();

Conceptually:

    new Boolean(true).toString()

---

## 7. Wrapper Objects (Very Important)

JavaScript provides special wrapper objects:

| Primitive | Wrapper Object |
|----------|----------------|
| string   | String |
| number   | Number |
| boolean  | Boolean |
| symbol   | Symbol |
| bigint   | BigInt |

Boxing uses these wrappers internally.

---

## 8. Primitive vs Wrapper Object (Critical Difference)

These are NOT the same:

Primitive:

    let a = "hello";

Wrapper Object:

    let b = new String("hello");

Check type:

    typeof a; // "string"
    typeof b; // "object"

---

## 9. Comparison Gotcha

    "hello" === new String("hello"); // false

Why?

Because:

Primitive ≠ Object

---

## 10. Truthiness Gotcha (Classic Bug Source)

    if (new Boolean(false)) {
      console.log("Runs");
    }

This runs.

Why?

Because:

Objects are always truthy.

Even when wrapping false.

---

## 11. Boxing is Temporary (Very Important)

Code:

    let text = "hello";

    text.customProp = 123;

    console.log(text.customProp);

Output:

    undefined

Why?

1. Primitive gets boxed
2. Property added to wrapper
3. Wrapper destroyed
4. Property lost

---

## 12. Key Insight About Primitives

Primitives:

- Cannot store properties
- Boxing wrapper is temporary

Therefore:

> You cannot persistently modify primitive values.

---

## 13. When Boxing Happens

Boxing occurs when you:

- Access properties
- Call methods

Examples:

    "hello".length
    "hello".toUpperCase()
    (10).toFixed(2)
    true.toString()

---

## 14. Boxing Does NOT Change Identity

    let x = "hello";

    x instanceof String; // false

Because:

x is still a primitive.

---

## 15. Implicit vs Explicit Boxing

Implicit boxing (normal behavior):

    "hello".toUpperCase()

Explicit boxing (generally avoid):

    new String("hello")

Explicit wrappers are rarely needed.

---

## 16. Why Wrapper Objects Are Dangerous

Using wrapper objects can cause:

- Comparison bugs
- Truthiness bugs
- Confusing behavior
- Memory overhead

Best practice:

Use primitives.

Avoid explicit wrapper objects.

---

## 17. Common Beginner Mistakes

- Thinking primitives are objects
- Using new String() unnecessarily
- Comparing primitives with wrapper objects
- Adding properties to primitives
- Misunderstanding truthiness of wrapper objects

---

## 18. Points to Remember

- Primitives are not objects
- Boxing wraps primitives temporarily
- Boxing enables methods and properties
- Wrapper objects are not primitives
- Wrapper objects are always truthy
- Primitive properties do not persist
- Boxing is automatic
- Avoid explicit wrapper constructors
