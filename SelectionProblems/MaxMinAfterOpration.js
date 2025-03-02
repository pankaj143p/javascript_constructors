const args = process.argv.slice(2);
const a = parseInt(args[0], 10);
const b = parseInt(args[1], 10);
const c = parseInt(args[2], 10);

const result1 = a + b * c;
const result2 = a % b + c;
const result3 = c + a / b;
const result4 = a * b + c;

const max = Math.max(result1, result2, result3, result4);
const min = Math.min(result1, result2, result3, result4);

console.log("Results of operations:");
console.log("a + b * c =", result1);
console.log("a % b + c =", result2);
console.log("c + a / b =", result3);
console.log("a * b + c =", result4);

console.log("Maximum result is:", max);
console.log("Minimum result is:", min);