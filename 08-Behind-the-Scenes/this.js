'use strict';
console.log(this); // the window object - global obj

const calculateAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); //undefined;
};
calculateAge(1995);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear); // 38
  console.log(this); //the window object
};
calcAgeArrow(1999);
