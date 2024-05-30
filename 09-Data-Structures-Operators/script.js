'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, menuIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[menuIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

console.log(
  '=========================== DESTRUCTURING ARRAYS ======================='
);

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr; // this is not array but destructuring array
console.log(x, y, z); // 2,3,4

// destructuring the restaurant array
// const [first, second] = restaurant.categories; // italian, Pizzeria

// if we want the first and third elemnt, we use ',' between first and sencond
const [first, , second] = restaurant.categories; // italian, vagetarian
console.log(first, second);

// switch the main and secondary categories
let [main, secondary] = restaurant.categories;
console.log(main, secondary);

//! switching variables without destructuring
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary); // vagetarian, italian

//! with destructuring
[main, , secondary] = [secondary, , main];
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse); // garlic bread, pizza

// nested destructuring
const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
console.log(i, j); // [5,6]
const [k, , [l, m]] = nested;
console.log(k, l, m); // [2,5,6]

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // 8,9,1

//! DESTRUCTURING OBJECTS
console.log(
  '=========================== DESTRUCTURING OBJECTS ======================='
);
// to destructure object, we use the curley {} braces
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters); // returns an enpty array for menu but returns the starter menu for starters

// Mutating variables while destructuring objects
let d = 111;
let e = 999;
const obj = { d: 23, e: 7, f: 14 };
// {e,d}=obj // syntax error - JS expect a code block
({ e, d } = obj);
// to solve, store in paranrthesis
console.log(e, d); // 7, 23

// nested objects
const {
  fri: { open, close },
} = openingHours;
console.log(open, close); // 11 23

console.log(
  restaurant.orderDelivery({
    time: '22:30',
    address: 'Via del sole, 21',
    mainIndex: 2,
    starterIndex: 2,
  })
);

console.log(
  restaurant.orderDelivery({
    address: 'Via del sole, 21',
    starterIndex: 1,
  })
);

console.log(
  '=========================== THE SPREAD OPERATOR ======================='
);

const ar = [7, 8, 9];
const badNewArr = [1, 2, ar[0], ar[1], ar[2]];
console.log(badNewArr); // [1,2,7,8,9]

//the spread operator
const newArr = [1, 2, ...ar];
console.log(newArr); // [1,2,7,8,9]

console.log(...newArr); // 1,2,7,8,9

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const combinedMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(combinedMenu);

// Iterables: arrays, strings, maps, sets, NOT objects
const str = 'Steven';
const letters = [...str, ' ', 's.'];
console.log(letters);
console.log(...str);
// console.log(`${...str} Daniel`); // error

const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt('Ingredient 2?'),
  // prompt('Ingredient 3?'),
];
console.log(ingredients);

restaurant.orderPasta(...ingredients); // Here is your delicious pasta with mushrooms, cheese and spaghetti

// Objects
const newRestaurant = {
  foundingYear: 2022,
  ...restaurant,
  founder: 'Umu-Hawa',
};
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Umu's Eatery";
console.log(restaurantCopy.name);
console.log(restaurant.name);

console.log(
  '=========================== THE REST PATTERN ======================='
);

//! DESTRUCTING
// the spread patter is used to unpack an element while the rest pattern is used to pack an element

// SPREAD, because on RIGHT side of =
const arrr = [1, 2, ...[3, 4]];

// SPREAD, because on LEFT side of =
const [g, h, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//! FUNCTIONS
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const s = [23, 5, 7];
add(...s);

restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spinach');
restaurant.orderPizza('mushrooms'); // otherIngredients will have an empty array
