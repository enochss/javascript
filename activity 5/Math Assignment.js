let number = [1.67, 2.76, 3.67, 4.44, 5.55];
let sum = 0;

function averageValue () {
    
    for (let i=0; i <number.length; i++) {
        sum+= number[i];
    }
    
    return sum / number.length;

}

let mean = averageValue()
let rounded = Math.round(mean)
let result = rounded  + " is the mean rounded to a whole number"

console.log(result)