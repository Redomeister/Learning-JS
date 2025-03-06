let population = 340.1;
let language;
language = 'English';
const country = 'America';
const continent = 'North America';
const isIsland = false;

/*
1. If your country split in half, and each half would contain half the population,
then how many people would live in each half?
2. Increase the population of your country by 1 and log the result to the console
3. Finland has a population of 6 million. Does your country have more people than
Finland?
4. The average population of a country is 33 million people. Does your country
have less people than the average country?
5. Based on the variables you created, create a new variable 'description'
which contains a string with this format: 'Portugal is in Europe, and its 11 million
people speak portuguese'
*/

let populationHalf = population / 2;
console.log(populationHalf)
console.log(population++);

let populationFinland = 6;
console.log(population > populationFinland);

let avgPopulation = 33;
console.log(population < avgPopulation);

const description = `${country} is in ${continent}, and its ${population} people speak ${language}.`
console.log(description);
