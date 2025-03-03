const getPrimeFactors = (n) => {
    const factors = [];
    
    // Handle factor 2 separately
    while (n % 2 === 0) {
        factors.push(2);
        n /= 2;
    }

    // Check for odd factors from 3 to √n
    for (let i = 3; i * i <= n; i += 2) {
        while (n % i === 0) {
            factors.push(i);
            n /= i;
        }
    }

    // If n is still greater than 2, then n must be prime
    if (n > 2) {
        factors.push(n);
    }

    return factors;
};
const args = process.argv.slice(2);
const n = parseInt(args[0], 10);
const primeFactors = getPrimeFactors(n);
console.log(`Prime factors of ${n}: ${primeFactors.join(', ')}`);
