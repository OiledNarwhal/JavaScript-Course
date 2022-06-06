/*


Calculate Average Scores
Compare average scores of both teams

Bonus: Test for a minimum score of 100
Bonus 2: Test for a minimum score in cases of draws

*/

function average(numbersList)
{
    let sum = 0;
    for(let i = 0; i < numbersList.length; i++)
    {
        sum = sum + numbersList[i];
    }


    return sum/numbersList.length;
}

function scoreBreakpoint(numbersList)
{
    let result = false;
    for(let i = 0; i < numbersList.length; i++)
    {
        if(numbersList[i] >= 100)
        {
            result = true;
        }
    }

    return result;
}
 const dolphinScores = [100, 0, 0];
 const koalaScores = [100, 0, 0];

 const dolphinAvg = average(dolphinScores);
 const koalaAvg = average(koalaScores);

 console.log(`Dolphin Average: ${dolphinAvg}`);
 console.log(`Koalas Average: ${koalaAvg}`);

 if(dolphinAvg > koalaAvg)
 {
     if(scoreBreakpoint(dolphinScores))
     {
        console.log('Dolphins win the tournament!');
     }
     else
     {
        console.log('No Winner!!');
     }
 }
 else if(dolphinAvg < koalaAvg)
 {
    if(scoreBreakpoint(koalaScores))
    {
       console.log('Koalas win the tournament!');
    }
    else
    {
       console.log('No Winner!!');
    }
 }
 else
 {
    if(scoreBreakpoint(dolphinScores) && scoreBreakpoint(koalaScores))
    {
       console.log('The tournament is a draw!!');
    }
    else
    {
       console.log('No Winner!!');
    }
 }
