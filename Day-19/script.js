// Regular Expressions In JavaScript

const validateEmail = (email) => {
  // const emailRegex = /\w+([a-z])+\d+@gmail\.com/g;

  // Modified Regex
  const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

  if (email.match(emailRegex)) {
    console.log("Email Validated Successfull : ", email);
    return email;
  }
  console.log("Invalid Email : ", email);
};

validateEmail("ghimiresushank76@gmail.com");

// Matching and replacing the word JavaScript
const simpleWord = "Hello World Of JavaScript";
console.log(simpleWord.replace(/JavaScript/, "Node Js"));

// Matching All Digits In a String
const digitMatch = "hello 45 and hi 43 we ate something 90";
console.log(digitMatch.match(/\d+/g));

// Matching all the words in capital Word
const strMatch = "Hello World We Want Something Big M";
console.log(strMatch.match(/[A-Z]/g));

// Phone Number Matching Regex
const phoneRegex = () => {
  const phoneNumber = "(123) 456-7890";
  const phoneRegex = /\((\d{3})\)\s(\d{3})-(\d{4})/;
  const phoneMatches = phoneNumber.match(phoneRegex);

  if (phoneMatches) {
    console.log("Area Code:", phoneMatches[1]);
    console.log("Central Office Code:", phoneMatches[2]);
    console.log("Line Number:", phoneMatches[3]);
  } else {
    console.log("No match found");
  }
};
phoneRegex();

// Matching the word at the end of the String
const matchEndWord = () => {
  const textEnd = "Welcome to the world";
  const endRegex = /world$/;
  const endMatch = textEnd.match(endRegex);

  if (endMatch) {
    console.log("Match at the end:", endMatch[0]);
  } else {
    console.log("No match at the end");
  }
};
matchEndWord();

// Password Strength Regex
const passwordRegex = () => {
  const password = "Password1!";
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  const isPasswordValid = passwordRegex.test(password);

  console.log("Password is valid:", isPasswordValid, password);
};
passwordRegex();

// URL validator Regex
const urlValidator = () => {
  const url = "https://www.example.com";
  const urlRegex =
    /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/;
  const isUrlValid = urlRegex.test(url);

  console.log("URL is valid:", url, isUrlValid);
};
urlValidator();