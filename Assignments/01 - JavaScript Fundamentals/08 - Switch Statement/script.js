const language = 'chinese';
const country = 'America';
const continent = 'North America';
const isIsland = false;
const avgPopulation = 33;
const population = 340.1;

/*
1. Use a switch statement to log the following string for the given 'language':
chinese or mandarin: 'MOST number of native speakers!'
spanish: '2nd place in number of native speakers'
english: '3rd place'
hindi: 'Number 4'
arabic: '5th most spoken language'
for all other simply log 'Great language too :D'
*/

switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log('Most number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('4th place');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log(`That's a great language too 😉`)
}