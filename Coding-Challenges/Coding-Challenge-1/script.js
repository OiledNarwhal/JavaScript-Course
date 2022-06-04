/*

BMI Calculation: mass/height^2

1. Store mass and height in variables
2. Calculate both BMIs
3. Create boolean to see if Mark's BMI is higher or not.


Data 1:
Mark: 78kg, 1.69m tall
John: 92kg, 1.95m tall

Data 2:
Mark: 95kg, 1.88m tall
John: 85kg, 1.76m tall
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

let markHigherBMI = false
if(markBMI > johnBMI)
{
    markHigherBMI = true;
}

console.log(markHigherBMI);