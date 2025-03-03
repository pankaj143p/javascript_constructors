const args = process.argv.slice(2);
const num = parseInt(args[0], 10);
let placeValue;

switch (num) {
    case 1:
        placeValue = "Unit";
        break;
    case 10:
        placeValue = "Ten";
        break;
    case 100:
        placeValue = "Hundred";
        break;
    case 1000:
        placeValue = "Thousand";
        break;
    case 10000:
        placeValue = "Ten Thousand";
        break;
    case 100000:
        placeValue = "Hundred Thousand";
        break;
    case 1000000:
        placeValue = "Million";
        break;
    case 10000000:
        placeValue = "Ten Million";
        break;
    case 100000000:
        placeValue = "Hundred Million";
        break;
    case 1000000000:
        placeValue = "Billion";
        break;
    default:
        placeValue = "Invalid input!";
}

console.log(placeValue);
