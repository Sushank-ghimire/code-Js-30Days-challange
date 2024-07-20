// Declaring of an array with some elements
let arr1 = [1, 2, 3, 4, 5];
console.log(arr1, arr1[0], arr1[1]);

arr1.push(4);
console.log(arr1);

// Removing an element
const removed_element = arr1.pop();
console.log(arr1, removed_element);

// Shift Operation to remove first element of array
const shiftElement = arr1.shift();
console.log(arr1, shiftElement);

// UnShift Operation to add new element at the first of the element
arr1.unshift("Sushank");
console.log(arr1);
arr1.shift(); // Removing the first string element

// Map Operation of Numbers
const newArray = arr1.map((num) => {
    return num * 5;
});
console.log(newArray);

// Reduce Operation
const totalNumbersSum = newArray.reduce((a, b) => a+b);
console.log(totalNumbersSum);

// Filter Operation
const filteredNumbers = newArray.filter(num => num < 20);
console.log(filteredNumbers);

// Iteration Of Numbers
let arr2 = [];

// Iterating Using for Loop
for (let num = 0; num < arr1.length; num++) {
    arr2.push(arr1[num] * 4);
}
console.log(arr2);

// ForEach Loop
arr1.forEach((num) => {
    console.log(num);
})
