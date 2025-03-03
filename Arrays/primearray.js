const n = parseInt(process.argv[2]);

function isPrime(n) {
    if (n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    for (let i = 3; i * i <= n; i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}
var primes = [];
for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
        primes.push(i);
    }
}


console.log("Prime Numbers:" + primes);
