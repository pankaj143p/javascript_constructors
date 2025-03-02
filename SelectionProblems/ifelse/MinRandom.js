let arr = [];
let min = 999;
let max = 0;
for(var i=0; i<5; i++){
    arr.push(Math.floor(Math.random() *900)+100);
    if(min>arr[i]){
        min = arr[i];
    }
    if(max<arr[i]){
        max = arr[i];
    }
    
}
console.log(arr);
console.log("max : "+max+" min : "+min);