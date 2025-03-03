const startingBalance = parseInt(process.argv[2]) || 100;  
const goal = parseInt(process.argv[3]) || 200;  
const betAmount = parseInt(process.argv[4]) || 1;  

let balance = startingBalance;
let betCount = 0;
let winCount = 0;

while (balance > 0 && balance < goal) {
    betCount++;
    const betOutcome = Math.random() < 0.5 ? 'win' : 'lose';

    if (betOutcome === 'win') {
        balance += betAmount;
        winCount++;
    } else {
        balance -= betAmount; 
    }
}

if (balance >= goal) {
    console.log(`Gambler reached the goal of Rs ${goal}`);
} else {
    console.log('Gambler went broke');
}

console.log(`Number of bets made: ${betCount}`);
console.log(`Number of wins: ${winCount}`);
console.log(`Final balance: Rs ${balance}`);
