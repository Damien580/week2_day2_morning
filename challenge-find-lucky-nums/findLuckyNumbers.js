// Write your code below this line.
let arr = []
while(arr.length < 4){
    var rand = Math.floor(Math.random() * 11);
    if(arr.indexOf(rand) < 0) arr.push(rand);
}
console.log(arr);