const dayMap = new Map([
    [1, "Monday"],
    [2, "Tuesday"],
    [3, "Wednesday"],
    [4, "Thursday"],
    [5, "Friday"],
    [6, "Saturday"],
    [7, "Sunday"]
]);

const dayPrint = (day) => {
    return (day>=1 && day<=7) ? "The day is: " + dayMap.get(day) : "Invalid day : give a number between 1 and 7";
}

const args = process.argv.slice(2);
const day = parseInt(args[0],10);
console.log(dayPrint(day));