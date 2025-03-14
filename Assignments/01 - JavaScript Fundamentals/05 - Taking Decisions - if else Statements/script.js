const language = 'English';
const country = 'America';
const continent = 'North America';
const isIsland = false;

let avgPopulation = 33;

/*
1. If your country's population is greater that 33 million, log a string like this to the
console: 'Portugal's population is above average'. Otherwise, log a string like
'Portugal's population is 22 million below average' (the 22 is the average of 33
minus the country's population)
2. After checking the result, change the population temporarily to 13 and then to
130. See the different results, and set the population back to original
*/

let population = 340.1;

// population = 13;
// population = 130;

if (population > avgPopulation) {
    console.log(`${country}'s population is ${population - avgPopulation} above average`)
} else {
    console.log(`${country}'s population is ${avgPopulation - population} million below average`);
}