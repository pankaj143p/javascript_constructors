const args = process.argv.slice(2);
const conversionChoice = parseInt(args[0], 10);
const value = parseInt(args[1], 10);

let result;

switch (conversionChoice) {
    case 1:  // Feet to Inch
        result = value * 12;  // 1 foot = 12 inches
        console.log(`${value} feet = ${result} inches`);
        break;
    case 2:  // Inch to Feet
        result = value / 12;  // 1 foot = 12 inches
        console.log(`${value} inches = ${result} feet`);
        break;
    case 3:  // Feet to Meter
        result = value * 0.3048;  // 1 foot = 0.3048 meters
        console.log(`${value} feet = ${result} meters`);
        break;
    case 4:  // Meter to Feet
        result = value / 0.3048;  // 1 meter = 3.28084 feet
        console.log(`${value} meters = ${result} feet`);
        break;
    default:
        console.log("Invalid conversion choice!");
}
