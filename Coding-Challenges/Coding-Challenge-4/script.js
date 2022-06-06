/*

Use ternary operator to calculate tips.

Print a string of the initial value, the tip value, and the total bill.

*/

const bill = 40;

const tipPercent = (bill >= 50 && bill <= 300 ? .15 : .20);
console.log(tipPercent);
const tipTotal = bill * tipPercent;

console.log(`Bill: ${bill} + Tip: ${tipTotal} = Total: ${bill + tipTotal}`);