'use strict'

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!

Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time

Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
*/


const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);

const checkWinner = function (averageDolphins, averageKoalas) {
    if (averageDolphins >= averageKoalas * 2) {
        // return `Dolphins win (${averageDolphins} vs ${averageKoalas})`;
        console.log(`Dolphins win (${averageDolphins} vs ${averageKoalas})`);
    } else if (averageDolphins * 2 <= averageKoalas) {
        // return `Koalas win (${averageKoalas} vs ${averageDolphins})`;
        console.log(`Koalas win (${averageKoalas} vs ${averageDolphins})`);
    } else {
        // return `Neither team wins...`;
        console.log(`Neither team wins...`);
    }
}

checkWinner(scoreDolphins, scoreKoalas)
// const winner = checkWinner(scoreDolphins, scoreKoalas);
// console.log(winner);

// Data 1 - Results: 'Neither team wins...'
// Data 2 - Results: 'Dolphins win (60 vs 28)'
