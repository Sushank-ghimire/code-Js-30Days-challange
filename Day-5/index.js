// Task 1: Check if a number is even or odd
function isEvenOrOdd(num) {
  if (num % 2 === 0) {
    console.log(`${num} is even`);
  } else {
    console.log(`${num} is odd`);
  }
}

// Task 2: Calculate the square of a number
function square(num) {
  return num * num;
}

// Task 3: Find the maximum of two numbers
const findMax = function (a, b) {
  const max = a > b ? a : b;
  console.log(`The maximum of ${a} and ${b} is ${max}`);
};

// Task 4: Concatenate two strings
const concatenateStrings = function (str1, str2) {
  return str1 + str2;
};

// Task 5: Calculate the sum of two numbers using arrow function
const sum = (a, b) => a + b;

// Task 6: Check if a string contains a specific character using arrow function
const containsChar = (str, char) => str.includes(char);

// Task 7: Function with default parameter values
function multiply(a, b = 1) {
  return a * b;
}

// Task 8: Function with default parameter values for greeting
function greet(name, age = 18) {
  return `Hello, my name is ${name} and I am ${age} years old.`;
}

// Task 9: Higher-order function that calls a function a number of times
function repeat(func, num) {
  for (let i = 0; i < num; i++) {
    func();
  }
}

// Task 10: Higher-order function that applies two functions to a value
function applyFunctions(func1, func2, value) {
  return func2(func1(value));
}

function square(num) {
  return num * num;
}
// Example
console.log(square(5)); // Output: 25

{
  const findMax = function (a, b) {
    const max = a > b ? a : b;
    console.log(`The maximum of ${a} and ${b} is ${max}`);
  };
  // Example
  findMax(10, 20); // Output: The maximum of 10 and 20 is 20
}

{
  const concatenateStrings = function (str1, str2) {
    return str1 + str2;
  };
  // Example
  console.log(concatenateStrings("Hello, ", "World!")); // Output: Hello, World!

  const sum = (a, b) => a + b;
  // Example
  console.log(sum(10, 15)); // Output: 25

  const containsChar = (str, char) => str.includes(char);
  // Example
  console.log(containsChar("JavaScript", "J")); // Output: true
  console.log(containsChar("JavaScript", "X")); // Output: false

  function multiply(a, b = 1) {
    return a * b;
  }
  // Example
  console.log(multiply(5)); // Output: 5 (since b defaults to 1)
  console.log(multiply(5, 2)); // Output: 10

  function greet(name, age = 18) {
    return `Hello, my name is ${name} and I am ${age} years old.`;
  }
  // Example
  console.log(greet("John")); // Output: Hello, my name is John and I am 18 years old.
  console.log(greet("John", 25)); // Output: Hello, my name is John and I am 25 years old.
  function repeat(func, num) {
    for (let i = 0; i < num; i++) {
      func();
    }
  }
  // Example
  repeat(() => console.log("Hello!"), 3); // Output: Hello! (printed 3 times)
  function applyFunctions(func1, func2, value) {
    return func2(func1(value));
  }
  // Example
  const double = (x) => x * 2;
  const increment = (x) => x + 1;
  console.log(applyFunctions(double, increment, 5)); // Output: 11 (double 5 -> 10, increment 10 -> 11)
}
