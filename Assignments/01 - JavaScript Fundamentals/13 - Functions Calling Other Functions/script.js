'use strict';

function percentageOfWorld1(population) {
    return (population / 7900) * 100
}

/*
1. Create a function called 'describePopulation'. Use the function type you
like the most. This function takes in two arguments: 'country' and
'population', and returns a string like this: 'China has 1441 million people,
which is about 18.2% of the world.'
2. To calculate the percentage, 'describePopulation' call the
'percentageOfWorld1' you created earlier
3. Call 'describePopulation' with data for 3 countries of your choice
*/


const describePopulation = function (country, population) {
    const percentage = percentageOfWorld1(population);
    return `${country} has ${population} million people, which is about ${percentage}% of the world!`;
}

const describeAmerica = describePopulation('America', 340);
const describeJapan = describePopulation('Japan', 124);
const describeKorea = describePopulation('South Korea', 52);
console.log(describeAmerica);
console.log(describeJapan);
console.log(describeKorea);