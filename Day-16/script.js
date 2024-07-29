// Recursion In JavaScript

// Factorial of a Number

const calculateFactorial = (num) => {
  if (num == 0 || num === 1) {
    return 1;
  }
  return num * calculateFactorial(num - 1);
};

// const factFive = calculateFactorial(5);
// console.log(factFive);

// Looping For Factorial
for (let i = 1; i <= 4; i++) {
  // printing the factorial in the console
  // console.log(calculateFactorial(i));
}

// Fibonacci Series Using Recursion
const printFibonacci = (num) => {
  if (num === 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  } else {
    return printFibonacci(num - 1) + printFibonacci(num - 2);
  }
};

for (let i = 0; i <= 29; i++) {
  // printing the fibonacci series in the console upto 30 terms
  // console.log(printFibonacci(i));
}

// Recursion to find the sum of all elements in an array
const findSumOfArray = (arr) => {
  if (arr.length === 0) return 0;
  return arr[0] + findSumOfArray(arr.slice(1));
};

const array = [7, 1, 2, 3, 4, 5];
// console.log(findSumOfArray(array));

// Recursive function to find the Maximum number of an Array
const findMaxNum = (arr, index = 0) => {
  if (arr.length - 1 === index) {
    return arr[index];
  }
  return Math.max(arr[index], findMaxNum(arr, index + 1));
};

// console.log(findMaxNum(array));

// Recursive Function to Reverse An String
const reverseString = (str) => {
  if (str.length <= 1) return str;
  console.log(`Checking Work Flow : ${str}`);
  // Recursive case: reverse the substring starting from the second character, and add the first character to the end
  return reverseString(str.slice(1)) + str[0];
};
let string = "abcdefgh";
// console.log(reverseString(string));

// To Check Palindrome Or Not Using Recursion
function isPalindrome(str) {
  // Base case: if the string is empty or has only one character, it's a palindrome
  if (str.length <= 1) {
    return true;
  }

  // If the first and last characters are not the same, it's not a palindrome
  if (str[0] !== str[str.length - 1]) {
    return false;
  }

  // Recursive case: check the substring that excludes the first and last characters
  return isPalindrome(str.slice(1, -1));
}

// Example usage
const str1 = "racecar";
const str2 = "hello";

// console.log(isPalindrome(str1)); // Output: true
// console.log(isPalindrome(str2)); // Output: false
