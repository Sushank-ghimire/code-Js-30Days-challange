// Error Handling
const errorFunc = async () => {
  try {
    const response = await fetch("https://www.gogle.com");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error occured : ", error.message);
  }
};

// const response = errorFunc();
// console.log(response);

function divideNumbers(numerator, denominator) {
  try {
    if (denominator === 0) {
      throw new Error("Denominator cannot be zero.");
    }
    return numerator / denominator;
  } catch (error) {
    console.error(error.message);
    return null; // Return null or handle the error as needed
  }
}
const result = divideNumbers(10, 20);
// console.log(result);

function finallyTest(num) {
  try {
    console.log("Try Block Execution!");
    if (num === 0) return num;
    throw new Error("The number is not Zero");
  } catch (error) {
    console.error("Error occured : ", error.message);
    console.log("Catch Block Execution!");
  } finally {
    console.log("Finally block execution!");
  }
}
// finallyTest(8);

// Custom Error Object Creations

class CustomError extends Error {
  constructor(message, name) {
    super(message); // Pass message to the base Error class
    this.name = name; // Set the name property to the custom error name
  }
}

// Function that throws the custom error
function throwError(errorMessage) {
  throw new CustomError(`Error occured : ${errorMessage}`);
}

// Handle the custom error using a try-catch block
function giveCustomError() {
  try {
    throwError("Error On Data Fetching!"); // Call the function that throws the custom error
  } catch (error) {
    console.error(`${error.message}`); // Log the custom error message
  }
}

const randomPromise = new Promise((resolve, reject) => {
  const num = Math.random().toFixed(2);
  if (num > 0.5) {
    resolve(`Number is Greater than .5 : ${num}`);
  } else {
    reject(new Error(`Number is Less than .5 : ${num}`));
  }
});

// Handle the promise resolution and rejection
randomPromise
  .then((message) => {
    console.log(message); // Log the success message
  })
  .catch((error) => {
    console.error(error.message); // Log the error message if rejected
  });

// Create a promise that fetches data from a given URL and parses the response as JSON
const dataFetchPromise = new Promise((resolve, reject) => {
    // Fetch data from the fake API
    fetch("https://fakeapi.com/users")
      .then((res) => {
        if (!res.ok) {
          // Check if the response is not ok (status is not in the range 200-299)
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json(); // Parse the response as JSON
      })
      .then((data) => resolve(data)) // Resolve the promise with the parsed data
      .catch((error) => reject(error)); // Reject the promise with the error if fetch or JSON parsing fails
  });
  
  // Handle the promise resolution and rejection
  dataFetchPromise
    .then((data) => console.log(data)) // Log the parsed data if the promise resolves
    .catch((err) => console.error("Error fetching data:", err)); // Log the error if the promise rejects
  
