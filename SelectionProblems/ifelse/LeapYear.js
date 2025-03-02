const args = process.argv.slice(2);
const day = parseInt(args[0],10);
const isleapYear = () =>{
    if((day%4==0 && day%100!=0) || day%400==0){
        return true;
    }
    return false;
}
console.log(isleapYear(day));