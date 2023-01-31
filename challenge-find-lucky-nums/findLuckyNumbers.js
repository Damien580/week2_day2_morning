// Write your code below this line.
const luckyNumbers = (num) => {
    let arr =  []
    for (i=0 ; i < num; i ++){
        let randInt = Math.floor(Math.random()*11)
        if (!arr.includes(randInt)){
            arr.push(randInt)
            
        }
        else{
            num = num + 1
        }
    

    }
    return arr
}
console.log(luckyNumbers(6))