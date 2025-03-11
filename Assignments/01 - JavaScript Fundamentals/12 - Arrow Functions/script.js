'use strict';

/*
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
*/

/*
1. Recreate the last assignment, but this time create an arrow function called
'percentageOfWorld3'
*/

const percentageOfWorld3 = population => (population / 7900) * 100;

const percentageAmerica = percentageOfWorld3(340);
const percentageJapan = percentageOfWorld3(124);
const percentageKorea = percentageOfWorld3(52);

console.log(percentageAmerica);
console.log(percentageJapan);
console.log(percentageKorea);