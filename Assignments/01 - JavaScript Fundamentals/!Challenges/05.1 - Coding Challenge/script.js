'use strict'

/*
Two racers, Max Speedster and Turbo Tom, compete in a 3-lap race. 
Their lap times (in seconds) are recorded, and the average time per racer is calculated.
The racer with the lowest average lap time wins. 
However, a racer only wins if their average lap time is at least 2 seconds faster than the other racer. 
Otherwise, no one wins!

Your tasks:
    1️⃣ Create an arrow function calcAverageTime to calculate the average lap time from three lap times.
    2️⃣ Use the function to calculate the average lap time for both racers.
    3️⃣ Create a function checkWinner that takes the average times (avgMax and avgTom) as parameters 
    and logs the winner with their average times. Example: "Max Speedster wins (34s vs. 36s)!"
    4️⃣ Use the checkWinner function to determine the winner for both Data 1 and Data 2.
    5️⃣ Ignore ties (if neither racer is at least 2 seconds faster, there's no winner).

Test data:
    Data 1: Max Speedster: 40s, 38s, 42s | Turbo Tom: 45s, 44s, 47s
    Data 2: Max Speedster: 33s, 35s, 32s | Turbo Tom: 40s, 39s, 41s
*/

const calcAverageTime = (firstLap, secondLap, thirdLap) => (firstLap + secondLap + thirdLap) / 3

const timeMax = calcAverageTime(33, 35, 32);
const timeTurbo = calcAverageTime(40, 39, 41);

const checkWinner = function (avgMax, avgTom) {
    if (avgMax < avgTom - 2) {
        console.log(`Max Speedster wins! (${avgMax}s vs ${avgTom}s)`);
    } else if (avgMax - 2 > avgTom) {
        console.log(`Turbo Tom wins! (${avgTom}s vs ${avgMax}s)`);
    } else {
        console.log(`No one wins the race!`);
    }
}

checkWinner(timeMax, timeTurbo);