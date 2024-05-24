// let js = "amazing";
// if (js === "amazing") alert("JavaScript is fun!");

// console.log(40 + 8 + 23 - 10);

//! VALUES AND VARIABLES
/*
//* Values - the smallest unit of information in JS
console.log("Steven");
console.log(23);

//* Variables
// let firstName = "Steven";
let firstName = "Becky";
console.log(firstName);
console.log(firstName);
console.log(firstName);

// naming conventions

let lastName; // camelcase
let $function; // avoid using rerserved keywords instead start with an underscore or a dollar sign
let PI = 3.1415; // variable name in all upper case are rerserved for constants that never change eg PI
let myFirstJob = "programmer"; //variable names should be descriptive


console.log(true);

let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof true); // boolean
console.log(typeof javaScriptIsFun); // boolean
console.log(typeof 23); // number
console.log(typeof "Steven"); // string

//* dynamic typing
javaScriptIsFun = "YES!";
console.log(typeof javaScriptIsFun); // becomes a string

//undefined
let year;
console.log(year); //undefined
console.log(typeof year); //undefined

year = 1995;
console.log(typeof year); //number

console.log(typeof null); //a bug in JS but never corrected for legacy reasons


//! LET, CONST AND VAR

let age = 28;
age = 29;

const birthYear = 1995
birthYear = 1996 // error - //constant cannot be redeclared
const job; // error - constant variables cannot be empty

var job = 'programmer'
job = 'teacher'


//! OPERATORS

// arithmetic operators
const now = 2037;
const ageSteven = now - 1995;
const ageUmu = now - 1999;
console.log(ageSteven, ageUmu);

console.log(ageSteven * 2, ageUmu / 2, ageSteven ** 3);

const firstName = "Steven";
const lastName = "Daniel";
console.log(firstName + " " + lastName); //string concatenation

// assignment operators
let x = 10 + 5; //15
console.log(x);
x += 10; // x=x+10 = 25
console.log(x);
x *= 4;
console.log(x);
x++;
console.log(x);

//Comparison operators
console.log(ageSteven > ageUmu); // true
console.log(ageSteven < ageUmu); // false
console.log(ageSteven >= 18); // true

const isFullAge = ageUmu >= 18;

console.log(now - 1995 > now - 1999);


//! STRING AND TEMPLATE LITERALAS
const firstName = "Steven";
const job = "Student";
const birthYear = 1995;
const year = 2037;

const steven =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(steven);

const stevenNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(stevenNew);
*/
console.log("================== if/else statements =====================");
//! TAKING DECISIONS - if/else Statement
const age = 15;
// const isOldEnough = age >= 18;

if (age >= 18) {
  console.log(`Sarah can start driving license 🚗`);
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young, wait another ${yearsLeft} years`);
}

const birthYear = 1995;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);

console.log(
  "================== Type conversion and coercion ====================="
);
//! TYPE CONVERSION AND COERSION

//*Type conversion
const inputYear = "1995";
console.log(inputYear + 18); // 199518
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18); // 2013

console.log(Number("Steven")); //NaN
console.log(String(23));

//* Type coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3); // 10
console.log("23" * "2"); //46 - automatically converted to number

let n = "1" + 1; // '11' - string
n = n - 1; // string '11'converted to number and 1 subtracted from it
console.log(n); //11

console.log("================== Truthy and Falsy values =====================");
//! TRUTHY AND FALSY VALUES
// falsy values are not values but becomes false when we try to convert them
// 0, '', undefined, null, NaN

console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean("Steven")); // true
console.log(Boolean({})); // true
console.log(Boolean("")); // false

const money = 0;
if (money) {
  console.log("Don't spend it alll!");
} else {
  console.log("You should get a job");
}

let height;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}

//! EQUALITY OPERATORS == VS ===
console.log("================== Equality Operators =====================");
/*
const personAge = "18";
if (personAge === 18) console.log("You just became an adult (strict)");
if (personAge == 18) console.log("You just became an adult (loose)"); // this is printed

//const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
  console.log("Cool! 23 is an amazing number!");
} else if (favorite === 7) {
  console.log("7 is also a cool number!");
} else {
  console.log("Number is not 23 or 7");
}

if (favorite !== 23) {
  console.log("Why not 23!");
}
*/

//! BASIC BOOLEAN LOGIC: THE AND, OR & NOT OPERATORS
console.log("================== Boolean Logic =====================");
const hasDriversLicense = true;
const hasGoodVision = false;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense); // not

const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//   console.log("Sarah is able to drive 🚗");
// } else {
//   console.log("Someone else should drive...");
// }

const isTired = true;
console.log(hasDriversLicense || hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive 🚗");
} else {
  console.log("Someone else should drive...");
}

//! SWITCH STATEMENT
console.log("================== Switch Statement =====================");

const day = "saturday";
switch (day) {
  case "monday":
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code samples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend");
    break;
  default:
    console.log("Not a valid day");
}

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code samples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend");
} else {
  console.log("Not a valid day");
}

//! The Conditional (Ternary) Operators
console.log(
  "================== The Conditional (Ternary) Operators ====================="
);
const yourAge = 21;
yourAge >= 18
  ? console.log("I like to drink wine 🍷")
  : console.log("I like to drink water 💧");

const drink = yourAge >= 18 ? "wine🍷" : "water 💧";
console.log(drink);

let drink2;
if (yourAge >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💧";
}
console.log(drink2);

console.log(`I like to drink ${yourAge >= 18 ? "wine🍷" : "water 💧"}`);
