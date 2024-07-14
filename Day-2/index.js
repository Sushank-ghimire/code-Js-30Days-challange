let a = 6,
  b = 8; // Declaration of two global variables a and b

{
  // Arthematic Operators
  let sum = a + b; // addition
  let subtraction = a - b; // Subtracting
  let division = a / b; // Division
  let remainder = 50%3;
  console.log(sum, subtraction, division, remainder);
}

{
    // Arthematic Operator
    let b = 0;
    b++; // increment by 1
    b+=7; // adding 7
    console.log(b);
    
    b--; // Decrement by 1
    b-=5; // Decrement by 5
    console.log(b);
}

{
    // Comparision Operator
    let a = 9, b =22;
    console.log(a === b);
    console.log(a > b, a < b, a !== b, a != b); // false true true true
    const str = "5", num = 5; 
    console.log(str == num, str === num); // true false
}

{
    // Logical Operator
    let nam;
    let name = "name" || nam;
    console.log(name);

    const a =5, b = 4, c = 3;

    if(a>b && a>c) console.log("A is greater!");
}

{
    // Ternary Operator
    const isTrue = true || false;

    // we can use ternary operator in the place of if and else condition
    isTrue ? console.log("true") : console.log("False"); 
}

const timeInMinutes = 569;

let hours = Math.floor(569 / 60);

let seconds = timeInMinutes * 60;

console.log(hours, seconds);
