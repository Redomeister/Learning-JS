/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.

Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement.
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”

Test data:
§ Data 1: Test for bill values 275, 40 and 430
*/

const bill = Number(prompt(`Insert the bill amount:`))
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

alert(`The bill was $${bill}, the tip was $${tip}, and the total value is $${bill + tip}`);

/*
Results:
275 -> "The bill was $275, the tip was $41.25, and the total value is $316.25"
40 -> "The bill was $40, the tip was $8, and the total value is $48"
430 -> "The bill was $430, the tip was $86, and the total value is $516"
*/