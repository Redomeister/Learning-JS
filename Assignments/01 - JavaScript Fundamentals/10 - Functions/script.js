'use strict';

/*
1. Write a function called 'describeCountry' which takes three parameters:
'country', 'population' and 'capitalCity'. Based on this input, the
function returns a string with this format: 'Finland has 6 million people and its
capital city is Helsinki'
2. Call this function 3 times, with input data for 3 different countries. Store the
returned values in 3 different variables, and log them to the console
*/

function describeCountry(country, population, capitalCity) {
    const description = `${country} has ${population} million people and its capital city is ${capitalCity}.`;
    return description;
}

const describeAmerica = describeCountry('America', 340, 'Washington DC');
const describeJapan = describeCountry('Japan', 124, 'Tokyo');
const describeKorea = describeCountry('South Korea', 52, 'Seoul');

console.log(describeAmerica);
console.log(describeJapan);
console.log(describeKorea);