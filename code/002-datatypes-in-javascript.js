// null: means intentional absence of value, means variable exists currently holds no value

let data = null;
typeof null; // "object" (bug in JS)


// undefined: default missing value, means value not assigned yet

let x;
console.log(x); // undefined

let user = {};
console.log(user.name); // undefined

// boolean: true or false value

let isLoggedIn = true;

if(isLoggedIn){
  console.log("User is logged in");
}

// string: represent text data: 3 ways to create string

let name = "Asha"
let city = 'Delhi'
let age = 25
let message `Age is ${age}`

// Backticks allow variable interpolation & multi-line strings

// Important: Strings are immutable
let str = "hello";
str[0] = "H"; // does nothing


// number: JS only has one number types, this includes: integers, decimals, special values

10 / 0; // Infinity
"a" / 2 // NaN

// 0 vs -0

let a = 0;
let b = -0;

console.log(a === b); // true;

1 / 0; // Infinity
1 / -0; // -Infinity

// Symbol: creates unique identifiers, even symbol with same description are different

let id1 = Symbol("id");
let id2 = Symbol("id");

id1 === id2; // false

// Objects -> stores key value pairs, mutable

let user = {
  name: "Asha",
  age: 25
}

user.name = "Himanshu"

// Primitives are stored by values

let a = 10;
let b = a;

b = 20;
console.log(a); // 10

// Objects are stored by reference

let obj1 = {x: 10};
let obj2 = obj1

obj2.x = 20;
console.log(obj1.x); // 20



