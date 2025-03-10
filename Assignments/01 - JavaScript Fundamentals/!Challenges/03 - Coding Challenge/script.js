/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!

Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points.
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy

Test data:
- Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
- Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
- Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/


// Data 1 - Result: "Neither team wins..."
/*
const scoreDolphins1 = 96;
const scoreDolphins2 = 108;
const scoreDolphins3 = 89;

const scoreKoalas1 = 88;
const scoreKoalas2 = 91;
const scoreKoalas3 = 110;
*/

// Data 2 - Result: "Koalas win! 109 - 103.33333333333333"
/*
const scoreDolphins1 = 97;
const scoreDolphins2 = 112;
const scoreDolphins3 = 101;

const scoreKoalas1 = 109;
const scoreKoalas2 = 95;
const scoreKoalas3 = 123;
*/

// Data 3 - Result: "It's a draw! 103.33333333333333 - 103.33333333333333"

const scoreDolphins1 = 97;
const scoreDolphins2 = 112;
const scoreDolphins3 = 101;

const scoreKoalas1 = 109;
const scoreKoalas2 = 95;
const scoreKoalas3 = 106;

const avgDolphins = (scoreDolphins1 + scoreDolphins2 + scoreDolphins3) / 3;
const avgKoalas = (scoreKoalas1 + scoreKoalas2 + scoreKoalas3) / 3;

if (avgDolphins > avgKoalas && avgDolphins >= 100) {
    console.log(`Dolphins win! ${avgDolphins} - ${avgKoalas}`)
} else if (avgDolphins < avgKoalas && avgKoalas >= 100) {
    console.log(`Koalas win! ${avgKoalas} - ${avgDolphins}`)
} else if (avgDolphins === avgKoalas) {
    console.log(`It's a draw! ${avgDolphins} - ${avgKoalas}`)
} else {
    console.log(`Neither team wins...`)
}

