
function numberToWord(num) {

    const words = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    if (num >= 0 && num <= 9) {
        console.log(words[num]); 
    } else {
        console.log("Please enter a valid single-digit number (0-9).");
    }
}
const args = process.argv.slice(2); 
const number = parseInt(args[0], 10);
numberToWord(number);
