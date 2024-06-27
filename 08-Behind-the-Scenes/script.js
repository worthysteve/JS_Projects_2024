'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  //   console.log(firstName); // Steven

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1995) {
      var millinial = true;

      //creating NEW variable with the same name as outer variable
      const firstName = 'Daniel'; // Danielwill be printed without looking at the variable lookup for Steven

      // reassigning outer  scope's variable
      output = 'NEW OUTPUT'; // will print because we manipulated the original variab;e

      const str = `Oh, and you're a millinial, ${firstName}.`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str); // Reference Error bcoz it is outside the block scope
    console.log(millinial); // true, bcoz var keyword variables are function scoped so it will give an output bcoz it is still within the function
    // add(2, 3); // error bcoz it is called outsise the block where it was defined
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Steven';
calcAge(1995);
