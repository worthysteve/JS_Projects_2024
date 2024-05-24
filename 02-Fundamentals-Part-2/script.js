"use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");

//! FUNCTIONS
console.log("================== FUNCTIONS =====================");

function logger() {
  console.log("My name is Steven");
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  //   console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;

  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

//! FUNCTION DECLARATION vs FUNCTION EXPRESSION
console.log(
  "================== FUNCTION DECLARATION vs FUNCTION EXPRESSION ====================="
);

// Function Declaration
function calcAge(birthYear) {
  return 2037 - birthYear;
} // function declaration can be called before they are initialized/defined.

const age1 = calcAge(1995);
console.log(age1);

// Function Expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1999);
console.log(age2);

//! ARROW FUNCTION
console.log("================== ARROW FUNCTION  =====================");

const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(2018);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  //   return retirement;
  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(1995, "Steven"));
console.log(yearsUntilRetirement(1999, "Umu-Hawa"));

//! FUNCTIONS CALLING OTHER FUNCTIONS
console.log(
  "================== FUNCTIONS CALLING OTHER FUNCTIONS  ====================="
);

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;

  return juice;
}

console.log(fruitProcessor(2, 3));

//! REVIEWING FUNCTIONS
console.log("==================  REVIEWING FUNCTIONS  =====================");

const calcAge4 = function (birthYear) {
  return 2037 - birthYear;
};

const ageUntilRetirement = function (birthYear, firstName) {
  const age = calcAge4(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired🎉 ${-retirement} years ago!`);
    return -1;
  }

  //   return `${firstName} retires in ${retirement} years.`;
};

console.log(ageUntilRetirement(1995, "Becky"));
console.log(ageUntilRetirement(1970, "Fatmata"));

//! INTRODUCTION TO ARRAYS
console.log("================== INTRODUCTION TO ARRAYS  =====================");

const friend1 = "Becky";
const friend2 = "Justice";
const friend3 = "Malcolm";

const friends = ["Becky", "Justice", "Malcolm"];
console.log(friends);

const years = new Array(1995, 1984, 2008, 2020);
console.log(years);

// Retrieving elements from an array
console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

// Adding elements to an array
friends[2] = "Baba";
console.log(friends);

const firstName = "Steven";
const daniel = [firstName, "Daniel", 2037 - 1995, "teacher", friends];
console.log(daniel);
console.log(daniel.length);

const calAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsOfBirth = [1995, 1967, 2002, 2010, 2018];
console.log(calAge(yearsOfBirth)); // NaN

const age4 = calAge(yearsOfBirth[0]);
const age5 = calAge(yearsOfBirth[1]);
const age6 = calAge(yearsOfBirth[yearsOfBirth.length - 1]);

console.log(age4, age5, age6);

const ages = [
  calAge(yearsOfBirth[0]),
  calAge(yearsOfBirth[1]),
  calAge(yearsOfBirth[yearsOfBirth.length - 1]),
];

console.log(ages);

//! BASIC ARRAYS OPERATIONS
console.log(
  "================== BASIC ARRAYS OPERATIONS  ====================="
);
const myFriends = ["Becky", "Justice", "Malcolm"];

// Add elements
const newLength = myFriends.push("Baba");
console.log(myFriends);
console.log(newLength);

myFriends.unshift("Mondeh"); // start
console.log(myFriends);

// Remove elements
myFriends.pop(); // last elements
const popped = myFriends.pop();
console.log(popped);
console.log(myFriends);

myFriends.shift(); // start
console.log(myFriends);

// position
console.log(myFriends.indexOf("Justice"));

console.log(myFriends.includes("Justice"));
console.log(myFriends.includes("Alice"));

if (myFriends.includes("Becky")) {
  console.log(`You have a friend called ${myFriends[0]}`);
}

//! INTRODUCTION TO ONJECTS
console.log(
  "================== INTRODUCTION TO ONJECTS  ====================="
);
const steve = {
  firstName: "Steven",
  lastName: "Daniel",
  age: 2037 - 1995,
  job: "Student",
  friends: ["Becky", "Justice", "Malcolm"],
};
console.log(steve);

//! DOT vs BRACKET NOTATION
console.log(
  "================== DOT vs BRACKET NOTATION  ====================="
);

console.log(steve.lastName);
console.log(steve["lastName"]); // in the backet notation, we can put an expression. We can also perform concatenation in the bracket notation

const nameKey = "Name";
console.log(steve["first" + nameKey]);
console.log(steve["last" + nameKey]);

// console.log(steve."last" + nameKey);
// const inerestedIn = prompt(
//   "What do you want to know about Steven? Chose between firstName, LastName, age, job and friends."
// );
// console.log(steve[inerestedIn]);

// if (steve[inerestedIn]) {
//   console.log(steve[inerestedIn]);
// } else {
//   console.log(
//     "Wrong request! Chose between firstName, LastName, age, job and friends."
//   );
// }

steve.location = "Turkey";
steve["twitter"] = "@WorthyStevenD";
console.log(steve);

//Challenge
// Steven have 3 friends and his best friend is called Becky
console.log(
  `${steve["firstName"]} has ${steve.friends.length} friends and his best friend is ${steve.friends[0]}`
);

//! OBJECT METHODS
console.log("================== OBJECT METHODS  =====================");

const steven = {
  firstName: "Steven",
  lastName: "Daniel",
  birthYear: 1995,
  job: "Student",
  friends: ["Becky", "Justice", "Malcolm"],
  hasDriversLicense: true,

  // a function attached to an object is called object method
  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },

  // calcAge: function () {
  //   return 2037 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  //challenge
  // write a method getSummary that returns a summary of the data.
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
    // return this.summary;
  },
};

console.log(steven.calcAge(1995));
console.log(steven["calcAge"](1995));

console.log(steven.calcAge(steven["birthYear"]));

console.log(steven.calcAge()); // using the 'this' keyword, we do not need to pass a value in the function call.
console.log(steven.age);
console.log(steven.getSummary());

//! ITERATION: THE for Loop
console.log(
  "================== ITERATION: The for Loop  ====================="
);

// console.log("Lifting weights repitition 1 🏋️");
// console.log("Lifting weights repitition 2 🏋️");
// console.log("Lifting weights repitition 3 🏋️");
// console.log("Lifting weights repitition 4 🏋️");
// console.log("Lifting weights repitition 5 🏋️");
// console.log("Lifting weights repitition 6 🏋️");
// console.log("Lifting weights repitition 7 🏋️");
// console.log("Lifting weights repitition 8 🏋️");
// console.log("Lifting weights repitition 9 🏋️");
// console.log("Lifting weights repitition 10 🏋️");

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repitition ${rep} 🏋️`);
}

//! LOOPING ARRAYS:BREAK & CONTINUE
console.log(
  "================== LOOPING ARRAYS:BREAK & CONTINUE  ====================="
);

const stevenD = [
  "Steven",
  "Daniel",
  2037 - 1995,
  "Student",
  ["Becky", "Justice", "Malcolm"],
];

let types = [];
for (let i = 0; i < stevenD.length; i++) {
  // reading from StevenD array
  console.log(stevenD[i], typeof stevenD[i]);

  // filling types array
  //types[i] = typeof stevenD[i];
  types.push(typeof stevenD[i]);
}
console.log(types);

const yearsOld = [1995, 2007, 1969, 2020];
const ages1 = [];

for (let i = 0; i < yearsOld.length; i++) {
  ages1.push(2037 - years[i]);
}
console.log(ages1);

// Continue and Break Statement
console.log("--- ONLY STRINGS ---");
for (let i = 0; i < stevenD.length; i++) {
  if (typeof stevenD[i] != "string") continue;
  console.log(stevenD[i], typeof stevenD[i]);
}

console.log("--- BREAK WITH NUMBERS ---");
for (let i = 0; i < stevenD.length; i++) {
  if (typeof stevenD[i] === "number") break;
  console.log(stevenD[i], typeof stevenD[i]);
}

//! LOOPING BACKWARDS AND LOOPS IN LOOPS
console.log(
  "================== LOOPING BACKWARDS AND LOOPS IN LOOPS  ====================="
);

const stevenDaniel = [
  "Steven",
  "Daniel",
  2037 - 1995,
  "Student",
  ["Becky", "Justice", "Malcolm"],
];

for (let i = stevenDaniel.length - 1; i >= 0; i--) {
  console.log(i, stevenDaniel[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`------------ Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weigth repitition ${rep} 🏋️`);
  }
}

//! THE WHILE LOOP
console.log("================== THE WHILE LOOP  =====================");

let rep = 1;
while (rep <= 10) {
  console.log(`Lifting weigth repitition ${rep} 🏋️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice != 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`Loop about to end...`);
}
