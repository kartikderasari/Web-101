# Introduction to JS

## Variables in JavaScript

### Using `var` keyword

```js
var firstName; // Declaring a variable
firstName = "Kartik"; // Assign value to a variable
```

### Using `let` keyword - ES6 (2015)

- Should be declared before use
- Can't be redeclared
- Block-level scope

```js
let lastName = "Kartik";
let lastName = "Something else"; // Redeclaration won't work
```

```js
let x = 10;
console.log(x); // Here, Value of x is 10
{
  let x = 2;
  console.log(x); // Here, Value of x is 2
}
console.log(x); // Here, Value of x is 10
```

### Using `const` keyword - ES6 (2015)

Features:

- Can't be redeclared
- Can't be reassigned
- Block-level scope

```js
const PI = 3.14159265359; // Must be assigned a value while declaring
PI = 3.5; // This won't work
```

## Data Types

- JS has dynamic types
- Variables have different data types:
  - Numbers - With or Without decimals
  - Booleans - True or False
  - Strings - Series of characters
  - Arrays - Index based, Multiple data types
  - Objects

```js
let score = 16; // Number

let loggedIn = true; //Boolean

let firstName = "Kartik"; // String

let cars = ["One", 2, { count: "Three" }]; // Array

let x = {
  firstName: "Kartik",
  lastName: "Derasari",
  score: 20,
  loggedIn: true,
}; // Object
```

## Operators

### Arithmetic Operators

| Operator | Description             |
| -------- | ----------------------- |
| +        | Addition                |
| -        | Subtraction             |
| \*       | Multiplication          |
| \*\*     | Exponentiation (ES2016) |
| /        | Division                |
| %        | Modulus (Remainder)     |
| ++       | Increment               |
| --       | Decrement               |

### Assignment Operators

| Operator | How to write? | Operation    |
| -------- | ------------- | ------------ |
| =        | x = y         | x = y        |
| +=       | x += y        | x = x + y    |
| -=       | x -= y        | x = x - y    |
| \*=      | x \*= y       | x = x \* y   |
| /=       | x /= y        | x = x / y    |
| %=       | x %= y        | x = x % y    |
| <<=      | x <<= y       | x = x << y   |
| >>=      | x >>= y       | x = x >> y   |
| >>>=     | x >>>= y      | x = x >>> y  |
| &=       | x &= y        | x = x & y    |
| ^=       | x ^= y        | x = x ^ y    |
| \|=      | x \|= y       | x = x \| y   |
| \*\*=    | x \*\*= y     | x = x \*\* y |

## Loops

- Loops are used when we want to perform a block of code over and over again, with different values.
- Loops in JavaScript:

  - for
  - for/in
  - for/of
  - while
  - do/while

### For Loop

Format:

```js
for (initialization; condition; increment / decrement) {
  // code block to be executed
}
```

Example:

```js
for (int i = 0; i < 5 ; i++) {
  console.log(i);
}
```

## Conditional Statements

### If-Else statements

```js
if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}
```

### Switch statements

```js
switch (expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
  // code block
}
```

## JS Object

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
};

console.log(person.firstname); // John
console.log(person[lastname]); // Doe
```

## Console operations

```js
console.log("Hello World"); // Log data

console.error("Something is wrong"); // Log Errors

console.warn("Some warning"); // Log Warnings

console.info("You are awesome"); // Log some Information

console.table(["orange", "apple", "grape"]); // Log a table
```

## Array

- Can store multiple values in a single variable
- Index starts with 0
- Arrays are Objects

```js
const cars = ["Saab", "Volvo", "BMW"]; // Initializing an Array

cars[1] = "Porsche"; // Manipulating array value

let x = cars[0]; // Accessing values from an array
```

## Array Methods

### Push Method - Adds a new element to the end of an array

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi"); // Adds "Kiwi" to fruits
```

### Pop Method - Remove last element from the array and returns the removed element

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop(); // Removes "Mango" from fruits
```

### Shift Method - Remove first element from the array and returns the removed element

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let x = fruits.shift(); // x = "Banana"
```

### Unshift Method - Adds a new element to the beginning of an array

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon"); // Adds "Lemon" to fruits
```

### Length Method - Find the length of an array

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.length); // Returns 4
```

### Sort Method - Sort the array

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort(); // Returns ["Apple", "Banana", "Mango", "Orange"]
```

## Functions in JavaScript

- A Function is a block of code which is designed to perform a particular task.
- You need to declare and call a function for its execution.

```js
// Declaring a function
function functionName(parameter1, parameter2, parameter3) {
  // code to be executed
}

functionName(); // Calling a function
```

- There are mainly x types of functions

  - Simple Function

    ```js
    function logFunction() {
      console.log("logFunction is running!");
    }
    ```

  - Function with Parameters

    ```js
    function logProduct(p1, p2) {
      console.log(p1 * p2); // The function logs the product of p1 and p2
    }
    ```

  - Function with Parameters and Return

    ```js
    function returnProduct(p1, p2) {
      return p1 * p2; // The function returns the product of p1 and p2
    }
    ```

  - Arrow Functions (ES6 - Shorter function syntax)

    ```js
    let hello = () => {
      return "Hello World!";
    };
    ```
