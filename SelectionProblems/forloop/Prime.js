const args = process.argv.slice(2);
const n = parseInt(args[0], 10);
const isPrimeNumber = require('./seive');
const isPrime = isPrimeNumber(n);
console.log(isPrime[n]);

// console.log(isPrime[n]);