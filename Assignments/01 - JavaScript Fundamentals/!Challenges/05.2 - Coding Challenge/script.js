'use strict'

/*
You're the ruler of a medieval kingdom, and your job is to manage resources, train knights, and collect taxes. 
You need to make strategic decisions based on the kingdom's stats!

Your tasks:

📊 1. Calculate Kingdom Strength

    1️⃣ Create an arrow function calcArmyPower that takes in three strength 
    values (attack, defense, strategy) and returns the average power of your kingdom's army.
    2️⃣ Use this function to calculate the power for your kingdom and a rival kingdom.

📊 Test data:

    Your Kingdom: Attack: 85, Defense: 90, Strategy: 80
    Rival Kingdom: Attack: 70, Defense: 75, Strategy: 65

⚔️ 2. Declare the Stronger Kingdom

    1️⃣ Create a function checkStrongerKingdom that:
    Compares the average power of both kingdoms.
    Your kingdom only wins if its power is at least 1.5x that of the rival kingdom.
    Otherwise, it's a stalemate.
    2️⃣ Print a message like:
    "Your kingdom is superior! (85 vs. 70)"
    "No winner! Both kingdoms are evenly matched."

💰 3. Calculate Taxes

    1️⃣ Each kingdom collects taxes based on the population and a tax rate:
    Formula: taxes = population × taxRate
    2️⃣ If taxes collected are between 10,000 and 50,000 gold, apply a 15% bonus.
    If above 50,000, apply a 20% bonus.
    Use a ternary operator for this!
    3️⃣ Print a message like:
    "Your kingdom collected 35,000 gold, with a 15% bonus, for a total of 40,250 gold!"

📊 Test data:

    Your Kingdom: Population: 8,000, Tax Rate: 5 gold per citizen
    Rival Kingdom: Population: 12,000, Tax Rate: 4 gold per citizen
*/

// 1. Calculate Kingdom Strength
const calcArmyPower = (attack, defense, strategy) => (attack + defense + strategy) / 3;

const myPower = calcArmyPower(85, 90, 80);
const rivalPower = calcArmyPower(70, 75, 65);

// 2. Declare the Stronger Kingdom
const strongerKingdom = function (kingdomPower1, kingdomPower2) {
    if (kingdomPower1 >= kingdomPower2 * 1.50) {
        console.log(`Your Kingdom is superior! (${kingdomPower1} vs ${kingdomPower2})`);
    } else if (kingdomPower2 >= kingdomPower1 * 1.50) {
        console.log(`Rival's Kingdom is superior! (${kingdomPower2} vs ${kingdomPower1})`);
    } else {
        console.log(`No winner. Kingdoms are both closely matched. (${kingdomPower1} vs ${kingdomPower2})`)
    }
}

strongerKingdom(myPower, rivalPower)

// 3. Calculate Taxes
const calcTaxes = function (population, taxRate) {
    const taxes = population * taxRate;
    const bonusRate = taxes >= 10000 && taxes <= 50000 ? 0.15 : 0.20;
    const total = taxes + (taxes * bonusRate);
    console.log(`The kingdom collect ${taxes} gold, with a ${bonusRate * 100}% bonus, for a total of ${total} gold!`)
}

const myTaxes = calcTaxes(8000, 5);
const rivalTaxes = calcTaxes(12000, 4);