'use strict';

/*
1. The world population is 7900 million people. Create a function declaration
called 'percentageOfWorld1' which receives a 'population' value, and
returns the percentage of the world population that the given population
represents.
2. To calculate the percentage, divide the given 'population' value by 7900
and then multiply by 100
3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
store the results into variables, and log them to the console
4. Create a function expression which does the exact same thing, called
'percentageOfWorld2', and also call it with 3 country populations (can be
the same populations)
*/

function percentageOfWorld1(population) {
    return (population / 7900) * 100
}

const percentageAmerica = percentageOfWorld1(340);
const percentageJapan = percentageOfWorld1(124);
const percentageKorea = percentageOfWorld1(52);

console.log(percentageAmerica);
console.log(percentageJapan);
console.log(percentageKorea);

const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
}

const percentageAmerica2 = percentageOfWorld2(340);
const percentageJapan2 = percentageOfWorld2(124);
const percentageKorea2 = percentageOfWorld2(52);

console.log(percentageAmerica2);
console.log(percentageJapan2);
console.log(percentageKorea2);