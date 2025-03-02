const args = process.argv.slice(2);
const num = parseInt(args[0],10);
if (num === 1) {
    console.log("Unit");
} else if (num === 10) {
    console.log("Ten");
} else if (num === 100) {
    console.log("Hundred");
} else if (num === 1000) {
    console.log("Thousand");
} else if (num === 10000) {
    console.log("Ten Thousand");
} else if (num === 100000) {
    console.log("Hundred Thousand");
} else if (num === 1000000) {
    console.log("Million");
} else if (num === 10000000) {
    console.log("Ten Million");
} else if (num === 100000000) {
    console.log("Hundred Million");
} else if (num === 1000000000) {
    console.log("Billion");
} else if (num === 10000000) {
    console.log("Crore");
} else {
    console.log("Invalid input! Please enter a valid place value.");
}