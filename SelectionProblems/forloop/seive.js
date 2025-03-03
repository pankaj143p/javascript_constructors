
const isPrime = (n) => {
    let isPrime = new Array(n + 1).fill(true);
    isPrime[0]=isPrime[1] = false;
    for(let i=2; i<=n; i++){
        if(isPrime[i]){
            for(let j=i*i; j<=n; j+=i){
                isPrime[j]=false;
            }
        }

    }
     return isPrime;
};
module.exports = isPrime;