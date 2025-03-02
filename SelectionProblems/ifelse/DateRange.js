const args = process.argv.slice(2);
const day = parseInt(args[0],10);
const month = parseInt(args[1],10);

const isValid = () =>{
     if(month<3 || month>6){
         return false;
     }
     if(month==3 && day>=20){
         return true;
     }
    if(month==6 && day<=20){
            return true;
    }
    if (month > 3 && month < 6) {
        return true; 
    }

    return false; 
}
console.log(isValid(day,month));
