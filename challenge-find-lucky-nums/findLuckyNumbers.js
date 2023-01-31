// Write your code below this line.
function randomGen(arr){
    while (arr.length <= arr.length -1){
        let rand = Math.floor(Math.random() * 11)
            if (arr.indexOf(rand) < 0){
                arr.push(rand)
                return rand
        }
    }       
} 
    
console.log(randomGen(2))