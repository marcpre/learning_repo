const fibbonaci = [1, 2, 3, 5, 8, 13, 21, 34, 55];

//MAP

/*
 * When to use it:
 * You want to translate/map all elements in an array to another set of values.
 */

console.log(fibbonaci.map(elem => elem * 5))

var multiply = function(x) {
    return fibbonaci.map(elem => (elem * x));
}

console.log(multiply(2))

//FILTER

/*
 * When to use it:
 * You want to remove unwanted elements based on a condition.
 * function(elem, index, array)
 */

//filter every 3rth element out
console.log(fibbonaci.filter((function(elem, index) {
    return (index + 1) % 3;
})))

//REDUCE

/*
 * Use it when: You want to find a cumulative or concatenated value based on elements across the array.
 * 
 */

const rocketLaunches = [
    { country: 'Russia', launches: 32 },
    { country: 'US', launches: 23 },
    { country: 'China', launches: 16 },
    { country: 'Europe(ESA)', launches: 7 },
    { country: 'India', launches: 4 },
    { country: 'Japan', launches: 3 }
];

const sumUpLaunches = rocketLaunches.reduce((prevVal, elem) => prevVal + elem.launches, 0);
console.log(sumUpLaunches)

//Error
//Sum up only the first two launches
const firstTwoSumUp = rocketLaunches.slice(0, 2).reduce((prevVal, elem) => prevVal + elem.launches, 0);
console.log(firstTwoSumUp)
