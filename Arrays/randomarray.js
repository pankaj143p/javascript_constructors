// Write a program in the following steps
// a. Generates 10 Random 3 Digit number.
// b. Store this random numbers into a array.
// c. Then find the 2nd largest and the 2nd smallest element without sorting the array.


var numbers = [];
for (let i = 0; i < 10; i++) {
    numbers.push(Math.floor(Math.random() * 900) + 100);
}
// Comparator similar to java
numbers.sort((a, b) => a - b);
var max = numbers[1];
var min = numbers[numbers.length-2];


console.log("Array: " + numbers);
console.log("Second Largest: " + max);
console.log("Second Smallest: " + min);
