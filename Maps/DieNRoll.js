// 1. Write a program in the following steps
let dieRoll = new Map();
let countMap = new Map();
let count = 0;
let number;
// b. Repeat the Die roll and find the result each time
// d. Repeat till any one of the number has reached 10 times
for (let i = 1; i <= 10; i++) {
    // a. Roll a die and find the number between 1 to 6
    let r = Math.floor( Math.random() * 6 )  +1 ;
    dieRoll.set(i, r);
    countMap.set(r, (countMap.get(r) || 0) + 1);
    if(countMap.get(r) == 10){
        number = r;
        break;
    }
    // c. Store the result in a dictionary
}
dieRoll.forEach((value, key) => {
    console.log(key + " : " + value);
});


// e. Find the number that reached maximum times and the one that was for minimum times
let maxKey, minKey;
let max = -Infinity, min = Infinity;

for (let [key, value] of countMap.entries()) {
    if (value > max) {
        max = value;
        maxKey = key;
    }
    if (value < min) {
        min = value;
        minKey = key;
    }
}
console.log(`Number with Maximum occurrences: ${maxKey} (${max} times)`);
console.log(`Number with Minimum occurrences: ${minKey} (${min} times)`);