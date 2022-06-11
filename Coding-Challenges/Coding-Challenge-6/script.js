'use strict'
function calcTip(money)
{
    return money * ((money <= 300 && money >= 50) ? 0.15 : 0.2);
}
const bills = [125, 555, 44];
let tips = [];
for (const bill of bills)
{
    tips.push(calcTip(bill));
}

console.log(bills);
console.log(tips);
let total = [];
for (let i = 0; i < tips.length; i++)
{
    total.push(bills[i] + tips[i]);
}
console.log(total);