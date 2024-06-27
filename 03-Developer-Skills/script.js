// Remember, we're gonna use strict mode in all scripts now!
'use strict';

//! PROBLEM 1
/*
We work for a company building smart home thermometer. 
Our most recent taskmis: "Given an array of temperatures of one day.
Calculate the temperature amplitude. Keep in mind that there sometimes
there might be a sensor error"
*/

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17];

//TODO:1 Understanding the problem
/*
 - what is temperature amplitude: Answer - difference between highest 
 and lowest temperature
 - How to compute max and min temperatures?
 - What's a sensor error? and what do we do?
*/
//TODO: 2. Breaking up into sub-problems
/*
 - How to ignore errors?
 - Find max value in temp array
 - Find min value in temp array
 - Subtract min from max (amplitude) and return it.
 */

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp != 'number') continue;
    if (temps[i] > max) max = currentTemp;
    if (temps[i] < min) min = currentTemp;
  }
  console.log(max, min);
  return max - min;
};
// calcTempAmplitude([3, 7, 4]);
const amplitude = calcTempAmplitude(temperatures);
console.log(`The temperature amplitude is ${amplitude}`);

//! PROBLEM 2
// Function should now receive 2 arrays of temps

//TODO: 1. Understanding the problem
/*
 - with 2 arrays, should we implement functionality twice? No! Jusrt merge arrays
*/

// TODO: 2. Breaking up into sub-problems

// - merge 2 arrays

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp != 'number') continue;
    if (temps[i] > max) max = currentTemp;
    if (temps[i] < min) min = currentTemp;
  }
  console.log(max, min);
  return max - min;
};
// calcTempAmplitude([3, 7, 4]);
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(`The temperature amplitude is ${amplitudeNew}`);

//! DEBUGGING
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    //BUG Fix C) FIX
    // value: Number(prompt('Degree celsius')),
    value: 10,
  };

  console.log(measurement.value);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);

  //BUG Fix 2) Find
  console.table(measurement);

  const kelvin = measurement.value + 273;
  return kelvin;
};

// BUG FIX A) Identify
console.log(measureKelvin());

//! Using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;
  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp != 'number') continue;

    // debugger;
    if (temps[i] > max) max = currentTemp;
    if (temps[i] < min) min = currentTemp;
  }
  console.log(max, min);
  return max - min;
};
// calcTempAmplitude([3, 7, 4]);
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);

// BUG FIX A) Identify
console.log(`The temperature amplitude is ${amplitudeBug}`);

//! Coding challenge # 1

/*
Given an array of forecasted maximum temperatures,
the termometer displayes a string with these
temperatures.

Example: [17,21,23] will print "... 17C in 1 days...21C in 2 days ...23c in 3 days..."

create a function 'printForecast' which takes in an array
'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems.

TEST DATA 1: [17,21,23]
TEST DATA 2: [12,5,-5,0,4]
*/

//TODO: 1. Understanding the problem
/*
 - Array transformed to strings, separated by ...
 - What is the x days? Answer: INDEX + 1
*/

// TODO: 2. Breaking up into sub-problems
/*
 - Transform array into string
 - Transform each element into string with oC
 - Strings needs to contain day (index + 1)
 - Add ... between elements and start and end of string
 - Log string to console
 */

//! my solution
const printForecast = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`...${arr[i]}°C in ${i + 1} days...`);
  }
};

printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);

//! Jonas' solution
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecastNew = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C in ${i + 1} days ... `;
  }
  console.log(`... ${str}`);
};

printForecastNew(data1);
printForecastNew(data2);
