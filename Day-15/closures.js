// Closures In JavaScript

// Function which returns another function is and closure
function addNum(num1) {
  console.log("Outer Function");
  return function (num2) {
    console.log("Inner Function");
    return num1 + num2;
  };
}

// const addFive = addNum(10);
// console.log(addFive(5));
// console.log(addFive(67));

function counterFunc(action) {
  let _privateNumber = 0;
  return function (num) {
    if (action === "add") {
      _privateNumber += num;
      return _privateNumber;
    } else if (action === "sub") {
      _privateNumber -= num;
      return _privateNumber;
    } else if (action === "mul") {
      _privateNumber *= num;
      return _privateNumber;
    } else if (action === "div") {
      _privateNumber = (_privateNumber / num).toFixed(2);
      return _privateNumber;
    } else {
      throw Error("Invalid Operation");
    }
  };
}

// const addNumber = counterFunc("add");
// console.log(addNumber(5)); // Output: 5
// console.log(addNumber(3)); // Output: 8

// const divNum = counterFunc("div");
// console.log(divNum(4)); // Output: 0.00
// console.log(divNum(2)); // Output: 0.00

// Pratical Cases of Closures Uses\

function userIds() {
  let idNum = 345;
  return function () {
    idNum += 1;
    return idNum;
  };
}

// let userId = userIds();
// console.log(userId());
// console.log(userId());
// console.log(userId());
// console.log(userId());

const greetUsers = () => {
  return function (name) {
    console.log(`Hello User : ${name}`);
  };
};

const userGreeter = greetUsers();
// userGreeter("Sushank");
// userGreeter("Mahesh");

function createFunctionArray() {
  // Initialize an empty array to store the functions
  let functionArray = [];

  // Use a for loop to iterate from 0 to 9 (or any desired range)
  for (let i = 0; i < 10; i++) {
    // Create a function using an immediately invoked function expression (IIFE)
    functionArray.push(
      (function (index) {
        // The IIFE takes 'index' as a parameter and returns a function
        return function () {
          // This returned function will log the 'index' when called
          console.log(index);
        };
      })(i)
    ); // Immediately invoke the function with the current value of 'i'
  }

  // Return the array of functions
  return functionArray;
}

// Call the function to create the array of functions
let functions = createFunctionArray();
functions[0](); // Should log 0
functions[1](); // Should log 1
functions[2](); // Should log 2
functions[3](); // Should log 3
functions[4]();

// Module Pattern
const ItemModule = (function () {
  // Private array to hold items
  let items = [];
  return {
    // Method to add an item
    addItem: function (item) {
      items.push(item);
      console.log(`Added: ${item}`);
    },
    // Method to remove an item
    removeItem: function (item) {
      const index = items.indexOf(item);
      if (index !== -1) {
        items.splice(index, 1);
        console.log(`Removed: ${item}`);
      } else {
        console.log(`Item not found: ${item}`);
      }
    },
    // Method to list all items
    listItems: function () {
      console.log("Items:", items);
      return items;
    },
  };
})();

// Testing the ItemModule
ItemModule.addItem("Apple");
ItemModule.addItem("Banana");
ItemModule.listItems(); // Should log ['Apple', 'Banana']
ItemModule.removeItem("Apple");
ItemModule.listItems(); // Should log ['Banana']

// Memoizing Function { Memoization Concept }
function memoize(fn) {
  // Cache object to store results
  const cache = {};
  console.log(cache);
  return function (...args) {
    console.log(cache);
    const key = JSON.stringify(args);
    if (cache[key]) {
      console.log("Fetching from cache:", key);
      return cache[key];
    } else {
      console.log("Calculating result for:", key);
      const result = fn(...args);
      cache[key] = result;
      return result;
    }
  };
}

// Example usage with a simple addition function
const add = (a, b) => a + b;
const memoizedAdd = memoize(add);

console.log(memoizedAdd(1, 2)); // Calculating result for: [1,2]
console.log(memoizedAdd(1, 2)); // Fetching from cache: [1,2]
console.log(memoizedAdd(2, 1)); // Fetching from cache: [1,2]

// Memoization of Factorial
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

const memoizedFactorial = memoize(factorial);

console.log(memoizedFactorial(5)); // Calculating result for: [5]
console.log(memoizedFactorial(5)); // Fetching from cache: [5]
console.log(memoizedFactorial(6)); // Calculating result for: [6] (uses cached result of factorial(5))
