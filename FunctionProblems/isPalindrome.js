const isPal=(num)=>{
    let str = num.toString();
    let rev = str.split('').reverse().join('');
    return str === rev;
}
const args = Process.arvs.slice(2);
const str = args[0];
const pal = isPal(str);
console.log(`Is ${str} a palindrome? ${pal}`);
