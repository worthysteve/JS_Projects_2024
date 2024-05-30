'use strict';
console.log(this); // the window object - global obj

const calculateAge = function (birthYear) {
  console.log(2037 - birthYear);
  // console.log(this); //undefined;
};
calculateAge(1995);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear); // 38
  console.log(this); //the window object
};
calcAgeArrow(1999);

const steven = {
  year: 1995,
  calculateAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
steven.calculateAge();

// method borrowing
const bex = {
  year: 2017,
};

bex.calculateAge = steven.calculateAge;
bex.calculateAge();

// const f = steven.calculateAge();
// f(); // returns an error

console.log(
  '======================== REGULAR FUNCTIONS vs ARROW FUNCTIONS ======================='
);
const daniel = {
  firstName: 'Steven',
  year: 1995,
  calculateAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // solution 1
    // const self = this;
    // const isMillenial = function () {
    //   console.log(this); // undefined
    //   // console.log(this.year >= 1981 && this.year <= 1996); // type error
    //   console.log(self.year >= 1981 && self.year <= 1996); // true

    // };

    //solution 2 - an arrow function inherits the this keyword from its parent scope
    const isMillenial = () => {
      console.log(this); // returns the function
      console.log(this.year >= 1981 && this.year <= 1996); // true
    };

    isMillenial();
  },
  greet: () => console.log(`Hey ${this.firstName}`),
};
daniel.greet(); // undefined - arrow fxn does not get its own "this" keyword but from its surrounding
daniel.calculateAge();

// argument keyword
const addExp = function (a, b) {
  return a + b;
};
console.log(addExp(2, 5));
console.log(addExp(2, 5, 8, 12));

// var addArrow = (a, b) => a + b;

console.log(
  '======================== PRIMITIVES vs OBJECTS (Primitives vs Reference types) ======================='
);

let age = 28;
let oldAge = age;
age = 29;
console.log(age); //29
console.log(oldAge); // 28

const mySlef = {
  name: 'Steven',
  age: 28,
};
const friend = mySlef;
friend.age = 27;
console.log('Friend', friend); // 27
console.log('Me', mySlef); // 27;

let lastName = 'Barrie';
let oldLastName = lastName;
lastName = 'Daniel';

console.log(lastName); //Daniel
console.log(oldLastName); // Barrie

const umu = {
  firstName: 'Umu-Hawa',
  lastName: 'Barrie',
  age: 24,
};
const marriedUmu = umu;
marriedUmu.lastName = 'Daniel';
console.log('Before marriage', umu); // Daniel - this happens because the marriedUmu obbject is referenced in memory
console.log('After marriage', marriedUmu); // Daniel

// copying object
const umu2 = {
  firstName: 'Umu-Hawa',
  lastName: 'Barrie',
  age: 24,
  family: ['Adama', 'Hannah'],
};
const umuCopy = Object.assign({}, umu2);
umuCopy.lastName = 'Daniel';

//using object.assign will only work on the first level, it only creates a shallow copy.
console.log('Before marriage', umu2); // Barrie
console.log('After marriage', umuCopy); // Dabiel

// a change in one array also changes in the other one, this means the obbject.assign only does a shallow copy
umuCopy.family.push('Gibo');
umuCopy.family.push('Audrey');
console.log('Before marriage', umu2); // Barrie
console.log('After marriage', umuCopy); // Dabiel
