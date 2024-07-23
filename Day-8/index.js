// Object Literals

const name = "John";
const age = 30;

// Basic string interpolation
const message = `Hello, my name is ${name} and I am ${age} years old.`;

console.log(message); // Output: Hello, my name is John and I am 30 years old.

// Destructuring
const array = [1, 2, 3, 4, 5];

// Destructing of array at different variables with rest operator
const [num1, num2, num3, ...remaining] = array;
console.log(num1, num2, num3, remaining);

const person = {
  firstName: "first name",
  lastName: "lastname",
  location: "Bhaktapur",

  logDetails: function () {
    console.log(
      `first name is : ${this.firstName}, lastname is : ${this.lastName}, location: ${this.location}`
    );
  },
  addAge: function (age) {
    this.age = age;
  },
};

// Spread Operator
const string = "Hello";
const characters = [...string];

console.log(characters); // Output: ['H', 'e', 'l', 'l', 'o']

{
  const object1 = { a: 1 };
  const object2 = { b: 2 };
  const mergedObject = { ...object1, ...object2 };

  console.log(mergedObject); // Output: { a: 1, b: 2 }
}

const objectDestruct = {
  names: "Sushank Ghimire",
  skill: "Web Development",
  age: 18,
  work: "Student"
};

// Object Destructing
let { names, ...remainings } = objectDestruct;
console.log(names, remainings);
