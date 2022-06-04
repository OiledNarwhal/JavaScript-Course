/*
Data 1:
Mark: 78kg, 1.69m tall
John: 92kg, 1.95m tall

Data 2:
Mark: 95kg, 1.88m tall
John: 85kg, 1.76m tall

Use a template literal and and if/else to nicely print the results
*/


let markMass = 95;
let markHeight = 1.88;

let johnMass = 85;
let johnHeight = 1.76;

function calculateBMI (mass, height) 
{
    return mass / (height * height);
}

let markBMI = calculateBMI(markMass, markHeight);
let johnBMI = calculateBMI(johnMass, johnHeight);

console.log(markBMI);
console.log(johnBMI);

let result = ''

if(markBMI > johnBMI)
{
    result = `Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})`;
}
else
{
    result = `John's BMI (${johnBMI}) is higher than or equal to Marks's BMI (${markBMI})`;
}

console.log(result);

let a = 5
let b = 5

console.log(a == b);
console.log(a === b);
console.log(a === a);
