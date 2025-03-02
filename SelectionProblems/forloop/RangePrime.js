const args = process.argv.slice(2);
const n = parseInt(args[0], 10);
const isPrimeNumber = require('./seive');
const isPrime = isPrimeNumber(n);
for(let i=0;i<=n;i++){
    if(isPrime[i]){
        console.log(i);
    }
}
