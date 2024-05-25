'use strict';

console.log(me); // undefined
// console.log(job); // error! accessed before declaration
// console.log(year); // error! accessed before declaration

var me = 'Steven';
let job = 'student';
const year = 1995;

//functions
console.log(addDecl(2, 3)); // 5 !!!! this is because func declaration accepts hoisting - accessing a func before declaration
// console.log(addExpr(2, 3)); // accessed before initialization. ERROR
// console.log(addArrow(2, 3)); // accessed before initialization. ERROR

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

// example
console.log(undefined);
if (!numProducts) deleteShoppingCart(); // deletes all products even with 10 items in the, this is becuase numProducts at this point is undefined because hoisting does not accepts var keyword

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x); // true
console.log(y === window.y); // false
console.log(z === window.z); // false
