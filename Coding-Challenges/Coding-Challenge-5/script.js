let calcAverage = (a,b,c) => {
    return (a + b + c)/3;
}

function checkWinner(avgD, avgK)
{
    if(avgD >= 2 * avgK)
    {
        console.log(`Dolphins win!! (${avgD} vs. ${avgK})`);
    }
    else if(avgK >= 2 * avgD)
    {
        console.log(`Koalas win!! (${avgK} vs. ${avgD})`);
    }
    else
    {
        console.log('No team wins!');
    }
}


const dScore = calcAverage(85, 54, 41);
const kScore = calcAverage(23, 34, 27)

checkWinner(dScore, kScore);